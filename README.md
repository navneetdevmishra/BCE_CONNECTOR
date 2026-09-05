# 🎓 BCE Connect — Campus OS | BCE Bakhtiyarpur

> **ONE CAMPUS. ONE IDENTITY. EVERYTHING BCE.**  
> An all-in-one personalized digital campus portal and student operating system designed specifically for **Bakhtiyarpur College of Engineering (BCE), Patna** (Affiliated with Bihar Engineering University - BEU).

---

## 🌟 Overview

**BCE Connect** provides a modern, fast, and unified web platform for engineering students and faculty at BCE Bakhtiyarpur. It streamlines access to daily academic resources, syllabus tracking, notices, attendance calculations, and placement preparation tools.

---

## 🔥 Key Features

- 📑 **BEU Syllabus & PYQ Hub**: Instant access to B.Tech semester-wise syllabus, module breakdowns, and Previous Year Questions (PYQs).
- 📊 **Smart Attendance Calculator**: Calculate required target attendance percentages to satisfy BEU's mandatory 75% exam criteria.
- 📢 **Digital Notice Board**: Real-time university & college notice feed with instant category filters (Exams, Events, Academics) and search.
- 💻 **TCS NQT & DSA Tracker** (`tcs-dsa-tracker.html`): Dedicated preparation module for TCS NQT & coding interviews, featuring topic-wise DSA practice checklists.
- 👤 **Student ID & Verification Portal**: Student profiles with reg number verification, branch info, and verification badges.
- 🤖 **AI Study Assistant Integration**: Quick guidance for academic concepts and exam preparation.
- ⚡ **Auto-Sync & Push Engine**: Background Git synchronization scripts (`auto-sync.js` & batch scripts) for continuous deployment and database backup.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Modern Glassmorphism Design System), Vanilla JavaScript & React 18 (CDN integration), FontAwesome 6 icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (via Mongoose) with automatic JSON local database fallback (`bce_database.json`).
- **Automation**: Custom Git auto-sync daemon (`auto-sync.js`).

---

## 📂 Project Structure

```
BCE BAKTIYAPUR/
├── css/                   # Modular design system & view stylesheets
│   ├── components.css
│   ├── design-system.css
│   └── views.css
├── js/                    # Application logic & data files
│   └── data/
│       └── bce-data.js    # Academic syllabus, PYQ & campus dataset
├── bce_database.json      # Local database fallback store
├── index.html             # BCE Connect Campus OS main portal
├── tcs-dsa-tracker.html   # TCS NQT & DSA practice dashboard
├── server.js              # Express backend server & REST API
├── auto-sync.js           # Automated Git sync daemon
├── push-now.bat           # Quick Git push utility script
├── start-auto-push.bat    # Background watcher starter script
├── package.json           # Node.js dependencies & npm scripts
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/navneetdevmishra/BCE_CONNECTOR.git
   cd BCE_CONNECTOR
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Express Server:**
   ```bash
   npm start
   ```
   The backend API server will run on `http://localhost:8086`.

4. **Launch the Web App:**
   Open `index.html` or `tcs-dsa-tracker.html` directly in any web browser, or serve using Live Server.

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm start` — Starts the Express backend server on port `8086`.
- `npm run push` — Executes a one-time automatic git add, commit, and push (`auto-sync.js --once`).
- `npm run watch-push` — Runs `auto-sync.js` in watcher mode to automatically commit and push changes periodically.
- `push-now.bat` — Windows double-click shortcut to trigger immediate git sync.
- `start-auto-push.bat` — Windows background auto-push process launcher.

---

## 🌐 API Overview (`server.js`)

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/health` | GET | Server health check and mode indicator |
| `/api/students` | GET | Retrieve list of registered students |
| `/api/students/verify` | POST | Verify student registration details |
| `/api/notices` | GET | Retrieve live college notices |
| `/api/db/sync` | POST | Sync local database with server |

---

## 🤝 Contribution & License

Maintained with ❤️ by **[navneetdevmishra](https://github.com/navneetdevmishra)** for **BCE Bakhtiyarpur**.  
Distributed under the **ISC License**.
