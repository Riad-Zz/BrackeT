# BrackeT ⚡

<p align="center">
  <strong>The Next-Generation Competitive Coding & 1v1 Battle Arena</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Express-Node.js-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Monaco_Editor-VS_Code-007ACC?logo=visualstudiocode&logoColor=white" alt="Monaco Editor" />
  <img src="https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase&logoColor=black" alt="Firebase" />
</p>

---

## 📖 Overview

**BrackeT** transforms algorithmic problem-solving into a real-time, competitive esports experience. Instead of practicing algorithms in sterile isolation, BrackeT matches developers head-to-head in timed 1v1 coding duels with ranked ratings, live progress tracking, and an in-browser coding arena.

> *"More than solving problems. Play the match."*

For detailed architecture and system specifications, see [design.md](design.md).  
For the active feature matrix and roadmap status, see [progress.md](progress.md).

---

## ✨ Key Features

- ⚔️ **1v1 Rival Duels**: Enter the matchmaking queue and go head-to-head against another coder with the same problem and synchronized clock.
- 💻 **Split-Panel Coding Arena**: High-performance in-browser IDE powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/) with syntax highlighting, language switching (C++, Python, JS, TS, Java, Go), and fluid split panels via `react-resizable-panels`.
- 🏆 **Ranked Rating (RR) Ladder**: Climb from Bronze to Champion as you win matches, defend streaks, and increase your competitive rating.
- 📚 **Categorized Problem Catalog**: Browse curated problem sets across Data Structures, Algorithms, Databases, and Shell scripting with numerical ratings and difficulty tags.
- 🔐 **Modern Authentication**: Instant login with Google OAuth and Email/Password authenticated through Firebase Auth.
- 🎨 **Cyberpunk Dark Aesthetic**: Built on Tailwind CSS v4, Framer Motion, and Magic UI featuring aurora gradients, orbit animations, glyph matrices, and border beams.

---

## 🛠️ Tech Stack

### Frontend (`apps/web`)
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Design Tokens
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Editor**: [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react)
- **UI & Animations**: [Framer Motion](https://www.framer.com/motion/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth)

### Backend (`apps/api`)
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express 5](https://expressjs.com/)
- **Execution & Transpilation**: TypeScript with [tsx](https://github.com/privatenumber/tsx)

---

## 📂 Repository Structure

```
BrackeT/
├── apps/
│   ├── web/                     # Frontend client application
│   │   ├── src/
│   │   │   ├── components/      # UI primitives & Magic UI effects
│   │   │   ├── Firebase/        # Firebase app configuration
│   │   │   ├── Layouts/         # RootLayout and AuthLayout
│   │   │   ├── Pages/           # HomePage, Problems, Authentication
│   │   │   ├── Provider/        # AuthProvider & Context
│   │   │   ├── Router/          # React Router v7 routes
│   │   │   └── index.css        # Tailwind v4 theme & token definitions
│   │   ├── public/              # Assets, mock problems, promo video
│   │   └── package.json
│   │
│   └── api/                     # Backend API service
│       ├── src/
│       │   ├── app.ts           # Express application setup
│       │   └── server.ts        # Server entrypoint
│       └── package.json
│
├── packages/                    # Shared libraries (future: types, judge-client)
├── design.md                    # Technical design & architecture document
├── progress.md                  # Development progress & sprint tracker
├── README.md                    # Project documentation
└── package.json                 # Monorepo root workspace configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Riad-Zz/BrackeT.git
cd BrackeT

# Install dependencies across all workspace packages
npm install
```

### 2. Environment Configuration

Create a `.env.local` file inside `apps/web/` with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Running Locally

#### Run the Frontend (`apps/web`):
```bash
cd apps/web
npm run dev
```
The web application will launch at `http://localhost:5173`.

#### Run the Backend API (`apps/api`):
```bash
cd apps/api
npm run dev
```
The API server will listen on `http://localhost:3000`.

---

## 📜 Available Scripts

| Location | Command | Description |
| :--- | :--- | :--- |
| `apps/web` | `npm run dev` | Starts Vite dev server with Hot Module Replacement |
| `apps/web` | `npm run build` | Compiles TypeScript and builds production bundle |
| `apps/web` | `npm run lint` | Runs ESLint analysis |
| `apps/web` | `npm run preview`| Previews production build locally |
| `apps/api` | `npm run dev` | Starts backend server with `tsx watch` |
| `apps/api` | `npm run build` | Transpiles TypeScript into `dist/` |
| `apps/api` | `npm run start` | Runs transpiled production server |

---

## 🗺️ Roadmap & Progress

Track our ongoing development milestones in [progress.md](progress.md):
- [x] Phase 1: High-Fidelity Landing Page, Navigation & Firebase Auth
- [x] Phase 1: Problem Catalog & Monaco Arena Split-Panel Layout
- [ ] Phase 2: Backend REST Problem Catalog & Database Persistence
- [ ] Phase 2: Sandboxed Code Execution Engine & Test Runner
- [ ] Phase 3: Real-Time 1v1 WebSocket Duels & Matchmaking Queue
- [ ] Phase 4: Competitive Ranked Rating (RR) Tiers & Leaderboards

---

## 📄 License

This project is licensed under the ISC License.
