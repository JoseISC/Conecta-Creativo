# Conecta-Creativo

> Marketplace de industrias creativas + Agencia de marketing digital para creadores en LATAM

## 🎯 Propuesta de Valor

Conecta-Creativo es la primera plataforma que integra **marketplace**, **agencia de marketing automatizada** y **sistema de exhibición física con QR** para la industria creativa en Latinoamérica.

### Para Creadores (artesanos, artistas, diseñadores, performers):
- Portafolio profesional optimizado con visibilidad garantizada
- Motor de marketing automatizado (promoción en redes, SEO, campañas)
- Canal de ventas directas + exhibición física en espacios comerciales
- Analytics de rendimiento y recomendaciones IA

### Para Clientes (empresas, restaurantes, eventos):
- Acceso a un catálogo curado de servicios creativos
- Sistema de arriendo/exhibición de arte con QR para venta indirecta
- Contratación directa de performers, músicos, decoradores
- Mejora de experiencia de cliente con estética creativa

---

## 💰 Modelo de Negocio

| Fuente de ingreso | Descripción | % / Precio |
|---|---|---|
| Comisión por venta | Sobre cada transacción vía QR o marketplace | 8-15% |
| Suscripción Creador Pro | Marketing avanzado, analytics, prioridad | $9.990 CLP/mes |
| Suscripción Espacio | Exhibición rotativa + QR tracking | $29.990 CLP/mes |
| Campañas destacadas | Boost de visibilidad en la plataforma | Desde $4.990 CLP |
| Servicio de marketing | Gestión de redes y contenido para creadores | Custom |

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js 14)                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Web App  │  │  Mobile  │  │  Admin   │              │
│  │ (SSR/SSG)│  │  (PWA)   │  │  Panel   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────┬───────────────────────────────┘
                          │ REST + WebSocket
┌─────────────────────────┴───────────────────────────────┐
│                   BACKEND (NestJS)                        │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │  Auth  │ │Market- │ │  QR &  │ │Market- │           │
│  │Module  │ │ place  │ │Tracking│ │  ing   │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │Payments│ │Matching│ │Analytics│ │ Spaces │           │
│  │Module  │ │ Engine │ │ Module │ │ Module │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────────┐
│                    DATA LAYER                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │PostgreSQL│  │  Redis   │  │   S3     │              │
│  │ (Prisma) │  │ (Cache)  │  │ (Assets) │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘

Integraciones externas:
├── MercadoPago / Stripe (Pagos)
├── Cloudinary (Imágenes/Video)
├── SendGrid (Email)
├── Meta/Google Ads API (Marketing)
└── OpenAI (Recomendaciones IA)
```

---

## 📦 Módulos Principales

### 1. Marketplace
- Catálogo de servicios creativos con filtros avanzados
- Sistema de búsqueda con relevancia y geolocalización
- Carrito y checkout integrado
- Reviews y ratings

### 2. Gestión de Perfiles Creativos
- Portfolio tipo galería con multimedia
- Categorías: Artesanía, Música, Performance, Decoración, Diseño, Gastronomía creativa
- Badge de verificación
- Disponibilidad y calendario

### 3. Sistema de Arriendo/Exhibición
- Catálogo de espacios disponibles (restaurantes, oficinas, cafés)
- Matching producto-espacio por estilo y tamaño
- Contratos de exhibición con rotación mensual
- Dashboard de espacio para dueños de local

### 4. QR & Tracking
- Generación automática de QR por producto exhibido
- Landing page por producto (mobile-optimized)
- Tracking de escaneos: ubicación, hora, conversión
- Compra directa desde QR

### 5. Motor de Marketing
- Creación automática de contenido para redes
- Scheduling de publicaciones
- Campañas pagadas con presupuesto configurable
- SEO interno: ranking por categoría, zona, keywords
- Recomendaciones IA para mejorar perfil y ventas

### 6. Matching Inteligente
- Algoritmo que conecta necesidades de clientes con creativos
- Factores: ubicación, estilo, presupuesto, disponibilidad, rating
- Sugerencias proactivas a clientes

---

## 👤 Flujos de Usuario

### Cliente (Empresa/Persona)

```
Registro → Define necesidad → Explora catálogo → Filtra creativos
    → Cotiza/Contrata → Paga → Recibe servicio → Review
                    ó
    → Suscribe espacio → Recibe arte → QR activo → Ventas indirectas
```

### Creador (Artista/Artesano)

```
Registro → Crea portfolio → Sube productos/servicios → Optimiza perfil
    → Recibe propuestas / aparece en búsquedas → Cotiza → Entrega
    → Cobra → Usa herramientas de marketing → Crece
