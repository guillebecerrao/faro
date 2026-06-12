# Skill · System Feedback — aprender sobre FARO sin tocar la marca

> Cómo FARO captura aprendizajes **sobre sí mismo** durante el uso y los canaliza hacia la mejora del producto. Complementa (no reemplaza) a `brand/learnings.md`, que es sobre la marca del usuario y **jamás se comparte**.

## Cuándo capturar (automático, durante cualquier sesión)

Registra una entrada en `feedback/system-learnings.md` cuando detectes:
- **Confusión:** el usuario no entendió una instrucción, skill o concepto del sistema (ej. preguntó dos veces qué es un "pilar").
- **Gap:** el usuario necesitó algo que ninguna skill/agente cubre (ej. pidió ayuda con un formato que no existe en los playbooks).
- **Fricción:** un ritual resultó pesado, largo o mal calibrado para su realidad.
- **Bug de diseño:** dos instrucciones del sistema se contradicen, o una regla produce un resultado absurdo en un caso real.
- **Idea:** el usuario propone una mejora ("estaría bueno que FARO hiciera X").
- **Modificación local:** el usuario decide cambiar core/, agents/, skills/ o CLAUDE.md → registra QUÉ y POR QUÉ en la sección "Modificaciones locales" y marca `modified: true` en el frontmatter.

## Reglas de captura (el muro de privacidad)

1. **Anonimiza SIEMPRE.** Describe al usuario solo por variables del sistema: etapa, objetivo genérico, tiempo disponible. ✅ "un usuario E1 con 3 h/semana encontró el plan semanal muy largo" · ❌ nombres, nicho específico, contenido de sus piezas, métricas, marcas.
2. **Una entrada = un hallazgo**, con el formato del archivo (fecha · afectado · tipo · contexto · sugerencia).
3. **Captura silenciosa:** registra y sigue con la tarea del usuario; no interrumpas el flujo para hablar del sistema (salvo que el hallazgo bloquee el trabajo).
4. **No dupliques:** si la fricción ya está registrada, suma evidencia a la entrada existente ("ocurrió de nuevo, 3er caso") — 3+ casos = patrón fuerte.

## La invitación a enviar (baja fricción, cero presión)

Cuando haya **entradas nuevas desde el último envío** (`last_sent` en el frontmatter), y como máximo **una vez por semana** — el momento natural es al cierre del plan semanal o la revisión mensual:

1. Menciona en una línea: "Acumulaste N aprendizajes sobre FARO. ¿Quieres enviarlos? Es la forma en que el sistema evoluciona — y se agradece de verdad 🙏".
2. Si acepta: **muestra el archivo completo** para revisión (consentimiento informado), verifica una última vez que no haya datos de marca, y deja listo para copiar/pegar:
   - **Para:** hello@guillebecerrao.cl
   - **Asunto:** `FARO feedback · v[VERSION] · [stock|modificado]` (lee `VERSION` y el flag `modified`)
   - **Cuerpo:** el contenido de `system-learnings.md` (+ saludo opcional).
3. Actualiza `last_sent` y registra el envío en `brand/journal.md`.
4. Si dice que no, o pide no ser invitado más: respétalo sin insistir (anótalo en el frontmatter como `invitations: off`). El feedback es regalo, no peaje.
