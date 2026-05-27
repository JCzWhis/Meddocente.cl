# ReumaIndex.com

React + TypeScript SPA (Vite) desplegada en Netlify. Fuente del sitio reumaindex.com.

## Stack

- **Framework**: React 18 + TypeScript + Vite 5.4
- **CSS**: Tailwind CSS 3.4 + shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **Data**: TanStack React Query v5
- **UI Components**: shadcn/ui (40+ components)
- **Forms**: react-hook-form + zod validation
- **Deploy**: Netlify (auto-deploy on push to main)

## Comandos

```bash
npm run dev      # servidor local en localhost:8080
npm run build    # build de producción en dist/
npm run preview  # preview del build localmente
npm run lint     # ESLint check
```

## Estructura clave

```
src/
├── pages/
│   ├── Index.tsx           # homepage (app ReumaIndex, features, podcast, capichile)
│   ├── Recursos.tsx        # descarga de la app + CapiChile
│   ├── Podcast.tsx         # Reum-AI podcast
│   ├── Investigacion.tsx   # research tools hub
│   ├── Apoyanos.tsx        # support/donations
│   ├── Contacto.tsx        # contact form
│   ├── AvisoLegal.tsx      # legal + privacidad app
│   ├── CapiChile.tsx       # CapiChile software
│   └── ...subrutas/        # sub-pages for research tools
├── components/
│   ├── Header.tsx          # navigation bar (fixed, scrollable)
│   ├── Footer.tsx          # footer with links + branding
│   ├── Layout.tsx          # wrapper component
│   └── ui/                 # shadcn/ui components (button, card, etc.)
├── App.tsx                 # router setup
├── main.tsx                # React entry point
└── index.css               # Tailwind + global brand tokens
public/
├── index.html              # Vite HTML template
├── _redirects              # Netlify SPA routing
├── .htaccess               # Apache SPA routing (legacy)
└── *.png, *.svg            # logos, badges, assets
```

## Marca

- **Nombre principal**: ReumaIndex
- **Organización**: MedDocenteIA (Dr. Cruz) — solo aparece como crédito
- **Color primario**: `#00C2CB` (brand-primary)
- **Color secundario**: `#002855` (brand-secondary)
- **Contacto**: contacto@drcruz.cl
- **Social**: @meddocenteia (Instagram), @reumaindex (Twitter/X)

## Links de la app

- **Google Play**: https://play.google.com/store/apps/details?id=com.reumaindex.app
- **App Store**: https://apps.apple.com/cl/app/reumaindex/[ID_REAL]
- **Buy Me a Coffee**: https://buymeacoffee.com/reumaindex

## Rutas principales

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | Index | Homepage con hero, features, ecosystem |
| `/recursos` | Recursos | Descarga ReumaIndex + CapiChile |
| `/podcast` | Podcast | Reum-AI podcast preview + links |
| `/investigacion` | Investigacion | Research tools hub (6 categorías) |
| `/investigacion/*` | Sub-routes | Individual tool categories |
| `/apoyanos` | Apoyanos | Support/donation page |
| `/contacto` | Contacto | Contact form |
| `/aviso-legal` | AvisoLegal | Legal + privacy policy |
| `/capichile` | CapiChile | CapiChile desktop app downloads |
| `*` | NotFound | 404 fallback |

## Notas importantes

1. **Nested repo**: `Meddocente.cl/` es un repositorio git independiente dentro del repo padre `reumaindex.com`. No es un submodule — tiene su propio `.git/` y su propio remote en GitHub.

2. **SPA routing**: 
   - Netlify: usa `public/_redirects` → `/* /index.html 200`
   - Apache: usa `public/.htaccess` (legacy)

3. **Build**: No se commitea `dist/` — Netlify genera el build automáticamente en cada push a `main`.

4. **Branding**: 
   - El sitio se llama "ReumaIndex" como marca principal
   - "MedDocenteIA" aparece SOLO como crédito (footer, aviso legal)
   - Mantener "MedDocente" limitado a referencias históricas o sociales (@meddocenteia Instagram)

5. **Assets**: 
   - Logos: `reumai_logo.jpg` (Reum-AI), `app_icon.png` (ReumaIndex app)
   - Badges: `google-play-badge.svg`, `app-store-badge.svg`
   - CapiChile logo: `Logo.png`

## Futuras mejoras

- [ ] Stats bar animado (50 Calculadoras, 24 Criterios, etc.)
- [ ] App Store link real (actualizar placeholder ID)
- [ ] Mockup de pantalla de la app en el hero
- [ ] Sitemap.xml para SEO
- [ ] Tests E2E (Playwright)
- [ ] Analytics setup (Hotjar, Fathom, etc.)
