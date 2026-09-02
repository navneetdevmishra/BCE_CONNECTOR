// ==========================================================================
// BCE BAKHTIYAPUR DIGITAL CONNECTOR - REACT 18 APPLICATION
// Connected to Express Node.js Backend Engine
// ==========================================================================

const { useState, useEffect } = React;

function App() {
  // Navigation & Theme State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('dark');
  const [backendStatus, setBackendStatus] = useState({ online: false, info: 'Connecting to Express...' });
  const [stats, setStats] = useState(null);

  // Data States
  const [students, setStudents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('CSE (IoT)');
  const [selectedSem, setSelectedSem] = useState('4');
  const [pyqSearch, setPyqSearch] = useState('');

  // Modals & Forms
  const [showRegModal, setShowRegModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [showPyqModal, setShowPyqModal] = useState(false);

  // Registration Form State
  const [regForm, setRegForm] = useState({
    name: '',
    regNo: '',
    branch: 'CSE (IoT)',
    sem: '4',
    email: '',
    idCard: ''
  });

  // Notice Form State
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    category: 'Academic',
    content: '',
    priority: 'HIGH',
    author: 'BEU Academic Office'
  });

  // PYQ Form State
  const [pyqForm, setPyqForm] = useState({
    subject: '',
    branch: 'CSE (IoT)',
    sem: '4',
    year: '2025',
    uploadedBy: ''
  });

  // Attendance Calculator State
  const [attendedClasses, setAttendedClasses] = useState(28);
  const [totalClasses, setTotalClasses] = useState(34);
  const [targetPercentage, setTargetPercentage] = useState(75);

  // Fetch initial data from Express Backend
  useEffect(() => {
    fetchHealth();
    fetchStats();
    fetchStudents();
    fetchNotices();
    fetchPyqs();
  }, []);

  const fetchHealth = async () => {
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      if (data.status === 'OK') {
        setBackendStatus({ online: true, info: `Express Backend Active (Port ${data.port})` });
      }
    } catch (err) {
      setBackendStatus({ online: false, info: 'Backend Offline' });
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      if (data.success) setStats(data.stats);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await fetch('/api/students');
      const data = await res.json();
      if (data.success) setStudents(data.students);
    } catch (err) {
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotices = async () => {
    try {
      const res = await fetch('/api/notices');
      const data = await res.json();
      if (data.success) setNotices(data.notices);
    } catch (err) {
      console.error('Error fetching notices:', err);
    }
  };

  const fetchPyqs = async () => {
    try {
      const res = await fetch('/api/pyqs');
      const data = await res.json();
      if (data.success) setPyqs(data.pyqs);
    } catch (err) {
      console.error('Error fetching pyqs:', err);
    }
  };

  // Student Actions
  const handleRegisterStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/students/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(regForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('Registration Submitted Successfully!');
        setShowRegModal(false);
        setRegForm({ name: '', regNo: '', branch: 'CSE (IoT)', sem: '4', email: '', idCard: '' });
        fetchStudents();
        fetchStats();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Failed to register student: ' + err.message);
    }
  };

  const handleApproveStudent = async (regNo) => {
    try {
      const res = await fetch('/api/students/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ regNo })
      });
      const data = await res.json();
      if (data.success) {
        alert(data.message);
        fetchStudents();
        fetchStats();
      }
    } catch (err) {
      alert('Failed to approve student');
    }
  };

  // Post Notice Action
  const handlePostNotice = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noticeForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('Notice Posted Successfully!');
        setShowNoticeModal(false);
        setNoticeForm({ title: '', category: 'Academic', content: '', priority: 'HIGH', author: 'BEU Academic Office' });
        fetchNotices();
        fetchStats();
      }
    } catch (err) {
      alert('Failed to post notice');
    }
  };

  // Upload PYQ Action
  const handleUploadPyq = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/pyqs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pyqForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('PYQ Added Successfully!');
        setShowPyqModal(false);
        setPyqForm({ subject: '', branch: 'CSE (IoT)', sem: '4', year: '2025', uploadedBy: '' });
        fetchPyqs();
        fetchStats();
      }
    } catch (err) {
      alert('Failed to upload PYQ');
    }
  };

  // Attendance Calculations
  const currentAttPercentage = totalClasses > 0 ? ((attendedClasses / totalClasses) * 100).toFixed(1) : 0;
  const classesNeededForTarget = () => {
    if (currentAttPercentage >= targetPercentage) return 0;
    const req = Math.ceil((targetPercentage * totalClasses - 100 * attendedClasses) / (100 - targetPercentage));
    return req > 0 ? req : 0;
  };

  // Sample Syllabus Database
  const syllabusData = [
    {
      code: "PCC-CS401",
      name: "Microprocessors & Microcontrollers",
      branch: "CSE (IoT)",
      sem: "4",
      credits: 4,
      modules: ["8085 Microprocessor Architecture & Instruction Set", "8086 Assembly Language & Interfacing", "8051 Microcontroller & Embedded C", "IoT Sensors & Interfacing"]
    },
    {
code: "PCC-CS402",
      name: "Database Management Systems",
      branch: "CSE (IoT)",
      sem: "4",
      credits: 4,
      modules: ["ER Diagram & Relational Model", "SQL & Relational Algebra", "Normalization (1NF to BCNF)", "Transactions, ACID Properties & Concurrency"]
    },
    {
      code: "PCC-CS403",
      name: "Operating Systems",
      branch: "CSE (IoT)",
      sem: "4",
      credits: 4,
      modules: ["Process Management & Threading", "CPU Scheduling & Synchronization", "Memory Management & Virtual Memory", "File Systems & I/O Subsystems"]
    },
    {
      code: "PCC-CS404",
      name: "Discrete Mathematics",
      branch: "CSE (IoT)",
      sem: "4",
      credits: 3,
      modules: ["Set Theory & Logic", "Combinatorics & Graph Theory", "Algebraic Structures", "Recurrence Relations"]
    }
  ];

  return (
    <div className={`app-container ${theme}-theme`}>
      {/* Top Navbar */}
      <header className="glass-panel main-header">
        <div className="header-brand">
          <div className="brand-logo-icon">🏛️</div>
          <div>
            <h1 className="brand-title">BCE BAKHTIYAPUR</h1>
            <p className="brand-subtitle">Digital Connector & Campus OS</p>
          </div>
        </div>

        {/* Backend Status Badge */}
        <div className="status-badge-container">
          <span className={`status-indicator ${backendStatus.online ? 'online' : 'offline'}`}></span>
          <span className="status-text">{backendStatus.info}</span>
        </div>

        {/* Navigation Tabs */}
        <nav className="header-nav">
          <button className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            📊 Dashboard
          </button>
          <button className={`nav-btn ${activeTab === 'students' ? 'active' : ''}`} onClick={() => setActiveTab('students')}>
            🎓 Students & IDs
          </button>
          <button className={`nav-btn ${activeTab === 'syllabus' ? 'active' : ''}`} onClick={() => setActiveTab('syllabus')}>
            📚 Syllabus Finder
          </button>
          <button className={`nav-btn ${activeTab === 'attendance' ? 'active' : ''}`} onClick={() => setActiveTab('attendance')}>
            ⏱️ Attendance Calc
          </button>
          <button className={`nav-btn ${activeTab === 'pyqs' ? 'active' : ''}`} onClick={() => setActiveTab('pyqs')}>
            📝 PYQ Repository
          </button>
          <button className={`nav-btn ${activeTab === 'notices' ? 'active' : ''}`} onClick={() => setActiveTab('notices')}>
            📢 Notice Board
          </button>
        </nav>
      </header>

      {/* Main Body */}
      <main className="main-content">

        {/* TAB 1: DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="tab-fade-in">
            {/* Ticker Banner */}
            <div className="ticker-bar glass-card">
              <span className="ticker-tag">BEU ALERT</span>
              <span className="ticker-text">🚨 BEU End-Semester Exam schedule for B.Tech Sem 4 & 6 released! Maintain 75% attendance to generate admit card.</span>
            </div>

            {/* Quick Stats Grid */}
            <div className="stats-grid mt-4">
              <div className="stat-card glass-card">
                <div className="stat-icon">👥</div>
                <div>
                  <h3 className="stat-value">{stats ? stats.totalStudents : 0}</h3>
                  <p className="stat-label">Registered Students</p>
                </div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon emerald">✅</div>
                <div>
                  <h3 className="stat-value">{stats ? stats.verifiedStudents : 0}</h3>
                  <p className="stat-label">Verified Student IDs</p>
                </div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon purple">📑</div>
                <div>
                  <h3 className="stat-value">{stats ? stats.totalPyqs : 0}</h3>
                  <p className="stat-label">PYQ Exam Papers</p>
                </div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon amber">📢</div>
                <div>
                  <h3 className="stat-value">{stats ? stats.totalNotices : 0}</h3>
                  <p className="stat-label">Active Campus Notices</p>
                </div>
              </div>
            </div>

            {/* Main Action Banner */}
            <div className="hero-banner glass-card mt-4">
              <div className="hero-text">
                <h2>Welcome to BCE Digital Portal</h2>
                <p>Bakhtiyapur College of Engineering, Patna • Affiliated to Bihar Engineering University</p>
                <div className="hero-buttons mt-3">
                  <button className="btn-primary" onClick={() => setShowRegModal(true)}>+ Register New ID Card</button>
                  <button className="btn-secondary" onClick={() => setActiveTab('attendance')}>Check Attendance Target</button>
                </div>
              </div>
            </div>

            {/* Recent Notices Preview */}
            <div className="dashboard-grid mt-4">
              <div className="glass-card p-4">
                <div className="card-header">
                  <h3>📢 Recent University Announcements</h3>
                  <button className="link-btn" onClick={() => setActiveTab('notices')}>View All Notices →</button>
                </div>
                <div className="notice-list mt-3">
                  {notices.slice(0, 3).map(n => (
                    <div key={n.id} className="notice-item">
                      <div className="notice-meta">
                        <span className={`badge priority-${n.priority.toLowerCase()}`}>{n.priority}</span>
                        <span className="notice-category">{n.category}</span>
                        <span className="notice-date">{n.date}</span>
                      </div>
                      <h4>{n.title}</h4>
                      <p>{n.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Students Spotlight */}
              <div className="glass-card p-4">
                <div className="card-header">
                  <h3>🎓 Verified Students Spotlight</h3>
                  <button className="link-btn" onClick={() => setActiveTab('students')}>Open Directory →</button>
                </div>
                <div className="spotlight-list mt-3">
                  {students.slice(0, 4).map(s => (
                    <div key={s.regNo} className="spotlight-item">
                      <div className="user-avatar">{s.name.charAt(0)}</div>
                      <div className="user-info">
                        <strong>{s.name}</strong>
                        <small>{s.branch} • Sem {s.sem} ({s.regNo})</small>
                      </div>
                      <span className={`badge status-${s.status.toLowerCase()}`}>{s.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STUDENTS & ID VERIFICATION */}
        {activeTab === 'students' && (
          <div className="tab-fade-in">
            <div className="section-bar glass-card">
              <h2>🎓 Student Registration & Verification Portal</h2>
              <button className="btn-primary" onClick={() => setShowRegModal(true)}>+ Register Student ID</button>
            </div>

            {/* Search Input */}
            <div className="search-bar glass-card mt-3">
              <input
                type="text"
                placeholder="Search by student name or registration number..."
                value={studentSearch}
                onChange={e => setStudentSearch(e.target.value)}
                className="custom-input"
              />
            </div>

            {/* Students Table / Grid */}
            <div className="student-grid mt-4">
              {students
                .filter(s => s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.regNo.includes(studentSearch))
                .map(s => (
                  <div key={s.regNo} className="student-card glass-card">
                    <div className="card-top">
                      <div className="student-icon">🎓</div>
                      <div>
                        <h3>{s.name}</h3>
                        <p className="reg-text">Reg: {s.regNo}</p>
                      </div>
                    </div>
                    <div className="student-details mt-3">
                      <p><strong>Branch:</strong> {s.branch}</p>
                      <p><strong>Semester:</strong> {s.sem}</p>
                      <p><strong>Attendance:</strong> <span className="text-cyan">{s.attendance}</span></p>
                      <p><strong>Email:</strong> {s.email || 'N/A'}</p>
                    </div>
                    <div className="card-actions mt-3">
                      <span className={`badge status-${s.status.toLowerCase()}`}>{s.status}</span>
                      {s.status === 'PENDING_VERIFICATION' && (
                        <button className="btn-approve" onClick={() => handleApproveStudent(s.regNo)}>
                          Approve ID
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 3: SYLLABUS FINDER */}
        {activeTab === 'syllabus' && (
          <div className="tab-fade-in">
            <div className="section-bar glass-card">
              <h2>📚 BEU Course & Subject Syllabus Finder</h2>
              <div className="filters-row">
                <select value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)} className="custom-select">
                  <option value="CSE (IoT)">CSE (IoT)</option>
                  <option value="CSE">Computer Science & Engg</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="EE">Electrical Engineering</option>
                </select>
                <select value={selectedSem} onChange={e => setSelectedSem(e.target.value)} className="custom-select">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                    <option key={s} value={s}>Semester {s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="syllabus-grid mt-4">
              {syllabusData.map(subject => (
                <div key={subject.code} className="syllabus-card glass-card">
                  <div className="subject-header">
                    <span className="code-badge">{subject.code}</span>
                    <span className="credits-badge">{subject.credits} Credits</span>
                  </div>
                  <h3>{subject.name}</h3>
                  <p className="branch-tag">{subject.branch} • Semester {subject.sem}</p>

                  <div className="modules-list mt-3">
                    <h4>Course Modules:</h4>
                    <ul>
                      {subject.modules.map((m, idx) => (
                        <li key={idx}>🔹 {m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ATTENDANCE CALCULATOR */}
        {activeTab === 'attendance' && (
          <div className="tab-fade-in">
            <div className="section-bar glass-card">
              <h2>⏱️ Attendance Calculator & Eligibility Checker</h2>
            </div>

            <div className="calc-grid mt-4">
              <div className="glass-card p-4">
                <h3>Inputs</h3>
                <div className="form-group mt-3">
                  <label>Classes Attended So Far:</label>
                  <input
                    type="number"
                    value={attendedClasses}
                    onChange={e => setAttendedClasses(Number(e.target.value))}
                    className="custom-input"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Total Classes Held:</label>
                  <input
                    type="number"
                    value={totalClasses}
                    onChange={e => setTotalClasses(Number(e.target.value))}
                    className="custom-input"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Required Target Percentage (%):</label>
                  <input
                    type="number"
                    value={targetPercentage}
                    onChange={e => setTargetPercentage(Number(e.target.value))}
                    className="custom-input"
                  />
                </div>
              </div>

              <div className="glass-card p-4 result-box">
                <h3>Current Status</h3>
                <div className="percentage-display mt-3">
                  <span className={`big-percentage ${currentAttPercentage >= targetPercentage ? 'text-emerald' : 'text-amber'}`}>
                    {currentAttPercentage}%
                  </span>
                  <p className="status-note">
                    {currentAttPercentage >= targetPercentage
                      ? '✅ You fulfill the BEU exam attendance requirement!'
                      : '⚠️ Warning: Below target attendance threshold!'}
                  </p>
                </div>

                <div className="calculation-details mt-4">
                  <h4>Target Action Required:</h4>
                  {classesNeededForTarget() > 0 ? (
                    <p className="req-alert">
                      You must attend <strong>{classesNeededForTarget()}</strong> consecutive upcoming classes to reach {targetPercentage}% attendance.
                    </p>
                  ) : (
                    <p className="safe-alert">
                      You are in the safe zone! You can miss up to {Math.floor((attendedClasses * 100 - targetPercentage * totalClasses) / targetPercentage)} classes and still remain above {targetPercentage}%.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: PYQ REPOSITORY */}
        {activeTab === 'pyqs' && (
          <div className="tab-fade-in">
            <div className="section-bar glass-card">
              <h2>📝 Previous Year Question (PYQ) Repository</h2>
              <button className="btn-primary" onClick={() => setShowPyqModal(true)}>+ Upload PYQ Paper</button>
            </div>

            <div className="pyq-grid mt-4">
              {pyqs.map(p => (
                <div key={p.id} className="pyq-card glass-card">
                  <div className="pyq-icon">📄</div>
                  <div className="pyq-details">
                    <h3>{p.subject}</h3>
                    <p>{p.branch} • Sem {p.sem} • Year {p.year}</p>
                    <small>Uploaded by: {p.uploadedBy} | Downloads: {p.downloads}</small>
                  </div>
                  <button className="btn-download" onClick={() => alert(`Downloading ${p.subject} PYQ Paper...`)}>
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: NOTICE BOARD */}
        {activeTab === 'notices' && (
          <div className="tab-fade-in">
            <div className="section-bar glass-card">
              <h2>📢 BCE Official Campus Notice Board</h2>
              <button className="btn-primary" onClick={() => setShowNoticeModal(true)}>+ Post Official Notice</button>
            </div>

            <div className="notices-grid mt-4">
              {notices.map(n => (
                <div key={n.id} className="notice-card glass-card">
                  <div className="notice-header">
                    <span className={`badge priority-${n.priority.toLowerCase()}`}>{n.priority} PRIORITY</span>
                    <span className="notice-date">{n.date}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p className="notice-author">Issued by: <strong>{n.author}</strong></p>
                  <p className="notice-body mt-2">{n.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* MODAL 1: REGISTER STUDENT */}
      {showRegModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <h3>🎓 Register New Student ID</h3>
            <form onSubmit={handleRegisterStudent} className="mt-3">
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. NAVNEET MISHRA"
                  value={regForm.name}
                  onChange={e => setRegForm({ ...regForm, name: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="form-group mt-2">
                <label>Registration Number:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 25155126904"
                  value={regForm.regNo}
                  onChange={e => setRegForm({ ...regForm, regNo: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="form-group mt-2">
                <label>Branch:</label>
                <select
                  value={regForm.branch}
                  onChange={e => setRegForm({ ...regForm, branch: e.target.value })}
                  className="custom-select"
                >
                  <option value="CSE (IoT)">CSE (IoT)</option>
                  <option value="CSE">CSE</option>
                  <option value="Civil">Civil</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="EE">EE</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label>Email Address:</label>
                <input
                  type="email"
                  placeholder="student@bce.edu.in"
                  value={regForm.email}
                  onChange={e => setRegForm({ ...regForm, email: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="modal-actions mt-4">
                <button type="submit" className="btn-primary">Submit for Verification</button>
                <button type="button" className="btn-secondary" onClick={() => setShowRegModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: POST NOTICE */}
      {showNoticeModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <h3>📢 Post Official Notice</h3>
            <form onSubmit={handlePostNotice} className="mt-3">
              <div className="form-group">
                <label>Notice Title:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mid-Sem Exam Announcement"
                  value={noticeForm.title}
                  onChange={e => setNoticeForm({ ...noticeForm, title: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="form-group mt-2">
                <label>Category:</label>
                <select
                  value={noticeForm.category}
                  onChange={e => setNoticeForm({ ...noticeForm, category: e.target.value })}
                  className="custom-select"
                >
                  <option value="Exam">Exam</option>
                  <option value="Academic">Academic</option>
                  <option value="Event">Event</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div className="form-group mt-2">
                <label>Notice Content:</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Enter notice details..."
                  value={noticeForm.content}
                  onChange={e => setNoticeForm({ ...noticeForm, content: e.target.value })}
                  className="custom-input"
                ></textarea>
              </div>
              <div className="modal-actions mt-4">
                <button type="submit" className="btn-primary">Post Notice</button>
                <button type="button" className="btn-secondary" onClick={() => setShowNoticeModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: UPLOAD PYQ */}
      {showPyqModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <h3>📝 Add Previous Year Question Paper</h3>
            <form onSubmit={handleUploadPyq} className="mt-3">
              <div className="form-group">
                <label>Subject Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Database Management Systems"
                  value={pyqForm.subject}
                  onChange={e => setPyqForm({ ...pyqForm, subject: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="form-group mt-2">
                <label>Exam Year:</label>
                <input
                  type="text"
                  required
                  placeholder="2025"
                  value={pyqForm.year}
                  onChange={e => setPyqForm({ ...pyqForm, year: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="form-group mt-2">
                <label>Your Name:</label>
                <input
                  type="text"
                  placeholder="NAVNEET MISHRA"
                  value={pyqForm.uploadedBy}
                  onChange={e => setPyqForm({ ...pyqForm, uploadedBy: e.target.value })}
                  className="custom-input"
                />
              </div>
              <div className="modal-actions mt-4">
                <button type="submit" className="btn-primary">Add PYQ</button>
                <button type="button" className="btn-secondary" onClick={() => setShowPyqModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="glass-panel main-footer">
        <p>© 2026 BCE Bakhtiyapur Digital Connector • Bihar Engineering University (BEU) Portal</p>
      </footer>
    </div>
  );
}

// Render React App into #react-app-root
ReactDOM.createRoot(document.getElementById('react-app-root')).render(<App />);
