# El Chambas — landing page

Landing page promocional estática para El Chambas. Presenta la propuesta del producto, su flujo de trabajo y el video promocional de 60 segundos.

## Desarrollo local

No requiere build. Sirve la carpeta con cualquier servidor estático:

    python3 -m http.server 4173

Luego abre http://localhost:4173.

## CI/CD

- Cada pull request ejecuta npm test.
- Cada push a main (incluidos merges) ejecuta los tests y, si pasan, despliega a Vercel.
- El despliegue usa el proyecto vinculado de El Chambas en la cuenta de Vercel y queda protegido por los tests.
- El workflow usa los secretos VERCEL_TOKEN, VERCEL_ORG_ID y VERCEL_PROJECT_ID.
- El proyecto de producción de Vercel es el-chambas-landing.

## Contenido

- index.html: estructura y contenido de la landing.
- styles.css: sistema visual responsive.
- script.js: aparición progresiva al hacer scroll.
- assets/hero-route.png: ilustración editorial de portada.
- assets/el-chambas-promo.mp4: video promocional de 60 segundos.

La landing no contiene credenciales, perfiles personales ni datos de ejecución local del agente.
