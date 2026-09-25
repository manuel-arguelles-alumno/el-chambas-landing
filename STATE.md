# State — 2026-09-24

## Current Phase
Phase 1 — landing pública.

## Current Task
Landing rediseñada y publicada en el repositorio secundario; GitHub Pages, Vercel y el CTA operativo hacia el agente en Railway.

## Decisions Made
- Sitio estático separado del backend de El Chambas.
- Se reutiliza el MP4 promocional validado de 60 segundos.
- Dirección visual editorial: azul petróleo, lima y textura de papel.
- Se generó una ilustración de hero sin texto para evitar competir con el copy.
- Dirección aprobada: “Entender la oferta. Encontrar la evidencia. Postular con criterio.”
- Evaluación heurística de aceptación: 92/100.
- El agente vive en `https://agente.elchambas.com/`; el dominio es distinto de la landing y se enlaza mediante CTA.

## Blockers
Ninguno conocido. El pipeline de GitHub Actions fue verificado con tests y despliegue exitosos.

## Next Action
Mantener el flujo: cada PR ejecuta tests; cada merge a `main` despliega a Vercel. Medir clics hacia el agente cuando haya tráfico real.
