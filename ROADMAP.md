# Roadmap de Mejoras — ReumaIndex.com

Mejoras planificadas para futuras iteraciones, organizadas por prioridad e impacto.

---

## 🔴 Críticas (P0) — Necesarias para producción

### 1. App Store Link Real
**Estado**: Pendiente  
**Archivos**: `src/pages/Index.tsx` (línea ~89), `src/pages/Recursos.tsx` (línea ~59)  
**Qué**: Reemplazar placeholder `id1234567890` con el ID real de la app en App Store.  
**Por qué**: Link no funcional causa conversión nula.  
**Estimado**: 5 min (requiere ID real de Apple)

### 2. Analytics Configurado
**Estado**: Pendiente  
**Archivos**: `src/main.tsx` (setup de script), `vite.config.ts` (opciones)  
**Qué**: Integrar Google Analytics, Fathom, o Hotjar para medir uso.  
**Por qué**: Sin data de usuarios, no se puede optimizar.  
**Opciones**:
- Google Analytics (gratuito, orientado a estadísticas)
- Fathom (privacidad, GDPR-friendly, ~14 USD/mes)
- Hotjar (heatmaps, recording, ~39 USD/mes)  
**Estimado**: 30 min

---

## 🟡 Altas (P1) — Mejoran significativamente la experiencia

### 3. Stats Bar Animado
**Estado**: Diseño listo, código no  
**Archivos**: `src/pages/Index.tsx` (insertar entre Privacy y Podcast)  
**Qué**: Sección con contadores animados:
- 50 Calculadoras
- 24 Criterios
- 9 Paneles de anticuerpos
- 62 Fármacos  
**Componente**: Cards con números que cuentan desde 0 hasta el valor final (fade-in on scroll).  
**Por qué**: Destaca la amplitud del producto.  
**Estimado**: 45 min

### 4. App Screenshot Mockup en Hero
**Estado**: Diseño conceptual  
**Archivos**: `src/pages/Index.tsx` (reemplazar `app_icon.png`)  
**Qué**: Mostrar un mockup de pantalla de teléfono con la UI real de la app en el hero.  
**Recursos**: Necesita captura real de la app móvil o mockup diseñado en Figma.  
**Por qué**: Muestra el producto real, no solo un ícono.  
**Alternativa**: Si no hay screenshot, mantener icono pero animarlo (rotate, hover effect).  
**Estimado**: 1-2 horas (depends on design)

### 5. Sitemap.xml para SEO
**Estado**: Pendiente  
**Archivos**: `public/sitemap.xml` (crear)  
**Qué**: Listar todas las rutas del sitio para indexación en buscadores.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://reumaindex.com/</loc>
    <lastmod>2026-05-27</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- ... más rutas ... -->
