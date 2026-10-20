# BrackeT — Development Progress & Roadmap Tracker

> **Last Updated**: October 20, 2026  
> **Status**: Phase 1 Complete (Landing Page, Auth & About Hub) | Phase 2 In Progress (Problem Arena & Monorepo Backend API)

---

## 1. Executive Status Overview

| Module / System | Status | Current Milestone & Scope |
| :--- | :---: | :--- |
| **Monorepo Architecture** | 🟡 Active | npm workspaces established (`apps/web`, `apps/api`), root dev tools configured |
| **Frontend UI / UX & Design System** | 🟢 Complete | Cyberpunk dark theme (`#0E1011`), Tailwind CSS v4 tokens, Framer Motion |
| **Landing Page Experience** | 🟢 Complete | Hero, How It Works, Rank Tier, Language Orbit, Bento Grid, FAQ Section |
| **Authentication & Session** | 🟢 Complete | Firebase Email/Password & Google OAuth, persistent state, AuthLayout |
| **About & Support Hub (`/about`)** | 🟢 Complete | Story narrative, 3 pillars, interactive inquiry form, copy-to-clipboard helplines, trade license #124154, 5-col social grid |
| **Problem Catalog (`/problems`)** | 🟢 Complete | Category tabs, search input, filter/sort controls, mock data loader |
| **Problem Arena (`/problem/details/:slug`)** | 🟡 In Progress | Dual-axis resizable split layout, Monaco Editor vs-dark, dynamic language switcher, test case tabs |
| **Backend API Gateway (`apps/api`)** | 🟡 Initialized | Express 5 + TypeScript setup, CORS, JSON parsers, health check route |
| **Code Execution Engine** | 🔴 Pending | Sandboxed code runner (Docker / Judge0) & test verifier pipeline |
| **1v1 Rival Duel System (`/rival`)** | 🔴 Planned | Real-time WebSocket matchmaking, duel lobby, synchronized timer, Elo/RR |
| **Interview Preparation Mode (`/interview`)** | 🔴 Planned | Structured mock tech interview modules with system design tracks |

---

## 2. Detailed Component & Feature Matrix

