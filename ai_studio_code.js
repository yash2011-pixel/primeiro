// Inicializar animações AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Log de clique (Opcional: útil se você quiser integrar com Google Analytics no futuro)
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Cliente clicou para converter no WhatsApp');
    });
});

// Mudança de cor do Header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md', 'py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.remove('shadow-md', 'py-2');
        header.classList.add('py-4');
    }
});