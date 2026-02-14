#!/bin/bash
set -e

# Configurações
REGION="us-east-1"
ECR_REPO="266071991536.dkr.ecr.us-east-1.amazonaws.com/bia"
CLUSTER="biacreative-lion-8mjc1h"
SERVICE="bia-service-k9rfq1jz"
TASK_FAMILY="bia"

# Obter commit hash
COMMIT_HASH=$(git rev-parse --short=7 HEAD)
echo "🔖 Versão: $COMMIT_HASH"

# Login ECR
echo "🔐 Login no ECR..."
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ECR_REPO

# Build
echo "🔨 Build da imagem..."
docker build -t bia:$COMMIT_HASH .

# Tag e Push
echo "📤 Push para ECR..."
docker tag bia:$COMMIT_HASH $ECR_REPO:$COMMIT_HASH
docker push $ECR_REPO:$COMMIT_HASH

# Obter Task Definition atual
echo "📋 Criando nova Task Definition..."
TASK_DEF=$(aws ecs describe-task-definition --task-definition $TASK_FAMILY --region $REGION)

# Criar nova Task Definition com imagem versionada
NEW_TASK_DEF=$(echo $TASK_DEF | jq --arg IMAGE "$ECR_REPO:$COMMIT_HASH" '
  .taskDefinition |
  .containerDefinitions[0].image = $IMAGE |
  del(.taskDefinitionArn, .revision, .status, .requiresAttributes, .compatibilities, .registeredAt, .registeredBy)
')

aws ecs register-task-definition --region $REGION --cli-input-json "$NEW_TASK_DEF" > /dev/null

# Atualizar Service
echo "🚀 Atualizando Service..."
aws ecs update-service \
  --cluster $CLUSTER \
  --service $SERVICE \
  --task-definition $TASK_FAMILY \
  --region $REGION > /dev/null

echo "✅ Deploy concluído: $COMMIT_HASH"
echo "🔍 Acompanhe: aws ecs describe-services --cluster $CLUSTER --services $SERVICE --region $REGION"
