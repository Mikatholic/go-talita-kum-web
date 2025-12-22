# 🕊️ Talita Kum - Grupo de Oración Católico
Talita Kum es una landing page moderna y responsive diseñada para un grupo de oración juvenil de la Renovación Carismática Católica (RCC) en Perú. El nombre proviene de Marcos 5, 41: "Muchacha, a ti te digo, levántate".

El sitio tiene como objetivo centralizar la información de encuentros, misión, ubicación y contacto para nuevos integrantes y miembros actuales.

## 🚀 Características Principales
 - Modo Oscuro/Claro: Sistema de cambio de tema manual con persistencia en localStorage y detección automática de las preferencias del sistema.

 - Diseño Responsive: Totalmente adaptado para móviles, tablets y escritorio utilizando Tailwind CSS.

 - Carrusel Dinámico: Galería de imágenes con auto-play para mostrar actividades del grupo (formación, oración y eventos sociales).

 - Sección de FAQ Interactiva: Acordeón de preguntas frecuentes implementado puramente con CSS y HTML para mayor ligereza.

 - Integración de Mapas: Ubicación exacta de la Parroquia Nuestra Señora de Loreto vía Google Maps.

 - Navegación Fluida: Scroll suave (smooth scroll) para una mejor experiencia de usuario.

## 🛠️ Tecnologías Utilizadas
HTML5: Estructura semántica.

 - Tailwind CSS: Framework de estilos para un diseño rápido y moderno.

 - JavaScript (Vanilla JS): Lógica del carrusel, menú móvil y gestión de temas.

 - Font Awesome: Iconografía para redes sociales y elementos de interfaz.

 - Google Fonts (Inter): Tipografía limpia y legible.

## 📂 Estructura de Archivos
```bash
/
├── index.html     # Estructura principal y contenido
├── styles.css    # Estilos personalizados y configuraciones de tema
├── script.js     # Lógica interactiva (carrusel, temas, menú)
└── assets/       # Imágenes locales (equipo, eventos, etc.)
```

## ⚙️ Configuración e Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/Mikatholic/talita-kum-web
```

3. Abrir el proyecto: Simplemente abre el archivo index.html en cualquier navegador moderno. No requiere de servidores complicados ni procesos de compilación (usa CDN para Tailwind).

## 🧩 Funciones Destacadas del Código
# Gestión de Temas (JavaScript)
El script detecta si el usuario ya tenía una preferencia guardada:
```bash
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    applyTheme('dark');
}
```

# Carrusel de Imágenes
El carrusel se desplaza horizontalmente cada 5 segundos de forma automática y permite navegación manual:
```bash
function moveToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}
```

## ⚖️ Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Esto significa que puedes usar, modificar y compartir el código libremente, siempre que mantengas la atribución original. 

*Nota: Las imágenes de los servidores y el logo son propiedad exclusiva de Talita Kum.*

# Desarrollado con ❤️ para el G.O. Talita Kum.
