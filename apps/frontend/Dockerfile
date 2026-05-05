FROM node:20-alpine AS base

RUN corepack enable && corepack prepare pnpm@10.33.3 --activate

WORKDIR /app

# Copy workspace config
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/shared/ ./packages/shared/
COPY apps/frontend/ ./apps/frontend/

# Build
WORKDIR /app/apps/frontend
RUN npx next build

EXPOSE 3000

CMD ["npx", "next", "start", "--port", "3000"]
