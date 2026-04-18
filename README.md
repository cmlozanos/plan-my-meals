# PlanMyMeals

PlanMyMeals es una PWA estatica para planificar comidas y cenas hiper proteicas de forma mensual.

## Reglas de la app

- Comidas y cenas hiper proteicas.
- Lunes a viernes los ninos solo cenan en casa.
- Hogar: 2 adultos y 2 ninos.
- Proteinas base: pollo, ternera, cerdo, atun enlatado.
- No mezclar proteinas entre si.
- No mezclar carne y pescado.
- Mostrar cantidades de preparacion y de servicio.
- Procedimientos muy detallados para no-chefs.

## Uso local

Como es una app estatica, puedes abrir [index.html](index.html) en un servidor local simple.

Ejemplo con Python:

python3 -m http.server 8080

Luego abre:

http://localhost:8080

## Publicacion en GitHub Pages

Este proyecto incluye el workflow:

- .github/workflows/deploy-pages.yml

Con este flujo, cada push a `main` despliega automaticamente en GitHub Pages.

Primer setup en GitHub:

1. Crea un repositorio llamado plan-my-meals.
2. Sube el contenido de esta carpeta y haz push a `main`.
3. En GitHub, entra en Settings > Pages.
4. En Build and deployment selecciona Source: GitHub Actions.
5. Verifica que el workflow termine en verde en la pestana Actions.

URL esperada:

https://TU-USUARIO.github.io/plan-my-meals/

## PWA

Incluye:

- manifest.webmanifest
- sw.js (cache basica y modo offline)
- iconos en /icons

Instalacion:

- Desde navegador compatible, usa el boton Instalar app cuando aparezca.
