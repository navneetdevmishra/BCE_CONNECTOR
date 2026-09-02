// ==========================================================================
// BCE BAKHTIYAPUR DIGITAL CONNECTOR - REACT 18 APPLICATION
// Connected to Express Node.js Backend Engine
// ==========================================================================

const {
  useState,
  useEffect
} = React;
function App() {
  // Navigation & Theme State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [theme, setTheme] = useState('dark');
  const [backendStatus, setBackendStatus] = useState({
    online: false,
    info: 'Connecting to Express...'
  });
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
        setBackendStatus({
          online: true,
          info: `Express Backend Active (Port ${data.port})`
        });
      }
    } catch (err) {
      setBackendStatus({
        online: false,
        info: 'Backend Offline'
      });
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
  const handleRegisterStudent = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/students/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(regForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('Registration Submitted Successfully!');
        setShowRegModal(false);
        setRegForm({
          name: '',
          regNo: '',
          branch: 'CSE (IoT)',
          sem: '4',
          email: '',
          idCard: ''
        });
        fetchStudents();
        fetchStats();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Failed to register student: ' + err.message);
    }
  };
  const handleApproveStudent = async regNo => {
    try {
      const res = await fetch('/api/students/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          regNo
        })
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
  const handlePostNotice = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticeForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('Notice Posted Successfully!');
        setShowNoticeModal(false);
        setNoticeForm({
          title: '',
          category: 'Academic',
          content: '',
          priority: 'HIGH',
          author: 'BEU Academic Office'
        });
        fetchNotices();
        fetchStats();
      }
    } catch (err) {
      alert('Failed to post notice');
    }
  };

  // Upload PYQ Action
  const handleUploadPyq = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/pyqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pyqForm)
      });
      const data = await res.json();
      if (data.success) {
        alert('PYQ Added Successfully!');
        setShowPyqModal(false);
        setPyqForm({
          subject: '',
          branch: 'CSE (IoT)',
          sem: '4',
          year: '2025',
          uploadedBy: ''
        });
        fetchPyqs();
        fetchStats();
      }
    } catch (err) {
      alert('Failed to upload PYQ');
    }
  };

  // Attendance Calculations
  const currentAttPercentage = totalClasses > 0 ? (attendedClasses / totalClasses * 100).toFixed(1) : 0;
  const classesNeededForTarget = () => {
    if (currentAttPercentage >= targetPercentage) return 0;
    const req = Math.ceil((targetPercentage * totalClasses - 100 * attendedClasses) / (100 - targetPercentage));
    return req > 0 ? req : 0;
  };

  // Sample Syllabus Database
  const syllabusData = [{
    code: "PCC-CS401",
    name: "Microprocessors & Microcontrollers",
    branch: "CSE (IoT)",
    sem: "4",
    credits: 4,
    modules: ["8085 Microprocessor Architecture & Instruction Set", "8086 Assembly Language & Interfacing", "8051 Microcontroller & Embedded C", "IoT Sensors & Interfacing"]
  }, {
    code: "PCC-CS402",
    name: "Database Management Systems",
    branch: "CSE (IoT)",
    sem: "4",
    credits: 4,
    modules: ["ER Diagram & Relational Model", "SQL & Relational Algebra", "Normalization (1NF to BCNF)", "Transactions, ACID Properties & Concurrency"]
  }, {
    code: "PCC-CS403",
    name: "Operating Systems",
    branch: "CSE (IoT)",
    sem: "4",
    credits: 4,
    modules: ["Process Management & Threading", "CPU Scheduling & Synchronization", "Memory Management & Virtual Memory", "File Systems & I/O Subsystems"]
  }, {
    code: "PCC-CS404",
    name: "Discrete Mathematics",
    branch: "CSE (IoT)",
    sem: "4",
    credits: 3,
    modules: ["Set Theory & Logic", "Combinatorics & Graph Theory", "Algebraic Structures", "Recurrence Relations"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: `app-container ${theme}-theme`
  }, /*#__PURE__*/React.createElement("header", {
    className: "glass-panel main-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-logo-icon"
  }, "🏛️"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "brand-title"
  }, "BCE BAKHTIYAPUR"), /*#__PURE__*/React.createElement("p", {
    className: "brand-subtitle"
  }, "Digital Connector & Campus OS"))), /*#__PURE__*/React.createElement("div", {
    className: "status-badge-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: `status-indicator ${backendStatus.online ? 'online' : 'offline'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: "status-text"
  }, backendStatus.info)), /*#__PURE__*/React.createElement("nav", {
    className: "header-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: `nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`,
    onClick: () => setActiveTab('dashboard')
  }, "📊 Dashboard"), /*#__PURE__*/React.createElement("button", {
    className: `nav-btn ${activeTab === 'students' ? 'active' : ''}`,
    onClick: () => setActiveTab('students')
  }, "🎓 Students & IDs"), /*#__PURE__*/React.createElement("button", {
    className: `nav-btn ${activeTab === 'syllabus' ? 'active' : ''}`,
    onClick: () => setActiveTab('syllabus')
  }, "📚 Syllabus Finder"), /*#__PURE__*/React.createElement("button", {
    className: `nav-btn ${activeTab === 'attendance' ? 'active' : ''}`,
    onClick: () => setActiveTab('attendance')
  }, "⏱️ Attendance Calc"), /*#__PURE__*/React.createElement("button", {
    className: `nav-btn ${activeTab === 'pyqs' ? 'active' : ''}`,
    onClick: () => setActiveTab('pyqs')
  }, "📝 PYQ Repository"), /*#__PURE__*/React.createElement("button", {
    className: `nav-btn ${activeTab === 'notices' ? 'active' : ''}`,
    onClick: () => setActiveTab('notices')
  }, "📢 Notice Board"))), /*#__PURE__*/React.createElement("main", {
    className: "main-content"
  }, activeTab === 'dashboard' && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-bar glass-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ticker-tag"
  }, "BEU ALERT"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-text"
  }, "🚨 BEU End-Semester Exam schedule for B.Tech Sem 4 & 6 released! Maintain 75% attendance to generate admit card.")), /*#__PURE__*/React.createElement("div", {
    className: "stats-grid mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-icon"
  }, "👥"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "stat-value"
  }, stats ? stats.totalStudents : 0), /*#__PURE__*/React.createElement("p", {
    className: "stat-label"
  }, "Registered Students"))), /*#__PURE__*/React.createElement("div", {
    className: "stat-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-icon emerald"
  }, "✅"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "stat-value"
  }, stats ? stats.verifiedStudents : 0), /*#__PURE__*/React.createElement("p", {
    className: "stat-label"
  }, "Verified Student IDs"))), /*#__PURE__*/React.createElement("div", {
    className: "stat-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-icon purple"
  }, "📑"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "stat-value"
  }, stats ? stats.totalPyqs : 0), /*#__PURE__*/React.createElement("p", {
    className: "stat-label"
  }, "PYQ Exam Papers"))), /*#__PURE__*/React.createElement("div", {
    className: "stat-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-icon amber"
  }, "📢"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "stat-value"
  }, stats ? stats.totalNotices : 0), /*#__PURE__*/React.createElement("p", {
    className: "stat-label"
  }, "Active Campus Notices")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-banner glass-card mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/React.createElement("h2", null, "Welcome to BCE Digital Portal"), /*#__PURE__*/React.createElement("p", null, "Bakhtiyapur College of Engineering, Patna • Affiliated to Bihar Engineering University"), /*#__PURE__*/React.createElement("div", {
    className: "hero-buttons mt-3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => setShowRegModal(true)
  }, "+ Register New ID Card"), /*#__PURE__*/React.createElement("button", {
    className: "btn-secondary",
    onClick: () => setActiveTab('attendance')
  }, "Check Attendance Target")))), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("h3", null, "📢 Recent University Announcements"), /*#__PURE__*/React.createElement("button", {
    className: "link-btn",
    onClick: () => setActiveTab('notices')
  }, "View All Notices →")), /*#__PURE__*/React.createElement("div", {
    className: "notice-list mt-3"
  }, notices.slice(0, 3).map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: "notice-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notice-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: `badge priority-${n.priority.toLowerCase()}`
  }, n.priority), /*#__PURE__*/React.createElement("span", {
    className: "notice-category"
  }, n.category), /*#__PURE__*/React.createElement("span", {
    className: "notice-date"
  }, n.date)), /*#__PURE__*/React.createElement("h4", null, n.title), /*#__PURE__*/React.createElement("p", null, n.content))))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("h3", null, "🎓 Verified Students Spotlight"), /*#__PURE__*/React.createElement("button", {
    className: "link-btn",
    onClick: () => setActiveTab('students')
  }, "Open Directory →")), /*#__PURE__*/React.createElement("div", {
    className: "spotlight-list mt-3"
  }, students.slice(0, 4).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.regNo,
    className: "spotlight-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-avatar"
  }, s.name.charAt(0)), /*#__PURE__*/React.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/React.createElement("strong", null, s.name), /*#__PURE__*/React.createElement("small", null, s.branch, " • Sem ", s.sem, " (", s.regNo, ")")), /*#__PURE__*/React.createElement("span", {
    className: `badge status-${s.status.toLowerCase()}`
  }, s.status))))))), activeTab === 'students' && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bar glass-card"
  }, /*#__PURE__*/React.createElement("h2", null, "🎓 Student Registration & Verification Portal"), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => setShowRegModal(true)
  }, "+ Register Student ID")), /*#__PURE__*/React.createElement("div", {
    className: "search-bar glass-card mt-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search by student name or registration number...",
    value: studentSearch,
    onChange: e => setStudentSearch(e.target.value),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "student-grid mt-4"
  }, students.filter(s => s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.regNo.includes(studentSearch)).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.regNo,
    className: "student-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "student-icon"
  }, "🎓"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.name), /*#__PURE__*/React.createElement("p", {
    className: "reg-text"
  }, "Reg: ", s.regNo))), /*#__PURE__*/React.createElement("div", {
    className: "student-details mt-3"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Branch:"), " ", s.branch), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Semester:"), " ", s.sem), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Attendance:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-cyan"
  }, s.attendance)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", s.email || 'N/A')), /*#__PURE__*/React.createElement("div", {
    className: "card-actions mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: `badge status-${s.status.toLowerCase()}`
  }, s.status), s.status === 'PENDING_VERIFICATION' && /*#__PURE__*/React.createElement("button", {
    className: "btn-approve",
    onClick: () => handleApproveStudent(s.regNo)
  }, "Approve ID")))))), activeTab === 'syllabus' && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bar glass-card"
  }, /*#__PURE__*/React.createElement("h2", null, "📚 BEU Course & Subject Syllabus Finder"), /*#__PURE__*/React.createElement("div", {
    className: "filters-row"
  }, /*#__PURE__*/React.createElement("select", {
    value: selectedBranch,
    onChange: e => setSelectedBranch(e.target.value),
    className: "custom-select"
  }, /*#__PURE__*/React.createElement("option", {
    value: "CSE (IoT)"
  }, "CSE (IoT)"), /*#__PURE__*/React.createElement("option", {
    value: "CSE"
  }, "Computer Science & Engg"), /*#__PURE__*/React.createElement("option", {
    value: "Civil"
  }, "Civil Engineering"), /*#__PURE__*/React.createElement("option", {
    value: "Mechanical"
  }, "Mechanical Engineering"), /*#__PURE__*/React.createElement("option", {
    value: "EE"
  }, "Electrical Engineering")), /*#__PURE__*/React.createElement("select", {
    value: selectedSem,
    onChange: e => setSelectedSem(e.target.value),
    className: "custom-select"
  }, [1, 2, 3, 4, 5, 6, 7, 8].map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, "Semester ", s))))), /*#__PURE__*/React.createElement("div", {
    className: "syllabus-grid mt-4"
  }, syllabusData.map(subject => /*#__PURE__*/React.createElement("div", {
    key: subject.code,
    className: "syllabus-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subject-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "code-badge"
  }, subject.code), /*#__PURE__*/React.createElement("span", {
    className: "credits-badge"
  }, subject.credits, " Credits")), /*#__PURE__*/React.createElement("h3", null, subject.name), /*#__PURE__*/React.createElement("p", {
    className: "branch-tag"
  }, subject.branch, " • Semester ", subject.sem), /*#__PURE__*/React.createElement("div", {
    className: "modules-list mt-3"
  }, /*#__PURE__*/React.createElement("h4", null, "Course Modules:"), /*#__PURE__*/React.createElement("ul", null, subject.modules.map((m, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx
  }, "🔹 ", m)))))))), activeTab === 'attendance' && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bar glass-card"
  }, /*#__PURE__*/React.createElement("h2", null, "⏱️ Attendance Calculator & Eligibility Checker")), /*#__PURE__*/React.createElement("div", {
    className: "calc-grid mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card p-4"
  }, /*#__PURE__*/React.createElement("h3", null, "Inputs"), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-3"
  }, /*#__PURE__*/React.createElement("label", null, "Classes Attended So Far:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: attendedClasses,
    onChange: e => setAttendedClasses(Number(e.target.value)),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-3"
  }, /*#__PURE__*/React.createElement("label", null, "Total Classes Held:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: totalClasses,
    onChange: e => setTotalClasses(Number(e.target.value)),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-3"
  }, /*#__PURE__*/React.createElement("label", null, "Required Target Percentage (%):"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: targetPercentage,
    onChange: e => setTargetPercentage(Number(e.target.value)),
    className: "custom-input"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card p-4 result-box"
  }, /*#__PURE__*/React.createElement("h3", null, "Current Status"), /*#__PURE__*/React.createElement("div", {
    className: "percentage-display mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: `big-percentage ${currentAttPercentage >= targetPercentage ? 'text-emerald' : 'text-amber'}`
  }, currentAttPercentage, "%"), /*#__PURE__*/React.createElement("p", {
    className: "status-note"
  }, currentAttPercentage >= targetPercentage ? '✅ You fulfill the BEU exam attendance requirement!' : '⚠️ Warning: Below target attendance threshold!')), /*#__PURE__*/React.createElement("div", {
    className: "calculation-details mt-4"
  }, /*#__PURE__*/React.createElement("h4", null, "Target Action Required:"), classesNeededForTarget() > 0 ? /*#__PURE__*/React.createElement("p", {
    className: "req-alert"
  }, "You must attend ", /*#__PURE__*/React.createElement("strong", null, classesNeededForTarget()), " consecutive upcoming classes to reach ", targetPercentage, "% attendance.") : /*#__PURE__*/React.createElement("p", {
    className: "safe-alert"
  }, "You are in the safe zone! You can miss up to ", Math.floor((attendedClasses * 100 - targetPercentage * totalClasses) / targetPercentage), " classes and still remain above ", targetPercentage, "%."))))), activeTab === 'pyqs' && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bar glass-card"
  }, /*#__PURE__*/React.createElement("h2", null, "📝 Previous Year Question (PYQ) Repository"), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => setShowPyqModal(true)
  }, "+ Upload PYQ Paper")), /*#__PURE__*/React.createElement("div", {
    className: "pyq-grid mt-4"
  }, pyqs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "pyq-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pyq-icon"
  }, "📄"), /*#__PURE__*/React.createElement("div", {
    className: "pyq-details"
  }, /*#__PURE__*/React.createElement("h3", null, p.subject), /*#__PURE__*/React.createElement("p", null, p.branch, " • Sem ", p.sem, " • Year ", p.year), /*#__PURE__*/React.createElement("small", null, "Uploaded by: ", p.uploadedBy, " | Downloads: ", p.downloads)), /*#__PURE__*/React.createElement("button", {
    className: "btn-download",
    onClick: () => alert(`Downloading ${p.subject} PYQ Paper...`)
  }, "Download PDF"))))), activeTab === 'notices' && /*#__PURE__*/React.createElement("div", {
    className: "tab-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bar glass-card"
  }, /*#__PURE__*/React.createElement("h2", null, "📢 BCE Official Campus Notice Board"), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => setShowNoticeModal(true)
  }, "+ Post Official Notice")), /*#__PURE__*/React.createElement("div", {
    className: "notices-grid mt-4"
  }, notices.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: "notice-card glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notice-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: `badge priority-${n.priority.toLowerCase()}`
  }, n.priority, " PRIORITY"), /*#__PURE__*/React.createElement("span", {
    className: "notice-date"
  }, n.date)), /*#__PURE__*/React.createElement("h3", null, n.title), /*#__PURE__*/React.createElement("p", {
    className: "notice-author"
  }, "Issued by: ", /*#__PURE__*/React.createElement("strong", null, n.author)), /*#__PURE__*/React.createElement("p", {
    className: "notice-body mt-2"
  }, n.content)))))), showRegModal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content glass-card"
  }, /*#__PURE__*/React.createElement("h3", null, "🎓 Register New Student ID"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleRegisterStudent,
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Full Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. NAVNEET MISHRA",
    value: regForm.name,
    onChange: e => setRegForm({
      ...regForm,
      name: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Registration Number:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. 25155126904",
    value: regForm.regNo,
    onChange: e => setRegForm({
      ...regForm,
      regNo: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Branch:"), /*#__PURE__*/React.createElement("select", {
    value: regForm.branch,
    onChange: e => setRegForm({
      ...regForm,
      branch: e.target.value
    }),
    className: "custom-select"
  }, /*#__PURE__*/React.createElement("option", {
    value: "CSE (IoT)"
  }, "CSE (IoT)"), /*#__PURE__*/React.createElement("option", {
    value: "CSE"
  }, "CSE"), /*#__PURE__*/React.createElement("option", {
    value: "Civil"
  }, "Civil"), /*#__PURE__*/React.createElement("option", {
    value: "Mechanical"
  }, "Mechanical"), /*#__PURE__*/React.createElement("option", {
    value: "EE"
  }, "EE"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Email Address:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "student@bce.edu.in",
    value: regForm.email,
    onChange: e => setRegForm({
      ...regForm,
      email: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary"
  }, "Submit for Verification"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-secondary",
    onClick: () => setShowRegModal(false)
  }, "Cancel"))))), showNoticeModal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content glass-card"
  }, /*#__PURE__*/React.createElement("h3", null, "📢 Post Official Notice"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handlePostNotice,
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Notice Title:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. Mid-Sem Exam Announcement",
    value: noticeForm.title,
    onChange: e => setNoticeForm({
      ...noticeForm,
      title: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Category:"), /*#__PURE__*/React.createElement("select", {
    value: noticeForm.category,
    onChange: e => setNoticeForm({
      ...noticeForm,
      category: e.target.value
    }),
    className: "custom-select"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Exam"
  }, "Exam"), /*#__PURE__*/React.createElement("option", {
    value: "Academic"
  }, "Academic"), /*#__PURE__*/React.createElement("option", {
    value: "Event"
  }, "Event"), /*#__PURE__*/React.createElement("option", {
    value: "General"
  }, "General"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Notice Content:"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "4",
    placeholder: "Enter notice details...",
    value: noticeForm.content,
    onChange: e => setNoticeForm({
      ...noticeForm,
      content: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary"
  }, "Post Notice"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-secondary",
    onClick: () => setShowNoticeModal(false)
  }, "Cancel"))))), showPyqModal && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content glass-card"
  }, /*#__PURE__*/React.createElement("h3", null, "📝 Add Previous Year Question Paper"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleUploadPyq,
    className: "mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Subject Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "e.g. Database Management Systems",
    value: pyqForm.subject,
    onChange: e => setPyqForm({
      ...pyqForm,
      subject: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Exam Year:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    placeholder: "2025",
    value: pyqForm.year,
    onChange: e => setPyqForm({
      ...pyqForm,
      year: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group mt-2"
  }, /*#__PURE__*/React.createElement("label", null, "Your Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "NAVNEET MISHRA",
    value: pyqForm.uploadedBy,
    onChange: e => setPyqForm({
      ...pyqForm,
      uploadedBy: e.target.value
    }),
    className: "custom-input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions mt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary"
  }, "Add PYQ"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-secondary",
    onClick: () => setShowPyqModal(false)
  }, "Cancel"))))), /*#__PURE__*/React.createElement("footer", {
    className: "glass-panel main-footer"
  }, /*#__PURE__*/React.createElement("p", null, "© 2026 BCE Bakhtiyapur Digital Connector • Bihar Engineering University (BEU) Portal")));
}

// Render React App into #react-app-root
ReactDOM.createRoot(document.getElementById('react-app-root')).render(/*#__PURE__*/React.createElement(App, null));