# Changelog — FARO

> Historia de versiones del **sistema** (core/, agents/, skills/, CLAUDE.md). Tu carpeta `brand/` nunca se ve afectada por las versiones: es tuya.
> Al actualizar tu copia: reemplaza `core/`, `agents/`, `skills/`, `CLAUDE.md`, `VERSION` y `CHANGELOG.md` por los de la versión nueva. **No toques `brand/` ni `feedback/`** (son tus datos). Si modificaste archivos del sistema, revisa el diff antes de reemplazar.

## v1.1.0 — 2026-06-11
- **Subsistema de mejora colectiva:** nueva carpeta `feedback/` con muro de privacidad explícito (aprendizajes del sistema ≠ datos de la marca).
- Nueva skill `system-feedback`: FARO captura fricciones/gaps/ideas sobre sí mismo durante el uso (anonimizadas) e invita —con consentimiento y baja fricción— a enviarlas por correo.
- Nueva skill `harvest` (mantenedores del template): procesa feedback de copias en uso discriminando procedencia — mejora incremental (copia stock) vs mejora compuesta (copia modificada/divergente).
- Versionado formal: archivos `VERSION` y `CHANGELOG.md`; el feedback declara su versión de origen.
- Créditos de autoría y canal de contribución en `start.html` y `README.md`; nota de uso vía Claude Desktop (Cowork) para quienes no usan terminal.

## v1.0.0 — 2026-06-11
- Lanzamiento inicial: modelo de 5 etapas (E0-E4) con comportamiento adaptativo, entrevista de onboarding de 7 fases, squad (NORTE, TINTA, TEMPO, LAZO, PRISMA), 7 skills, playbooks con fuentes y regla de revalidación, plantillas `brand/`, `start.html`.
