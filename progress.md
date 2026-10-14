# BrackeT — Development Progress & Roadmap Tracker

> **Last Updated**: October 14, 2026  
> **Status**: Phase 1 Complete (Landing Page & Arena UI Prototype) | Phase 2 In Progress (Monorepo Backend & Code Execution)

---

## 1. Executive Status Overview

| Metric | Status | Details |
| :--- | :---: | :--- |
| **Monorepo Architecture** | 🟡 Active | Migrated to npm workspaces (`apps/web`, `apps/api`) |
| **Frontend UI / UX** | 🟢 Complete | Landing page, navigation, theme, visual micro-interactions |
| **Authentication** | 🟢 Complete | Firebase Email/Password & Google OAuth, persistent state |
| **Problem Catalog** | 🟢 Prototype | Table view, category tabs, search, mock problems loader |
| **Problem Details / Arena** | 🟡 In Progress | Split resizable panels, Monaco Editor, language selector |
| **Backend API Gateway** | 🟡 Initialized | Express + TypeScript setup, health check endpoint |
| **Code Execution Engine** | 🔴 Pending | Sandboxed code runner & test case verifier to be built |
| **1v1 Rival Duel System** | 🔴 Planned | Real-time WebSocket matchmaking, duel lobby & ELO |

---

## 2. Detailed Component & Feature Matrix

