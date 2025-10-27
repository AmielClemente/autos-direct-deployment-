# Vercel Deployment - Quick Start Guide

## 🚀 Step-by-Step Instructions

### Prerequisites
- A GitHub account (already done ✅)
- A Vercel account (sign up at https://vercel.com)

### Step 1: Deploy Backend API

**IMPORTANT**: Your backend API needs to be deployed separately before deploying the frontend.

#### Option A: Using Railway (Recommended - Free tier available)

1. Go to [Railway](https://railway.app) and sign up/login
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your repository: `https://github.com/AmielClemente/autos-direct-deployment-.git`
5. In the deployment settings:
   - **Root Directory**: `auto-direct-api`
   - **Build Command**: Leave default
   - **Start Command**: `node index.js`
6. Add environment variables in Railway dashboard:
   ```
   NODE_ENV=production
   PORT=3000
   DB_HOST=<your-database-host>
   DB_USER=<your-database-user>
   DB_PASSWORD=<your-database-password>
   DB_NAME=<your-database-name>
   JWT_SECRET=<your-jwt-secret>
   ```
7. Add a MySQL database in Railway and copy connection details
8. Get your app URL (e.g., `https://your-app.railway.app`)

#### Option B: Using Render

1. Go to [Render](https://render.com)
2. Create a "New Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: `auto-direct-api`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
5. Add environment variables
6. Get your app URL

### Step 2: Deploy Frontend to Vercel

#### Method 1: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "**Add New Project**"
3. Import your GitHub repository: `https://github.com/AmielClemente/autos-direct-deployment-.git`
4. Configure the project:
   - **Framework Preset**: Select "Vite"
   - **Root Directory**: Leave empty or type "auto-direct-app"
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
5. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-backend-url.railway.app` (from Step 1)
6. Click "Deploy"

#### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to frontend directory
cd auto-direct-app

# Deploy (follow prompts)
vercel

# Set environment variable
vercel env add VITE_API_URL production
# Enter your backend URL when prompted

# Redeploy
vercel --prod
```

### Step 3: Configure Vercel Build Settings

After deployment, you may need to adjust settings:

1. Go to your project in Vercel dashboard
2. Go to "Settings" → "General"
3. Under "Build & Development Settings":
   - **Framework Preset**: Vite
   - **Root Directory**: Leave empty
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 4: Environment Variables

Make sure these are set in Vercel:

```
VITE_API_URL=https://your-backend-url.railway.app
```

You can add them in:
- Project Settings → Environment Variables
- Or via CLI: `vercel env add VITE_API_URL`

### Step 5: Update CORS in Backend

Your backend needs to allow requests from your Vercel domain. Update the CORS configuration in `auto-direct-api/index.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-app.vercel.app',
    'https://autos-direct.com'
  ],
  credentials: true
}));
```

Commit and deploy the backend again.

## 📋 Post-Deployment Checklist

- [ ] Backend API is deployed and accessible
- [ ] Frontend is deployed to Vercel
- [ ] Environment variables are set in Vercel
- [ ] CORS is configured in backend
- [ ] Test API connection from frontend
- [ ] Test authentication flow
- [ ] Test file uploads
- [ ] Test chatbot functionality (WebSocket)
- [ ] Test all major user flows

## 🔧 Troubleshooting

### "Cannot connect to API"
- Check if `VITE_API_URL` is set correctly in Vercel
- Verify backend is running and accessible
- Check CORS configuration

### "404 on page refresh"
- Vercel's routing should handle this automatically with the `vercel.json` config

### "Database connection error"
- Check database credentials in backend environment variables
- Verify database is accessible from your hosting provider

### Build failing
- Check build logs in Vercel
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

## 🌐 Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., autos-direct.com)
4. Follow DNS configuration instructions
5. Update environment variables if needed

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Check the full deployment guide: `DEPLOYMENT_VERCEL.md`

