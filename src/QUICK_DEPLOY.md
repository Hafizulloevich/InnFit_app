# ⚡ Quick Deploy Commands

Copy and paste these commands to deploy your ImmFit app to GitHub in under 5 minutes!

---

## 🚀 Commands to Run (in order)

### 1️⃣ Navigate to your project folder
```bash
cd /path/to/your/project
```
*Replace `/path/to/your/project` with your actual folder path*

---

### 2️⃣ Initialize Git
```bash
git init
```

---

### 3️⃣ Add all files
```bash
git add .
```

---

### 4️⃣ Commit files
```bash
git commit -m "Initial commit: Deploy ImmFit app"
```

---

### 5️⃣ Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/innFit_application.git
```
**⚠️ IMPORTANT:** Replace `YOUR_USERNAME` with your actual GitHub username!

---

### 6️⃣ Set main branch
```bash
git branch -M main
```

---

### 7️⃣ Push to GitHub
```bash
git push -u origin main
```

---

## ✅ After Running These Commands:

1. ✅ Your code is now on GitHub
2. ✅ Go to https://vercel.com
3. ✅ Sign in with GitHub
4. ✅ Click "Import Project"
5. ✅ Select "innFit_application"
6. ✅ Click "Deploy"
7. ✅ Wait 2-3 minutes
8. ✅ Your app is LIVE! 🎉

---

## 📱 Your Live URL:
```
https://innfit-application.vercel.app
```

---

## 🔄 To Update Later:
```bash
git add .
git commit -m "Updated something"
git push
```
*Vercel will auto-deploy in 1-2 minutes*

---

## ⚠️ Before You Start:

Make sure you have:
- ✅ Created a GitHub repository named: `innFit_application`
- ✅ Git installed on your computer
- ✅ Opened Terminal/Command Prompt
- ✅ Navigated to your project folder

---

## 🆘 Common Issues:

**"git: command not found"**
→ Install Git: https://git-scm.com/downloads

**"remote origin already exists"**
→ Run: `git remote remove origin` then try Step 5 again

**"Permission denied"**
→ You need a GitHub Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select `repo` scope
4. Copy the token
5. Use it as your password when pushing

---

**That's it! You're ready to deploy! 🚀**