### 2.1 Workspace & Monorepo Infrastructure
- [x] Monorepo restructuring with npm workspaces (`apps/*`, `packages/*`).
- [x] Root TypeScript and dev dependency orchestration (`tsx`, `@types/node`).
- [x] TypeScript configuration across apps (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`).
- [x] Vite 8 build pipeline with React 19 and Tailwind CSS v4 compiler.
- [x] Shared path aliases (`@/*` mapping to `apps/web/src/*`).
- [ ] Root development orchestrator script (concurrent execution of `web` and `api`).
- [ ] Shared package for TypeScript types (`packages/types`).
- [ ] Shared package for execution judge client (`packages/judge-client`).

### 2.2 Landing Page (`apps/web/src/Pages/HomePage`)
- [x] **Hero Section** (`Hero.tsx`):
  - [x] Animated background grid with radial gradient masking (`GridPattern`).
  - [x] Dynamic typography and motivational badges with `HyperText`.
  - [x] High-production promo video modal (`HeroVideoDialog`) with `BorderBeam` glow.
  - [x] Dual call-to-action buttons linking directly to the problem catalog and about page.
- [x] **How It Works** (`HowItWork.tsx`):
  - [x] Three-stage breakdown: Queue → Code → Climb.
  - [x] Text highlighting using `Highlighter` and glowing step badges.
  - [x] SVG `AnimatedBeam` connecting step cards.
- [x] **Rank System** (`RankSystem.tsx`):
  - [x] Floating 3D tier badge graphic with motion physics.
  - [x] Tier ladder explanation from Bronze to Champion.
- [x] **Language Showcase** (`LanguageShowCase.tsx`):
  - [x] Dual-ring `OrbitingCircles` animation with high-res language badges.
  - [x] Multi-language support highlights for C++, Python, JavaScript, TypeScript, Go, Java, PHP, C.
- [x] **Bento Features Grid** (`BentoSection.tsx`):
  - [x] "Code in the Arena" with interactive typing terminal animation (`Terminal`).
  - [x] "Live Match" head-to-head avatar preview with VS clash effects.
  - [x] "Climb the Ladder" ranked rating progress bar (e.g., Gold III 1240 RR).
  - [x] "Every Match Counts" streak history and bar chart metrics.
- [x] **FAQ Section** (`FAQSection.tsx`):
  - [x] Collapsible accordion answering platform rules, duel mechanics, and ranking algorithms.

### 2.3 Authentication & Session Management
- [x] Firebase SDK integration (`Firebase.config.ts`).
- [x] Centralized context provider (`AuthProvider.tsx`) exposing `user`, `loading`, `emailLogin`, `emailRegistration`, `googleLogin`, `logOut`.
- [x] Dedicated Auth Layout (`AuthLayout.tsx`) featuring dynamic canvas `GlyphMatrix` and `Meteors`.
- [x] Login page (`Login.tsx`) with form validation, password peek, and toast notifications.
- [x] Register page (`Register.tsx`) with photo upload, profile updates, and Google sign-in.
- [x] User navigation dropdown with avatar fallback and logout handler.

### 2.4 Problem Catalog (`/problems`)
- [x] Problem Banner header (`ProblemBanner.tsx`) with daily challenge and live stats.
- [x] Category tabs: `All Topic`, `Data Structure`, `Algorithm`, `Database`, `Shell`.
- [x] Search input with real-time text matching.
- [x] Filter and Sort by dropdown buttons.
- [x] Problem table (`ProblemList.tsx`) with rating pills, topic tags, and acceptance rate badges.
- [x] Client-side mock data provider (`mockProblems.json`) containing rich test cases and starter codes.
- [ ] Connect catalog to live backend API database (`GET /api/problems`).
- [ ] Implement active filter and sorting state handlers.

### 2.5 Coding Workspace & Arena (`/problem/details/:slug`)
- [x] Dedicated workspace navigation toolbar:
  - [x] Back to home navigation with brand Aurora logo.
  - [x] Problem timer stopwatch button.
  - [x] Random problem shuffle button (`FaShuffle`).
  - [x] "Run" execution trigger (`FaPlay`) and "Submit" evaluation trigger (`VscCloudUpload`).
  - [x] User session avatar dropdown with Profile and Settings shortcuts.
- [x] Dual-axis nested resizable split layout (`ProblemDetails.tsx`) using `react-resizable-panels`:
  - [x] **Left Panel (Problem Statement)**:
    - [x] Title, difficulty rating badge, topic tags, and acceptance rate.
    - [x] Markdown-rendered problem description, input/output specifications, and notes.
    - [x] Expandable examples accordion with copyable sample inputs, expected outputs, and explanations.
    - [x] Collapsible hints accordion for progressive guidance.
  - [x] **Right Panel - Top (Monaco Code Editor)**:
    - [x] Monaco Editor integration configured with `vs-dark` theme.
    - [x] Dynamic language selector (C++, Python, JavaScript, TypeScript, Java, Go).
    - [x] Starter boilerplate code tailored to selected language and problem signature.
    - [x] Action buttons for code formatting (`TbBraces`) and resetting default code (`TbReload`).
  - [x] **Right Panel - Bottom (Test Suite Console)**:
    - [x] Test case selector tabs (`Case 1`, `Case 2`, etc.) populated from pretests / public test cases.
    - [x] Formatted Input and Expected Output display blocks.
- [ ] Add Custom Input tab to the test console.
- [ ] Wire "Run" and "Submit" buttons to backend execution endpoints.
- [ ] Visual verdict indicators (Accepted, Wrong Answer, TLE, MLE, Runtime Error).

### 2.6 About & Contact Verification Hub (`/about`)
- [x] **Who We Are & Story Section** (`About.tsx`):
  - [x] Brand narrative explaining BrackeT's origin and why competitive esports mechanics solve interview prep fatigue.
  - [x] Visual Brand Identity card with logo, platform architecture specs, execution mode, and registered license.
  - [x] Quick CTA links to Explore Problem Catalog and View Live Arena Demo.
- [x] **3 Core Pillars Grid**:
  - [x] The Mission (reflex-driven coding practice).
  - [x] The Vision (global esports colosseum for developers).
  - [x] Verified Credentials (registered trade license & open-source transparency).
- [x] **Direct Support & Contact Channels** (`ContactSection.tsx`):
  - [x] Direct support email card (`support@bracket.io`) with 1-click clipboard copy and 24-business-hour response SLA.
  - [x] Phone helpline card with 3 dedicated lines, individual copy buttons, and BST operating hours (10:00 AM – 5:00 PM).
  - [x] Platform Credentials card displaying registered Trade License (`#124154`) and build version (`Beta v0.0.1`).
- [x] **Interactive Inquiry Form**:
  - [x] Form fields: Name, Email, Category selection, and Message.
  - [x] 5 category options: General Inquiry & Feedback, Bug Report, Problem Suggestion, Partnership, Account Support.
  - [x] Client-side validation for required inputs, email format regex, and minimum message length.
  - [x] Asynchronous submission simulation with spinner feedback state.
  - [x] Success confirmation state with `CheckCircle2` and "Send Another Message" reset button.
- [x] **Social Network & Community Matrix**:
  - [x] Full-width 5-column responsive grid covering GitHub, Facebook, LinkedIn, Instagram, and YouTube.
  - [x] Individual micro-hover transitions with external link indicators.
- [x] **Design & Theme Consistency**:
  - [x] Deep obsidian charcoal background (`#0E1011`) matching root theme.
  - [x] Standardized card border hovers and electric volt yellow (`#dffb15`) accent highlights.

### 2.7 Backend API (`apps/api`)
- [x] Express application initialization (`app.ts`).
- [x] Server bootstrap with CORS and JSON body parser (`server.ts`).
- [x] TypeScript development environment with `tsx watch`.
- [ ] Problem catalog endpoints (`GET /api/problems`, `GET /api/problems/:slug`).
- [ ] Submission endpoints (`POST /api/submissions/run`, `POST /api/submissions/submit`).
- [ ] Authentication middleware to verify Firebase ID tokens.
- [ ] Database integration (PostgreSQL with Prisma or MongoDB with Mongoose).

### 2.8 1v1 Rival System (`/rival`) & Real-Time Engine
- [ ] Matchmaking queue algorithm based on Ranked Rating (RR) buckets (±100 RR).
- [ ] WebSocket server for duel rooms and live progress events.
- [ ] Synchronized countdown timer and duel arena UI.
- [ ] Real-time opponent status indicators (typing speed, test run attempts).
- [ ] Rating calculation engine (Elo / RR points awards).

### 2.9 Auxiliary Pages & Planned Modules
- [x] About & Contact Page (`/about`).
- [ ] User Profile & Match History (`/profile`, `/rivalhistory`).
- [ ] Tech Interview Preparation Mode (`/interview`).
- [ ] Settings Page (`/setting`).

---

## 3. Development Timeline & Milestones

```
[Phase 1: Foundation & Presentation] ==========> COMPLETED
  - Monorepo structure setup (apps/web, apps/api)
  - Landing page with rich animations & Magic UI
  - Firebase Authentication (Email/Password & Google OAuth)
  - Problem catalog & Monaco Editor prototype
  - About & Contact verification hub with interactive inquiry

[Phase 2: Code Execution & Problem API] =======> IN PROGRESS (Current Focus)
  - Backend problem service & database models
  - Sandboxed code execution engine integration (Docker / Judge0)
  - Wire "Run" and "Submit" buttons to backend execution endpoints
  - Full run/submit verdict feedback loop in ProblemDetails.tsx

[Phase 3: Real-Time 1v1 Rival Arena] ==========> UPCOMING
  - WebSocket gateway & match queues
  - Head-to-head live duel interface
  - Ranked Rating (RR) computation & tiers

[Phase 4: Leaderboards, Profiles & Polish] =====> PLANNED
  - User profiles & duel history match viewer
  - Global & tiered leaderboards
  - Tech interview preparation track
  - Performance optimization & production deployment
```

---

## 4. Recent Development Changelog

- **feat(contact)**: Introduced full-width 5-column layout for social channels (GitHub, Facebook, LinkedIn, Instagram, YouTube).
- **refactor(contact)**: Balanced vertical alignment between contact info cards and interactive inquiry form.
- **style(about)**: Standardized card border hovers and action button colors across About page sections.
- **refactor(about)**: Cleaned up background grid pattern and top motivation banner for visual consistency.
- **style(about)**: Aligned About page background with `#0E1011` application dark theme and inherited default typography.
- **feat(problem-details)**: Implemented dual-axis resizable split workspace with Monaco Editor, language switching, and test case viewer tabs.
- **feat(problems)**: Created problem catalog with topic filtering tabs, search input, and mock problems loader.
- **feat(auth)**: Completed Firebase authentication with Google OAuth, custom `AuthLayout`, `GlyphMatrix`, and `Meteors`.
- **refactor(monorepo)**: Migrated single frontend application into npm workspaces monorepo (`apps/web` and `apps/api`).

---

## 5. Immediate Sprint Backlog

1. **Problem API Endpoints**: Migrate static `mockProblems.json` to backend REST routes in `apps/api` (`GET /api/problems`, `GET /api/problems/:slug`).
2. **Sandbox Execution Integration**: Implement or integrate an execution engine (Judge0 or Docker runner) to compile C++, Python, JavaScript, and Java submissions.
3. **Execution Feedback Loop**: Wire "Run" and "Submit" buttons in `ProblemDetails.tsx` to the execution endpoints and display verdict indicators (Accepted, Wrong Answer, TLE).
4. **Custom Input Console Tab**: Add custom test case input and output execution support in the problem arena console.
5. **Auxiliary Route Completers**: Implement dedicated interface components for `/profile`, `/setting`, and `/interview`.
