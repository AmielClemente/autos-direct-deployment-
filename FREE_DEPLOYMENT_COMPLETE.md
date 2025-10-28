# 🆓 Complete Free Deployment Guide - Step by Step

Everything is 100% FREE forever!

---

## Step 1: Set Up Free MySQL Database (5 minutes)

### Option A: PlanetScale (Recommended - Easiest)

#### 1.1: Sign Up
1. Go to https://planetscale.com
2. Click "Sign up" (free with GitHub)
3. Authorize with your GitHub account

#### 1.2: Create Database
1. Click "Create new database"
2. Name it: `autos-direct`
3. Select region closest to you
4. Click "Create database"
5. Wait 30 seconds for setup

#### 1.3: Get Connection Info
1. Click on your database name
2. Go to "Dashboard" tab
3. Click "Connect" or find "Connection string"
4. You'll see something like:
   ```
   host: aws.connect.psdb.cloud
   user: abc123xyz
   password: pscale_pw_abc123
   database: autos-direct
   port: 3306
   ```
5. **Write these down!** You'll need them for Render

#### 1.4: Run SQL Schema (Optional)
1. In PlanetScale, click "Console" tab
2. You can run SQL commands to import your database structure
3. Or do this later after connection works

---

## Step 2: Deploy Backend to Render (10 minutes)

### 2.1: Create Web Service
1. Go to https://render.com
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Connect your repo: `autos-direct-deployment-`
5. Click "Connect"

### 2.2: Configure Service
Fill in these settings:
- **Name:** `autos-direct-api` (or any name you want)
- **Region:** Choose closest to you
- **Branch:** `main`
- **Root Directory:** `auto-direct-api`
- **Build Command:** `npm install`
- **Start Command:** `node index.js`

### 2.3: Add Environment Variables
Click "Add Environment Variable" and add these one by one:

**Variable 1: MYSQL_HOST**
- Key: `MYSQL_HOST`
- Value: `aws.connect.psdb.cloud` (from PlanetScale)
- Click "Add"

**Variable 2: MYSQL_USER**
- Key: `MYSQL_USER`
- Value: `abc123xyz` (from PlanetScale)
- Click "Add"

**Variable 3: MYSQL_PASSWORD**
- Key: `MYSQL_PASSWORD`
- Value: `pscale_pw_abc123` (from PlanetScale)
- Click "Add"

**Variable 4: MYSQL_DATABASE**
- Key: `MYSQL_DATABASE`
- Value: `autos-direct` (from PlanetScale)
- Click "Add"

**Variable 5: MYSQL_PORT**
- Key: `MYSQL_PORT`
- Value: `3306`
- Click "Add"

**Variable 6: JWT_SECRET**
- Key: `JWT_SECRET`
- Value: Generate one by running: `openssl rand -base64 32` (or use any random string 40+ characters)
- Click "Add"

**Variable 7: NODE_ENV**
- Key: `NODE_ENV`
- Value: `production`
- Click "Add"

**Variable 8: FRONTEND_URL**
- Key: `FRONTEND_URL`
- Value: `http://localhost:5173` (you'll update this later after deploying frontend)
- Click "Add"

**Variable 9: PORT**
- Key: `PORT`
- Value: `10000`
- Click "Add"

### 2.4: Deploy
1. Click "Create Web Service"
2. Wait 3-5 minutes for deployment
3. Your API will be live at: `https://your-api.onrender.com`

### 2.5: Test
Visit: `https://your-api.onrender.com/health`
You should see: `{"status":"OK",...}`

✅ **Backend done!** Note the URL - you'll need it for the frontend.

---

## Step 3: Deploy Frontend to Vercel (5 minutes)

### 3.1: Go to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"

### 3.2: Import Repository
1. Find and select: `autos-direct-deployment-`
2. Click "Import"

### 3.3: Configure Settings
1. **Framework Preset:** Select "Vite" (or leave auto-detected)
2. **Root Directory:** `auto-direct-app`
3. **Build Command:** `npm run build` (auto-detected)
4. **Output Directory:** `dist` (auto-detected)

### 3.4: Add Environment Variable
1. Scroll to "Environment Variables"
2. Click "Add"
3. Key: `VITE_API_URL`
4. Value: `https://your-api.onrender.com` (from Step 2.5)
5. Click "Add"

### 3.5: Deploy!
1. Click "Deploy"
2. Wait 2-3 minutes
3. Your site is live! 🎉

✅ **Frontend done!** You'll get a URL like: `https://your-app.vercel.app`

---

## Step 4: Update Frontend URL in Backend

1. Go back to Render
2. Edit your Web Service
3. Go to "Environment" tab
4. Find `FRONTEND_URL` variable
5. Change value to your Vercel URL: `https://your-app.vercel.app`
6. Click "Save Changes"
7. Render will redeploy automatically

---

## Step 5: Import Your Database Schema

You need to create your database tables. You have SQL files in `auto-direct-api/data/`:

### Using PlanetScale Console:
1. Go to PlanetScale dashboard
2. Click on your database
3. Go to "Console" tab
4. Copy and paste your SQL files here:
   - `add_complaints_table.sql`
   - `add_email_phone_fields.sql`
   - `chatbot_inquiries_table.sql`
   - `finance_and_comparison_tables.sql`
5. Run each one

### Or Use PlanetScale CLI:
```bash
# Install PlanetScale CLI
npm install -g @planetscale/cli

# Login
pscale auth login

# Connect and run SQL
pscale connect autos-direct --execute < your-file.sql
```

---

## 🎉 Done! Your App is Live

**Frontend:** https://your-app.vercel.app  
**Backend:** https://your-api.onrender.com

---

## 📊 What You Got (All Free)

- ✅ **Frontend Hosting** - Vercel (Forever free)
- ✅ **Backend Hosting** - Render (Free tier, sleeps after 15min)
- ✅ **Database** - PlanetScale (Free tier, 5GB storage)
- ✅ **SSL/HTTPS** - Automatic on both platforms
- ✅ **Auto-deploy** - Every GitHub push

---

## ⚠️ Important Notes

### Render Free Tier:
- Service sleeps after 15 minutes of inactivity
- First request takes ~30 seconds to wake up
- **Solution:** Use UptimeRobot.com (free) to ping every 5 minutes

### Keep Service Awake:
1. Go to https://uptimerobot.com
2. Sign up (free)
3. Add monitor:
   - URL: https://your-api.onrender.com
   - Interval: 5 minutes
4. Done! Service never sleeps!

---

## 🔧 Troubleshooting

### Backend not connecting to database?
- Double-check all MYSQL_* environment variables in Render
- Make sure PlanetScale database is running
- Check deployment logs in Render

### Frontend not connecting to backend?
- Make sure `VITE_API_URL` in Vercel points to your Render URL
- Check browser console for errors
- Redeploy both if needed

### Database connection timeout?
- PlanetScale may need to whitelist Render IPs
- Check PlanetScale dashboard for connection issues

---

## 🎯 Summary

**Total Setup Time:** ~20 minutes  
**Cost:** $0 forever  
**Services Used:** Vercel + Render + PlanetScale (all free!)  

**You're live and ready to go!** 🚀

