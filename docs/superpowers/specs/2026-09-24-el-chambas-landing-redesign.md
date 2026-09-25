# El Chambas landing redesign

## Approved brief

El Chambas debe transmitir criterio, evidencia y control humano. Su primera tarea es que una persona entienda en pocos segundos qué hace el agente y confíe lo suficiente para mirar la demo.

## Audience and job to be done

Personas que preparan postulaciones para oportunidades profesionales y quieren adaptar su presentación sin inventar experiencia. La landing no promete conseguir empleo: explica un método de trabajo y muestra el producto.

## Core message

**Entender la oferta. Encontrar la evidencia. Postular con criterio.**

Supporting promise: El Chambas conecta lo que una oferta pide con hechos demostrables del perfil, marca las brechas y deja la revisión final en manos de la persona.

## Visual tokens and direction

- Ink: #102f32; deep: #092326; paper: #f7faf7.
- Signal accent: #dff3a8; mint: #edf5f0; muted text: #657d7c.
- Manrope for display and DM Sans for reading/UI.
- Editorial product direction: paper, route, evidence and checkpoints; no generic dashboard chrome.
- One memorable visual: the generated route illustration. Other sections stay quiet and functional.
- Motion is limited to one entry/reveal system and respects reduced-motion preferences.

## Wireframe

    [logo]                 [method] [demo] [watch CTA]
    --------------------------------------------------
    [explicit promise + mechanism + trust line] [route image]
    [three product principles]
    [60-second demo + caption]
    [method explanation + three sequential cards]
    [human-control principle + final CTA]
    [footer]

## Acceptance rubric

- Message and product mechanism: 20
- Copy clarity, trust and CTA: 20
- Distinctive visual direction: 20
- UX and responsive behavior: 15
- Accessibility: 15
- SEO and performance hygiene: 10

Target: >85/100. A score is accepted only when every dimension has evidence from the page or tests; it is not a claim about conversion lift.

## Selected workflow

brainstorming → frontend-design → copy-eval → pixel-ui principles → seo-geo → implementation → independent judges → tests/deploy.

## Subdomain handoff

The Railway application is already available at https://agente.elchambas.com/ with its custom DNS and certificate. The landing should link to that protected application only when a real product action is intended; the public landing itself remains on elchambas.com.
