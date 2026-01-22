# Re-Life Monorepo

A monorepo containing the Re-Life landing page and RAG-based addiction recovery system.

## 📦 Project Structure

```
re-life-monorepo/
├── packages/
│   ├── landing/                    # Marketing landing page (React)
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   └── recovery-system/
│       ├── backend/                # Node.js + Express API with RAG
│       │   ├── src/
│       │   └── package.json
│       └── frontend/               # React + Vite app
│           ├── src/
│           └── package.json
└── package.json                    # Root workspace config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB (for backend)

### Installation

1. **Install all dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Backend
   cd packages/recovery-system/backend
   cp .env.example .env
   # Edit .env with your actual API keys
   ```

## 🎯 Available Scripts

### Run Individual Apps

```bash
# Landing page (runs on http://localhost:3000)
npm run landing:dev

# Recovery system backend (runs on http://localhost:5000)
npm run recovery:backend

# Recovery system frontend (runs on http://localhost:3001)
npm run recovery:frontend
```

### Run All Apps Simultaneously

```bash
npm run dev:all
```

### Build for Production

```bash
# Build landing page
npm run landing:build

# Build recovery frontend
npm run build --workspace=packages/recovery-system/frontend
```

## 📱 Applications

### 1. Landing Page
- **Tech Stack:** React, TailwindCSS, GSAP
- **Port:** 3000
- **Purpose:** Marketing and user acquisition
- **Features:** Video backgrounds, animations, glassmorphism design

### 2. Recovery System Backend
- **Tech Stack:** Node.js, Express, MongoDB
- **Port:** 5000
- **Features:** RAG-based AI, User management, Chat API

### 3. Recovery System Frontend
- **Tech Stack:** React, Vite, TailwindCSS
- **Port:** 3001
- **Features:** AI chat interface, Progress tracking

## 🛠️ Development

### Adding Dependencies

```bash
# To landing page
npm install <package> --workspace=packages/landing

# To backend
npm install <package> --workspace=packages/recovery-system/backend

# To frontend
npm install <package> --workspace=packages/recovery-system/frontend
```

### Workspace Benefits
- ✅ Shared dependencies and unified management
- ✅ Single `node_modules` at root (saves disk space)
- ✅ Run all apps with one command
- ✅ Easy code sharing between packages

## 🔧 Next Steps

1. Configure MongoDB connection in backend
2. Add your AI API keys (OpenAI, Anthropic, etc.)
3. Implement RAG logic in backend
4. Build out the recovery system UI
5. Link landing page to recovery system

---

## Original Landing Page Features

- 🌑 Dark monochromatic theme with cyan, purple, and orange accents
- 📱 Fully responsive design
- 🎥 Video background with overlay effects
- 🎯 Comprehensive sections:
  - **Hero Section** - Immersive video background with animated CTA
  - **Chat Interface Demo** - Real-time typing animation showcase
  - **Problems Section** - Addiction challenges visualization
  - **Solution Section** - AI-powered recovery approach
  - **Features Section** - 6 key features with hover effects
  - **How It Works** - Step-by-step process with scroll animations
  - **Technology Section** - RAG AI technology explanation
  - **FAQ Section** - Expandable accordions for common questions
- ⚡ Smooth scroll-triggered animations
- 🎭 Interactive glassmorphism cards with hover effects
- 🔄 Modern futuristic UI with gradient overlays
- 🎨 Custom animations and transitions
