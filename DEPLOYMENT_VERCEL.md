# Vercel Deployment Guide for Auto Direct

This guide will help you deploy the Auto Direct application to Vercel.

## Architecture Overview

- **Frontend**: React/Vite application (deploy to Vercel)
- **Backend**: Express.js API with MySQL database (needs separate hosting)

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. GitHub repository (already set up)
3. A hosting solution for your backend API (Railway, Render, AWS, or similar)

## Step 1: Deploy Backend API First

Your Express.js backend with MySQL cannot run on Vercel's serverless functions (it requires persistent connections). You need to deploy it separately.

### Option A: Deploy to Railway (Recommended)

1. Go to https://railway.app
2. Create a new project
3. Connect your GitHub repository
4. Add a MySQL database service
5. Configure environment variables in Railway:
   - `NODE_ENV=production`
   - Database connection details
   - JWT secrets
   - Any other required configs
6. Set the root directory to `auto-direct-api`
7. Deploy

### Option B: Deploy to Render

1. Go to https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Set root directory to `auto-direct-api`
5. Set build command: `npm install`
6. Set start command: `node index.js`
7. Add environment variables
8. Create a MySQL database and connect it

### Option C: Deploy to AWS/Other Platform

Follow your platform's documentation for deploying Node.js applications.

## Step 2: Update Frontend Configuration

1. Get your deployed backend URL (e.g., `https://your-app.railway.app`)
2. Update the `vercel.json` file with your actual API URL:

```json
"env": {
  "VITE_API_URL": "https://your-actual-api-domain.com"
}
```

3. Update `auto-direct-app/src/data/api-calls.js` to use the environment variable:

```javascript
const api = process.env.VITE_API_URL || 'http://localhost:3000';
```

## Step 3: Deploy Frontend to Vercel

### Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `auto-direct-app`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables:
   - `VITE_API_URL`: Your backend API URL
6. Click "Deploy"

### Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Navigate to project root and deploy:
```bash
cd auto-direct-app
vercel
```

## Step 4: Configure Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables

Make sure to set these in Vercel:

- `VITE_API_URL`: Your backend API URL
- `VITE_NODE_ENV`: `production`

And in your backend platform:
- Database connection details
- JWT secrets
- Email configuration
- Other API-specific configs

## Important Notes

1. **CORS Configuration**: Ensure your backend allows requests from your Vercel domain
2. **Database**: Your database needs to be accessible from your backend server
3. **File Uploads**: Vehicle images are stored locally - consider using a cloud storage solution (AWS S3, Cloudinary, etc.)
4. **Socket.IO**: Make sure your backend supports WebSocket connections for the chatbot

## Post-Deployment Checklist

- [ ] Test all API endpoints
- [ ] Verify authentication flow
- [ ] Test file uploads
- [ ] Check CORS issues
- [ ] Test the chatbot WebSocket connection
- [ ] Verify email sending functionality
- [ ] Test all user flows (registration, login, browsing, purchasing)

## Troubleshooting

### Frontend can't connect to backend
- Check CORS configuration in backend
- Verify `VITE_API_URL` environment variable is set correctly
- Check browser console for errors

### 404 errors on page refresh
- This is normal with SPAs - Vercel's configuration handles this with the `vercel.json` routes

### Database connection errors
- Check database credentials
- Ensure database is accessible from your backend server
- Check firewall rules

## Support

For issues, check:
- Vercel documentation: https://vercel.com/docs
- Your backend platform's documentation
- GitHub issues in your repository

