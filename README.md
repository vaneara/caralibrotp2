<<<<<<< HEAD
# TP1 Frontend - Caralibro (Archive 2010)

## Descripción del Proyecto
Este proyecto es una plataforma social retro inspirada en la estética de Facebook de principios de la década de 2010. Forma parte del Trabajo Práctico 1 de la materia Frontend, centrado en la estructura de archivos, diseño adaptable e interactividad básica.

El sitio permite explorar la portada del equipo (estilo News Feed), la bitácora de desarrollo (estilo Notas) y los perfiles individuales de los integrantes.

## Integrantes

- Vanesa Aracena – https://github.com/vaneara
- Tomás Maldocena – https://github.com/tmaldocena
- Fernando Rodríguez – https://github.com/Ferchulobo777

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Google Fonts
- Diseño responsive 

## Estructura de Archivos
- `/index.html`: Portada principal y muro de noticias.
- `/bitacora.html`: Registro de decisiones y progreso del proyecto.
- `/perfil-template.html`: Plantilla base para los integrantes del grupo.
- `/css/main.css`: Estilos globales y variables de diseño.
- `/css/responsive.css`: Implementación de breakpoints (400px, 900px, 1200px).
- `/js/core.js`: Lógica global del sitio.
- `/js/interactions.js`: Funciones interactivas específicas.
- `/img/`: Carpeta para imágenes y assets.
- `/design/`: Capturas de pantalla del diseño original en Figma.

## Guía de Estilos

### Paleta de Colores
- Azul principal: #3b5998
- Azul header: #4267b2
- Gris fondo: #e9ebee
- Gris bordes: #dddfe2
- Texto principal: #1c1e21
- Texto secundario: #606770

### Tipografías
 Se utilizó la fuente **Roboto** de Google Fonts para mejorar la legibilidad y mantener una estética limpia y moderna.

🔗 https://fonts.google.com/specimen/Roboto

### Iconografía
- Emojis nativos
- Avatares simulados para mantener privacidad de los integrantes (Uso de IA)

## Interactividad con JavaScript
Se han implementado las siguientes funciones para cumplir con los requerimientos mínimos:

### Global (core.js)
1.  **Simulación de Búsqueda**: Captura la tecla 'Enter' en la barra de búsqueda superior y muestra una alerta con la consulta.
2.  **Placeholder Dinámico**: El texto de ayuda de la barra de búsqueda cambia cada 4 segundos entre diferentes sugerencias.

### Portada (interactions.js)
3.  **Sistema de Like**: El botón "Me gusta" del post principal cambia de estado (texto y color) y actualiza el contador de likes dinámicamente.
4.  **Actualización de Estado**: El botón "Publicar" valida si hay texto en el área de estado y muestra una confirmación.

### Perfil (interactions.js)
5.  **Solicitud de Amistad**: El botón "+ Añadir amigo" cambia a "✓ Solicitud enviada" y modifica su color al hacer clic.
6.  **Efecto Hover en Habilidades**: Las etiquetas de habilidades cambian su color de fondo al pasar el puntero, mejorando la respuesta visual.

### Bitácora (interactions.js)
7.  **Simulación de Nueva Nota**: El botón "Escribir una nota" solicita un título mediante un prompt y confirma la acción.

## Capturas del Proyecto

Imágenes del proyecto en la carpeta `/design/` :

- Portada  
- Bitácora  
- Perfil de usuario  

## Uso de Inteligencia Artificial

### Herramientas utilizadas
- ChatGPT (asistencia en código y redacción)


### Uso en contenido y código
La IA fue utilizada como herramienta de apoyo para:
- Generar textos para Bitácora del proyecto
- Asistir en la implementación de funcionalidades en JavaScript

### Imágenes
Los avatares fueron generados utilizando la herramienta Nano Banana a partir de fotografías reales. 
Se aplicaron prompts orientados a transformar las imágenes en representaciones tipo avatar, adecuadas para perfiles web, priorizando una estética uniforme y el resguardo de la identidad de los integrantes.



---
**Curso:** Frontend - TP1  
**Equipo:** Grupo 4 

## Enlace al proyecto desplegado - Vercel

https://caralibro-tp1.vercel.app/

