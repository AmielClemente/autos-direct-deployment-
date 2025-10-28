# Render Environment Variables - Complete Guide

## 🎯 Essential Variables (Minimum Required)

When deploying to Render, you need these environment variables:

### 1. **DATABASE_URL** ⭐ (CRITICAL)
```
DATABASE_URL=postgresql://user:password@hostname:port/database_name
```
**How to get:**
1. In Render dashboard, go to your PostgreSQL database
2. Click "Connect" or "Info" tab
3. Copy the "Internal Database URL" or "Connection String"
4. It looks like: `postgres://user:pass@host:5432/dbname`

---

### 2. **JWT_SECRET** (For Authentication)
```
JWT_SECRET=any-random-secure-string-here
```
**How to generate:**
Run this command (or use any random string):
```bash
openssl rand -base64 32
```

Or just use something like:
```
JWT_SECRET=my-super-secret-jwt-key-for-production-12345
```
**IMPORTANT:** Use a LONG, random, secure string!

---

### 3. **NODE_ENV**
```
NODE_ENV=production
```
**Always set to:** `production`

---

### 4. **PORT** (Optional - Render sets this automatically)
```
PORT=10000
```
**Note:** Render automatically sets this for you, but you can leave it as `10000`

---

### 5. **FRONTEND_URL** (For email invitations)
```
FRONTEND_URL=https://your-frontend.vercel.app
```
**Set this to your deployed frontend URL** (from Vercel)

**If not using frontend yet:**
```
FRONTEND_URL=http://localhost:5173
```

---

## 🚀 Step-by-Step: Setting Up Environment Variables on Render

### Step 1: Get Your Database URL

1. In Render dashboard, find your PostgreSQL database service
2. Click on it
3. Go to "Info" or "Connect" tab
4. Find "Internal Database URL" or "Connection String"
5. Copy it - looks like: `postgresql://user:pass@host:5432/dbname`

### Step 2: Add Environment Variables

1. Go to your **Web Service** (the API, not the database)
2. Click on "Environment" tab
3. Click "Add Environment Variable" for each variable:

#### Variable #1: DATABASE_URL
- **Name:** `DATABASE_URL`
- **Value:** (paste from Step 1)
- **Add**

#### Variable #2: JWT_SECRET
- **Name:** `JWT_SECRET`
- **Value:** (generate a random string, 40+ characters)
  Example: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0`
- **Add**

#### Variable #3: NODE_ENV
- **Name:** `NODE_ENV`
- **Value:** `production`
- **Add**

#### Variable #4: FRONTEND_URL
- **Name:** `FRONTEND_URL`
- **Value:** `https://your-frontend.vercel.app` (or `http://localhost:5173`)
- **Add**

#### Variable #5: PORT (Optional)
- **Name:** `PORT`
- **Value:** `10000`
- **Add**

### Step 3: Save and Deploy

1. Scroll down and click **"Save Changes"**
2. Render will automatically redeploy with new variables
3. Wait 2-3 minutes for deployment to complete

---

## 📋 Quick Copy-Paste Variables

Here's what you need to add to Render:

```env
DATABASE_URL=postgresql://user:password@host:5432/database
JWT_SECRET=generate-a-random-secure-string-here
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
PORT=10000
```

**Replace the values with your actual data!**

---

## 🎯 Complete Example

Here's what your Render environment variables should look like:

```env
# Database (from Render PostgreSQL)
DATABASE_URL=postgres://autodirect:abc123xyz@dpg-abc123-0.frankfurt-postgres.render.com:5432/autodirect_db

# Security
JWT_SECRET=K7mN8oP9qR0sT1uV2wX3yZ4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0

# Environment
NODE_ENV=production

# Frontend URL (your Vercel deployment)
FRONTEND_URL=https://auto-direct-app.vercel.app

# Port (Render sets this automatically)
PORT=10000
```

---

## 🔧 Email Configuration (Optional)

If you want email notifications to work, you might need these (check your email-config.js):

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, you need an [App Password](https://support.google.com/accounts/answer/185833), not your regular password!

---

## ⚠️ Important Notes

### ✅ DO
- Use long, random strings for JWT_SECRET
- Use "Internal Database URL" from Render (not public)
- Keep your DATABASE_URL secret
- Use HTTPS URLs for production

### ❌ DON'T
- Don't commit these to GitHub
- Don't share these values publicly
- Don't use weak strings for JWT_SECRET
- Don't use localhost for FRONTEND_URL in production

---

## 🐛 Troubleshooting

### "Cannot connect to database"
- Check DATABASE_URL is correct
- Make sure database is running
- Use "Internal Database URL" not external

### "Authentication failed"
- Check JWT_SECRET is set
- Make sure it's at least 40 characters

### "Email not working"
- Check email credentials are correct
- For Gmail, use App Password (not regular password)
- Check spam folders

---

## 📊 Minimum vs Complete Setup

### Minimum (To Get Started):
```env
DATABASE_URL=...
JWT_SECRET=...
NODE_ENV=production
```

### Complete (All Features):
```env
DATABASE_URL=...
JWT_SECRET=...
NODE_ENV=production
FRONTEND_URL=...
PORT=10000
EMAIL_SERVICE=gmail
EMAIL_USER=...
EMAIL_PASS=...
```

**Start with minimum, add more as needed!**

---

## 🎉 You're Done!

Once these variables are set:
1. Render will automatically redeploy
2. Your API will be live in ~2 minutes
3. Test at: `https://your-api.onrender.com/health`

**Need help?** Check the deployment logs in Render dashboard!

