const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8086;
const DB_FILE = path.join(__dirname, 'bce_database.json');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bce_connect';

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Default Database Structure
const defaultDb = {
  registeredStudents: [
    {
      regNo: "25155126904",
      name: "NAVNEET MISHRA",
      branch: "CSE (IoT)",
      sem: "4",
      status: "VERIFIED",
      idCard: "ID_CARD_25155126904.png",
      attendance: "88.5%",
      email: "navneet.bce@gmail.com",
      joinedDate: "2024-08-15"
    },
    {
      regNo: "24155126050",
      name: "ABHISHEK KUMAR",
      branch: "CSE (IoT)",
      sem: "4",
      status: "VERIFIED",
      idCard: "ID_CARD_24155126050.png",
      attendance: "84.2%",
      email: "abhishek.bce@gmail.com",
      joinedDate: "2024-08-16"
    },
    {
      regNo: "25155126902",
      name: "ANKIT SHARMA",
      branch: "CSE (IoT)",
      sem: "4",
      status: "VERIFIED",
      idCard: "ID_CARD_25155126902.png",
      attendance: "82.0%",
      email: "ankit.bce@gmail.com",
      joinedDate: "2024-08-18"
    },
    {
      regNo: "25155126915",
      name: "PRIYA KUMARI",
      branch: "CSE (IoT)",
      sem: "4",
      status: "PENDING_VERIFICATION",
      idCard: "ID_CARD_25155126915.png",
      attendance: "79.5%",
      email: "priya.bce@gmail.com",
      joinedDate: "2024-09-01"
    },
    {
      regNo: "25155126920",
      name: "RAHUL VERMA",
      branch: "CSE (IoT)",
      sem: "4",
      status: "PENDING_VERIFICATION",
      idCard: "ID_CARD_25155126920.png",
      attendance: "76.0%",
      email: "rahul.bce@gmail.com",
      joinedDate: "2024-09-02"
    }
  ],
  notices: [
    {
      id: "NTC-100",
      title: "Notice regarding BEU 4th & 6th Sem Mid-Term Exam Seating Arrangement",
      category: "Exam",
      date: "2026-09-06",
      author: "Controller of Examinations",
      content: "Official exam hall allotment for 4th & 6th semester Mid-Sem examinations published. All students check roll numbers and room seating plan.",
      priority: "HIGH"
    },
    {
      id: "NTC-101",
      title: "BEU End-Semester Examination Schedule 2026",
      category: "Exam",
      date: "2026-09-01",
      author: "Controller of Examinations",
      content: "The 4th and 6th Semester End Exams for Bihar Engineering University (BEU) will commence from September 25, 2026. Admit cards will be available on the portal shortly.",
      priority: "HIGH"
    },
    {
      id: "NTC-102",
      title: "75% Attendance Mandatory for BEU Exam Form Fillup",
      category: "Academic",
      date: "2026-08-28",
      author: "Academic Dean Office",
      content: "All B.Tech students must maintain at least 75% overall attendance to be eligible for university end semester examinations. Check your live attendance in the tracker.",
      priority: "HIGH"
    },
    {
      id: "NTC-103",
      title: "IoT & AI Hackathon 'TechSrishti 2026' Registration Open",
      category: "Event",
      date: "2026-08-25",
      author: "BCE Innovation & Incubation Cell",
      content: "BCE Bakhtiyapur presents TechSrishti 2026! Cash prizes worth ₹50,000 for top IoT & Web3 projects. Register your teams before Sept 10.",
      priority: "MEDIUM"
    }
  ],
  uploadedPyqs: [
    {
      id: "PYQ-401",
      subject: "Microprocessors & Microcontrollers",
      branch: "CSE (IoT)",
      sem: "4",
      year: "2025",
      uploadedBy: "NAVNEET MISHRA",
      fileUrl: "#",
      downloads: 142
    },
    {
      id: "PYQ-402",
      subject: "Database Management Systems",
      branch: "CSE (IoT)",
      sem: "4",
      year: "2025",
      uploadedBy: "ANKIT SHARMA",
      fileUrl: "#",
      downloads: 198
    },
    {
      id: "PYQ-403",
      subject: "Discrete Mathematics",
      branch: "CSE (IoT)",
      sem: "4",
      year: "2024",
      uploadedBy: "ABHISHEK KUMAR",
      fileUrl: "#",
      downloads: 230
    }
  ],
  attendanceLogs: {},
  certificatesQueue: []
};