```

---

## 🗺️ Roadmap

### MVP (Fase 1) — Actual
- [x] Estructura de proyecto (monorepo)
- [x] Backend API base (NestJS + Prisma + PostgreSQL)
- [x] Frontend base (Next.js 14 + Tailwind)
- [ ] Auth (registro/login con email)
- [ ] Perfiles de creadores (CRUD básico)
- [ ] Catálogo de servicios/productos
- [ ] Sistema de QR básico (generación + landing)
- [ ] Pagos con MercadoPago

### Fase 2 — Marketplace Completo
- [ ] Sistema de contratación y cotización
- [ ] Reviews y ratings
- [ ] Chat entre cliente y creador
- [ ] Dashboard analytics básico
- [ ] Sistema de arriendo de espacios

### Fase 3 — Marketing Engine
- [ ] Motor de recomendaciones IA
- [ ] Integración con redes sociales
- [ ] Campañas pagadas
- [ ] SEO interno avanzado
- [ ] Content generation asistido

### Fase 4 — Escalamiento
- [ ] App móvil nativa (React Native)
- [ ] Expansión a otros países LATAM
- [ ] API pública para integraciones
- [ ] Programa de afiliados
- [ ] Marketplace de templates para portfolios

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Justificación |
|------|-----------|---------------|
| Frontend | Next.js 14, React 18, TypeScript | SSR/SSG para SEO, App Router |
| Estilos | Tailwind CSS, shadcn/ui | Desarrollo rápido, consistencia |
| Backend | NestJS, TypeScript | Modular, escalable, bien tipado |
| ORM | Prisma | Type-safe, migraciones, seeding |
| DB | PostgreSQL | Relacional, robusto, extensible |
| Cache | Redis | Sesiones, cache de queries |
| Auth | JWT + Refresh tokens | Stateless, escalable |
| Pagos | MercadoPago SDK | Estándar LATAM |
| Storage | Cloudinary / S3 | Imágenes y videos optimizados |
| QR | qrcode (npm) | Generación dinámica |
| Testing | Jest, Supertest, Playwright | Unit + E2E |
| CI/CD | GitHub Actions | Automatización |
| Deploy | Vercel (front) + Railway (back) | Simple para MVP |

---

## 💡 Ideas Innovadoras

1. **QR Dinámico con Analytics**: Cada QR tiene dashboard con heatmap de escaneos
2. **IA de Pricing**: Sugiere precios basados en mercado local y competencia
3. **Rotación Automática de Arte**: Algoritmo que rota piezas en espacios para maximizar ventas
4. **Creador del Mes**: Gamificación + exposición premium
5. **Marketplace de Experiencias**: No solo productos — experiencias creativas reservables
6. **API de Embeds**: Widgets para que restaurantes muestren su "galería" en su propia web
7. **NFT Bridge**: Certificados de autenticidad digital para piezas únicas
8. **Colaboraciones**: Matching entre creadores para proyectos conjuntos

---

## 🚀 Desarrollo Local

### Prerrequisitos
- Node.js >= 20
- pnpm >= 9
- PostgreSQL 15+ (o Docker)

### Instalación

```bash
# Clonar e instalar dependencias
pnpm install

# Configurar variables de entorno
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env

# Ejecutar migraciones
pnpm --filter backend db:migrate

# Seed de datos de ejemplo
pnpm --filter backend db:seed

# Iniciar en desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
pnpm dev          # Inicia frontend + backend en modo desarrollo
pnpm build        # Build de producción
pnpm lint         # Ejecuta ESLint en todo el monorepo
pnpm test         # Ejecuta todos los tests
pnpm test:e2e     # Tests end-to-end
```

---

## 📁 Estructura del Proyecto

```
conecta-creativo/
├── apps/
│   ├── frontend/          # Next.js 14 (App Router)
│   │   ├── src/
│   │   │   ├── app/       # Routes
│   │   │   ├── components/# UI Components
│   │   │   ├── lib/       # Utilities
│   │   │   └── styles/    # Global styles
│   │   └── package.json
│   └── backend/           # NestJS API
│       ├── src/
│       │   ├── modules/   # Feature modules
│       │   ├── common/    # Shared utilities
│       │   └── prisma/    # DB schema & migrations
│       └── package.json
├── packages/
│   └── shared/            # Shared types & utils
├── package.json           # Workspace root
├── pnpm-workspace.yaml
├── turbo.json             # Turborepo config
└── README.md
```

---

## 📄 Licencia

Propietario — Conecta-Creativo © 2024
