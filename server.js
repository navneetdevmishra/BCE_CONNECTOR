const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8086;
const DB_FILE = path.join(__dirname, 'bce_database.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Database Helper Functions
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
    system: 'BCE Bakhtiyapur Express Backend Engine v2.0',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// 2. Dashboard Live Stats
app.get('/api/stats', (req, res) => {
  const db = loadDb();
  const totalStudents = db.registeredStudents.length;
  const verifiedStudents = db.registeredStudents.filter(s => s.status === 'VERIFIED').length;
  const pendingStudents = db.registeredStudents.filter(s => s.status === 'PENDING_VERIFICATION').length;
  const totalPyqs = db.uploadedPyqs.length;
  const totalNotices = db.notices.length;

  res.json({
    success: true,
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
});

// 3. Students - GET List
app.get('/api/students', (req, res) => {
  const db = loadDb();
  res.json({ success: true, students: db.registeredStudents });
});

// 4. Students - POST Register
app.post('/api/students/register', (req, res) => {
  try {
    const payload = req.body;
    if (!payload.regNo || !payload.name) {
      return res.status(400).json({ success: false, error: 'Registration Number and Name are required.' });
    }

    const db = loadDb();
    const existingIndex = db.registeredStudents.findIndex(s => s.regNo === payload.regNo);

    if (existingIndex !== -1) {
      db.registeredStudents[existingIndex] = {
        ...db.registeredStudents[existingIndex],
        ...payload,
        status: 'PENDING_VERIFICATION'
      };
    } else {
      db.registeredStudents.unshift({
        regNo: payload.regNo,
        name: payload.name.toUpperCase(),
        branch: payload.branch || 'CSE (IoT)',
        sem: payload.sem || '4',
        status: 'PENDING_VERIFICATION',
        idCard: payload.idCard || `ID_CARD_${payload.regNo}.png`,
        attendance: payload.attendance || '100.0%',
        email: payload.email || `${payload.name.toLowerCase().replace(/\s+/g, '.')}@bce.edu.in`,
        joinedDate: new Date().toISOString().split('T')[0]
      });
    }

    saveDb(db);
    res.json({
      success: true,
      message: 'Registration submitted successfully! Pending verification by faculty.',
      students: db.registeredStudents
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Students - POST Approve Status
app.post('/api/students/approve', (req, res) => {
  try {
    const { regNo } = req.body;
    if (!regNo) {
      return res.status(400).json({ success: false, error: 'Registration Number is required.' });
    }

    const db = loadDb();
    const student = db.registeredStudents.find(s => s.regNo === regNo);

    if (student) {
      student.status = 'VERIFIED';
      saveDb(db);
      res.json({
        success: true,
        message: `ID Verified and Approved for ${student.name} (${student.regNo})`,
        student
      });
    } else {
      res.status(404).json({ success: false, error: 'Student not found.' });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. Notices - GET
app.get('/api/notices', (req, res) => {
  const db = loadDb();
  res.json({ success: true, notices: db.notices });
});

// 7. Notices - POST Add
app.post('/api/notices', (req, res) => {
  try {
    const { title, category, content, priority, author } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, error: 'Title and content are required.' });
    }

    const db = loadDb();
    const newNotice = {
      id: `NTC-${Date.now().toString().slice(-4)}`,
      title,
      category: category || 'General',
      date: new Date().toISOString().split('T')[0],
      author: author || 'BCE Administration',
      content,
      priority: priority || 'MEDIUM'
    };

    db.notices.unshift(newNotice);
    saveDb(db);

    res.json({ success: true, message: 'Notice posted successfully!', notice: newNotice, notices: db.notices });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 8. PYQs - GET
app.get('/api/pyqs', (req, res) => {
  const db = loadDb();
  res.json({ success: true, pyqs: db.uploadedPyqs });
});

// 9. PYQs - POST Upload/Add
app.post('/api/pyqs', (req, res) => {
  try {
    const { subject, branch, sem, year, uploadedBy } = req.body;
    if (!subject || !branch || !sem || !year) {
      return res.status(400).json({ success: false, error: 'Subject, branch, semester, and year are required.' });
    }

    const db = loadDb();
    const newPyq = {
      id: `PYQ-${Date.now().toString().slice(-4)}`,
      subject,
      branch,
      sem,
      year,
      uploadedBy: uploadedBy || 'Anonymous Student',
      fileUrl: '#',
      downloads: 0
    };

    db.uploadedPyqs.unshift(newPyq);
    saveDb(db);

    res.json({ success: true, message: 'PYQ added successfully!', pyq: newPyq, pyqs: db.uploadedPyqs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 10. Attendance - GET & POST
app.get('/api/attendance/:regNo', (req, res) => {
  const db = loadDb();
  const regNo = req.params.regNo;
  const userAttendance = db.attendanceLogs[regNo] || {
    "Microprocessors & Microcontrollers": { attended: 28, total: 32 },
    "Database Management Systems": { attended: 30, total: 34 },
    "Operating Systems": { attended: 26, total: 30 },
    "Discrete Mathematics": { attended: 24, total: 28 },
    "Environmental Science": { attended: 18, total: 20 }
  };

  res.json({ success: true, regNo, attendance: userAttendance });
});

app.post('/api/attendance/mark', (req, res) => {
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

// 11. Static Files Serving
app.use(express.static(__dirname));

// Fallback Route to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 BCE Bakhtiyapur Express Server Active at http://localhost:${PORT}`);
  console.log(`⚡ Connected to Database: ${DB_FILE}`);
  console.log(`=======================================================`);
});