</urlset>
```
**Por qué**: Mejora indexación SEO.  
**Estimado**: 20 min

---

## 🟢 Medias (P2) — Mejoras de calidad de código y mantenibilidad

### 6. Tests E2E con Playwright
**Estado**: Pendiente  
**Archivos**: Crear `playwright.config.ts` + `tests/` directorio  
**Qué**: Tests automatizados de flujos críticos:
- [ ] Homepage loads and renders
- [ ] Navigation to /recursos, /podcast, /aviso-legal works
- [ ] App download links are accessible (not 404)
- [ ] Responsiveness on mobile (375px)
- [ ] Share button in Apoyanos works  
**Por qué**: Prevenir regresiones en deploy.  
**Estimado**: 2-3 horas

### 7. Dark Mode Toggle
**Estado**: Idea inicial  
**Archivos**: `src/index.css`, `src/components/Header.tsx`, Tailwind config  
**Qué**: Agregar toggle en header para cambiar entre light/dark mode.  
**Por qué**: Preferencia de usuario, accesibilidad.  
**Nota**: Tailwind tiene soporte nativo con `dark:` classes.  
**Estimado**: 1.5 horas

### 8. Form Validation en Contacto
**Estado**: Existe form pero sin validación visual  
**Archivos**: `src/pages/Contacto.tsx`  
**Qué**: Agregar validación en tiempo real (email válido, teléfono, mensaje no vacío).  
**Lib**: Ya se usa `react-hook-form` + `zod` en otros formularios.  
**Por qué**: Reduce spam, mejora UX.  
**Estimado**: 45 min

---

## 🔵 Bajas (P3) — Nice to have, bajo impacto

### 9. Página de Agradecimiento (Thank You Page)
**Estado**: Idea  
**Archivos**: Crear `src/pages/GraciasPorApoyar.tsx`  
**Qué**: Página que se muestra después de donar via Buy Me a Coffee (si es posible con webhook).  
**Por qué**: Refuerza donación, pide share.  
**Estimado**: 1 hora

### 10. Blog o Noticias
**Estado**: Idea  
**Archivos**: `src/pages/Blog.tsx` + CMS integration (Contentful, Strapi, etc.)  
**Qué**: Feed de artículos/noticias sobre reumatología + IA.  
**Por qué**: Genera tráfico SEO, más contenido.  
**Costo**: Requiere CMS ($0-50/mes según opción).  
**Estimado**: 3-4 horas setup + ongoing management

### 11. Testimonios de Usuarios
**Estado**: Idea  
**Archivos**: `src/pages/Index.tsx` (insertar sección nueva)  
**Qué**: Carrusel con testimonios de reumatólogos usando la app.  
**Por qué**: Social proof, confianza.  
**Datos**: Necesita testimonios reales (video, texto, foto).  
**Estimado**: 1.5 horas código + recopilación de datos

---

## 📋 Tareas Administrativas

### 12. Verificar Credenciales de Redes Sociales
**Qué**:
- [ ] ¿@reumaindex existe en Twitter/X? Si no, crear o considerar mantener @meddocente_cl
- [ ] Verificar Instagram @meddocenteia sigue activo
- [ ] Agregar og:image para compartir en redes (actualmente app_icon.png, podría ser hero banner custom)

### 13. Política de Cookies
**Estado**: Pendiente si se agrega Google Analytics  
**Qué**: Banner de cookies para cumplir GDPR/CCPA.  
**Libs**: `react-cookie-consent` o similar.  
**Estimado**: 30 min si se agrega Analytics

---

## 📊 Matriz de Priorización

| Mejora | P | Esfuerzo | Impacto | Dependencias | PRs Sugeridos |
|---|---|---|---|---|---|
| App Store Link Real | P0 | ⏱️ 5 min | 🔥🔥🔥 | ID Apple | #N/A |
| Analytics | P0 | ⏱️ 30 min | 🔥🔥 | Ninguna | #N/A |
| Stats Bar Animado | P1 | 45 min | 🔥🔥 | Ninguna | stats-animated |
| App Screenshot | P1 | 1-2h | 🔥🔥 | Screenshot diseño | app-screenshot |
| Sitemap.xml | P1 | 20 min | 🔥 | Ninguna | seo-sitemap |
| Tests E2E | P2 | 2-3h | 🔥🔥 | Ninguna | tests-e2e |
| Dark Mode | P2 | 1.5h | 🔥 | Ninguna | feature/dark-mode |
| Form Validation | P2 | 45 min | 🔥 | react-hook-form setup | form-validation |
| Thank You Page | P3 | 1h | — | Webhook setup | page/thank-you |
| Blog/News | P3 | 3-4h | 🔥 | CMS decision | feature/blog |
| Testimonios | P3 | 1.5h | 🔥 | Recopilación datos | testimonials |
| Cookies Policy | P3 | 30 min | — | Analytics setup | compliance/cookies |

---

## 🚀 Sprint Sugerido

**Sprint 1** (Semana 1):
1. App Store Link Real (P0)
2. Analytics (P0)
3. Sitemap.xml (P1)

**Sprint 2** (Semana 2):
4. Stats Bar Animado (P1)
5. App Screenshot o Dark Mode (P2)

**Sprint 3** (Semana 3):
6. Tests E2E (P2)
7. Form Validation (P2)

**Sprint 4+** (Backlog):
- Testimonios, Blog, Thank You Page

---

## 🔗 Referencias

- **Vite docs**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **shadcn/ui**: https://ui.shadcn.com/
- **React Router**: https://reactrouter.com/
- **Playwright**: https://playwright.dev/
- **Hotjar**: https://www.hotjar.com/
- **Fathom Analytics**: https://usefathom.com/
