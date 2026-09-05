/* ==========================================================================
   BCE CONNECT — BAKHTIYARPUR COLLEGE OF ENGINEERING DATA REPOSITORY
   Official BCE Dataset (Updated with Real Timetables & Full Faculty Directory)
   ========================================================================== */

const BCE_DATA = {
  collegeInfo: {
    name: "Bakhtiyarpur College of Engineering",
    shortName: "BCE Bakhtiyarpur",
    tagline: "Government Engineering College, Bihar (Est. 2016)",
    affiliation: "Bihar Engineering University (BEU), Patna & DSTTE Bihar",
    location: "Champapur, Bakhtiyarpur, Patna, Bihar - 803212",
    logoUrl: "https://bcebakhtiyarpur.ac.in/wp-content/uploads/2024/05/logo-bced-f.png",
    administration: {
      principal: "Dr. Amrita Sinha (Principal, BCE Bakhtiyarpur)",
      secretaryDSTTE: "Sri Lokesh Kumar Singh (I.A.S., Secretary, DSTTE Bihar)",
      directorDSTTE: "Mr. Ahmad Mahmood (Director, DSTTE Bihar)"
    },
    contact: {
      phone: "+91 6132-222001",
      email: "principal@bcebakhtiyarpur.ac.in",
      website: "https://bcebakhtiyarpur.ac.in"
    }
  },

  // BCE Departments
  departments: [
    {
      code: "CSE-IoT",
      name: "CSE (IoT & Cyber Security)",
      hod: "Head of Dept. (CSE & CSE-IoT)",
      intake: 60,
      description: "Specialized branch covering COA, FLAT, DAA, DBMS, IoT Architecture, AI, and Cyber Security.",
      icon: "fa-network-wired"
    },
    {
      code: "CSE",
      name: "Computer Science & Engineering",
      hod: "Prof. S. K. Singh",
      intake: 60,
      description: "Focusing on AI, Data Structures, Web Systems, Cloud Computing, and Machine Learning.",
      icon: "fa-laptop-code"
    },
    {
      code: "ME",
      name: "Mechanical Engineering",
      hod: "Dr. P. K. Roy",
      intake: 60,
      description: "Applied Thermodynamics, Fluid Mechanics, Strength of Materials, Kinematics of Machines & Project Management.",
      icon: "fa-gears"
    },
    {
      code: "CE",
      name: "Civil Engineering",
      hod: "Prof. M. K. Sharma",
      intake: 60,
      description: "Transportation Engineering, BPCAD, Geotechnical Engineering, Structural Analysis & Engineering Geology.",
      icon: "fa-building"
    },
    {
      code: "FTS",
      name: "Fire Tech & Safety Engineering",
      hod: "Dr. S. A. Suman",
      intake: 30,
      description: "Heat & Mass Transfer, Fire Protection Systems, Electrical Safety, Smoke Management & EFM.",
      icon: "fa-fire-extinguisher"
    },
    {
      code: "EEE",
      name: "Electrical & Electronics Engineering",
      hod: "Prof. Alok Kumar",
      intake: 60,
      description: "Power Electronics, Control Systems, Circuit Theory, Microprocessors & Renewable Energy.",
      icon: "fa-bolt"
    }
  ],

  // Authentic Faculty Directory across ALL Departments (As per Official BCE Notice Sheets)
  faculty: [
    // --- CSE / CSE-IoT Faculty ---
    { name: "Mrs. Bhawana Singh (BS)", dept: "CSE-IoT", designation: "Assistant Professor", cabin: "Room 109, COA Lab", email: "bhawana.singh@bcebakhtiyarpur.ac.in", subjects: ["155401: Computer Organization and Architecture (COA)", "155401P: COA Lab"] },
    { name: "Mrs. Priti Kumari (PK)", dept: "CSE-IoT", designation: "Assistant Professor", cabin: "Room 217, Academic Block", email: "priti.kumari@bcebakhtiyarpur.ac.in", subjects: ["155402: Formal Language and Automata Theory (FLAT)"] },
    { name: "Mr. Shahab Saquib (SS)", dept: "CSE-IoT", designation: "Assistant Professor & Time Table Coordinator", cabin: "Room 231, DAA Lab", email: "shahab.saquib@bcebakhtiyarpur.ac.in", subjects: ["155403: Design and Analysis of Algorithm (DAA)", "155403P: DAA Lab"] },
    { name: "Mr. Vikash Kumar (VK)", dept: "CSE-IoT", designation: "Assistant Professor", cabin: "Room 231, DBMS Lab", email: "vikash.kumar@bcebakhtiyarpur.ac.in", subjects: ["155404: Database Management System (DBMS)", "155404P: DBMS Lab"] },
    { name: "Dr. Suraj Singh Sisodiya (SSS)", dept: "CSE-IoT", designation: "Assistant Professor (Humanities)", cabin: "Room 304, Humanities Block", email: "suraj.sisodiya@bcebakhtiyarpur.ac.in", subjects: ["155405: Effective Technical Communication (ETC)"] },
    { name: "Dr. Rajeev Ranjan (RR)", dept: "CSE-IoT", designation: "Assistant Professor", cabin: "Room 109, Network Lab", email: "rajeev.ranjan@bcebakhtiyarpur.ac.in", subjects: ["155406: Computer Network (CN)", "155406P: CN Lab"] },

    // --- Mechanical Engineering Faculty ---
    { name: "Mr. Sudarshan (SU)", dept: "ME", designation: "Departmental Time Table Coordinator", cabin: "Room 216, Mechanical Block", email: "sudarshan@bcebakhtiyarpur.ac.in", subjects: ["102401: Applied Thermodynamics (AT)"] },
    { name: "Mr. Surendra Singh (SS)", dept: "ME", designation: "Assistant Professor", cabin: "Room 216, FM Lab", email: "surendra.singh@bcebakhtiyarpur.ac.in", subjects: ["102402: Fluid Mechanics and Hydraulic Machines (FM&HM)", "102402P: FM&HM Lab"] },
    { name: "Mr. Niraj Kumar (NK)", dept: "ME", designation: "Assistant Professor", cabin: "Room G-06, SOM Lab", email: "niraj.kumar@bcebakhtiyarpur.ac.in", subjects: ["102403: Strength of Material (SOM)", "102403P: SOM Lab"] },
    { name: "Dr. Vikash Kumar (VK)", dept: "ME", designation: "Assistant Professor", cabin: "Room 218, KOM Lab", email: "vikash.me@bcebakhtiyarpur.ac.in", subjects: ["102404: Kinematics of Machine (KOM)", "102404P: KOM Lab"] },
    { name: "Mr. Rajeev Ranjan (RR)", dept: "ME", designation: "Assistant Professor", cabin: "Room 216, Project Cell", email: "rajeev.me@bcebakhtiyarpur.ac.in", subjects: ["102405: Project Management (PM)"] },

    // --- Fire Technology & Safety Faculty ---
    { name: "Dr. Nitesh Kumar (DNK)", dept: "FTS", designation: "Assistant Professor", cabin: "Room 202, Safety Block", email: "nitesh.kumar@bcebakhtiyarpur.ac.in", subjects: ["112401: Heat and Mass Transfer (HMT)"] },
    { name: "Dr. S. A. Suman (SAS)", dept: "FTS", designation: "Associate Professor & HOD", cabin: "Room 202, HOD Office", email: "sa.suman@bcebakhtiyarpur.ac.in", subjects: ["112402: Planning and Design Of Fire Protection System (PDFPS)", "112404: Smoke Management and Fire Alarm System (SMFAS)"] },
    { name: "Mr. Raghvendra Kumar Jha (RKJ)", dept: "FTS", designation: "Assistant Professor", cabin: "Room 202, ETS Lab", email: "raghvendra.jha@bcebakhtiyarpur.ac.in", subjects: ["112403: Electrical Technology and Safety (ETS)", "112403P: ETS Lab"] },
    { name: "Dr. Anil Singh Yadav (ASY)", dept: "FTS", designation: "Assistant Professor", cabin: "Room 202, Envt Cell", email: "anil.yadav@bcebakhtiyarpur.ac.in", subjects: ["112406: Energy, Environment and Sustainability (EES)"] },

    // --- Civil Engineering Faculty ---
    { name: "Mr. Raman Kumar (RK)", dept: "CE", designation: "Assistant Professor", cabin: "Room 210, TE Lab", email: "raman.kumar@bcebakhtiyarpur.ac.in", subjects: ["101401: Transportation Engineering (TE)", "101401P: TE Lab"] },
    { name: "Mr. Rajesh Ranjan (RR)", dept: "CE", designation: "Assistant Professor", cabin: "Room 225, BPCAD Lab", email: "rajesh.ranjan@bcebakhtiyarpur.ac.in", subjects: ["101402: Building Planning & CAD (BPCAD)", "101402P: BPCAD Lab"] },
    { name: "Dr. Ankita Singh (AS)", dept: "CE", designation: "Assistant Professor", cabin: "Room G-13, GE Lab", email: "ankita.singh@bcebakhtiyarpur.ac.in", subjects: ["101403: Geotechnical Engineering-I (GE-I)", "101403P: GE Lab"] },
    { name: "Mr. Hariom Shankar (HS)", dept: "CE", designation: "Assistant Professor", cabin: "Room G7-A, HE Lab", email: "hariom.shankar@bcebakhtiyarpur.ac.in", subjects: ["101404: Hydraulic Engineering (HE)", "101404P: HE Lab"] },
    { name: "Mrs. Kritika Kaushal (KK)", dept: "CE", designation: "Assistant Professor", cabin: "Room 210, SA Cell", email: "kritika.kaushal@bcebakhtiyarpur.ac.in", subjects: ["101405: Structural Analysis (SA)"] },
    { name: "Dr. Ravi Shankar (RS)", dept: "CE", designation: "Assistant Professor", cabin: "Room 119, EG Lab", email: "ravi.shankar@bcebakhtiyarpur.ac.in", subjects: ["101406: Engineering Geology (EG)", "101406P: EG Lab"] },
    { name: "Ms. Vandana Anand (VA)", dept: "CE", designation: "Assistant Professor", cabin: "Room 210, Humanities Cell", email: "vandana.anand@bcebakhtiyarpur.ac.in", subjects: ["101407: Civil Engineering - Societal & Global (CSGI)"] }
  ],

  // Live Official BCE Notices (Extracted from https://bcebakhtiyarpur.ac.in/category/notices/)
  notices: [
    {
      id: "NTC-2026-112",
      title: "Notice regarding BEU 4th & 6th Sem Mid-Term Exam Centre & Seating Arrangement",
      category: "Exams",
      date: "06 Sep 2026",
      urgent: true,
      summary: "Official exam hall allotment for 4th & 6th semester Mid-Sem examinations published. All students check roll numbers and room seating plan."
    },
    {
      id: "NTC-2026-111",
      title: "Notice regarding TCS NQT & Digital Campus Recruitment Drive Registration 2026",
      category: "Placement",
      date: "05 Sep 2026",
      urgent: true,
      summary: "TPO Cell Alert: Final registration deadline extended for TCS NQT & Digital recruitment drive for 2026/2027 batch. Complete registration on TCS NextStep portal."
    },
    {
      id: "NTC-2026-110",
      title: "Notice regarding Mandatory 75% Attendance Verification for BEU Form Filling",
      category: "Academic",
      date: "03 Sep 2026",
      urgent: true,
      summary: "Notice Ref: BCE_Acad_26_512 (Date 03/09/2026). Attendance shortage lists displayed on department notice boards. Minimum 75% attendance mandatory."
    },
    {
      id: "NTC-2026-109",
      title: "Notice regarding BEU End-Semester Examination Form Filling Timetable",
      category: "BEU Exam",
      date: "01 Sep 2026",
      urgent: false,
      summary: "Online exam form submission link for Bihar Engineering University B.Tech 4th & 6th Sem End Semester Examinations will open from Sept 10."
    },
    {
      id: "NTC-2026-108",
      title: "Notice regarding boys hostel 2 allotment",
      category: "Hostel",
      date: "29 Aug 2026",
      urgent: true,
      summary: "Official room allotment list for Boy's Hostel 2 published. (Ref: Adobe Scan Aug 29, 2026). Allotted students report to Warden Office."
    },
    {
      id: "NTC-2026-107",
      title: "Notice regarding admit card distribution of 1st and 8th semester supplementary exam",
      category: "BEU Exam",
      date: "22 Aug 2026",
      urgent: true,
      summary: "Admit cards for BEU B.Tech 1st and 8th semester supplementary examinations are available at Examination Counter."
    },
    {
      id: "NTC-2026-106",
      title: "Notice regarding change of mid semester exam time of 24th August, semester 4th and 6th",
      category: "Exams",
      date: "22 Aug 2026",
      urgent: true,
      summary: "Notice Ref: BCE_Exam_26_446 (Date 22/08/2026). Mid-term examination schedule revised for 4th and 6th semester B.Tech."
    },
    {
      id: "NTC-2026-105",
      title: "Notice regarding Supplementary exam form filling of 5th semester",
      category: "Academic",
      date: "21 Aug 2026",
      urgent: false,
      summary: "Form filling for BEU B.Tech 5th semester supplementary examination is active on student BEU portal."
    },
    {
      id: "NTC-2026-104",
      title: "Notice regarding Girls hostel 1 allotment",
      category: "Hostel",
      date: "14 Aug 2026",
      urgent: false,
      summary: "Official room allotment list for Girl's Hostel 1 released (Ref: Adobe Scan Aug 14, 2026)."
    },
    {
      id: "NTC-2026-103",
      title: "Notice regarding Revised mid term time table of 4th semester and 6th semester",
      category: "Academic Routine",
      date: "12 Aug 2026",
      urgent: true,
      summary: "Revised Mid-Term Programme released for 6th Semester (2023 Batch) & 4th Semester (2024 Batch)."
    },
    {
      id: "NTC-2026-102",
      title: "Notice regarding class suspension of 3rd semester and classroom change of 1st semester",
      category: "Academic",
      date: "12 Aug 2026",
      urgent: false,
      summary: "Notice Ref: BCE_Exam_26_436 (Date 11/08/2026). Temporary classroom reassignment for 1st Semester."
    },
    {
      id: "NTC-2026-101",
      title: "Notice regarding Girls hostel 1 allotment batch 2026-30 and 2026-29",
      category: "Hostel",
      date: "11 Aug 2026",
      urgent: false,
      summary: "Room allotment published for new batch 2026-30 and lateral entry batch 2026-29."
    }
  ],

  // Official Timetables Datasets for ALL 4 Departments
  weeklyTimetables: {
    "CSE-IoT": {
      dept: "Computer Science and Engineering (IoT)",
      sem: "IV Semester",
      room: "Room No. 217",
      batch: "Batch: 2024-28",
      effectiveFrom: "18/05/2026",
      days: {
        Monday: [
          { subject: "FLAT (155402)", faculty: "Mrs. Priti Kumari (PK)" },
          { subject: "DAA (155403)", faculty: "Mr. Shahab Saquib (SS)" },
          { subject: "FLAT (155402)", faculty: "Mrs. Priti Kumari (PK)" },
          { subject: "ETC (155405)", faculty: "Dr. Suraj Singh Sisodiya (SSS)" },
          { subject: "Spoken Tutorial / CISCO", faculty: "Lab Instructor" },
          { subject: "Spoken Tutorial / CISCO", faculty: "Lab Instructor" }
        ],
        Tuesday: [
          { subject: "DBMS (155404)", faculty: "Mr. Vikash Kumar (VK)" },
          { subject: "CN (155406)", faculty: "Dr. Rajeev Ranjan (RR)" },
          { subject: "COA (155401)", faculty: "Mrs. Bhawana Singh (BS)" },
          { subject: "DAA LAB G1 [231] / COA LAB G2 [109]", faculty: "SS / BS" },
          { subject: "DAA LAB G1 [231] / COA LAB G2 [109]", faculty: "SS / BS" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Wednesday: [
          { subject: "DBMS LAB G2 [231] / COA LAB G1 [109]", faculty: "VK / BS" },
          { subject: "DBMS LAB G2 [231] / COA LAB G1 [109]", faculty: "VK / BS" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "FLAT (T) Tutorial", faculty: "Mrs. Priti Kumari (PK)" },
          { subject: "DAA (155403)", faculty: "Mr. Shahab Saquib (SS)" },
          { subject: "NPTEL / CISCO Session", faculty: "Coordinator" }
        ],
        Thursday: [
          { subject: "DBMS (155404)", faculty: "Mr. Vikash Kumar (VK)" },
          { subject: "CN (155406)", faculty: "Dr. Rajeev Ranjan (RR)" },
          { subject: "COA (155401)", faculty: "Mrs. Bhawana Singh (BS)" },
          { subject: "DBMS LAB G1 [231] / CN LAB G2 [109]", faculty: "VK / RR" },
          { subject: "DBMS LAB G1 [231] / CN LAB G2 [109]", faculty: "VK / RR" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Friday: [
          { subject: "DAA (155403)", faculty: "Mr. Shahab Saquib (SS)" },
          { subject: "COA (155401)", faculty: "Mrs. Bhawana Singh (BS)" },
          { subject: "DBMS (155404)", faculty: "Mr. Vikash Kumar (VK)" },
          { subject: "CN (155406)", faculty: "Dr. Rajeev Ranjan (RR)" },
          { subject: "ETC (155405)", faculty: "Dr. Suraj Singh Sisodiya (SSS)" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Saturday: [
          { subject: "FLAT (155402)", faculty: "Mrs. Priti Kumari (PK)" },
          { subject: "DAA LAB G2 [231] / CN LAB G1 [109]", faculty: "SS / RR" },
          { subject: "DAA LAB G2 [231] / CN LAB G1 [109]", faculty: "SS / RR" },
          { subject: "ETC (155405)", faculty: "Dr. Suraj Singh Sisodiya (SSS)" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "Mentorship", faculty: "Faculty Advisor" }
        ]
      }
    },

    "ME": {
      dept: "Mechanical Engineering",
      sem: "IV Semester",
      room: "Room No. 216",
      batch: "Batch: 2024-28",
      effectiveFrom: "18/05/2026",
      days: {
        Monday: [
          { subject: "KOM (102404)", faculty: "Dr. Vikash Kumar (VK)" },
          { subject: "FM & HM (102402)", faculty: "Mr. Surendra Singh (SS)" },
          { subject: "AT (102401)", faculty: "Mr. Sudarshan (SU)" },
          { subject: "FM & HM (T)", faculty: "Mr. Surendra Singh (SS)" },
          { subject: "Library Hour", faculty: "Librarian" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Tuesday: [
          { subject: "AT (102401)", faculty: "Mr. Sudarshan (SU)" },
          { subject: "SOM (102403)", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "PM (102405)", faculty: "Mr. Rajeev Ranjan (RR)" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "NPTEL Session", faculty: "Coordinator" }
        ],
        Wednesday: [
          { subject: "SOM (102403)", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "FM & HM (102402)", faculty: "Mr. Surendra Singh (SS)" },
          { subject: "KOM (102404)", faculty: "Dr. Vikash Kumar (VK)" },
          { subject: "KOM LAB-I [218] (VK) / SOM LAB-II [G-06] (NK)", faculty: "VK / NK" },
          { subject: "KOM LAB-I [218] (VK) / SOM LAB-II [G-06] (NK)", faculty: "VK / NK" },
          { subject: "NPTEL Session", faculty: "Coordinator" }
        ],
        Thursday: [
          { subject: "PM (102405)", faculty: "Mr. Rajeev Ranjan (RR)" },
          { subject: "KOM (102404)", faculty: "Dr. Vikash Kumar (VK)" },
          { subject: "AT (102401)", faculty: "Mr. Sudarshan (SU)" },
          { subject: "FM&HM LAB-I [G-04] (SS) / KOM LAB-II [218] (VK)", faculty: "SS / VK" },
          { subject: "FM&HM LAB-I [G-04] (SS) / KOM LAB-II [218] (VK)", faculty: "SS / VK" },
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" }
        ],
        Friday: [
          { subject: "FM & HM (102402)", faculty: "Mr. Surendra Singh (SS)" },
          { subject: "PM (102405)", faculty: "Mr. Rajeev Ranjan (RR)" },
          { subject: "SOM (T) Tutorial", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "AT (T) Tutorial", faculty: "Mr. Sudarshan (SU)" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "NPTEL Session", faculty: "Coordinator" }
        ],
        Saturday: [
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" },
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" },
          { subject: "SOM (102403)", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "SOM LAB-I [G-06] (NK) / FM&HM LAB-II [G-04] (SS)", faculty: "NK / SS" },
          { subject: "SOM LAB-I [G-06] (NK) / FM&HM LAB-II [G-04] (SS)", faculty: "NK / SS" },
          { subject: "Library Hour", faculty: "Librarian" }
        ]
      }
    },

    "FTS": {
      dept: "Fire Technology and Safety",
      sem: "IV Semester",
      room: "Room No. 202",
      batch: "Batch: 2024-28",
      effectiveFrom: "18/05/2026",
      days: {
        Monday: [
          { subject: "SMFAS (112404)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "PDFPS (112402)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "ETS (112403)", faculty: "Mr. Raghvendra Kumar Jha (RKJ)" },
          { subject: "PDFPS (112402)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "SMFAS (112404)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "EES (112406)", faculty: "Dr. Anil Singh Yadav (ASY)" }
        ],
        Tuesday: [
          { subject: "ETS (112403)", faculty: "Mr. Raghvendra Kumar Jha (RKJ)" },
          { subject: "HMT (112401)", faculty: "Dr. Nitesh Kumar (DNK)" },
          { subject: "PDFPS (112402)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "SMFAS (112404)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "PDFPS (T) Tutorial", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "EES (112406)", faculty: "Dr. Anil Singh Yadav (ASY)" }
        ],
        Wednesday: [
          { subject: "HMT (112401)", faculty: "Dr. Nitesh Kumar (DNK)" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "EFM & PM (112405)", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "SMFAS LAB (112404P)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "SMFAS LAB (112404P)", faculty: "Dr. S. A. Suman (SAS)" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Thursday: [
          { subject: "EFM & PM (112405)", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "HMT (112401)", faculty: "Dr. Nitesh Kumar (DNK)" },
          { subject: "ETS (112403)", faculty: "Mr. Raghvendra Kumar Jha (RKJ)" },
          { subject: "ETS LAB (112403P)", faculty: "Mr. Raghvendra Kumar Jha (RKJ)" },
          { subject: "ETS LAB (112403P)", faculty: "Mr. Raghvendra Kumar Jha (RKJ)" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Friday: [
          { subject: "EES (112406)", faculty: "Dr. Anil Singh Yadav (ASY)" },
          { subject: "EFM & PM (112405)", faculty: "Mr. Niraj Kumar (NK)" },
          { subject: "HMT (T) Tutorial", faculty: "Dr. Nitesh Kumar (DNK)" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "Mentorship", faculty: "Faculty Advisor" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Saturday: [
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" },
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" },
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" },
          { subject: "NPTEL Session", faculty: "Coordinator" },
          { subject: "NPTEL Session", faculty: "Coordinator" },
          { subject: "NPTEL Session", faculty: "Coordinator" }
        ]
      }
    },

    "CE": {
      dept: "Civil Engineering",
      sem: "IV Semester",
      room: "Room No. 210",
      batch: "Batch: 2024-28",
      effectiveFrom: "18/05/2026",
      days: {
        Monday: [
          { subject: "BPCAD (101402)", faculty: "Mr. Rajesh Ranjan (RR)" },
          { subject: "CSGI (101407)", faculty: "Ms. Vandana Anand (VA)" },
          { subject: "HE (101404)", faculty: "Mr. Hariom Shankar (HS)" },
          { subject: "TE (101401)", faculty: "Mr. Raman Kumar (RK)" },
          { subject: "EG LAB [119] (G1) / TE LAB [G-02] (G2)", faculty: "RS / RK" },
          { subject: "EG LAB [119] (G1) / TE LAB [G-02] (G2)", faculty: "RS / RK" }
        ],
        Tuesday: [
          { subject: "HE (101404)", faculty: "Mr. Hariom Shankar (HS)" },
          { subject: "EG LAB [119] (G2) / TE LAB [G-02] (G1)", faculty: "RS / RK" },
          { subject: "EG LAB [119] (G2) / TE LAB [G-02] (G1)", faculty: "RS / RK" },
          { subject: "CSGI (101407)", faculty: "Ms. Vandana Anand (VA)" },
          { subject: "EG (101406)", faculty: "Dr. Ravi Shankar (RS)" },
          { subject: "Spoken Tutorial", faculty: "Lab Instructor" }
        ],
        Wednesday: [
          { subject: "SA (101405)", faculty: "Mrs. Kritika Kaushal (KK)" },
          { subject: "GE-I (101403)", faculty: "Dr. Ankita Singh (AS)" },
          { subject: "BPCAD (101402)", faculty: "Mr. Rajesh Ranjan (RR)" },
          { subject: "TE (101401)", faculty: "Mr. Raman Kumar (RK)" },
          { subject: "GE LAB [G-13] (G1) / HE LAB [G7-A] (G2)", faculty: "AS / HS" },
          { subject: "GE LAB [G-13] (G1) / HE LAB [G7-A] (G2)", faculty: "AS / HS" }
        ],
        Thursday: [
          { subject: "GE-I (101403)", faculty: "Dr. Ankita Singh (AS)" },
          { subject: "GE LAB [G-13] (G2) / HE LAB [G7-A] (G1)", faculty: "AS / HS" },
          { subject: "GE LAB [G-13] (G2) / HE LAB [G7-A] (G1)", faculty: "AS / HS" },
          { subject: "HE (101404)", faculty: "Mr. Hariom Shankar (HS)" },
          { subject: "SA (101405)", faculty: "Mrs. Kritika Kaushal (KK)" },
          { subject: "EG (101406)", faculty: "Dr. Ravi Shankar (RS)" }
        ],
        Friday: [
          { subject: "CSGI (101407)", faculty: "Ms. Vandana Anand (VA)" },
          { subject: "BPCAD (101402)", faculty: "Mr. Rajesh Ranjan (RR)" },
          { subject: "GE-I (101403)", faculty: "Dr. Ankita Singh (AS)" },
          { subject: "BPCAD LAB [225] (G1) / NPTEL (G2)", faculty: "RR / Coordinator" },
          { subject: "BPCAD LAB [225] (G1) / NPTEL (G2)", faculty: "RR / Coordinator" },
          { subject: "Library Hour", faculty: "Librarian" }
        ],
        Saturday: [
          { subject: "TE (101401)", faculty: "Mr. Raman Kumar (RK)" },
          { subject: "EG (101406)", faculty: "Dr. Ravi Shankar (RS)" },
          { subject: "SA (101405)", faculty: "Mrs. Kritika Kaushal (KK)" },
          { subject: "BPCAD LAB [225] (G2) / NPTEL (G1)", faculty: "RR / Coordinator" },
          { subject: "BPCAD LAB [225] (G2) / NPTEL (G1)", faculty: "RR / Coordinator" },
          { subject: "Library Hour", faculty: "Librarian" }
        ]
      }
    }
  }
};
