# 🗼 FARO — Sistema Operativo de Marca Personal

> **Tu marca personal, con un sistema detrás.**
> FARO es un copiloto de marca personal que vive en tu computador, funciona con tu plan de Claude (Pro/Max), se especializa en TU marca a medida que lo usas, y te acompaña desde "no tengo nada publicado" hasta "vivo de mi autoridad".

**Versión:** 1.1 (ver `VERSION` y `CHANGELOG.md`) · **Idioma:** español · **Dependencias:** ninguna (solo Claude Code) · **Licencia:** MIT — úsalo, compártelo, adáptalo (ver `LICENSE`).

---

## ¿Qué es FARO?

La mayoría de las personas que intentan construir marca personal no fracasan por falta de talento. Fracasan porque operan sin sistema: ideas sueltas, publicaciones erráticas, consejos genéricos que no calzan con *su* etapa, *su* profesión ni *su* audiencia.

FARO resuelve eso con tres ideas:

1. **Un modelo de etapas.** No es lo mismo una marca que nace de cero que una que ya tiene tracción o está lista para monetizar. FARO diagnostica en qué etapa estás y **cambia su comportamiento según la etapa**: te empuja lo que corresponde y te frena lo que todavía no toca.

2. **Especialización progresiva.** FARO no te da consejos genéricos. En la primera sesión te entrevista a fondo y construye tu perfil de marca (quién eres, a quién le hablas, qué vendes, cómo suenas, cuánto tiempo tienes). Después, **cada sesión aprende**: registra qué funcionó y qué no, y va afinando su criterio sobre TU marca. A los 3 meses de uso, FARO sabe de tu marca más que cualquier curso.

3. **Un squad, no un chatbot.** FARO trae cinco especialistas: estrategia (NORTE), guiones y copy (TINTA), calendario editorial (TEMPO), entrevistas y red (LAZO), y reutilización multicanal (PRISMA). Cada uno con su oficio, todos leyendo tu perfil.

### ¿Para quién es?

Profesionales que quieren construir autoridad y comunidad alrededor de lo que saben: consultores, fundadores, especialistas, creadores en formación. **No es para hacerse famoso bailando**: es para convertir conocimiento en marca, marca en red, y red en oportunidades (clientes, empleos, ventas, comunidad).

---

## Instalación (de verdad son 2 pasos)