### 2.1 Workspace & Infrastructure
- [x] Monorepo restructuring with npm workspaces (`apps/*`, `packages/*`).
- [x] Root TypeScript and dev dependency orchestration (`tsx`, `@types/node`).
- [x] TypeScript configuration across apps (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`).
- [x] Vite 8 build pipeline with React 19 and Tailwind CSS v4 compiler.
- [ ] Root development orchestrator script (concurrent execution of `web` and `api`).
- [ ] Shared package for TypeScript types (`packages/types`).

### 2.2 Landing Page (`apps/web/src/Pages/HomePage`)
- [x] **Hero Section** (`Hero.tsx`):
  - [x] Animated background grid with radial gradient masking.
  - [x] Dynamic typography and motivational badges with `HyperText`.
  - [x] Video player modal (`HeroVideoDialog`) with border beam glow.
  - [x] Responsive call-to-action buttons linking to problems and about.
- [x] **How It Works** (`HowItWork.tsx`):
  - [x] Three-stage breakdown: Queue → Code → Climb.
  - [x] Text highlighting using `Highlighter` and glowing step badges.
  - [x] SVG `AnimatedBeam` connecting step cards.
- [x] **Rank System** (`RankSystem.tsx`):
  - [x] Floating 3D tier badge graphic with motion physics.
  - [x] Tier ladder explanation from Bronze to Champion.
- [x] **Language Showcase** (`LanguageShowCase.tsx`):
  - [x] Dual-ring `OrbitingCircles` animation with high-res language badges.
  - [x] Support highlights for C++, Python, JavaScript, TypeScript, Go, Java, PHP, C.
- [x] **Bento Features Grid** (`BentoSection.tsx`):
  - [x] "Code in the Arena" with interactive typing terminal animation.
  - [x] "Live Match" head-to-head avatar preview with VS clash.
  - [x] "Climb the Ladder" ranked rating progress bar (e.g., Gold III 1240 RR).
  - [x] "Every Match Counts" streak history and bar chart metrics.
- [x] **FAQ Section** (`FAQSection.tsx`):
  - [x] Collapsible accordion answering platform questions.

### 2.3 Authentication & Session Management
- [x] Firebase SDK integration (`Firebase.config.ts`).
- [x] Context provider (`AuthProvider.tsx`) with `user`, `loading`, `emailLogin`, `emailRegistration`, `googleLogin`, `logOut`.
- [x] Dedicated Auth Layout (`AuthLayout.tsx`) featuring `GlyphMatrix` and `Meteors`.
- [x] Login page (`Login.tsx`) with form validation, password peek, and toast notifications.
- [x] Register page (`Register.tsx`) with photo upload, profile updates, and Google sign-in.
- [x] User navigation dropdown with avatar fallback and logout handler.

### 2.4 Problem Catalog (`/problems`)
- [x] Problem Banner header (`ProblemBanner.tsx`).
- [x] Category tabs (All Topic, Data Structure, Algorithm, Database, Shell).
- [x] Search input and filter button controls.
- [x] Problem table (`ProblemList.tsx`) with rating, tags, and acceptance rates.
- [x] Client-side mock data provider (`mockProblems.json`).
- [ ] Connect catalog to live backend API database.
- [ ] Implement active filter and sorting handlers.

### 2.5 Coding Workspace & Arena (`/problem/details/:slug`)
- [x] Route configuration with slug-based lookup (`Router.tsx`).
- [x] Top toolbar: Back to home, timer toggle, random problem shuffle, "Run", and "Submit" buttons.
- [x] Split resizable layout (`ProblemDetails.tsx`) using `react-resizable-panels`.
- [x] Left Panel: Problem description, rating, constraints, and interactive example cards.
- [x] Right Panel (Top): Monaco Code Editor with `vs-dark` theme and multi-language dropdown.
- [x] Right Panel (Top): Format code and reset starter code action buttons.
- [ ] Right Panel (Bottom): Interactive test case runner console with custom input tabs.
- [ ] Wire "Run" and "Submit" buttons to backend execution endpoint.
- [ ] Visual verdict indicators (Accepted, Wrong Answer, TLE, etc.).

### 2.6 Backend API (`apps/api`)
- [x] Express application initialization (`app.ts`).
- [x] Server bootstrap with CORS and JSON body parser (`server.ts`).
- [x] TypeScript development environment with `tsx watch`.
- [ ] Problem endpoints (`GET /api/problems`, `GET /api/problems/:slug`).
- [ ] Submission endpoints (`POST /api/submissions/run`, `POST /api/submissions/submit`).
- [ ] Authentication middleware to verify Firebase ID tokens.
- [ ] Database integration (PostgreSQL with Prisma or MongoDB with Mongoose).

### 2.7 1v1 Rival System (`/rival`) & Real-Time Engine
- [ ] Matchmaking queue algorithm based on Ranked Rating (RR).
- [ ] WebSocket server for duel rooms and live progress events.
- [ ] Synchronized countdown timer and duel arena UI.
- [ ] Real-time opponent status indicators (typing speed, test run attempts).
- [ ] Rating calculation engine (Elo / RR points awards).

### 2.8 Auxiliary Pages
- [ ] User Profile & Match History (`/profile`, `/rivalhistory`).
- [ ] Tech Interview Preparation Mode (`/interview`).
- [ ] Settings Page (`/setting`).
- [ ] About Page content completion (`About.tsx`).

---

## 3. Development Timeline & Milestones

```
[Phase 1: Foundation & Presentation] ==========> COMPLETED
  - Monorepo structure setup
  - Landing page with rich animations
  - Firebase Authentication
  - Problem catalog & Monaco Editor prototype

[Phase 2: Code Execution & Problem API] =======> IN PROGRESS (Current Focus)
  - Backend problem service & database models
  - Sandboxed code execution engine integration
  - Interactive test runner in ProblemDetails.tsx
  - Full run/submit verdict feedback loop

[Phase 3: Real-Time 1v1 Rival Arena] ==========> UPCOMING
  - WebSocket gateway & match queues
  - Head-to-head live duel interface
  - Ranked Rating (RR) computation & tiers

[Phase 4: Leaderboards, Profiles & Polish] =====> PLANNED
  - User profiles & duel history match viewer
  - Global & tiered leaderboards
  - Mobile responsiveness optimizations
```

---

## 4. Recent Development Changelog

- **Refactor (Monorepo)**: Migrated single frontend application into npm workspaces monorepo (`apps/web` and `apps/api`).
- **Feature (API)**: Configured Express application, TypeScript compiler, tsx watcher, and health check route.
- **Feature (Problem Details)**: Implemented split resizable window (`react-resizable-panels`) separating problem statements and Monaco Editor.
- **Feature (Problem Details)**: Added dynamic language selector, starter code switcher, and action buttons.
- **Feature (Problem Catalog)**: Added `/problems` page with category navigation tabs, search bar, and mock problem datasets.
- **Feature (Auth)**: Built full Firebase authentication system with Google OAuth and custom `AuthLayout` visual elements.
- **Feature (Landing Page)**: Completed Hero, BentoGrid, OrbitingCircles, HowItWorks with AnimatedBeam, and FAQ sections.

---

## 5. Immediate Sprint Backlog

1. **Test Runner Console**: Complete the test cases panel in `ProblemDetails.tsx` to accept custom inputs and render test execution results.
2. **Problem API Endpoints**: Migrate static `mockProblems.json` to backend REST routes in `apps/api`.
3. **Sandbox Execution Integration**: Implement or integrate an execution engine (Judge0 or Docker runner) to compile C++, Python, JavaScript, and Java submissions.
4. **Route Completers**: Replace placeholder routes (`/rival`, `/about`, `/interview`, `/profile`) with dedicated interface components to avoid 404 error fallbacks.
