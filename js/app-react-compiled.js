import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
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
        info: 'GitHub Pages Static Mode (Local Cache Active)'
      });
    }
  };
  const DEFAULT_STATS = {
    totalStudents: 154,
    verifiedStudents: 142,
    totalPyqs: 48,
    totalNotices: 12
  };
  const DEFAULT_STUDENTS = [{
    regNo: "25155126904",
    name: "NAVNEET MISHRA",
    branch: "CSE (IoT)",
    sem: "4",
    status: "VERIFIED",
    email: "navneet@bcebakhtiyarpur.ac.in",
    idCard: "ID_CARD_25155126904.png"
  }, {
    regNo: "24155126050",
    name: "ABHISHEK KUMAR",
    branch: "CSE (IoT)",
    sem: "4",
    status: "VERIFIED",
    email: "abhishek@bcebakhtiyarpur.ac.in",
    idCard: "ID_CARD_24155126050.png"
  }, {
    regNo: "25155126902",
    name: "ANKIT SHARMA",
    branch: "CSE (IoT)",
    sem: "4",
    status: "VERIFIED",
    email: "ankit@bcebakhtiyarpur.ac.in",
    idCard: "ID_CARD_25155126902.png"
  }, {
    regNo: "25155126915",
    name: "PRIYA KUMARI",
    branch: "CSE (IoT)",
    sem: "4",
    status: "PENDING_VERIFICATION",
    email: "priya@bcebakhtiyarpur.ac.in",
    idCard: "ID_CARD_25155126915.png"
  }];
  const DEFAULT_NOTICES = [{
    _id: 'n1',
    title: 'B.Tech 4th Sem Mid-Term Examination Timetable 2026',
    category: 'Academic',
    content: 'Official timetable for CSE (IoT), EEE, ME, and CE branches announced. Exams start from May 18, 2026.',
    priority: 'HIGH',
    author: 'BEU Academic Office',
    date: 'May 10, 2026'
  }, {
    _id: 'n2',
    title: 'TCS NQT & Digital Placement Drive Batch 2026',
    category: 'Placement',
    content: 'TCS National Qualifier Test registration open for 4th and 6th sem students. Practice using the TCS 75 DSA tracker.',
    priority: 'HIGH',
    author: 'BCE TPO Cell',
    date: 'May 08, 2026'
  }, {
    _id: 'n3',
    title: 'Hostel 2 Mess Timetable & Security Pass Guidelines',
    category: 'Campus',
    content: 'Gate pass required after 8:00 PM. Warden office notification for Boys Hostel H1 and H2 residents.',
    priority: 'NORMAL',
    author: 'BCE Hostel Warden',
    date: 'May 04, 2026'
  }];
  const DEFAULT_PYQS = [{
    _id: 'p1',
    subject: 'Computer Organization & Architecture (155401)',
    branch: 'CSE (IoT)',
    sem: '4',
    year: '2025',
    uploadedBy: 'NAVNEET MISHRA'
  }, {
    _id: 'p2',
    subject: 'Formal Language & Automata Theory (155402)',
    branch: 'CSE (IoT)',
    sem: '4',
    year: '2025',
    uploadedBy: 'ABHISHEK KUMAR'
  }, {
    _id: 'p3',
    subject: 'Design & Analysis of Algorithms (155403)',
    branch: 'CSE',
    sem: '4',
    year: '2024',
    uploadedBy: 'BCE Admin Cell'
  }, {
    _id: 'p4',
    subject: 'Database Management Systems (155404)',
    branch: 'CSE (IoT)',
    sem: '4',
    year: '2025',
    uploadedBy: 'ANKIT SHARMA'
  }];
  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats');
      const data = await res.json();
      if (data.success && data.stats) setStats(data.stats);else setStats(DEFAULT_STATS);
    } catch (err) {
      setStats(DEFAULT_STATS);
    }
  };
  const fetchStudents = async () => {
    try {
      const res = await fetch('/api/students');
      const data = await res.json();
      if (data.success && data.students && data.students.length > 0) setStudents(data.students);else setStudents(DEFAULT_STUDENTS);
    } catch (err) {
      setStudents(DEFAULT_STUDENTS);
    } finally {
      setLoading(false);
    }
  };
  const fetchNotices = async () => {
    try {
      const res = await fetch('/api/notices');
      const data = await res.json();
      if (data.success && data.notices && data.notices.length > 0) setNotices(data.notices);else setNotices(DEFAULT_NOTICES);
    } catch (err) {
      setNotices(DEFAULT_NOTICES);
    }
  };
  const fetchPyqs = async () => {
    try {
      const res = await fetch('/api/pyqs');
      const data = await res.json();
      if (data.success && data.pyqs && data.pyqs.length > 0) setPyqs(data.pyqs);else setPyqs(DEFAULT_PYQS);
    } catch (err) {
      setPyqs(DEFAULT_PYQS);
    }
  };

  // Student Actions
  const handleRegisterStudent = async e => {
    e.preventDefault();
    const newStudent = {
      regNo: regForm.regNo || String(Date.now()),
      name: regForm.name || 'NEW STUDENT',
      branch: regForm.branch || 'CSE (IoT)',
      sem: regForm.sem || '4',
      status: 'PENDING_VERIFICATION',
      email: regForm.email || 'student@bcebakhtiyarpur.ac.in',
      idCard: regForm.idCard || 'ID_CARD_NEW.png'
    };
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
      }
    } catch (err) {
      console.warn('Backend offline, registered locally');
    }
    setStudents(prev => [newStudent, ...prev]);
    setShowRegModal(false);
    setRegForm({
      name: '',
      regNo: '',
      branch: 'CSE (IoT)',
      sem: '4',
      email: '',
      idCard: ''
    });
    alert(`🎉 Registration Submitted Successfully for ${newStudent.name}! Pending Admin Approval.`);
  };
  const handleApproveStudent = async regNo => {
    try {
      await fetch('/api/students/approve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          regNo
        })
      });
    } catch (err) {
      console.warn('Backend offline, approving locally');
    }
    setStudents(prev => prev.map(s => s.regNo === regNo ? {
      ...s,
      status: 'VERIFIED'
    } : s));
    alert(`✅ Student ID ${regNo} Verified & Approved!`);
  };

  // Post Notice Action
  const handlePostNotice = async e => {
    e.preventDefault();
    const newNotice = {
      _id: String(Date.now()),
      title: noticeForm.title || 'New Notice',
      category: noticeForm.category || 'Academic',
      content: noticeForm.content || 'Notice Content',
      priority: noticeForm.priority || 'HIGH',
      author: noticeForm.author || 'BEU Academic Office',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };
    try {
      await fetch('/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticeForm)
      });
    } catch (err) {
      console.warn('Backend offline, posted locally');
    }
    setNotices(prev => [newNotice, ...prev]);
    setShowNoticeModal(false);
    setNoticeForm({
      title: '',
      category: 'Academic',
      content: '',
      priority: 'HIGH',
      author: 'BEU Academic Office'
    });
    alert('📢 Notice Published Successfully!');
  };

  // Upload PYQ Action
  const handleUploadPyq = async e => {
    e.preventDefault();
    const newPyq = {
      _id: String(Date.now()),
      subject: pyqForm.subject || 'Core Subject',
      branch: pyqForm.branch || 'CSE (IoT)',
      sem: pyqForm.sem || '4',
      year: pyqForm.year || '2025',
      uploadedBy: pyqForm.uploadedBy || 'NAVNEET MISHRA'
    };
    try {
      await fetch('/api/pyqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pyqForm)
      });
    } catch (err) {
      console.warn('Backend offline, uploaded locally');
    }
    setPyqs(prev => [newPyq, ...prev]);
    setShowPyqModal(false);
    setPyqForm({
      subject: '',
      branch: 'CSE (IoT)',
      sem: '4',
      year: '2025',
      uploadedBy: ''
    });
    alert('📑 PYQ Paper Uploaded Successfully!');
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
  return /*#__PURE__*/_jsxDEV("div", {
    className: `app-container ${theme}-theme`,
    children: [/*#__PURE__*/_jsxDEV("header", {
      className: "glass-panel main-header",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "header-brand",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "brand-logo-icon",
          children: "🏛️"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("h1", {
            className: "brand-title",
            children: "BCE BAKHTIYAPUR"
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "brand-subtitle",
            children: "Digital Connector & Campus OS"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "status-badge-container",
        children: [/*#__PURE__*/_jsxDEV("span", {
          className: `status-indicator ${backendStatus.online ? 'online' : 'offline'}`
        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
          className: "status-text",
          children: backendStatus.info
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("nav", {
        className: "header-nav",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: `nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`,
          onClick: () => setActiveTab('dashboard'),
          children: "📊 Dashboard"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: `nav-btn ${activeTab === 'students' ? 'active' : ''}`,
          onClick: () => setActiveTab('students'),
          children: "🎓 Students & IDs"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: `nav-btn ${activeTab === 'syllabus' ? 'active' : ''}`,
          onClick: () => setActiveTab('syllabus'),
          children: "📚 Syllabus Finder"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: `nav-btn ${activeTab === 'attendance' ? 'active' : ''}`,
          onClick: () => setActiveTab('attendance'),
          children: "⏱️ Attendance Calc"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: `nav-btn ${activeTab === 'pyqs' ? 'active' : ''}`,
          onClick: () => setActiveTab('pyqs'),
          children: "📝 PYQ Repository"
        }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
          className: `nav-btn ${activeTab === 'notices' ? 'active' : ''}`,
          onClick: () => setActiveTab('notices'),
          children: "📢 Notice Board"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("main", {
      className: "main-content",
      children: [activeTab === 'dashboard' && /*#__PURE__*/_jsxDEV("div", {
        className: "tab-fade-in",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "ticker-bar glass-card",
          children: [/*#__PURE__*/_jsxDEV("span", {
            className: "ticker-tag",
            children: "BEU ALERT"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "ticker-text",
            children: "🚨 BEU End-Semester Exam schedule for B.Tech Sem 4 & 6 released! Maintain 75% attendance to generate admit card."
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "stats-grid mt-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "stat-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "stat-icon",
              children: "👥"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "stat-value",
                children: stats ? stats.totalStudents : 0
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "stat-label",
                children: "Registered Students"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "stat-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "stat-icon emerald",
              children: "✅"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "stat-value",
                children: stats ? stats.verifiedStudents : 0
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "stat-label",
                children: "Verified Student IDs"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "stat-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "stat-icon purple",
              children: "📑"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "stat-value",
                children: stats ? stats.totalPyqs : 0
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "stat-label",
                children: "PYQ Exam Papers"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "stat-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "stat-icon amber",
              children: "📢"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "stat-value",
                children: stats ? stats.totalNotices : 0
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "stat-label",
                children: "Active Campus Notices"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "hero-banner glass-card mt-4",
          children: /*#__PURE__*/_jsxDEV("div", {
            className: "hero-text",
            children: [/*#__PURE__*/_jsxDEV("h2", {
              children: "Welcome to BCE Digital Portal"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              children: "Bakhtiyapur College of Engineering, Patna • Affiliated to Bihar Engineering University"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "hero-buttons mt-3",
              children: [/*#__PURE__*/_jsxDEV("button", {
                className: "btn-primary",
                onClick: () => setShowRegModal(true),
                children: "+ Register New ID Card"
              }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                className: "btn-secondary",
                onClick: () => setActiveTab('attendance'),
                children: "Check Attendance Target"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "dashboard-grid mt-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "glass-card p-4",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "card-header",
              children: [/*#__PURE__*/_jsxDEV("h3", {
                children: "📢 Recent University Announcements"
              }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                className: "link-btn",
                onClick: () => setActiveTab('notices'),
                children: "View All Notices →"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "notice-list mt-3",
              children: notices.slice(0, 3).map(n => /*#__PURE__*/_jsxDEV("div", {
                className: "notice-item",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "notice-meta",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: `badge priority-${n.priority.toLowerCase()}`,
                    children: n.priority
                  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                    className: "notice-category",
                    children: n.category
                  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                    className: "notice-date",
                    children: n.date
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("h4", {
                  children: n.title
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  children: n.content
                }, void 0, false)]
              }, n.id, true))
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "glass-card p-4",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "card-header",
              children: [/*#__PURE__*/_jsxDEV("h3", {
                children: "🎓 Verified Students Spotlight"
              }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                className: "link-btn",
                onClick: () => setActiveTab('students'),
                children: "Open Directory →"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "spotlight-list mt-3",
              children: students.slice(0, 4).map(s => /*#__PURE__*/_jsxDEV("div", {
                className: "spotlight-item",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "user-avatar",
                  children: s.name.charAt(0)
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "user-info",
                  children: [/*#__PURE__*/_jsxDEV("strong", {
                    children: s.name
                  }, void 0, false), /*#__PURE__*/_jsxDEV("small", {
                    children: [s.branch, " • Sem ", s.sem, " (", s.regNo, ")"]
                  }, void 0, true)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                  className: `badge status-${s.status.toLowerCase()}`,
                  children: s.status
                }, void 0, false)]
              }, s.regNo, true))
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), activeTab === 'students' && /*#__PURE__*/_jsxDEV("div", {
        className: "tab-fade-in",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section-bar glass-card",
          children: [/*#__PURE__*/_jsxDEV("h2", {
            children: "🎓 Student Registration & Verification Portal"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "btn-primary",
            onClick: () => setShowRegModal(true),
            children: "+ Register Student ID"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "search-bar glass-card mt-3",
          children: /*#__PURE__*/_jsxDEV("input", {
            type: "text",
            placeholder: "Search by student name or registration number...",
            value: studentSearch,
            onChange: e => setStudentSearch(e.target.value),
            className: "custom-input"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "student-grid mt-4",
          children: students.filter(s => s.name.toLowerCase().includes(studentSearch.toLowerCase()) || s.regNo.includes(studentSearch)).map(s => /*#__PURE__*/_jsxDEV("div", {
            className: "student-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "card-top",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "student-icon",
                children: "🎓"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("h3", {
                  children: s.name
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "reg-text",
                  children: ["Reg: ", s.regNo]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "student-details mt-3",
              children: [/*#__PURE__*/_jsxDEV("p", {
                children: [/*#__PURE__*/_jsxDEV("strong", {
                  children: "Branch:"
                }, void 0, false), " ", s.branch]
              }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
                children: [/*#__PURE__*/_jsxDEV("strong", {
                  children: "Semester:"
                }, void 0, false), " ", s.sem]
              }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
                children: [/*#__PURE__*/_jsxDEV("strong", {
                  children: "Attendance:"
                }, void 0, false), " ", /*#__PURE__*/_jsxDEV("span", {
                  className: "text-cyan",
                  children: s.attendance
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
                children: [/*#__PURE__*/_jsxDEV("strong", {
                  children: "Email:"
                }, void 0, false), " ", s.email || 'N/A']
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "card-actions mt-3",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: `badge status-${s.status.toLowerCase()}`,
                children: s.status
              }, void 0, false), s.status === 'PENDING_VERIFICATION' && /*#__PURE__*/_jsxDEV("button", {
                className: "btn-approve",
                onClick: () => handleApproveStudent(s.regNo),
                children: "Approve ID"
              }, void 0, false)]
            }, void 0, true)]
          }, s.regNo, true))
        }, void 0, false)]
      }, void 0, true), activeTab === 'syllabus' && /*#__PURE__*/_jsxDEV("div", {
        className: "tab-fade-in",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section-bar glass-card",
          children: [/*#__PURE__*/_jsxDEV("h2", {
            children: "📚 BEU Course & Subject Syllabus Finder"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "filters-row",
            children: [/*#__PURE__*/_jsxDEV("select", {
              value: selectedBranch,
              onChange: e => setSelectedBranch(e.target.value),
              className: "custom-select",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "CSE (IoT)",
                children: "CSE (IoT)"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "CSE",
                children: "Computer Science & Engg"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Civil",
                children: "Civil Engineering"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Mechanical",
                children: "Mechanical Engineering"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "EE",
                children: "Electrical Engineering"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("select", {
              value: selectedSem,
              onChange: e => setSelectedSem(e.target.value),
              className: "custom-select",
              children: [1, 2, 3, 4, 5, 6, 7, 8].map(s => /*#__PURE__*/_jsxDEV("option", {
                value: s,
                children: ["Semester ", s]
              }, s, true))
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "syllabus-grid mt-4",
          children: syllabusData.map(subject => /*#__PURE__*/_jsxDEV("div", {
            className: "syllabus-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "subject-header",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "code-badge",
                children: subject.code
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "credits-badge",
                children: [subject.credits, " Credits"]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
              children: subject.name
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "branch-tag",
              children: [subject.branch, " • Semester ", subject.sem]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "modules-list mt-3",
              children: [/*#__PURE__*/_jsxDEV("h4", {
                children: "Course Modules:"
              }, void 0, false), /*#__PURE__*/_jsxDEV("ul", {
                children: subject.modules.map((m, idx) => /*#__PURE__*/_jsxDEV("li", {
                  children: ["🔹 ", m]
                }, idx, true))
              }, void 0, false)]
            }, void 0, true)]
          }, subject.code, true))
        }, void 0, false)]
      }, void 0, true), activeTab === 'attendance' && /*#__PURE__*/_jsxDEV("div", {
        className: "tab-fade-in",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section-bar glass-card",
          children: /*#__PURE__*/_jsxDEV("h2", {
            children: "⏱️ Attendance Calculator & Eligibility Checker"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "calc-grid mt-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "glass-card p-4",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              children: "Inputs"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "form-group mt-3",
              children: [/*#__PURE__*/_jsxDEV("label", {
                children: "Classes Attended So Far:"
              }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                type: "number",
                value: attendedClasses,
                onChange: e => setAttendedClasses(Number(e.target.value)),
                className: "custom-input"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "form-group mt-3",
              children: [/*#__PURE__*/_jsxDEV("label", {
                children: "Total Classes Held:"
              }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                type: "number",
                value: totalClasses,
                onChange: e => setTotalClasses(Number(e.target.value)),
                className: "custom-input"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "form-group mt-3",
              children: [/*#__PURE__*/_jsxDEV("label", {
                children: "Required Target Percentage (%):"
              }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                type: "number",
                value: targetPercentage,
                onChange: e => setTargetPercentage(Number(e.target.value)),
                className: "custom-input"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "glass-card p-4 result-box",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              children: "Current Status"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "percentage-display mt-3",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: `big-percentage ${currentAttPercentage >= targetPercentage ? 'text-emerald' : 'text-amber'}`,
                children: [currentAttPercentage, "%"]
              }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
                className: "status-note",
                children: currentAttPercentage >= targetPercentage ? '✅ You fulfill the BEU exam attendance requirement!' : '⚠️ Warning: Below target attendance threshold!'
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "calculation-details mt-4",
              children: [/*#__PURE__*/_jsxDEV("h4", {
                children: "Target Action Required:"
              }, void 0, false), classesNeededForTarget() > 0 ? /*#__PURE__*/_jsxDEV("p", {
                className: "req-alert",
                children: ["You must attend ", /*#__PURE__*/_jsxDEV("strong", {
                  children: classesNeededForTarget()
                }, void 0, false), " consecutive upcoming classes to reach ", targetPercentage, "% attendance."]
              }, void 0, true) : /*#__PURE__*/_jsxDEV("p", {
                className: "safe-alert",
                children: ["You are in the safe zone! You can miss up to ", Math.floor((attendedClasses * 100 - targetPercentage * totalClasses) / targetPercentage), " classes and still remain above ", targetPercentage, "%."]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), activeTab === 'pyqs' && /*#__PURE__*/_jsxDEV("div", {
        className: "tab-fade-in",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section-bar glass-card",
          children: [/*#__PURE__*/_jsxDEV("h2", {
            children: "📝 Previous Year Question (PYQ) Repository"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "btn-primary",
            onClick: () => setShowPyqModal(true),
            children: "+ Upload PYQ Paper"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "pyq-grid mt-4",
          children: pyqs.map(p => /*#__PURE__*/_jsxDEV("div", {
            className: "pyq-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "pyq-icon",
              children: "📄"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "pyq-details",
              children: [/*#__PURE__*/_jsxDEV("h3", {
                children: p.subject
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                children: [p.branch, " • Sem ", p.sem, " • Year ", p.year]
              }, void 0, true), /*#__PURE__*/_jsxDEV("small", {
                children: ["Uploaded by: ", p.uploadedBy, " | Downloads: ", p.downloads]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
              className: "btn-download",
              onClick: () => alert(`Downloading ${p.subject} PYQ Paper...`),
              children: "Download PDF"
            }, void 0, false)]
          }, p.id, true))
        }, void 0, false)]
      }, void 0, true), activeTab === 'notices' && /*#__PURE__*/_jsxDEV("div", {
        className: "tab-fade-in",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "section-bar glass-card",
          children: [/*#__PURE__*/_jsxDEV("h2", {
            children: "📢 BCE Official Campus Notice Board"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "btn-primary",
            onClick: () => setShowNoticeModal(true),
            children: "+ Post Official Notice"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "notices-grid mt-4",
          children: notices.map(n => /*#__PURE__*/_jsxDEV("div", {
            className: "notice-card glass-card",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "notice-header",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: `badge priority-${n.priority.toLowerCase()}`,
                children: [n.priority, " PRIORITY"]
              }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                className: "notice-date",
                children: n.date
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
              children: n.title
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "notice-author",
              children: ["Issued by: ", /*#__PURE__*/_jsxDEV("strong", {
                children: n.author
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
              className: "notice-body mt-2",
              children: n.content
            }, void 0, false)]
          }, n.id, true))
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), showRegModal && /*#__PURE__*/_jsxDEV("div", {
      className: "modal-overlay",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "modal-content glass-card",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          children: "🎓 Register New Student ID"
        }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
          onSubmit: handleRegisterStudent,
          className: "mt-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "form-group",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Full Name:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              required: true,
              placeholder: "e.g. NAVNEET MISHRA",
              value: regForm.name,
              onChange: e => setRegForm({
                ...regForm,
                name: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Registration Number:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              required: true,
              placeholder: "e.g. 25155126904",
              value: regForm.regNo,
              onChange: e => setRegForm({
                ...regForm,
                regNo: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Branch:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
              value: regForm.branch,
              onChange: e => setRegForm({
                ...regForm,
                branch: e.target.value
              }),
              className: "custom-select",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "CSE (IoT)",
                children: "CSE (IoT)"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "CSE",
                children: "CSE"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Civil",
                children: "Civil"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Mechanical",
                children: "Mechanical"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "EE",
                children: "EE"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Email Address:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "email",
              placeholder: "student@bce.edu.in",
              value: regForm.email,
              onChange: e => setRegForm({
                ...regForm,
                email: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "modal-actions mt-4",
            children: [/*#__PURE__*/_jsxDEV("button", {
              type: "submit",
              className: "btn-primary",
              children: "Submit for Verification"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              type: "button",
              className: "btn-secondary",
              onClick: () => setShowRegModal(false),
              children: "Cancel"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), showNoticeModal && /*#__PURE__*/_jsxDEV("div", {
      className: "modal-overlay",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "modal-content glass-card",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          children: "📢 Post Official Notice"
        }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
          onSubmit: handlePostNotice,
          className: "mt-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "form-group",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Notice Title:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              required: true,
              placeholder: "e.g. Mid-Sem Exam Announcement",
              value: noticeForm.title,
              onChange: e => setNoticeForm({
                ...noticeForm,
                title: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Category:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
              value: noticeForm.category,
              onChange: e => setNoticeForm({
                ...noticeForm,
                category: e.target.value
              }),
              className: "custom-select",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "Exam",
                children: "Exam"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Academic",
                children: "Academic"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Event",
                children: "Event"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "General",
                children: "General"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Notice Content:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("textarea", {
              required: true,
              rows: "4",
              placeholder: "Enter notice details...",
              value: noticeForm.content,
              onChange: e => setNoticeForm({
                ...noticeForm,
                content: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "modal-actions mt-4",
            children: [/*#__PURE__*/_jsxDEV("button", {
              type: "submit",
              className: "btn-primary",
              children: "Post Notice"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              type: "button",
              className: "btn-secondary",
              onClick: () => setShowNoticeModal(false),
              children: "Cancel"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), showPyqModal && /*#__PURE__*/_jsxDEV("div", {
      className: "modal-overlay",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "modal-content glass-card",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          children: "📝 Add Previous Year Question Paper"
        }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
          onSubmit: handleUploadPyq,
          className: "mt-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "form-group",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Subject Name:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              required: true,
              placeholder: "e.g. Database Management Systems",
              value: pyqForm.subject,
              onChange: e => setPyqForm({
                ...pyqForm,
                subject: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Exam Year:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              required: true,
              placeholder: "2025",
              value: pyqForm.year,
              onChange: e => setPyqForm({
                ...pyqForm,
                year: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "form-group mt-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              children: "Your Name:"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              placeholder: "NAVNEET MISHRA",
              value: pyqForm.uploadedBy,
              onChange: e => setPyqForm({
                ...pyqForm,
                uploadedBy: e.target.value
              }),
              className: "custom-input"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "modal-actions mt-4",
            children: [/*#__PURE__*/_jsxDEV("button", {
              type: "submit",
              className: "btn-primary",
              children: "Add PYQ"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              type: "button",
              className: "btn-secondary",
              onClick: () => setShowPyqModal(false),
              children: "Cancel"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("footer", {
      className: "glass-panel main-footer",
      children: /*#__PURE__*/_jsxDEV("p", {
        children: "© 2026 BCE Bakhtiyapur Digital Connector • Bihar Engineering University (BEU) Portal"
      }, void 0, false)
    }, void 0, false)]
  }, void 0, true);
}

// Render React App into #react-app-root
ReactDOM.createRoot(document.getElementById('react-app-root')).render(/*#__PURE__*/_jsxDEV(App, {}, void 0, false));
