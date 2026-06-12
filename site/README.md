# site/ — la landing de faro.guillebecerrao.cl

> ⚠️ **Esto NO es parte del producto FARO.** Es el sitio web público del proyecto. Si copiaste FARO para usarlo con tu marca, puedes ignorar o borrar esta carpeta tranquilamente — el producto vive en el resto del repo.

## Qué hay aquí

| Carpeta/archivo | Qué es |
|-----------------|--------|
| `public/` | La landing implementada: `index.html` + `styles.css` + `app.js`. Faro animado en SVG, 3 temas conmutables (Faro/Aurora/Terminal), responsive. |
| `wrangler.jsonc` | Config de deploy a Cloudflare Workers (static assets + custom domain `faro.guillebecerrao.cl` con certificado automático). |
| `design-source/` | El handoff original de Claude Design: README del bundle + transcript del chat de diseño (la *intención* del diseño, útil para evoluciones futuras). |

## Cómo desplegar cambios

```bash
cd site
wrangler deploy
```

Requiere wrangler autenticado en la cuenta de Cloudflare dueña de la zona `guillebecerrao.cl`. El custom domain y el certificado ya están configurados; el deploy solo sube los assets de `public/`.

## Flujo de evolución

1. Editar los archivos en `public/` (o iterar el diseño en claude.ai/design y traer el handoff nuevo a `design-source/` + implementar).
2. `wrangler deploy` desde esta carpeta.
3. Commit + push para que el repo y el sitio queden sincronizados.

Nota: `start.html` (en la raíz del repo) es la guía **offline** que viaja con el producto — artefacto distinto de esta landing. Pueden divergir sin problema.
