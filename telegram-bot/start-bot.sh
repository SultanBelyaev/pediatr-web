#!/bin/bash

echo "Starting Telegram Bot for Pediatric Appointments..."
echo

# Check if .env file exists
if [ ! -f .env ]; then
    echo "ERROR: .env file not found!"
    echo "Please copy env.example to .env and configure it."
    echo
    exit 1
fi

# Check if node_modules exists
if [ ! -d node_modules ]; then
    echo "Installing dependencies..."
    npm install
    echo
fi

echo "Starting bot..."
npm start
