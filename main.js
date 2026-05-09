/* =============================================
   ABEJAS MELIPONINI — Soporte Digital de Tesis
   main.js
   ============================================= */

// ----- ESTADO -----
let navHistory      = ['splashScreen'];
let learnMode       = 'free';
let unlockedSections = []; // 'Descripcion' | 'Cuidados'

// ──────────────────────────────────────────────
// BARRA DE NAVEGACIÓN GLOBAL
// ──────────────────────────────────────────────
const NAV_NO_BACK   = ['splashScreen', 'welcomeScreen', 'completedScreen', 'progressScreen', 'menuScreen'];
const NAV_HIDE      = ['splashScreen', 'warningScreen'];

function updateNav(screenId) {
    const nav     = document.getElementById('glassNav');
    const backBtn = document.getElementById('gnavBack');
    const links   = document.getElementById('gnavLinks');

    // Ocultar nav en splash
    if (NAV_HIDE.includes(screenId)) {
        nav.classList.add('hidden');
        return;
    }
    nav.classList.remove('hidden');

    // Botón atrás
    if (NAV_NO_BACK.includes(screenId)) {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }

    // Links según modo y pantalla
    links.innerHTML = '';

    // Antes de elegir modo: sin links de sección
    if (screenId === 'welcomeScreen' || screenId === 'modeScreen') return;

    if (learnMode === 'progress') {
        // Impacto: siempre disponible en modo guiado
        links.innerHTML += navLink('Impacto', "goToGuided('impactoScreen')");
        // Descripcion: solo si desbloqueada
        if (unlockedSections.includes('Descripcion')) {
            links.innerHTML += navLink('Descripción', "goToGuided('descripcionScreen')");
        }
        // Cuidados: solo si desbloqueado
        if (unlockedSections.includes('Cuidados')) {
            links.innerHTML += navLink('Cuidados', "goToGuided('cuidadosScreen')");
        }
    } else if (learnMode === 'free') {
        links.innerHTML =
            navLink('Impacto',     "goToFree('impactoScreen')") +
            navLink('Descripción', "goToFree('descripcionScreen')") +
            navLink('Cuidados',    "goToFree('cuidadosScreen')");
    }
}

function navLink(label, onclick) {
    return `<button class="gnav-link" onclick="${onclick}">${label}</button>`;
}

// ──────────────────────────────────────────────
// PANEL "ACERCA DE"
// ──────────────────────────────────────────────
function toggleAbout(e) {
    if (e) e.stopPropagation();
    const panel = document.getElementById('aboutPanel');
    panel.classList.toggle('open');

    if (panel.classList.contains('open')) {
        // Cierra al hacer click fuera
        setTimeout(() => {
            document.addEventListener('click', closeAboutOutside, { once: true });
        }, 0);
    }
}

function closeAbout() {
    document.getElementById('aboutPanel').classList.remove('open');
}

function closeAboutOutside(e) {
    const panel = document.getElementById('aboutPanel');
    if (!panel.contains(e.target)) closeAbout();
}

// ──────────────────────────────────────────────
// MODO DE APRENDIZAJE
// ──────────────────────────────────────────────
function setLearnMode(mode) {
    learnMode = mode;
    document.body.classList.remove('mode-progress', 'mode-free');
    document.body.classList.add('mode-' + mode);
}

function startGuided() {
    rippleTransition('#2F5C0C', function () {
        setLearnMode('progress');
        navHistory = ['splashScreen', 'welcomeScreen', 'warningScreen', 'modeScreen', 'progressScreen'];
        showScreen('progressScreen');
    });
}

function startFree() {
    rippleTransition('#E8981C', function () {
        setLearnMode('free');
        navHistory = ['splashScreen', 'welcomeScreen', 'warningScreen', 'modeScreen', 'menuScreen'];
        showScreen('menuScreen');
    });
}

// ──────────────────────────────────────────────
// REVEAL DEL SELECTOR DE MODO
// ──────────────────────────────────────────────
function revealModes() {
    const single = document.getElementById('modeOrbSingle');
    const split  = document.getElementById('modeOrbsSplit');

    // Fase 1: explosión del orbe único
    single.classList.add('splitting');

    // Fase 2: aparecen los dos orbes desde el centro
    setTimeout(() => {
        single.style.display = 'none';
        split.classList.add('revealed');
    }, 390);
}

function resetModeReveal() {
    const single = document.getElementById('modeOrbSingle');
    const split  = document.getElementById('modeOrbsSplit');

    single.style.display = '';
    single.classList.remove('splitting');
    split.classList.remove('revealed');
}

function goToGuided(screenId) {
    setLearnMode('progress');
    navHistory.push(screenId);
    showScreen(screenId);
}

function goToFree(screenId) {
    setLearnMode('free');
    navHistory.push(screenId);
    showScreen(screenId);
}