**Requisitos:** [Claude Code](https://claude.com/claude-code) instalado, con un plan de Anthropic (Pro o Max). Nada más: ni Python, ni Node, ni servidores. FARO usa tu plan de Claude — no hay costos extra ni claves de API.

1. **Copia esta carpeta** (`FARO/`) donde quieras que viva tu marca. Por ejemplo: `~/mi-marca/`. Eso es todo: copiar = instalar. *(Opcional pero recomendado: dentro de la carpeta corre `git init` para tener historial de todo.)*
2. **Abre Claude Code en la carpeta** y escribe:

   ```
   Lee CLAUDE.md. Quiero empezar con mi marca.
   ```

FARO detectará que es tu primera vez y comenzará la **entrevista de inicio** (~20-30 minutos, conversada, por partes). Al terminar, tu perfil de marca queda construido y el sistema queda especializado en ti.

> 💡 ¿Prefieres leer antes de instalar? Abre `start.html` con doble clic en cualquier navegador: es la guía visual del producto, funciona sin internet.

> 🖥️ **¿No te acomoda la terminal o un IDE?** Puedes usar FARO igual desde **Claude Desktop, en la pestaña Cowork**: selecciona la carpeta FARO y conversa normal — es la misma experiencia, con interfaz más amable.

---

## Cómo se usa en el día a día

Abre Claude Code en tu carpeta y pide lo que necesites en lenguaje natural. Ejemplos:

| Tú dices… | FARO hace… |
|-----------|-----------|
| "Inicia mi marca" / "empecemos" | Entrevista de inicio (primera vez) |
| "¿En qué etapa estoy?" | Diagnóstico de etapa + qué te falta para graduarte a la siguiente |
| "Arma mi plan de la semana" | Calendario realista según tu tiempo, etapa y pilares |
| "Tengo una idea: …" | La captura, clasifica y guarda en tu banco de ideas |
| "Guioniza un video sobre X" | Guion con tu voz, hooks para testear, listo para grabar |
| "Saca derivados de este video/artículo" | Mapa de reutilización: 1 pieza → N piezas por canal |
| "Revisión del mes" | Analiza qué funcionó, actualiza tu perfil, recalibra la estrategia |

**El ritual mínimo que hace que FARO funcione:** una sesión de planificación a la semana (15 min) y una revisión al mes (30 min). Todo lo demás es a demanda.

---

## Estructura de la carpeta

```
FARO/
├── README.md            ← este archivo
├── CLAUDE.md            ← el cerebro operativo (Claude lo lee siempre)
├── start.html           ← guía visual del producto (doble clic, sin internet)
├── core/                ← el conocimiento del sistema (no se edita en el uso diario)
│   ├── stage-model.md   ← el modelo de 5 etapas de evolución de marca
│   ├── method.md        ← el ciclo de trabajo FARO
│   └── playbooks/       ← conocimiento destilado: plataformas, formatos, monetización
├── agents/              ← el squad: NORTE, TINTA, TEMPO, LAZO, PRISMA
├── skills/              ← los rituales: iniciar, diagnosticar, planificar, guionizar…
├── feedback/            ← aprendizajes sobre FARO (compartibles, sin datos de tu marca)
├── VERSION              ← versión de tu copia · CHANGELOG.md ← historia del sistema
├── site/                ← landing de faro.guillebecerrao.cl (sitio del proyecto — NO es parte del producto)
└── brand/               ← TU marca (nace vacía; la entrevista la llena; el uso la afina)
    ├── profile.md       ← quién eres, a quién le hablas, qué buscas
    ├── voice.md         ← cómo suenas
    ├── pillars.md       ← tus temas
    ├── offer.md         ← tu escalera de valor (qué monetizas y cuándo)
    ├── state.md         ← etapa actual, foco, métricas
    ├── ideas.md         ← banco de ideas (inbox)
    ├── journal.md       ← bitácora de decisiones y sesiones
    ├── learnings.md     ← qué funcionó / qué no (la memoria que especializa a FARO)
    └── content/         ← lo que produces (guiones, posts, calendarios)
```

**Regla de oro:** `core/`, `agents/` y `skills/` son el sistema (igual para todos los usuarios). `brand/` es tuyo (único por usuario). Si compartes FARO con alguien, comparte la carpeta **con `brand/` en blanco** (tal como vino) — o simplemente reenvía tu copia original.

---

## Preguntas frecuentes

**¿Esto me cobra algo aparte?** No. FARO funciona dentro de Claude Code con tu plan Pro/Max. No usa claves de API ni servicios externos.

**¿Mis datos salen de mi computador?** Tu carpeta `brand/` vive localmente (y en tu git, si quieres). Las conversaciones pasan por Claude como cualquier sesión de Claude Code.

**¿Sirve si ya tengo una marca andando?** Sí — para eso existe el modelo de etapas. La entrevista de inicio detecta qué tienes construido y FARO arranca desde tu realidad, no desde cero.

**¿Sirve para B2B y B2C? ¿Para empleabilidad y no solo para vender?** Sí. Tu objetivo (vender servicios, conseguir mejores empleos, lanzar un producto, construir comunidad) se captura en el perfil y cambia las recomendaciones.

**¿El conocimiento de plataformas no queda obsoleto?** Los playbooks traen fecha de investigación y FARO tiene la instrucción de revalidarlos cada ~6 meses buscando en internet (te avisará cuando toque).

**¿Puedo usarlo en inglés u otro idioma?** El sistema está escrito en español, pero en la entrevista de inicio puedes definir el idioma de tu contenido y FARO producirá en ese idioma.

---

## Mejora colectiva — cómo FARO evoluciona contigo

FARO aprende en dos planos, con un **muro de privacidad** entre ambos:
- **Tu marca** (`brand/learnings.md`): privado. Jamás se comparte ni se te pedirá compartirlo.
- **El sistema** (`feedback/system-learnings.md`): cuando FARO detecta que una skill confunde, que falta algo o que un ritual fricciona, lo registra ahí **anonimizado y sin un solo dato de tu marca**. De vez en cuando (máximo una vez por semana, y solo si hay algo nuevo) te invitará a enviarlo por correo — tú revisas el archivo y decides.

Si te animas: **gracias, de verdad 🙏.** Ese feedback es la mejor manera de evolucionar el sistema — cada fricción que reportas mejora la versión que usarán los siguientes. Detalles en `feedback/README.md`. Y si modificaste el sistema a tu gusto (válido y bienvenido), decláralo en el asunto del correo: las mejoras nacidas de copias modificadas se procesan distinto para no romper el template.

## Roadmap (honesto)

- **v1 (esto):** workspace inteligente sobre Claude Code. Cero fricción, cero dependencias, usa tu plan.
- **v1.5:** la app de escritorio de Claude Code ya ofrece una experiencia más amable que el terminal — FARO funciona igual en ella hoy (pestaña Cowork).
- **v2 (explorando):** interfaz local en el navegador (dashboard de tu marca, calendario visual, banco de ideas) montada sobre el Claude Agent SDK reutilizando la sesión de Claude Code — para seguir usando tu plan sin claves de API. Es técnicamente viable y está en evaluación; la v1 no depende de ello.

## Créditos y comunidad

**FARO** es una idea original de **Guille Becerra** — implementación co-creada junto a **Claude** (Anthropic).

- 🌐 [guillebecerrao.cl](https://guillebecerrao.cl)
- 📺 Instagram · TikTok · YouTube: **@guillebecerrao**
- 💼 [LinkedIn /in/guillebecerrao](https://www.linkedin.com/in/guillebecerrao/)
- ✉️ Mejoras, ideas o colaboraciones: **hello@guillebecerrao.cl**

---

*FARO no rema por ti: ilumina dónde están las rocas y hacia dónde está el puerto. Remar —grabar, publicar, conversar con tu gente— sigue siendo tuyo. Por suerte: esa es la parte que construye la marca.*
