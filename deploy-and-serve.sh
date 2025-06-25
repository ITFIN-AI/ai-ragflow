#!/bin/bash

# RAGFlow Build & Serve Script
# This script builds the frontend and immediately serves it in production

set -e

echo "🚀 RAGFlow Build & Serve Pipeline"
echo "=================================="

# Step 1: Build frontend
echo "📦 Step 1: Building frontend..."
if [ -f "./deploy-build.sh" ]; then
    ./deploy-build.sh
else
    echo "⚠️  deploy-build.sh not found, building manually..."
    cd web
    npm install
    npm run build
    cd ..
fi

echo "✅ Frontend build completed"

# Step 2: Auto-serve (Full Docker Stack)
echo ""
echo "🐳 Step 2: Starting Full Docker Stack..."

# Check if Docker is available
if ! command -v docker >/dev/null 2>&1; then
    echo "❌ Docker is not installed!"
    echo "💡 Using alternative serving method..."
    ./serve-production.sh
    exit 0
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
fi

# Set vm.max_map_count for Elasticsearch
echo "🔧 Setting Elasticsearch requirements..."
CURRENT_MAX_MAP=$(sysctl -n vm.max_map_count 2>/dev/null || echo "0")
if [ "$CURRENT_MAX_MAP" -lt 262144 ]; then
    echo "⚙️  Setting vm.max_map_count=262144..."
    sudo sysctl -w vm.max_map_count=262144
fi

# Start Docker services
echo "🚀 Starting RAGFlow services..."
cd docker
docker compose down 2>/dev/null || true  # Stop any existing services
docker compose up -d
cd ..

# Wait and check status
echo ""
echo "⏳ Waiting for services to start (30 seconds)..."
sleep 30

echo ""
echo "🔍 Checking service status..."
cd docker && docker compose ps && cd ..

echo ""
echo "🎉 RAGFlow is running!"
echo ""
echo "🌐 Access Points:"
echo "   Frontend: http://localhost:8080"
echo "   API: http://localhost:9380"
echo ""
echo "📋 Management Commands:"
echo "   View logs: docker compose -f docker/docker-compose.yml logs -f"
echo "   Stop: docker compose -f docker/docker-compose.yml down"
echo "   Restart: docker compose -f docker/docker-compose.yml restart"
echo ""
echo "⚠️  First startup may take a few minutes to download images and initialize databases" 