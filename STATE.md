# State — 2026-09-24

## Current Phase
Phase 1 — landing pública.

## Current Task
Landing implementada y publicada en el repositorio secundario; GitHub Pages y Vercel habilitados.

## Decisions Made
- Sitio estático separado del backend de El Chambas.
- Se reutiliza el MP4 promocional validado de 60 segundos.
- Dirección visual editorial: azul petróleo, lima y textura de papel.
- Se generó una ilustración de hero sin texto para evitar competir con el copy.

## Blockers
Ninguno conocido. El pipeline de GitHub Actions fue verificado con tests y despliegue exitosos.

## Next Action
Mantener el flujo: cada PR ejecuta tests; cada merge a `main` despliega a Vercel.
