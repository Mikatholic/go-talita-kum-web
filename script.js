document.addEventListener('DOMContentLoaded', () => {
    
    // --- Gestión de Modo Oscuro ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    function updateIcon(isDark) {
        if (isDark) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            updateIcon(true);
        } else {
            htmlElement.classList.remove('dark');
            updateIcon(false);
        }
    }

    // Inicialización de tema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        applyTheme('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcon(isDark);
    });

    // --- Menú Móvil ---
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Lógica del Carrusel ---
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    const totalSlides = 5;

    function moveToSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        if (track) {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => moveToSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => moveToSlide(currentSlide + 1));
        
        // Auto-play cada 5 segundos
        setInterval(() => moveToSlide(currentSlide + 1), 5000);
    }
});