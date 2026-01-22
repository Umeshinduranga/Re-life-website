# Re-Life Monorepo Setup Guide

## 🎉 Monorepo Successfully Created!

Your project has been restructured into a monorepo using npm workspaces.

## 📁 Current Structure

```
Re-life-website/
├── packages/
│   ├── landing/                    ✅ Your existing landing page
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   └── postcss.config.js
│   └── recovery-system/
│       ├── backend/                ✅ Express + MongoDB backend
│       │   ├── src/
│       │   │   └── index.js
│       │   ├── package.json
│       │   └── .env.example
│       └── frontend/               ✅ React + Vite frontend
│           ├── src/
│           │   ├── App.jsx
│           │   ├── main.jsx
│           │   └── index.css
│           ├── index.html
│           ├── package.json
│           ├── vite.config.js
│           └── tailwind.config.js
└── package.json                    ✅ Root workspace config
```

## 🚀 Next Steps

### 1. Clean Installation (DONE! ✅)

The project structure is ready! Your landing page files are in `packages/landing/`.

To verify or reinstall dependencies:

```bash
# Only if needed - reinstall dependencies
npm install
```

### 2. Configure Backend Environment

```bash
cd packages/recovery-system/backend
cp .env.example .env
# Edit .env and add your actual API keys
```

### 3. Start Development

#### Option A: Run All Apps Together
```bash
npm run dev:all
```

#### Option B: Run Apps Individually
```bash
# Terminal 1 - Landing page (port 3000)
npm run landing:dev

# Terminal 2 - Backend API (port 5000)
npm run recovery:backend

# Terminal 3 - Recovery frontend (port 3001)
npm run recovery:frontend
```

## 🎯 What You Have Now

### ✅ Landing Page (packages/landing)
- Port: 3000
- All your existing components preserved
- Ready to run

### ✅ Recovery System Backend (packages/recovery-system/backend)
- Port: 5000
- Express server template
- Ready for RAG implementation
- MongoDB integration ready

### ✅ Recovery System Frontend (packages/recovery-system/frontend)
- Port: 3001
- React + Vite setup
- Tailwind CSS configured
- Proxy to backend configured

## 🔧 Common Tasks

### Add a new dependency

```bash
# To landing page
npm install axios --workspace=packages/landing

# To backend
npm install openai langchain --workspace=packages/recovery-system/backend

# To recovery frontend
npm install react-query --workspace=packages/recovery-system/frontend
```

### Build for production

```bash
# Landing page
npm run landing:build

# Recovery frontend
npm run build --workspace=packages/recovery-system/frontend
```

## 💡 Benefits of This Setup

1. **Single Repository** - All code in one place
2. **Unified Dependencies** - Shared packages at root level
3. **Easy Development** - Run everything with one command
4. **Code Sharing** - Can create shared packages later
5. **Better Organization** - Clear separation of concerns

## ⚠️ Important Notes

- Old `src/` and `public/` folders at root can be deleted after verifying the landing page works
- Each package has its own `node_modules` for package-specific dependencies
- The landing page structure is identical, just moved to `packages/landing/`
- Backend and frontend are ready for your RAG implementation

## 🐛 Troubleshooting

If you encounter issues:

1. Make sure you ran `npm install` at the root
2. Check that ports 3000, 3001, and 5000 are available
3. Verify MongoDB is running if testing backend
4. Check each package.json for correct workspace references

Happy coding! 🚀
