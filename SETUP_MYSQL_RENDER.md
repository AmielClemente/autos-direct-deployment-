# 🚀 Quick MySQL Setup for Render

## Option 1: PlanetScale (Free MySQL) - 5 Minutes

### Step 1: Create PlanetScale Account
1. Go to https://planetscale.com
2. Sign up with GitHub
3. Create a new database

### Step 2: Get Connection Info
PlanetScale will give you something like:
```
host: aws.connect.psdb.cloud
user: xyz123
password: abc456
database: mydb
```

### Step 3: Add to Render
In Render → Environment Variables, add:
```
MYSQL_HOST=aws.connect.psdb.cloud
MYSQL_USER=xyz123
MYSQL_PASSWORD=abc456
MYSQL_DATABASE=mydb
MYSQL_PORT=3306
JWT_SECRET=<random-secret>
NODE_ENV=production
```

### Step 4: Deploy!
Render will automatically redeploy. Done! ✅

---

## Option 2: Aiven (Free MySQL Alternative)

1. Go to https://aiven.io
2. Create account
3. Create MySQL service
4. Get connection details
5. Add to Render (same as above)

---

## ✅ Quickest Path
**PlanetScale** is easiest - free, fast, and works perfectly with your existing code!

---

## 📝 Note
Your code uses MySQL, so use a MySQL database (not PostgreSQL).

