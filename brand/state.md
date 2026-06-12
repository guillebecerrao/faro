# Estado del Sistema

> El pulso de la marca. FARO lo lee al inicio de CADA sesión. Lo actualizan `assess-stage` y `monthly-review`.

```yaml
onboarded: false        # ← false = sistema virgen → FARO ofrece la entrevista de inicio
stage: null             # E0 | E1 | E2 | E3 | E4 (lo fija el diagnóstico)
stage_since: null       # fecha del último cambio de etapa
focus: []               # 2-3 brechas/focos del mes (los fija la revisión mensual)
active_channels: []     # canales activos según etapa
cadence: null           # cadencia acordada (ej. "3 piezas/semana en LinkedIn")
last_weekly_plan: null  # fecha del último plan semanal
last_review: null       # fecha de la última revisión mensual
playbooks_checked: 2026-06   # última revalidación de playbooks (revalidar a los ~6 meses)
```

## Métricas norte (según etapa — las define assess-stage)
| Métrica | Valor actual | Última actualización |
|---------|--------------|---------------------|
| [se llena al diagnosticar] | — | — |
