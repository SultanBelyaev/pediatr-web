@echo off
echo Starting Telegram Bot for Pediatric Appointments...
echo.

REM Check if .env file exists
if not exist .env (
    echo ERROR: .env file not found!
    echo Please copy env.example to .env and configure it.
    echo.
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    npm install
    echo.
)

echo Starting bot...
npm start

pause
