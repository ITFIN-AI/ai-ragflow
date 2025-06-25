#!/bin/bash

# RAGFlow Production Web Server Script
# This script serves the built web application in production after running deploy-build.sh

set -e

echo "🌐 RAGFlow Production Web Server"
echo "================================="

# Check if dist folder exists
if [ ! -d "web/dist" ]; then
    echo "❌ web/dist folder not found!"
    echo "💡 Please run ./deploy-build.sh first to build the frontend"
    exit 1
fi

echo "✅ Found built frontend in web/dist/"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is available
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 1  # Port is in use
    else
        return 0  # Port is available
    fi
}

echo ""
echo "🚀 Choose your production deployment method:"
echo ""
echo "1) 🐳 Full Docker Stack (Recommended - includes backend)"
echo "2) 🌍 Standalone Static Server (Frontend only)"
echo "3) 📦 Node.js Express Server (Frontend only with API proxy)"
echo "4) 🏗️ Nginx Configuration Generator"
echo "5) ✨ Python HTTP Server (Quick test)"
echo ""
read -p "Choose option (1-5): " choice

case $choice in
    1)
        echo ""
        echo "🐳 Starting Full Docker Stack..."
        
        # Check if Docker is installed
        if ! command_exists docker; then
            echo "❌ Docker is not installed. Please install Docker first."
            exit 1
        fi

        # Check if docker-compose file exists
        if [ ! -f "docker/docker-compose.yml" ]; then
            echo "❌ docker-compose.yml not found!"
            exit 1
        fi

        # Create .env if it doesn't exist
        if [ ! -f "docker/.env" ]; then
            echo "📝 Creating production .env file..."
            cat > docker/.env << 'EOF'
# RAGFlow Production Environment
RAGFLOW_IMAGE=infiniflow/ragflow:v0.19.1-slim
SVR_HTTP_PORT=9380
TIMEZONE=UTC
MYSQL_PASSWORD=infini_rag_flow_prod
MINIO_USER=rag_flow
MINIO_PASSWORD=infini_rag_flow_prod
REDIS_PASSWORD=infini_rag_flow_prod
ELASTIC_PASSWORD=infini_rag_flow_prod
DOC_ENGINE=elasticsearch
ES_PORT=1200
MYSQL_PORT=5455
MINIO_PORT=9000
MINIO_CONSOLE_PORT=9001
REDIS_PORT=6379
MEM_LIMIT=8073741824
EOF
            echo "✅ Created docker/.env file"
        fi

        # Set vm.max_map_count for Elasticsearch
        echo "🔧 Setting Elasticsearch requirements..."
        if [ "$(sysctl -n vm.max_map_count)" -lt 262144 ]; then
            sudo sysctl -w vm.max_map_count=262144
        fi

        echo "🚀 Starting Docker services..."
        cd docker
        docker compose up -d
        cd ..

        echo ""
        echo "✅ RAGFlow is starting up!"
        echo "🌐 Frontend: http://localhost:8080"
        echo "🔌 API: http://localhost:9380"
        echo "📋 Monitor: docker compose -f docker/docker-compose.yml logs -f"
        ;;

    2)
        echo ""
        echo "🌍 Setting up Standalone Static Server..."
        
        PORT=3000
        
        if command_exists npx; then
            echo "📦 Using 'serve' package..."
            if ! check_port $PORT; then
                PORT=3001
            fi
            echo "🚀 Starting static server on port $PORT..."
            echo "🌐 Open: http://localhost:$PORT"
            echo "⚠️  Note: This serves frontend only. Backend API must be running separately."
            cd web/dist && npx serve -s . -p $PORT
        elif command_exists python3; then
            echo "🐍 Using Python HTTP server..."
            if ! check_port $PORT; then
                PORT=3001
            fi
            echo "🚀 Starting Python server on port $PORT..."
            echo "🌐 Open: http://localhost:$PORT"
            echo "⚠️  Note: This serves frontend only. Backend API must be running separately."
            cd web/dist && python3 -m http.server $PORT
        else
            echo "❌ Neither npx nor python3 found!"
            echo "💡 Please install Node.js or Python to use this option"
            exit 1
        fi
        ;;

    3)
        echo ""
        echo "📦 Setting up Node.js Express Server with API Proxy..."
        
        # Create temporary Express server
        cat > temp-server.js << 'EOF'
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || 'http://localhost:9380';

// API Proxy
app.use('/api', createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  }
}));

app.use('/v1', createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/v1': '/v1'
  }
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'web/dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🔌 API proxy: ${API_URL}`);
  console.log('⚠️  Make sure your backend API is running on port 9380');
});
EOF

        # Install dependencies if needed
        if [ ! -f "package.json" ]; then
            echo "📦 Initializing Node.js project..."
            npm init -y
        fi

        echo "📦 Installing express and proxy middleware..."
        npm install express http-proxy-middleware

        echo "🚀 Starting Express server..."
        echo "🌐 Open: http://localhost:3000"
        echo "⚠️  Make sure backend API is running on port 9380"
        node temp-server.js
        ;;

    4)
        echo ""
        echo "🏗️ Generating Nginx Configuration..."
        
        NGINX_CONF="ragflow-production.conf"
        
        cat > $NGINX_CONF << 'EOF'
# RAGFlow Production Nginx Configuration
server {
    listen 80;
    server_name your-domain.com;  # Change this to your domain
    
    # Frontend static files
    root /path/to/ragflow/web/dist;  # Change this to your actual path
    index index.html;

    # Gzip compression
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 6;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;

    # API proxy to backend
    location ~ ^/(v1|api) {
        proxy_pass http://localhost:9380;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_buffering off;
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
    }

    # Frontend routes (SPA)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
}
EOF

        echo "✅ Generated Nginx configuration: $NGINX_CONF"
        echo ""
        echo "📝 To use this configuration:"
        echo "1. Edit the file and update:"
        echo "   - server_name: your-domain.com"
        echo "   - root: $(pwd)/web/dist"
        echo "2. Copy to Nginx sites-available:"
        echo "   sudo cp $NGINX_CONF /etc/nginx/sites-available/"
        echo "3. Enable the site:"
        echo "   sudo ln -s /etc/nginx/sites-available/$NGINX_CONF /etc/nginx/sites-enabled/"
        echo "4. Test and reload Nginx:"
        echo "   sudo nginx -t && sudo systemctl reload nginx"
        ;;

    5)
        echo ""
        echo "✨ Starting Python HTTP Server (Development/Testing)..."
        
        PORT=8000
        if ! check_port $PORT; then
            PORT=8001
        fi
        
        echo "🚀 Starting Python server on port $PORT..."
        echo "🌐 Open: http://localhost:$PORT"
        echo "⚠️  Note: This is for testing only. Backend API must be running separately."
        cd web/dist && python3 -m http.server $PORT
        ;;

    *)
        echo "❌ Invalid option. Please choose 1-5."
        exit 1
        ;;
esac 