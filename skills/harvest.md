# Skill · Harvest — cosechar feedback para mejorar el template

> **Skill de mantenedor:** se ejecuta sobre la copia que actúa como TEMPLATE (la fuente de la que otros copian), no sobre una copia de uso personal. Procesa feedback de copias en uso —una carpeta vecina, archivos recibidos por correo— y lo convierte en mejoras del template, **discriminando la procedencia de cada mejora**.

## El problema que esta skill resuelve

Los usuarios iteran sus propias copias. Una mejora propuesta puede nacer de una realidad distinta a la del template (versión vieja, o sistema modificado localmente). **Aplicar literalmente un parche nacido en un fork divergente rompe el template.** Por eso cada mejora se clasifica por procedencia antes de tocar nada.

## Inputs aceptados

- Una carpeta FARO en uso ("la carpeta de al lado") → leer su `feedback/system-learnings.md`.
- Uno o más `system-learnings.md` recibidos por correo (asunto `FARO feedback · vX.Y · [stock|modificado]`).
- Nunca leer el `brand/` de una copia ajena: el harvest consume SOLO `feedback/`.

## Pasos

### 1. Identificar procedencia (por archivo recibido)
Del frontmatter: `faro_version_origin`, `faro_version_current`, `modified`, y la sección "Modificaciones locales". Si falta el frontmatter, tratar como `modificado` + versión desconocida (el caso más conservador).

### 2. Filtrar privacidad
Si una entrada contiene datos de marca (nombres, nichos identificables, contenido, métricas personales), **descartar esos datos en el acto** — se procesa la fricción de sistema, se elimina el rastro personal. El template jamás absorbe contenido de marcas ajenas.

### 3. Clasificar cada entrada (el corazón del harvest)

| Caso | Procedencia | Tratamiento |
|------|-------------|-------------|
| **A · Incremental directa** | copia `stock`, versión = actual del template | Evaluar la sugerencia tal cual; si convence, aplicar |
| **B · Desfasada** | copia `stock`, versión < actual | ¿El problema ya se resolvió en una versión posterior? Si sí, descartar (y notarlo). Si no, **re-derivar** la mejora contra el estado ACTUAL del template, no contra el que vio el usuario |
| **C · Compuesta** | copia `modificado` | ⚠️ La sugerencia puede asumir cambios locales que el template no tiene. **Tratar la sugerencia como SÍNTOMA, no como parche:** extraer la necesidad subyacente (¿qué le faltó/molestó de verdad?) y re-diseñar la solución desde el template actual. Bonus: evaluar si la modificación local del usuario es, en sí misma, una feature que el template debería adoptar |

### 4. Agregar señales entre remitentes
La misma fricción reportada por 3+ copias = patrón fuerte (prioridad alta). Reportada por 1 = anécdota (se anota, se espera confirmación). La regla anti-anécdota del sistema aplica también a su propia evolución.

### 5. Aplicar y versionar
Por cada mejora aceptada:
1. Editar los archivos del sistema en el template.
2. Bump de `VERSION` (parche: correcciones · menor: skills/secciones nuevas · mayor: cambios de arquitectura).
3. Entrada en `CHANGELOG.md` con crédito anónimo agregado ("a partir del feedback de N usuarios").
4. Verificar que el template sigue **virgen**: `brand/` en plantillas, `feedback/system-learnings.md` limpio con el frontmatter en la versión nueva.

### 6. Cerrar el ciclo
Responder/agradecer a quienes enviaron feedback (si hay canal) y comunicar la versión nueva. Los usuarios actualizan reemplazando `core/`, `agents/`, `skills/`, `CLAUDE.md`, `VERSION`, `CHANGELOG.md` — nunca su `brand/` ni su `feedback/` (instrucción en el CHANGELOG).

## Anti-patrones
Aplicar parches literales de copias modificadas (caso C tratado como A) · absorber datos de marca al template · mejorar por una sola anécdota · olvidar el bump de versión (rompe la trazabilidad de TODO el feedback futuro) · leer el `brand/` ajeno.
