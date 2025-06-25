#!/bin/bash

# RAGFlow Local Build & Deployment Script
# This script builds the frontend locally and prepares for git deployment

set -e

echo "🏗️  RAGFlow Local Build & Deployment Script"
echo "============================================"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is not installed. Please install npm"
    exit 1
fi

if ! command_exists git; then
    echo "❌ git is not installed. Please install git"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version should be 18 or higher. Current: $(node --version)"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Build frontend
echo ""
echo "🏗️  Building frontend..."
cd web

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist directory not found"
    exit 1
fi

echo "✅ Frontend build completed successfully"

# Go back to root
cd ..

# Temporarily modify .gitignore to allow dist folder
echo ""
echo "📝 Preparing git deployment..."

# Create a backup of current .gitignore
cp web/.gitignore web/.gitignore.backup

# Remove /dist from web/.gitignore temporarily
sed -i.bak '/^\/dist$/d' web/.gitignore

echo "✅ Prepared for git deployment"

echo ""
echo "🎯 Next steps:"
echo "1. Review the changes: git status"
echo "2. Add files: git add ."
echo "3. Commit: git commit -m 'Production build'"
echo "4. Push: git push origin main"
echo "5. Deploy on server using provided server script"
echo ""
echo "📁 Built files are in: web/dist/"
echo "💡 To restore original .gitignore: mv web/.gitignore.backup web/.gitignore" 