# Vercel Deployment Guide - Re-Life Monorepo

## 📦 Your Project Structure

1. **Landing Page** (React) - Main website
2. **Recovery System Frontend** (Next.js + TypeScript) - RAG-based recovery app
3. **Recovery System Backend** (Express + TypeScript) - API server

## 🚀 Deployment Strategy

### 1. Landing Page (Already Configured)

The root [vercel.json](vercel.json) deploys your landing page automatically.

**Deployment**: Automatic via GitHub push
**URL**: Your main domain (e.g., `relife.com`)

#### Configuration
```json
{
  "buildCommand": "cd packages/landing && npm run build",
  "outputDirectory": "packages/landing/build",
  "installCommand": "npm install && cd packages/landing && npm install"
}
```

### 2. Recovery System Frontend (Next.js + TypeScript)

Deploy as a **separate Vercel project**.

#### Option A: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. **Framework Preset**: Next.js
4. **Root Directory**: `packages/recovery-system/frontend`
5. **Build Command**: `npm run build`
6. **Output Directory**: Leave default (`.next`)
7. **Install Command**: `npm install`
8. Add Environment Variable:
   - `NEXT_PUBLIC_API_URL` = Your backend URL

#### Option B: Deploy via Vercel CLI

```bash
cd packages/recovery-system/frontend
vercel --prod
```

The [packages/recovery-system/frontend/vercel.json](packages/recovery-system/frontend/vercel.json) is already configured!

### 3. Recovery System Backend (Express + TypeScript)

The backend needs a Node.js hosting platform. Choose one:

#### Option A: Vercel (Serverless)

1. Create new Vercel project
2. **Root Directory**: `packages/recovery-system/backend`
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. Create `api/` folder with serverless functions
6. Add environment variables (MongoDB URI, etc.)

**Note**: Vercel serverless has limitations for long-running processes. Consider other options for RAG/AI workloads.

#### Option B: Railway (Recommended for Backend)

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
cd packages/recovery-system/backend
railway login
railway init
railway up
```

**Environment Variables**:
- `PORT`
- `MONGODB_URI`
- `NODE_ENV=production`
- Add your API keys (OpenAI, etc.)

#### Option C: Render

1. Go to https://render.com
2. New Web Service → Connect GitHub
3. **Root Directory**: `packages/recovery-system/backend`
4. **Build Command**: `npm install && npm run build`
5. **Start Command**: `npm start`
6. Add environment variables

#### Option D: AWS/Azure/Google Cloud

For production-grade deployment with more control.

## 🔧 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
# Add your API keys
```

## 📝 Deployment Checklist

### Landing Page
- [x] vercel.json configured
- [x] Builds successfully locally
- [ ] Push to GitHub → Auto-deploy

### Recovery System Frontend
- [x] Next.js + TypeScript configured
- [x] vercel.json created
- [ ] Create .env.local with backend URL
- [ ] Deploy as separate Vercel project
- [ ] Set NEXT_PUBLIC_API_URL environment variable

### Recovery System Backend
- [x] TypeScript configured
- [x] Builds successfully (`npm run build`)
- [ ] Choose hosting platform (Railway/Render/Vercel)
- [ ] Set up MongoDB database
- [ ] Add environment variables
- [ ] Deploy backend
- [ ] Update frontend API URL

## 🧪 Pre-Deployment Testing

### Test Landing Page Build
```bash
cd packages/landing
npm run build
# Check packages/landing/build folder exists
```

### Test Frontend Build
```bash
cd packages/recovery-system/frontend
npm run build
# Check .next folder exists
```

### Test Backend Build
```bash
cd packages/recovery-system/backend
npm run build
# Check dist folder exists
npm start
# Test http://localhost:5000/api/health
```

## 🚀 Quick Deploy Commands

### Deploy Landing Page
```bash
git add .
git commit -m "Update landing page"
git push origin main
# Vercel auto-deploys
```

### Deploy Frontend (via CLI)
```bash
cd packages/recovery-system/frontend
vercel --prod
```

### Deploy Backend (Railway)
```bash
cd packages/recovery-system/backend
railway up
```

## 📊 Recommended Architecture

```
┌─────────────────────┐
│   Landing Page      │
│   (Vercel)          │ → relife.com
└─────────────────────┘

┌─────────────────────┐
│   Frontend App      │
│   (Vercel)          │ → app.relife.com
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Backend API       │
│   (Railway/Render)  │ → api.relife.com
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   MongoDB Atlas     │
└─────────────────────┘
```

## 🔒 Security Notes

- Never commit `.env` files
- Use environment variables for all secrets
- Enable CORS only for your frontend domain
- Use HTTPS in production
- Add rate limiting to backend API

## 📱 Next Steps

1. **Deploy Landing Page**: Already configured, just push to GitHub
2. **Set up MongoDB**: Create MongoDB Atlas account
3. **Deploy Backend**: Choose Railway or Render, set environment variables
4. **Deploy Frontend**: Create separate Vercel project with backend URL
5. **Test Integration**: Verify frontend can reach backend API

Need help with any specific deployment? Let me know!


```bash
git add .
git commit -m "feat: restructure to monorepo"
git push origin main
```

Vercel will automatically deploy with the new structure! 🎉

