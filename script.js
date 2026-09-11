const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        });
    });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

if (form && formNote) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formNote.textContent = 'Formulario de demostración: todavía no está conectado a un backend.';
    });
}


































