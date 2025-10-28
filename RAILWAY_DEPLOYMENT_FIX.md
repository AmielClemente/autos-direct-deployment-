# Railway Deployment Fix

## ✅ Changes Made

I've fixed the Railway build error by adding the necessary configuration files:

1. **Procfile** - Tells Railway how to start your application
2. **.nvmrc** - Specifies Node.js version (18)
3. **railway.json** - Railway-specific configuration
4. **Updated connectionsConfig.js** - Now supports environment variables

## 🚀 Deploy to Railway Now

### Step 1: Push Changes to GitHub

The changes are ready to be committed. Run:

```bash
git add .
git commit -m "Add Railway configuration files"
git push
```

### Step 2: Deploy on Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository: `autos-direct-deployment-`
5. **In the project settings, set the root directory to**: `auto-direct-api`

### Step 3: Add MySQL Database

1. In your Railway project, click "New"
2. Select "Database" → "MySQL"
3. This will create a MySQL database automatically
4. Copy the database connection variables

### Step 4: Configure Environment Variables

In your Railway service, go to "Variables" and add:

```
NODE_ENV=production
PORT=3000
MYSQL_HOST=<from your database connection>
MYSQL_USER=<from your database connection>
MYSQL_PASSWORD=<from your database connection>
MYSQL_DATABASE=<from your database connection>
MYSQL_PORT=3306
JWT_SECRET=<generate a strong random string>
```

Railway provides these variables automatically when you add a database!

### Step 5: Import Your Database

You need to import your database schema. In Railway:

1. Go to your MySQL database
2. Click "Data" tab
3. Use the "Query" tab to run your SQL files from `auto-direct-api/data/`

Or use the MySQL CLI:
```bash
# Get connection string from Railway
mysql -h [host] -u [user] -p[password] [database] < data/autosdirect_db25.05.sql
```

### Step 6: Deploy

Railway will automatically:
- Detect Node.js
- Install dependencies
- Start your application using the Procfile

Your app will be available at: `https://your-app.railway.app`

## 📝 Environment Variables

For local development, create a `.env` file in `auto-direct-api/`:

```env
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASSWORD=12345678
MYSQL_DATABASE=autos-direct
MYSQL_PORT=3306
NODE_ENV=development
JWT_SECRET=your_secret_key
PORT=3000
```

## 🔧 Troubleshooting

### Build still failing?

1. Make sure you've pushed all changes to GitHub
2. Check the Railway build logs
3. Ensure the root directory is set to `auto-direct-api`

### Database connection errors?

1. Verify all environment variables are set
2. Check that the database is created and running
3. Test the connection from Railway's terminal

### Need to restart?

Railway automatically restarts on deployments. You can also:
1. Go to your service in Railway
2. Click "..." menu
3. Select "Restart"

## 📦 Files Created

- `auto-direct-api/Procfile` - Process configuration
- `auto-direct-api/.nvmrc` - Node.js version
- `auto-direct-api/railway.json` - Railway build config
- Updated `auto-direct-api/config/connectionsConfig.js` - Environment variable support

## 🎯 Next Steps After Backend Deployment

1. Get your Railway backend URL (e.g., `https://your-app.railway.app`)
2. Update the `VITE_API_URL` in Vercel to point to your Railway backend
3. Deploy frontend to Vercel (see `VERCEL_DEPLOY_STEPS.md`)

