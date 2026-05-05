# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Conecta-Creativo is a monorepo (pnpm workspaces + Turborepo) with:
- **Backend**: NestJS API at `apps/backend/` (port 3001)
- **Frontend**: Next.js 14 App Router at `apps/frontend/` (port 3000)
- **Shared types**: `packages/shared/`

### Prerequisites

- Node.js >= 20 (installed via nodesource)
- pnpm (globally installed)
- PostgreSQL 16 running locally

### Starting Services

```bash
# Start PostgreSQL (required before backend)
pg_ctlcluster 16 main start

# Install deps & generate Prisma client
pnpm install
cd apps/backend && npx prisma generate && cd ../..

# Start backend (port 3001)
cd apps/backend && npx nest start --watch

# Start frontend (port 3000)
cd apps/frontend && npx next dev --port 3000
```

### Key Commands

| Action | Command | Working Dir |
|--------|---------|-------------|
| Install deps | `pnpm install` | `/workspace` |
| Backend lint | `pnpm --filter backend lint` | `/workspace` |
| Frontend lint | `pnpm --filter frontend lint` | `/workspace` |
| Backend tests | `pnpm --filter backend test` | `/workspace` |
| Backend build | `pnpm --filter backend build` | `/workspace` |
| Frontend build | `pnpm --filter frontend build` | `/workspace` |
| Prisma migrate | `npx prisma migrate dev` | `apps/backend` |
| Prisma generate | `npx prisma generate` | `apps/backend` |

### Non-obvious Caveats

- PostgreSQL must be started manually: `pg_ctlcluster 16 main start` — it does not auto-start.
- The database `conecta_creativo` must exist with user `postgres` / password `postgres`.
- After modifying `prisma/schema.prisma`, run `npx prisma migrate dev` then `npx prisma generate`.
- Backend `tsconfig.json` excludes `test/` dir — there's a separate `tsconfig.test.json` for test files used by ESLint.
- The `pnpm.onlyBuiltDependencies` field in root `package.json` allows build scripts for Prisma and NestJS packages (no interactive `pnpm approve-builds` needed).
- Frontend env var `NEXT_PUBLIC_API_URL` defaults to `http://localhost:3001/api`.
- The Swagger API docs are available at `http://localhost:3001/api/docs` when the backend is running.
