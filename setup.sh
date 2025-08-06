#!/bin/bash

echo "🚀 Setting up The Cosmic Architect Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node --version)"
    echo "   Please upgrade Node.js"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create environment file if it doesn't exist
if [ ! -f "portfolio/.env.local" ]; then
    echo ""
    echo "⚙️ Creating environment file..."
    cp portfolio/.env.example portfolio/.env.local
    echo "✅ Environment file created at portfolio/.env.local"
else
    echo "✅ Environment file already exists"
fi

# Success message
echo ""
echo "🎉 Setup complete! Here's how to run the project:"
echo ""
echo "🌌 Start the portfolio website:"
echo "   npm run portfolio:dev"
echo ""
echo "🌐 Then visit: http://localhost:3000"
echo ""
echo "📚 For full setup with database and email, edit:"
echo "   portfolio/.env.local"
echo ""
echo "🚀 Ready to explore the cosmos of code!"