// ──────────────────────────────────────────────
// DESBLOQUEO DE SECCIONES (modo guiado)
// ──────────────────────────────────────────────
function unlockSection(sectionId) {
    if (!unlockedSections.includes(sectionId)) {
        unlockedSections.push(sectionId);
    }

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

// ──────────────────────────────────────────────
// ANIMACIÓN RIPPLE AL ELEGIR MODO
// ──────────────────────────────────────────────
function rippleTransition(color, callback) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-overlay';
    ripple.style.background = color;
    document.body.appendChild(ripple);

    ripple.addEventListener('animationend', function onExpand() {
        ripple.removeEventListener('animationend', onExpand);
        callback();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ripple.classList.add('fade-out');
                ripple.addEventListener('animationend', function onFade() {
                    ripple.removeEventListener('animationend', onFade);
                    ripple.remove();
                });
            });
        });
    });
}

// ──────────────────────────────────────────────
// NAVEGACIÓN GENERAL
// ──────────────────────────────────────────────
function showScreen(screenId) {
    const current = document.querySelector('.screen.active');
    const next    = document.getElementById(screenId);

    if (!current || current === next) {
        if (current) current.classList.remove('active');
        next.classList.add('active');
        window.scrollTo(0, 0);
        updateNav(screenId);
        if (screenId === 'modeScreen')     resetModeReveal();
        if (screenId === 'impactoScreen')  { startCropCarousel();  stopPlantCarousel(); }
        else if (screenId === 'cuidadosScreen') { startPlantCarousel(); stopCropCarousel(); }
        else                               { stopCropCarousel();   stopPlantCarousel(); }
        return;
    }

    current.classList.add('leaving');
    current.classList.remove('active');
    current.addEventListener('animationend', function handler() {
        current.classList.remove('leaving');
        current.removeEventListener('animationend', handler);
    });

    next.classList.add('active');
    window.scrollTo(0, 0);
    updateNav(screenId);

    if (screenId === 'modeScreen')     resetModeReveal();
    if (screenId === 'impactoScreen')  { startCropCarousel();  stopPlantCarousel(); }
    else if (screenId === 'cuidadosScreen') { startPlantCarousel(); stopCropCarousel(); }
    else                               { stopCropCarousel();   stopPlantCarousel(); }
}

function goTo(screenId) {
    navHistory.push(screenId);
    showScreen(screenId);
}

function goBack() {
    if (navHistory.length > 1) {
        navHistory.pop();
        showScreen(navHistory[navHistory.length - 1]);
    }
}

// ──────────────────────────────────────────────
// CARRUSEL DE CULTIVOS
// ──────────────────────────────────────────────
let cropIndex  = 0;
const CROP_N   = 9;
let cropTimer  = null;
let cropTouchX = 0;

function cropGoTo(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots   = document.querySelectorAll('.carousel-dot');

    slides[cropIndex].classList.remove('active');
    dots[cropIndex].classList.remove('active');

    cropIndex = ((index % CROP_N) + CROP_N) % CROP_N;

    slides[cropIndex].classList.add('active');
    dots[cropIndex].classList.add('active');
}

function cropNext() {
    cropGoTo(cropIndex + 1);
    cropResetTimer();
}

function cropPrev() {
    cropGoTo(cropIndex - 1);
    cropResetTimer();
}

function cropResetTimer() {
    clearInterval(cropTimer);
    cropTimer = setInterval(() => cropGoTo(cropIndex + 1), 2500);
}

function startCropCarousel() {
    cropGoTo(0);
    cropResetTimer();
}

function stopCropCarousel() {
    clearInterval(cropTimer);
    cropTimer = null;
}

function cropTouchStart(e) {
    cropTouchX = e.touches[0].clientX;
}

function cropTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - cropTouchX;
    if (Math.abs(dx) > 40) {
        dx < 0 ? cropNext() : cropPrev();
    }
}

// ── CARRUSEL DE PLANTAS ───────────────────────
let plantIndex  = 0;
const PLANT_N   = 6;
let plantTimer  = null;
let plantTouchX = 0;

function plantGoTo(index) {
    const slides = document.querySelectorAll('.plant-carousel .carousel-slide');
    const dots   = document.querySelectorAll('#plantDots .carousel-dot');

    slides[plantIndex].classList.remove('active');
    dots[plantIndex].classList.remove('active');

    plantIndex = ((index % PLANT_N) + PLANT_N) % PLANT_N;

    slides[plantIndex].classList.add('active');
    dots[plantIndex].classList.add('active');
}

function plantNext() {
    plantGoTo(plantIndex + 1);
    plantResetTimer();
}

function plantPrev() {
    plantGoTo(plantIndex - 1);
    plantResetTimer();
}

function plantResetTimer() {
    clearInterval(plantTimer);
    plantTimer = setInterval(() => plantGoTo(plantIndex + 1), 2500);
}

function startPlantCarousel() {
    plantGoTo(0);
    plantResetTimer();
}

function stopPlantCarousel() {
    clearInterval(plantTimer);
    plantTimer = null;
}

function plantTouchStart(e) {
    plantTouchX = e.touches[0].clientX;
}

function plantTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - plantTouchX;
    if (Math.abs(dx) > 40) {
        dx < 0 ? plantNext() : plantPrev();
    }
}

// Inicializar nav al cargar
updateNav('splashScreen');
