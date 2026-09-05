/* ==========================================================================
   BCE CONNECT — SYLLABUS, ELECTIVES & MARKS DATA REPOSITORY
   Official BEU & BCE Bakhtiyarpur Course Curriculum (Session 2024 Onwards)
   ========================================================================== */

const SYLLABUS_DATA = {
  
  // --------------------------------------------------------------------------
  // B. TECH CSE (IoT) — COMPLETE SEMESTER CURRICULUM
  // --------------------------------------------------------------------------
  
  "CSE-IoT_4": [
    {
      code: "155401",
      name: "Computer Organization and Architecture (COA)",
      credits: 4,
      faculty: "Mrs. Bhawana Singh (BS)",
      progress: 85,
      units: [
        { num: 1, title: "Functional Units & Machine Instructions", completed: true, topics: ["Basic operational concepts & Bus structures", "Instruction formats: Zero, One, Two & Three address", "Addressing modes: Direct, Indirect, Relative, Indexed", "RISC vs CISC Architecture", "ALU design & Signed complement arithmetic"] },
        { num: 2, title: "Memory System & Cache Organization", completed: true, topics: ["Memory hierarchy & RAM/ROM chips", "Cache Mapping: Direct, Associative, Set-Associative", "Virtual Memory & Page Replacement (FIFO, LRU)"] },
        { num: 3, title: "Pipelining & Vector Processing", completed: false, topics: ["Instruction Pipeline stages", "Structural, Data & Control hazards", "Operand Forwarding & Stalls"] }
      ]
    },
    {
      code: "155402",
      name: "Formal Language and Automata Theory (FLAT)",
      credits: 4,
      faculty: "Mrs. Priti Kumari (PK)",
      progress: 78,
      units: [
        { num: 1, title: "Finite Automata & Regular Expressions", completed: true, topics: ["DFA & NFA state transitions", "NFA with Epsilon to DFA conversion", "Minimization of DFA (Myhill-Nerode)", "Regular Expressions & Arden's Theorem"] },
        { num: 2, title: "Context-Free Grammars & Pushdown Automata", completed: true, topics: ["Context-Free Grammar & Parse Trees", "Chomsky Normal Form (CNF) & GNF", "Pushdown Automata (PDA) acceptance"] }
      ]
    },
    {
      code: "155403",
      name: "Design and Analysis of Algorithm (DAA)",
      credits: 4,
      faculty: "Mr. Shahab Saquib (SS)",
      progress: 80,
      units: [
        { num: 1, title: "Algorithm Analysis & Divide and Conquer", completed: true, topics: ["Asymptotic Notations & Master Theorem", "Quick Sort & Merge Sort complexity", "Strassen's Matrix Multiplication"] },
        { num: 2, title: "Dynamic Programming & Greedy Approach", completed: true, topics: ["0/1 Knapsack vs Fractional Knapsack", "Dijkstra's & Prim's / Kruskal's MST", "LCS & Matrix Chain Multiplication"] }
      ]
    },
    {
      code: "155404",
      name: "Database Management System (DBMS)",
      credits: 4,
      faculty: "Mr. Vikash Kumar (VK)",
      progress: 72,
      units: [
        { num: 1, title: "ER Modeling & Relational Algebra", completed: true, topics: ["3-Schema Architecture", "ER Diagrams & Relational Algebra", "SQL Queries (DDL, DML, Subqueries)"] },
        { num: 2, title: "Normalization & Concurrency Control", completed: true, topics: ["1NF, 2NF, 3NF & BCNF Normalization", "ACID Properties & 2-Phase Locking (2PL)"] }
      ]
    },
    {
      code: "155405",
      name: "Effective Technical Communication (ETC)",
      credits: 3,
      faculty: "Dr. Suraj Singh Sisodiya (SSS)",
      progress: 90,
      units: [
        { num: 1, title: "Technical Writing & Presentation", completed: true, topics: ["Project Reports & Business Letters", "Resume Building & Group Discussions"] }
      ]
    },
    {
      code: "155406",
      name: "Computer Network (CN)",
      credits: 4,
      faculty: "Dr. Rajeev Ranjan (RR)",
      progress: 76,
      units: [
        { num: 1, title: "OSI & TCP/IP Reference Models", completed: true, topics: ["Physical & Data Link Layers", "IPv4 CIDR Subnetting & Routing (RIP, OSPF)", "TCP 3-Way Handshake & Congestion Control"] }
      ]
    }
  ],

  "CSE-IoT_5": [
    {
      code: "IOT-501",
      name: "IoT Architecture & Design",
      credits: 3,
      faculty: "IoT Special Faculty",
      progress: 0,
      units: [
        { num: 1, title: "IoT Layers & Reference Models", completed: false, topics: ["Sensors, Actuators & Gateways", "MQTT, CoAP & HTTP Protocols", "Edge vs Cloud Computing"] }
      ]
    },
    {
      code: "IOT-502",
      name: "Artificial Intelligence",
      credits: 3,
      faculty: "AI Special Faculty",
      progress: 0,
      units: [
        { num: 1, title: "Search Algorithms & Knowledge Representation", completed: false, topics: ["A* Search, Minimax Algorithm", "Propositional & Predicate Logic", "Machine Learning Foundations"] }
      ]
    },
    {
      code: "IOT-503",
      name: "Sensors, Actuators and Signal Processing",
      credits: 3,
      faculty: "Embedded Systems Faculty",
      progress: 0,
      units: [
        { num: 1, title: "Sensor Interfacing & Signal Conditioning", completed: false, topics: ["Analog & Digital Sensors", "ADC/DAC Conversion", "Microcontroller Interfacing (Arduino/ESP32)"] }
      ]
    },
    {
      code: "IOT-504",
      name: "Introduction to Data Analytics and Visualization",
      credits: 3,
      faculty: "Data Science Faculty",
      progress: 0,
      units: [
        { num: 1, title: "Data Wrangling & Visual Analytics", completed: false, topics: ["Pandas, NumPy, Matplotlib & Seaborn", "Exploratory Data Analysis (EDA)"] }
      ]
    },
    {
      code: "IOT-505",
      name: "Program Elective Course - I",
      credits: 3,
      faculty: "Elective Coordinator",
      progress: 0,
      units: [
        { num: 1, title: "Elective Options (Choose 1)", completed: false, topics: ["• Cryptography and Network Security", "• High Performance Computing", "• Data Science for IoT", "• Mathematical Foundation for IoT", "• Software Engineering"] }
      ]
    },
    {
      code: "IOT-506",
      name: "Professional Practice, Law & Ethics",
      credits: 0,
      faculty: "Humanities Faculty",
      progress: 0,
      units: [
        { num: 1, title: "Cyber Laws & Intellectual Property Rights", completed: false, topics: ["IT Act 2000, Patents & Copyrights"] }
      ]
    }
  ],

  "CSE-IoT_6": [
    { code: "IOT-601", name: "Machine Learning", credits: 3, faculty: "ML Faculty", progress: 0, units: [{ num: 1, title: "Supervised & Unsupervised Learning", completed: false, topics: ["Linear Regression, SVM, Decision Trees, K-Means Clustering"] }] },
    { code: "IOT-602", name: "IoT Communication Protocols", credits: 3, faculty: "Networking Faculty", progress: 0, units: [{ num: 1, title: "Wireless Protocols", completed: false, topics: ["BLE, Zigbee, LoRaWAN, 6LoWPAN, 5G for IoT"] }] },
    { code: "IOT-603", name: "Introduction to Industry 4.0", credits: 3, faculty: "Automation Faculty", progress: 0, units: [{ num: 1, title: "Smart Factory & Industrial IoT (IIoT)", completed: false, topics: ["Cyber-Physical Systems, Digital Twins, Robotics"] }] },
    { code: "IOT-604", name: "Program Elective Course - II", credits: 3, faculty: "Elective Coordinator", progress: 0, units: [{ num: 1, title: "Elective Options (Choose 1)", completed: false, topics: ["• Compiler Design", "• Natural Language Processing", "• Application of IoT in Robotics", "• Augmented & Virtual Reality", "• Computer Vision"] }] },
    { code: "IOT-605", name: "Program Elective Course - III", credits: 3, faculty: "Elective Coordinator", progress: 0, units: [{ num: 1, title: "Elective Options (Choose 1)", completed: false, topics: ["• Ad-hoc & Sensor Networks", "• Deep Learning", "• Mobile App Development for IoT", "• Blockchain Technology", "• Quantum Computing"] }] },
    { code: "IOT-606", name: "Open Elective Course - I (Sales & Marketing)", credits: 3, faculty: "Management Faculty", progress: 0, units: [{ num: 1, title: "Sales & Marketing Principles", completed: false, topics: ["Market Research, Brand Positioning, Digital Marketing"] }] }
  ],

  "CSE-IoT_7": [
    { code: "IOT-701", name: "Cloud Computing", credits: 3, faculty: "Cloud Faculty", progress: 0, units: [{ num: 1, title: "Cloud Architectures & Virtualization", completed: false, topics: ["AWS, Azure, Docker, Kubernetes, Serverless Computing"] }] },
    { code: "IOT-702", name: "Privacy and Security in IoT", credits: 3, faculty: "Cyber Security Faculty", progress: 0, units: [{ num: 1, title: "IoT Security Frameworks", completed: false, topics: ["Threat Modeling, Lightweight Cryptography, Hardware Security"] }] },
    { code: "IOT-703", name: "Program Elective Course - IV", credits: 3, faculty: "Elective Coordinator", progress: 0, units: [{ num: 1, title: "Advanced Specialized Elective", completed: false, topics: ["Advanced Cyber Security / IoT Analytics"] }] },
    { code: "IOT-704", name: "Open Elective Course - II (Entrepreneurship)", credits: 3, faculty: "Startup Incubator", progress: 0, units: [{ num: 1, title: "Entrepreneurship & Venture Development", completed: false, topics: ["Business Models, Pitching, Funding & Startup Legalities"] }] }
  ],

  "CSE-IoT_8": [
    { code: "IOT-801", name: "Major Project - II", credits: 8, faculty: "Project Guide", progress: 0, units: [{ num: 1, title: "Full System Implementation & Thesis", completed: false, topics: ["IoT Prototype Development, Hardware Testing, Paper Publication"] }] },
    { code: "IOT-802", name: "Comprehensive Viva-Voce", credits: 2, faculty: "External Examiner Board", progress: 0, units: [{ num: 1, title: "End-Degree Oral Assessment", completed: false, topics: ["Complete B.Tech IoT Engineering Domain Assessment"] }] }
  ],

  // --------------------------------------------------------------------------
  // MECHANICAL ENGINEERING — SEMESTER 4
  // --------------------------------------------------------------------------
  "ME_4": [
    { code: "102401", name: "Applied Thermodynamics (AT)", credits: 4, faculty: "Mr. Sudarshan (SU)", progress: 75, units: [{ num: 1, title: "Steam Generators & Boilers", completed: true, topics: ["Rankine Cycle, Reheat & Regenerative Cycles", "Steam Turbines & Nozzles"] }] },
    { code: "102402", name: "Fluid Mechanics and Hydraulic Machines (FM&HM)", credits: 4, faculty: "Mr. Surendra Singh (SS)", progress: 80, units: [{ num: 1, title: "Fluid Kinematics & Turbines", completed: true, topics: ["Bernoulli's Equation, Pelton Wheel, Francis & Kaplan Turbines"] }] },
    { code: "102403", name: "Strength of Material (SOM)", credits: 4, faculty: "Mr. Niraj Kumar (NK)", progress: 78, units: [{ num: 1, title: "Stress, Strain & Deflection", completed: true, topics: ["Mohr's Circle, Bending & Shear Stress, Deflection of Beams"] }] },
    { code: "102404", name: "Kinematics of Machine (KOM)", credits: 4, faculty: "Dr. Vikash Kumar (VK)", progress: 70, units: [{ num: 1, title: "Mechanisms & Cams", completed: true, topics: ["4-Bar Chain, Velocity & Acceleration Diagrams, Cam Profiles"] }] },
    { code: "102405", name: "Project Management (PM)", credits: 3, faculty: "Mr. Rajeev Ranjan (RR)", progress: 85, units: [{ num: 1, title: "PERT & CPM Networks", completed: true, topics: ["Project Scheduling, Cost Estimation, Resource Leveling"] }] }
  ],

  // --------------------------------------------------------------------------
  // FIRE TECHNOLOGY & SAFETY — SEMESTER 4
  // --------------------------------------------------------------------------
  "FTS_4": [
    { code: "112401", name: "Heat and Mass Transfer (HMT)", credits: 4, faculty: "Dr. Nitesh Kumar (DNK)", progress: 80, units: [{ num: 1, title: "Conduction, Convection & Radiation", completed: true, topics: ["Fourier's Law, Heat Exchangers, Radiation Laws"] }] },
    { code: "112402", name: "Planning & Design of Fire Protection System (PDFPS)", credits: 4, faculty: "Dr. S. A. Suman (SAS)", progress: 85, units: [{ num: 1, title: "Fire Hydraulics & Sprinkler Design", completed: true, topics: ["Hydrant Systems, Automatic Sprinklers, Fire Pump Sizing"] }] },
    { code: "112403", name: "Electrical Technology and Safety (ETS)", credits: 4, faculty: "Mr. Raghvendra Kumar Jha (RKJ)", progress: 75, units: [{ num: 1, title: "Electrical Hazards & Earthing", completed: true, topics: ["Short Circuits, Hazardous Area Classification, Earthing"] }] },
    { code: "112404", name: "Smoke Management & Fire Alarm System (SMFAS)", credits: 4, faculty: "Dr. S. A. Suman (SAS)", progress: 82, units: [{ num: 1, title: "Detectors & Smoke Control", completed: true, topics: ["Ionization/Optical Detectors, Pressurization Systems"] }] },
    { code: "112405", name: "Engineering Fluid Mechanics & Pumping (EFM)", credits: 3, faculty: "Mr. Niraj Kumar (NK)", progress: 70, units: [{ num: 1, title: "Fluid Dynamics & Fire Pumps", completed: true, topics: ["Centrifugal & Positive Displacement Fire Pumps"] }] },
    { code: "112406", name: "Energy, Environment & Sustainability (EES)", credits: 3, faculty: "Dr. Anil Singh Yadav (ASY)", progress: 90, units: [{ num: 1, title: "Environmental Audits & EIA", completed: true, topics: ["Waste Management, Pollution Control, Carbon Credits"] }] }
  ],

  // --------------------------------------------------------------------------
  // CIVIL ENGINEERING — SEMESTER 4
  // --------------------------------------------------------------------------
  "CE_4": [
    { code: "101401", name: "Transportation Engineering (TE)", credits: 4, faculty: "Mr. Raman Kumar (RK)", progress: 82, units: [{ num: 1, title: "Highway Geometric Design", completed: true, topics: ["Stopping Sight Distance, Overtaking SSD, Pavement Materials"] }] },
    { code: "101402", name: "Building Planning & CAD (BPCAD)", credits: 4, faculty: "Mr. Rajesh Ranjan (RR)", progress: 88, units: [{ num: 1, title: "AutoCAD & Building Bye-Laws", completed: true, topics: ["Plan, Elevation & Sectional Views, FAR, Setbacks"] }] },
    { code: "101403", name: "Geotechnical Engineering-I (GE-I)", credits: 4, faculty: "Dr. Ankita Singh (AS)", progress: 75, units: [{ num: 1, title: "Soil Properties & Index Testing", completed: true, topics: ["Atterberg Limits, Permeability, Compaction & Consolidation"] }] },
    { code: "101404", name: "Hydraulic Engineering (HE)", credits: 4, faculty: "Mr. Hariom Shankar (HS)", progress: 78, units: [{ num: 1, title: "Open Channel Flow", completed: true, topics: ["Manning's Equation, Hydraulic Jump, Gradually Varied Flow"] }] },
    { code: "101405", name: "Structural Analysis (SA)", credits: 4, faculty: "Mrs. Kritika Kaushal (KK)", progress: 72, units: [{ num: 1, title: "Indeterminate Structures", completed: true, topics: ["Slope-Deflection Method, Moment Distribution Method, Arches"] }] },
    { code: "101406", name: "Engineering Geology (EG)", credits: 3, faculty: "Dr. Ravi Shankar (RS)", progress: 85, units: [{ num: 1, title: "Physical Geology & Structural Features", completed: true, topics: ["Faults, Folds, Joints, Landslides, Tunneling Geology"] }] },
    { code: "101407", name: "Civil Engineering - Societal & Global (CSGI)", credits: 3, faculty: "Ms. Vandana Anand (VA)", progress: 92, units: [{ num: 1, title: "Infrastructure & Sustainable Growth", completed: true, topics: ["Smart Cities, EIA, Green Building Rating Systems"] }] }
  ],

  // PYQ Repeated Topic Analytics
  topicAnalytics: [
    { topic: "DFA Minimization & NFA to DFA Conversion (FLAT 155402)", frequency: 95, yearCount: "5/5 Years", marks: "14 Marks" },
    { topic: "Direct / Set-Associative Cache Mapping (COA 155401)", frequency: 90, yearCount: "5/5 Years", marks: "14 Marks" },
    { topic: "Quick Sort vs Merge Sort Time Analysis (DAA 155403)", frequency: 88, yearCount: "5/5 Years", marks: "14 Marks" },
    { topic: "3NF vs BCNF Decomposition (DBMS 155404)", frequency: 85, yearCount: "4/5 Years", marks: "14 Marks" },
    { topic: "IPv4 Subnetting & CIDR Calculation (CN 155406)", frequency: 80, yearCount: "4/5 Years", marks: "7 Marks" }
  ],

  // BEU 4th Semester Official Study Material Links
  beuSyllabusDriveUrl: "https://drive.google.com/file/d/1Im01QOFAO9UBcHA3PeAot-eNB-vBGbeF/view",
  beuWhatsappGroupUrl: "https://chat.whatsapp.com/Bay3avk81WpGFKITkKTPzE",

  // Question Papers & Study Material Archive (Powered by BEU CSE 2024-28 & Edulogy Institute)
  pyqArchive: [
    {
      id: "PYQ-COA-4TH",
      subject: "Computer Organization & Architecture (COA)",
      code: "BEU-155401",
      year: 2024,
      author: "Edulogy / BEU CSE 2024-28",
      driveUrl: "https://drive.google.com/file/d/1hPqOUr3E56CkzqO6oEG-7ltayq4tR4mz/view",
      notesUrl: "https://drive.google.com/file/d/1vL3QPNG8ei91s7mz-h6u-IWZcmH4blCT/view",
      vods: [
        { title: "🎥 VOD-1 (Live Stream)", url: "https://www.youtube.com/live/lbK4yfTmDPU?si=ypAUzxSM2kDqWhO-" },
        { title: "🎥 VOD-2 (Live Stream)", url: "https://www.youtube.com/live/Jw4oHhLT25g?si=oQk-XJGXf7s5_Wsg" }
      ],
      previewQuestions: [
        "Q1. Calculate Tag, Line and Word bits for 128 MB RAM & 64 KB Cache (Direct Mapping). (14 Marks)",
        "Q2. Explain RISC vs CISC Architecture and 5-stage Pipelining Hazards in detail. (14 Marks)"
      ]
    },
    {
      id: "PYQ-FLAT-4TH",
      subject: "Formal Language & Automata Theory (FLAT)",
      code: "BEU-155402",
      year: 2024,
      author: "Edulogy / BEU CSE 2024-28",
      driveUrl: "https://drive.google.com/file/d/1bl0FLBjgaiDG23SOJxcW_Jo-KIPW7HQ6/view",
      notesUrl: "https://drive.google.com/file/d/1qJANL4HRPr3yOjoaYMI2kyyq_tPva9nw/view",
      vods: [
        { title: "🎥 VOD-1 (Live Stream)", url: "https://www.youtube.com/live/tGvJXfLeEoA?si=O49USsW3Fln6pT0z" },
        { title: "🎥 VOD-2 (Live Stream)", url: "https://www.youtube.com/live/SLX2yoWmniU?si=Uqv7WxP29EVtE45m" }
      ],
      previewQuestions: [
        "Q1. Construct a minimum state DFA equivalent to NFA with epsilon transitions. (7 Marks)",
        "Q2. Convert the grammar G into Chomsky Normal Form (CNF): S -> AB | a, A -> b. (14 Marks)"
      ]
    },
    {
      id: "PYQ-DAA-4TH",
      subject: "Design and Analysis of Algorithm (DAA)",
      code: "BEU-155403",
      year: 2024,
      author: "Edulogy / BEU CSE 2024-28",
      driveUrl: "https://drive.google.com/file/d/1v43y9VMLSwoHQtBbSloqWKj8-7CbscVn/view",
      notesUrl: null,
      vods: [],
      previewQuestions: [
        "Q1. Solve 0/1 Knapsack Problem using Dynamic Programming vs Fractional Knapsack (Greedy). (14 Marks)",
        "Q2. Apply Master's Theorem to find time complexity of T(n) = 2T(n/2) + n log n. (14 Marks)"
      ]
    },
    {
      id: "PYQ-DBMS-4TH",
      subject: "Database Management System (DBMS)",
      code: "BEU-155404",
      year: 2024,
      author: "Edulogy / BEU CSE 2024-28",
      driveUrl: "https://drive.google.com/file/d/1DjcSpdpWnuWUCx42AJN4c18fh3WqFYSj/view",
      notesUrl: "https://drive.google.com/file/d/16fdp7NTj2GYTIvd17E7rTwreLJJnRdfb/view",
      vods: [
        { title: "🎥 VOD-1 (Live Stream)", url: "https://www.youtube.com/live/Neg5-JY8IXQ?si=-nKYmfaeWOentBkO" },
        { title: "🎥 VOD-2 (Live Stream)", url: "https://www.youtube.com/live/ukxQ1D01sDk?si=uq-i9xMXUG80cCCr" }
      ],
      previewQuestions: [
        "Q1. Differentiate between 3NF and BCNF with functional dependency examples. (14 Marks)",
        "Q2. Explain ACID properties and 2-Phase Locking (2PL) Protocol for Concurrency Control. (14 Marks)"
      ]
    },
    {
      id: "PYQ-CN-4TH",
      subject: "Computer Network (CN)",
      code: "BEU-155406",
      year: 2024,
      author: "Edulogy / BEU CSE 2024-28",
      driveUrl: "https://drive.google.com/file/d/1W1OqBiHEwznZyQipRhCDX_JH6VBpTYk1/view",
      notesUrl: "https://drive.google.com/file/d/17U-9NugKbVs-jOrueg8AwF5qJWAwZByx/view",
      vods: [
        { title: "🎥 VOD (Full Stream)", url: "https://www.youtube.com/live/hWye_MznAXc?si=wp0GDY2QJPxsjYCF" }
      ],
      previewQuestions: [
        "Q1. Given IP address 192.168.10.0/26, calculate number of subnets and valid host IP range. (14 Marks)",
        "Q2. Explain TCP 3-Way Handshake and Sliding Window Flow Control mechanism. (14 Marks)"
      ]
    },
    {
      id: "PYQ-ETC-4TH",
      subject: "Effective Technical Communication (ETC)",
      code: "BEU-155405",
      year: 2024,
      author: "Edulogy / BEU CSE 2024-28",
      driveUrl: null,
      notesUrl: null,
      vods: [],
      previewQuestions: [
        "ℹ️ New Subject in BEU 2024 Curriculum. PYQs and notes will be uploaded soon!"
      ]
    }
  ],

  // Student Attendance Data Breakdown
  attendanceBreakdown: [
    { subject: "COA (155401)", attended: 24, conducted: 28, percent: 85.7, status: "Safe" },
    { subject: "FLAT (155402)", attended: 21, conducted: 26, percent: 80.8, status: "Safe" },
    { subject: "DAA (155403)", attended: 22, conducted: 25, percent: 88.0, status: "Safe" },
    { subject: "DBMS (155404)", attended: 19, conducted: 24, percent: 79.1, status: "Safe" },
    { subject: "ETC (155405)", attended: 18, conducted: 20, percent: 90.0, status: "Safe" },
    { subject: "CN (155406)", attended: 17, conducted: 23, percent: 73.9, status: "Warning" }
  ],

  // Exact Official BEU Marksheet Data for NAVNEET MISHRA (Reg No: 25155126904)
  studentProfile: {
    regNo: "25155126904",
    name: "NAVNEET MISHRA",
    fatherName: "RANJIT MISHRA",
    motherName: "RENU DEVI",
    college: "126 - BAKHTIYARPUR COLLEGE OF ENGINEERING, PATNA",
    course: "155 - Computer Science and Engineering (Internet of Things)",
    batch: "2024-2028",
    sem1Sgpa: 8.87,
    sem2Sgpa: 8.87,
    sem3Sgpa: 8.58,
    cgpa: 8.75,
    remarks: "PASS",
    collegeRank: 2,
    totalCollegeStudents: 240,
    branchRank: 1,
    totalBranchStudents: 60,
    beuStateRank: 32,
    totalBeuStudents: 4500,
    
    // Theory Subjects
    theoryMarks: [
      { code: "155301", name: "Digital Electronics", ese: 49, ia: 23, total: 72, grade: "B", credit: 3 },
      { code: "155302", name: "Data Structure and Algorithms", ese: 56, ia: 16, total: 72, grade: "B", credit: 3 },
      { code: "155303", name: "Object Oriented Programming using JAVA", ese: 54, ia: 25, total: 79, grade: "B", credit: 3 },
      { code: "155304", name: "Discrete Mathematics and Graph Theory", ese: 52, ia: 24, total: 76, grade: "B", credit: 4 },
      { code: "155305", name: "Operating System", ese: 52, ia: 19, total: 71, grade: "B", credit: 3 },
      { code: "155306", name: "Universal Human Values", ese: 62, ia: 30, total: 92, grade: "A+", credit: 3 },
      { code: "155308", name: "Internship-I", ese: 63, ia: 25, total: 88, grade: "A", credit: 2 }
    ],

    // Practical / Lab Subjects
    practicalMarks: [
      { code: "155301P", name: "Digital Electronics Lab", ese: 29, ia: 16, total: 45, grade: "A+", credit: 1 },
      { code: "155302P", name: "Data Structure and Algorithms Lab", ese: 28, ia: 15, total: 43, grade: "A", credit: 1 },
      { code: "155303P", name: "Object Oriented Programming using JAVA Lab", ese: 28, ia: 20, total: 48, grade: "A+", credit: 1 },
      { code: "155305P", name: "Operating System Lab", ese: 25, ia: 16, total: 41, grade: "A", credit: 1 }
    ]
  },

  // Official Sem 3 CSE-IoT Branch Leaderboard (BEU 2025 Exam - B.Tech 3rd Semester)
  studentLeaderboard: [
    { rank: 1, regNo: "25155126904", name: "NAVNEET MISHRA", sgpa: 8.58, cgpa: 8.75, badge: "GOLD MEDALIST 🥇", status: "BRANCH TOPPER" },
    { rank: 2, regNo: "24155126050", name: "ABHISHEK KUMAR", sgpa: 8.64, cgpa: 8.67, badge: "TOP 5 ⭐", status: "PASS" },
    { rank: 3, regNo: "25155126902", name: "ANKIT SHARMA", sgpa: 8.50, cgpa: 8.65, badge: "SILVER 🥈", status: "PASS" },
    { rank: 4, regNo: "25155126915", name: "PRIYA KUMARI", sgpa: 8.44, cgpa: 8.58, badge: "BRONZE 🥉", status: "PASS" },
    { rank: 5, regNo: "25155126920", name: "RAHUL VERMA", sgpa: 8.38, cgpa: 8.50, badge: "TOP 5 ⭐", status: "PASS" },
    { rank: 6, regNo: "25155126933", name: "SHREYA RAJ", sgpa: 8.30, cgpa: 8.42, badge: "DISTINCTION", status: "PASS" },
    { rank: 7, regNo: "25155126941", name: "ADITYA PRAKASH", sgpa: 8.22, cgpa: 8.35, badge: "DISTINCTION", status: "PASS" },
    { rank: 8, regNo: "25155126955", name: "KAVYA SINGH", sgpa: 8.15, cgpa: 8.28, badge: "DISTINCTION", status: "PASS" },
    { rank: 9, regNo: "25155126912", name: "VIVEK KUMAR", sgpa: 8.10, cgpa: 8.22, badge: "FIRST CLASS", status: "PASS" },
    { rank: 10, regNo: "25155126928", name: "SNEHA KUMARI", sgpa: 8.05, cgpa: 8.18, badge: "FIRST CLASS", status: "PASS" }
  ]
};
