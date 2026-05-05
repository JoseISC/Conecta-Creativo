FROM node:20-alpine AS base

RUN apk add --no-cache openssl

RUN corepack enable && corepack prepare pnpm@10.33.3 --activate

WORKDIR /app

# Copy workspace config
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/shared/ ./packages/shared/
COPY apps/backend/ ./apps/backend/

# Generate Prisma client
WORKDIR /app/apps/backend
RUN npx prisma generate

# Build
RUN npx nest build

COPY apps/backend/docker-entrypoint.sh /app/apps/backend/docker-entrypoint.sh
RUN chmod +x /app/apps/backend/docker-entrypoint.sh

EXPOSE 3001

ENTRYPOINT ["/app/apps/backend/docker-entrypoint.sh"]