// ---------------- MONGOOSE SCHEMAS & MODELS ----------------
let isMongoConnected = false;

const StudentSchema = new mongoose.Schema({
  regNo: { type: String, required: true, unique: true },
  name: String,
  branch: String,
  sem: String,
  status: String,
  idCard: String,
  attendance: String,
  email: String,
  joinedDate: String
}, { timestamps: true });

const NoticeSchema = new mongoose.Schema({
  id: String,
  title: String,
  category: String,
  date: String,
  author: String,
  content: String,
  priority: String
}, { timestamps: true });

const PyqSchema = new mongoose.Schema({
  id: String,
  subject: String,
  branch: String,
  sem: String,
  year: String,
  uploadedBy: String,
  fileUrl: String,
  downloads: Number
}, { timestamps: true });

const StudentModel = mongoose.model('Student', StudentSchema);
const NoticeModel = mongoose.model('Notice', NoticeSchema);
const PyqModel = mongoose.model('Pyq', PyqSchema);

// Connect MongoDB with timeout & auto fallback
mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 3000 })
  .then(async () => {
    isMongoConnected = true;
    console.log('⚡ Connected to MongoDB Database successfully!');
    await seedMongoDbIfEmpty();
  })
  .catch(() => {
    isMongoConnected = false;
    console.log('ℹ️ MongoDB server not running locally. Falling back to JSON File Database (bce_database.json).');
  });

async function seedMongoDbIfEmpty() {
  try {
    const studentCount = await StudentModel.countDocuments();
    if (studentCount === 0) {
      console.log('🌱 Seeding MongoDB with initial student dataset...');
      await StudentModel.insertMany(defaultDb.registeredStudents);
    }
    const noticeCount = await NoticeModel.countDocuments();
    if (noticeCount === 0) {
      await NoticeModel.insertMany(defaultDb.notices);
    }
    const pyqCount = await PyqModel.countDocuments();
    if (pyqCount === 0) {
      await PyqModel.insertMany(defaultDb.uploadedPyqs);
    }
  } catch (err) {
    console.warn('Error seeding MongoDB:', err.message);
  }
}

// Database Helper Functions (JSON Fallback & Sync)
function loadDb() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultDb, null, 2));
    return defaultDb;
  }
  try {
    const content = fs.readFileSync(DB_FILE, 'utf8');
    const data = JSON.parse(content);
    return { ...defaultDb, ...data };
  } catch (err) {
    console.error('Error loading DB file, fallback to default:', err.message);
    return defaultDb;
  }
}

function saveDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error saving DB file:', err.message);
  }
}

// ---------------- REST API ROUTES ----------------

// 1. Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    system: 'BCE Bakhtiyapur Express & MongoDB Backend Engine v3.0',
    databaseMode: isMongoConnected ? 'MongoDB (Mongoose ODM)' : 'JSON File Storage (Fallback)',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// 2. Dashboard Live Stats
