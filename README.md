# PlanMyMeals

PlanMyMeals es una PWA estatica para planificar un ano completo de comidas y cenas hiper proteicas, mostrando solo la semana activa con navegacion por flechas.

## Reglas de la app

- Plan anual completo con comida y cena cada dia.
- Todas las comidas y cenas del ano son unicas y no repiten combinacion.
- Comidas y cenas hiper proteicas.
- Lunes a viernes los ninos solo cenan en casa.
- Hogar: 2 adultos y 2 ninos.
- Proteinas base: pollo, ternera, cerdo, atun enlatado.
- No mezclar proteinas entre si.
- No mezclar carne y pescado.
- En la cena no aparece ni cerdo ni ternera.
- En la cena no se usa arroz ni legumbres.
- Mostrar cantidades de preparacion y de servicio.
- Procedimientos muy detallados para no-chefs.

## Navegacion

- Portada principal centrada en la semana visible.
- Menu hamburguesa con paginas separadas para Semana, Compra, Buscar y Reglas.
- Busqueda por ingrediente dentro de todo el ano generado.
- Hoja de compra semanal basada solo en los dias marcados de la semana visible.

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
