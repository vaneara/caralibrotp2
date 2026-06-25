# Guión de Presentación — Caralibro (3 min)

---

## 1. Introducción — ~30 seg

Hola, somos el Grupo 4 de Comisión 2E y les queremos presentar **Caralibro**, una red social que recrea la experiencia de Facebook circa 2010. El proyecto nace como trabajo práctico de la materia, con el objetivo de construir una SPA moderna usando React y Vite, pero rindiéndole homenaje a esa estética vintage de la web 2.0 que muchos recordamos con cariño: los bordes duros, los azules característicos, las animaciones sutiles y esa sensación de internet dial-up.

---

## 2. Desarrollo — ~1 min

En cuanto al **desarrollo**, trabajamos como equipo de tres personas dividiendo el proyecto por páginas y componentes, usando Git para coordinar. Una decisión clave fue adoptar **Atomic Design** para organizar los componentes: desde átomos chicos como Avatares y Botones, hasta organismos complejos como el Layout completo o las tarjetas de publicación. Esto nos permitió reutilizar todo y mantener el código limpio.

A nivel visual, fuimos muy meticulosos con la fidelidad retro: paleta `#3b5998`, tipografía del sistema, bordes sin redondear y animaciones de exactamente 150-200 milisegundos — nada moderno. Incluso simulamos la carga lenta de internet en la pantalla de login.

En cuanto a tecnologías, usamos **React Router** para la navegación, **localStorage** para persistir posts y notas, y consumimos **3 APIs públicas** (clima, feriados argentinos y cotizaciones) con estados de carga y error. Todo el CSS es vanilla, sin librerías externas. El proyecto evolucionó de un TP1 estático en HTML/CSS/JS a esta SPA completa.

---

## 3. Resultados y reflexión — ~1 min 30 seg

El **resultado final** es una aplicación de 7 páginas funcionales: muro de publicaciones con imágenes y comentarios, chat con respuestas automáticas con emojis, perfiles de integrantes y famosos, bitácora de proyecto, eventos con RSVP, y un apartado de noticias. Todo deployado en Vercel y funcionando.

En cuanto a la **reflexión**, este proyecto nos permitió aplicar prácticamente todos los contenidos de la materia: componentes funcionales y hooks para el manejo de estado, efectos secundarios para llamadas a APIs, React Router para la navegación SPA sin recargas, diseño responsive con media queries, y persistencia en el cliente. También aprendimos a trabajar en equipo con un flujo git organizado.

El mayor desafío fue lograr que algo construido con tecnologías modernas se sintiera auténticamente **vintage** — cada decisión de diseño fue una negociación entre lo que React nos permite hacer hoy y lo que se veía y sentía en 2010. Creemos que lo logramos, y nos llevamos una remera de aprendizaje enorme sobre cómo pensar en componentes, estados y experiencia de usuario.
