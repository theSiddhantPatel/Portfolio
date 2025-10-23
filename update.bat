@echo off
title 🚀 GitHub Portfolio Auto Update
echo.
echo ============================================
echo   🚀 Updating your Portfolio Repository...
echo ============================================
echo.

:: Move to your project folder
cd /d "C:\path\to\Portfolio"

:: Check Git status
echo 🔍 Checking for changes...
git status
echo.

:: Add all changes
echo ➕ Adding all changes...
git add .
echo.

:: Commit changes with timestamp
set timestamp=%date% %time%
git commit -m "🧩 Update: %timestamp%"
echo.

:: Pull latest changes from GitHub
echo 🔄 Pulling latest changes from remote...
git pull origin main
echo.

:: Push changes to GitHub
echo 📤 Pushing updates to GitHub...
git push origin main
echo.

echo ✅ Code pushed successfully!
pause
