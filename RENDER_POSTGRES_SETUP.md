# 🆓 Use Render's FREE PostgreSQL (Included!)

## ✅ Here's What You Get (100% Free)

When you create a PostgreSQL database on Render, you get:
- ✅ Free for 90 days (plenty of time!)
- ✅ After that, just $7/month if you continue
- ✅ No credit card required for the first 90 days
- ✅ Works immediately

**This is the easiest free option!**

---

## 🚀 Setup (5 Minutes)

### Step 1: Create PostgreSQL on Render

1. In your Render dashboard (where your API is running)
2. Click **"New +"** button
3. Select **"PostgreSQL"**
4. Name it: `autos-direct-db`
5. Plan: **Free** (90 days free!)
6. Region: Same as your API
7. Click **"Create PostgreSQL Database"**
8. Wait 2-3 minutes

### Step 2: Get Connection String

1. Click on your new PostgreSQL database
2. Go to **"Info"** tab  
3. Find **"Internal Database URL"**
4. It looks like: `postgres://user:pass@host:5432/database`
5. **Copy this!**

### Step 3: Update Your Code for PostgreSQL

Your code currently uses MySQL. We need to convert it to PostgreSQL.

#### Install PostgreSQL package:

Add to `auto-direct-api/package.json` dependencies:
```json
"pg": "^8.11.3"
```

#### Update database connection:

Replace `auto-direct-api/config/connectionsConfig.js` with:

```javascript
const connectionConfig = {
  host: process.env.DB_HOST || process.env.DATABASE_URL?.split('@')[1]?.split(':')[0] || "localhost",
  user: process.env.DB_USER || process.env.DATABASE_URL?.split('://')[1]?.split(':')[0] || "root",
  password: process.env.DB_PASSWORD || process.env.DATABASE_URL?.split('@')[0]?.split(':')[2] || "password",
  database: process.env.DB_NAME || process.env.DATABASE_URL?.split('/').pop()?.split('?')[0] || "autos-direct",
  port: process.env.DB_PORT || 5432
}

const jwtKey = process.env.JWT_SECRET || "your-secret-key";

module.exports = {connectionConfig, jwtKey};
```

### Step 4: Set Environment Variables in Render

In your Render API service → Environment → Add:

```
DATABASE_URL=<paste-from-step-2>
JWT_SECRET=<any-random-string>
NODE_ENV=production
FRONTEND_URL=<your-vercel-url>
PORT=10000
```

### Step 5: Deploy!

1. Push the updated code to GitHub
2. Render auto-deploys
3. Done! 🎉

---

## ⚠️ Alternative: Keep MySQL Locally

If you want to avoid database conversion, you can:

1. **Run database on your computer** when testing
2. **Use this URL structure** in Render env vars:
   ```
   MYSQL_HOST=your-home-ip (use ngrok or similar)
   MYSQL_USER=root
   MYSQL_PASSWORD=your-local-password
   MYSQL_DATABASE=autos-direct
   MYSQL_PORT=3306
   ```

This requires:
- Keeping your computer on 24/7
- Using ngrok for external access
- Not ideal for production

---

## 🎯 My Recommendation

**Use Render's PostgreSQL** - it's truly free for 90 days and the easiest option!

After 90 days:
- Option 1: Pay $7/month to continue
- Option 2: Migrate to another service
- Option 3: Use a different database (many options available)

---

## 💡 Simplest Solution Right Now

Since you're already on Render, use their PostgreSQL which is **included for free**:

1. Create PostgreSQL database (3 clicks)
2. Copy connection string
3. Set as DATABASE_URL in environment
4. Done!

Want me to help you convert your code to use PostgreSQL instead of MySQL?

