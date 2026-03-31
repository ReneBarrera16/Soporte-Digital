/* =============================================
   ABEJAS MELIPONINI — Soporte Digital de Tesis
   main.js
   ============================================= */

// ----- ESTADO -----
let navHistory = ['splashScreen'];
let learnMode  = 'free'; // 'progress' | 'free'

// ----- MODO DE APRENDIZAJE -----
function setLearnMode(mode) {
    learnMode = mode;
    document.body.classList.remove('mode-progress', 'mode-free');
    document.body.classList.add('mode-' + mode);
}

// Inicia el modo guiado
function startGuided() {
    setLearnMode('progress');
    navHistory = ['splashScreen', 'welcomeScreen', 'modeScreen', 'progressScreen'];
    showScreen('progressScreen');
}

// Inicia el modo libre
function startFree() {
    setLearnMode('free');
    navHistory = ['splashScreen', 'welcomeScreen', 'modeScreen', 'menuScreen'];
    showScreen('menuScreen');
}

// Navega a una sección desde el hub guiado
function goToGuided(screenId) {
    setLearnMode('progress');
    navHistory.push(screenId);
    showScreen(screenId);
}

// Navega a una sección desde el menú libre
function goToFree(screenId) {
    setLearnMode('free');
    navHistory.push(screenId);
    showScreen(screenId);
}

// ----- DESBLOQUEO DE SECCIONES (modo guiado) -----
function unlockSection(sectionId) {
    // sectionId: 'Descripcion' | 'Cuidados'
    const el = document.getElementById('prog' + sectionId);
    if (!el) return;
    el.classList.remove('locked');
    el.onclick = () => goToGuided(sectionId.toLowerCase() + 'Screen');
    const arrow = el.querySelector('.lock-icon');
    if (arrow) {
        arrow.textContent = '▶';
        arrow.classList.remove('lock-icon');
        arrow.classList.add('menu-arrow');
    }
}

// ----- NAVEGACIÓN GENERAL -----
function showScreen(screenId) {
    const current = document.querySelector('.screen.active');
    const next    = document.getElementById(screenId);

    if (!current || current === next) {
        if (current) current.classList.remove('active');
        next.classList.add('active');
        window.scrollTo(0, 0);
        return;
    }

    // Salida animada de la pantalla actual
    current.classList.add('leaving');
    current.classList.remove('active');
    current.addEventListener('animationend', function handler() {
        current.classList.remove('leaving');
        current.removeEventListener('animationend', handler);
    });

    // Entrada animada de la pantalla nueva
    next.classList.add('active');
    window.scrollTo(0, 0);
}

// Navega a cualquier pantalla y la agrega al historial
function goTo(screenId) {
    navHistory.push(screenId);
    showScreen(screenId);
}

// Vuelve a la pantalla anterior
function goBack() {
    if (navHistory.length > 1) {
        navHistory.pop();
        showScreen(navHistory[navHistory.length - 1]);
    }
}
