#!/bin/bash

# RAGFlow Server Deployment Script
# This script pulls the latest code and deploys RAGFlow on the production server

set -e

echo "🚀 RAGFlow Server Deployment Script"
echo "===================================="

# Configuration
RAGFLOW_DIR="ragflow"
DOCKER_COMPOSE_FILE="docker/docker-compose.yml"
ENV_FILE="docker/.env"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking server prerequisites..."

if ! command_exists git; then
    echo "❌ git is not installed. Please install git"
    exit 1
fi

if ! command_exists docker; then
    echo "❌ Docker is not installed. Please install Docker"
    exit 1
fi

if ! command_exists docker; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose"
    exit 1
fi

echo "✅ Server prerequisites check passed"

# Clone or update repository
echo ""
echo "📥 Updating RAGFlow repository..."

if [ -d "$RAGFLOW_DIR" ]; then
    echo "📁 Directory exists, pulling latest changes..."
    cd "$RAGFLOW_DIR"
    
    # Stop services if running
    if [ -f "$DOCKER_COMPOSE_FILE" ]; then
        echo "🛑 Stopping existing services..."
        docker compose -f "$DOCKER_COMPOSE_FILE" down || true
    fi
    
    # Pull latest changes
    git fetch origin
    git reset --hard origin/main
    git pull origin main
else
    echo "📁 Cloning repository..."
    git clone https://github.com/infiniflow/ragflow.git "$RAGFLOW_DIR"
    cd "$RAGFLOW_DIR"
fi

echo "✅ Repository updated successfully"

# Set up environment
echo ""
echo "⚙️  Setting up environment..."

# Check if .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "📝 Creating .env file from example..."
    # Create basic .env file
    cat > "$ENV_FILE" << EOF
# RAGFlow Environment Configuration
RAGFLOW_IMAGE=infiniflow/ragflow:v0.19.1-slim
SVR_HTTP_PORT=9380
TIMEZONE=UTC
MYSQL_PASSWORD=infini_rag_flow
MINIO_USER=rag_flow
MINIO_PASSWORD=infini_rag_flow
REDIS_PASSWORD=infini_rag_flow
ELASTIC_PASSWORD=infini_rag_flow
DOC_ENGINE=elasticsearch
ES_PORT=1200
MYSQL_PORT=5455
MINIO_PORT=9000
MINIO_CONSOLE_PORT=9001
REDIS_PORT=6379
MEM_LIMIT=8073741824
EOF
    echo "✅ Created default .env file"
    echo "⚠️  Please review and modify docker/.env with your production settings"
else
    echo "✅ Using existing .env file"
fi

# Set proper permissions
echo "🔐 Setting proper permissions..."
chmod +x docker/entrypoint.sh || true

# Check vm.max_map_count for Elasticsearch
echo ""
echo "🔍 Checking Elasticsearch requirements..."
CURRENT_MAX_MAP_COUNT=$(sysctl vm.max_map_count | cut -d'=' -f2 | tr -d ' ')
REQUIRED_MAX_MAP_COUNT=262144

if [ "$CURRENT_MAX_MAP_COUNT" -lt "$REQUIRED_MAX_MAP_COUNT" ]; then
    echo "⚠️  vm.max_map_count is $CURRENT_MAX_MAP_COUNT, setting to $REQUIRED_MAX_MAP_COUNT"
    sudo sysctl -w vm.max_map_count=$REQUIRED_MAX_MAP_COUNT
    
    # Make it permanent
    if ! grep -q "vm.max_map_count" /etc/sysctl.conf; then
        echo "vm.max_map_count=$REQUIRED_MAX_MAP_COUNT" | sudo tee -a /etc/sysctl.conf
    fi
else
    echo "✅ vm.max_map_count is already set correctly"
fi

# Start services
echo ""
echo "🚀 Starting RAGFlow services..."

# Pull latest Docker images
echo "📥 Pulling Docker images..."
docker compose -f "$DOCKER_COMPOSE_FILE" pull

# Start services
echo "🔄 Starting services..."
docker compose -f "$DOCKER_COMPOSE_FILE" up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to start..."
sleep 30

# Check service status
echo ""
echo "🔍 Checking service status..."
docker compose -f "$DOCKER_COMPOSE_FILE" ps

# Check if RAGFlow server is responding
echo ""
echo "🏥 Health check..."
for i in {1..10}; do
    if curl -s -f http://localhost:9380/health >/dev/null 2>&1; then
        echo "✅ RAGFlow server is healthy!"
        break
    else
        if [ $i -eq 10 ]; then
            echo "⚠️  RAGFlow server health check failed after 10 attempts"
            echo "📋 Check logs with: docker compose -f $DOCKER_COMPOSE_FILE logs ragflow"
        else
            echo "⏳ Waiting for RAGFlow server... (attempt $i/10)"
            sleep 10
        fi
    fi
done

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "🌐 Access RAGFlow at:"
echo "   Web UI: http://$(hostname -I | awk '{print $1}'):8080"
echo "   API: http://$(hostname -I | awk '{print $1}'):9380"
echo ""
echo "📋 Useful commands:"
echo "   View logs: docker compose -f $DOCKER_COMPOSE_FILE logs -f"
echo "   Stop services: docker compose -f $DOCKER_COMPOSE_FILE down"
echo "   Restart services: docker compose -f $DOCKER_COMPOSE_FILE restart"
echo ""
echo "⚙️  Configuration file: $ENV_FILE" 