app.get('/api/stats', async (req, res) => {
  try {
    let totalStudents, verifiedStudents, pendingStudents, totalPyqs, totalNotices;

    if (isMongoConnected) {
      totalStudents = await StudentModel.countDocuments();
      verifiedStudents = await StudentModel.countDocuments({ status: 'VERIFIED' });
      pendingStudents = await StudentModel.countDocuments({ status: 'PENDING_VERIFICATION' });
      totalPyqs = await PyqModel.countDocuments();
      totalNotices = await NoticeModel.countDocuments();
    } else {
      const db = loadDb();
      totalStudents = db.registeredStudents.length;
      verifiedStudents = db.registeredStudents.filter(s => s.status === 'VERIFIED').length;
      pendingStudents = db.registeredStudents.filter(s => s.status === 'PENDING_VERIFICATION').length;
      totalPyqs = db.uploadedPyqs.length;
      totalNotices = db.notices.length;
    }

    res.json({
      success: true,
      databaseMode: isMongoConnected ? 'MongoDB' : 'JSON File',
      stats: {
        totalStudents,
        verifiedStudents,
        pendingStudents,
        totalPyqs,
        totalNotices,
        college: "BCE Bakhtiyapur (Patna)",
        affiliation: "Bihar Engineering University (BEU)"
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Students - GET List
app.get('/api/students', async (req, res) => {
  try {
    if (isMongoConnected) {
      const students = await StudentModel.find().lean();
      return res.json({ success: true, databaseMode: 'MongoDB', students });
    }
    const db = loadDb();
    res.json({ success: true, databaseMode: 'JSON File', students: db.registeredStudents });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Students - POST Register
app.post('/api/students/register', async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.regNo || !payload.name) {
      return res.status(400).json({ success: false, error: 'Registration Number and Name are required.' });
    }

    const studentData = {
      regNo: payload.regNo,
      name: payload.name.toUpperCase(),
      branch: payload.branch || 'CSE (IoT)',
      sem: payload.sem || '4',
      status: 'PENDING_VERIFICATION',
      idCard: payload.idCard || `ID_CARD_${payload.regNo}.png`,
      attendance: payload.attendance || '100.0%',
      email: payload.email || `${payload.name.toLowerCase().replace(/\s+/g, '.')}@bce.edu.in`,
      joinedDate: new Date().toISOString().split('T')[0]
    };

    if (isMongoConnected) {
      await StudentModel.findOneAndUpdate(
        { regNo: payload.regNo },
        studentData,
        { upsert: true, new: true }
      );
    }

    // Always keep JSON fallback file updated
    const db = loadDb();
    const existingIndex = db.registeredStudents.findIndex(s => s.regNo === payload.regNo);
    if (existingIndex !== -1) {
      db.registeredStudents[existingIndex] = { ...db.registeredStudents[existingIndex], ...studentData };
    } else {
      db.registeredStudents.unshift(studentData);
    }
    saveDb(db);

    res.json({
      success: true,
      databaseMode: isMongoConnected ? 'MongoDB' : 'JSON File',
      message: 'Registration submitted successfully! Pending verification by faculty.',
      students: db.registeredStudents
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Students - POST Approve Status
app.post('/api/students/approve', async (req, res) => {
  try {
    const { regNo } = req.body;
    if (!regNo) {
      return res.status(400).json({ success: false, error: 'Student Reg No is required.' });
    }

    if (isMongoConnected) {
      await StudentModel.findOneAndUpdate({ regNo }, { status: 'VERIFIED' });
    }

    const db = loadDb();
    const student = db.registeredStudents.find(s => s.regNo === regNo);
    if (student) {
      student.status = 'VERIFIED';
      saveDb(db);
    }

    res.json({
      success: true,
      databaseMode: isMongoConnected ? 'MongoDB' : 'JSON File',
      message: `Approved student ${regNo}`
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. Notices - GET List
app.get('/api/notices', async (req, res) => {
  try {
    if (isMongoConnected) {
      const notices = await NoticeModel.find().lean();
      return res.json({ success: true, databaseMode: 'MongoDB', notices });
    }
    const db = loadDb();
    res.json({ success: true, databaseMode: 'JSON File', notices: db.notices });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. PYQs - GET List
app.get('/api/pyqs', async (req, res) => {
  try {
    if (isMongoConnected) {
      const pyqs = await PyqModel.find().lean();
      return res.json({ success: true, databaseMode: 'MongoDB', pyqs });
    }
    const db = loadDb();
    res.json({ success: true, databaseMode: 'JSON File', pyqs: db.uploadedPyqs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. Attendance Mark Route
app.post('/api/attendance/mark', async (req, res) => {
  try {
    const { regNo, subject, attended, total } = req.body;
    if (!regNo || !subject) {
      return res.status(400).json({ success: false, error: 'Student Reg No and Subject are required.' });
    }

    const db = loadDb();
    if (!db.attendanceLogs[regNo]) {
      db.attendanceLogs[regNo] = {};
    }

    const current = db.attendanceLogs[regNo][subject] || { attended: 0, total: 0 };
    db.attendanceLogs[regNo][subject] = {
      attended: Number(attended !== undefined ? attended : current.attended + 1),
      total: Number(total !== undefined ? total : current.total + 1)
    };

    saveDb(db);
    res.json({
      success: true,
      message: `Updated attendance for ${subject}`,
      attendance: db.attendanceLogs[regNo]
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Static Files Serving
app.use(express.static(__dirname));

// Fallback Route to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 BCE Bakhtiyapur Express Server Active at http://localhost:${PORT}`);
  console.log(`⚡ MongoDB Ready Mode: ${MONGO_URI}`);
  console.log(`=======================================================`);
});
