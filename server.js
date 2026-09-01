const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8086;
const DB_FILE = path.join(__dirname, 'bce_database.json');

const defaultDb = {
  registeredStudents: [
    { regNo: "25155126904", name: "NAVNEET MISHRA", branch: "CSE (IoT)", sem: "4", status: "VERIFIED", idCard: "ID_CARD_25155126904.png", attendance: "88.5%" },
    { regNo: "24155126050", name: "ABHISHEK KUMAR", branch: "CSE (IoT)", sem: "4", status: "VERIFIED", idCard: "ID_CARD_24155126050.png", attendance: "84.2%" },
    { regNo: "25155126902", name: "ANKIT SHARMA", branch: "CSE (IoT)", sem: "4", status: "VERIFIED", idCard: "ID_CARD_25155126902.png", attendance: "82.0%" },
    { regNo: "25155126915", name: "PRIYA KUMARI", branch: "CSE (IoT)", sem: "4", status: "PENDING_VERIFICATION", idCard: "ID_CARD_25155126915.png", attendance: "79.5%" },
    { regNo: "25155126920", name: "RAHUL VERMA", branch: "CSE (IoT)", sem: "4", status: "PENDING_VERIFICATION", idCard: "ID_CARD_25155126920.png", attendance: "76.0%" }
  ],
  attendanceLogs: {},
  uploadedPyqs: [],
  certificatesQueue: []
};

function loadDb() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultDb, null, 2));
    return defaultDb;
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (err) {
    return defaultDb;
  }
}

function saveDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = req.url.split('?')[0];

  // API ROUTING
  if (url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'OK', system: 'BCE CONNECT BACKEND ENGINE', port: PORT }));
    return;
  }

  if (url === '/api/students' && req.method === 'GET') {
    const db = loadDb();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, students: db.registeredStudents }));
    return;
  }

  if (url === '/api/students/register' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const db = loadDb();
        const existing = db.registeredStudents.find(s => s.regNo === payload.regNo);
        if (existing) {
          existing.status = 'PENDING_VERIFICATION';
          existing.idCard = payload.idCard || existing.idCard;
        } else {
          db.registeredStudents.unshift({
            regNo: payload.regNo || `251551${Date.now().toString().slice(-5)}`,
            name: payload.name || 'Student',
            branch: payload.branch || 'CSE (IoT)',
            sem: payload.sem || '4',
            status: 'PENDING_VERIFICATION',
            idCard: payload.idCard || 'ID_CARD.png',
            attendance: '100.0%'
          });
        }
        saveDb(db);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Student registered successfully', students: db.registeredStudents }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  if (url === '/api/students/approve' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const db = loadDb();
        const student = db.registeredStudents.find(s => s.regNo === payload.regNo);
        if (student) {
          student.status = 'VERIFIED';
          saveDb(db);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: `Approved ID for ${student.name}`, student }));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Student not found' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  if (url === '/api/attendance/mark' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const db = loadDb();
        const { subCode, regNo, status } = payload;
        if (!db.attendanceLogs[subCode]) {
          db.attendanceLogs[subCode] = {};
        }
        db.attendanceLogs[subCode][regNo] = status;
        saveDb(db);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: `Marked ${status} for ${regNo}` }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // STATIC FILE SERVING
  let filePath = path.join(__dirname, url === '/' ? 'index.html' : url);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`⚡ Native BCE Connect Server running on http://localhost:${PORT}`);
});
