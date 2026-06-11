// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação simples de cards ao entrar na tela
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    observer.observe(card);
});

// Menu responsivo simples
const nav = document.querySelector('nav');
const toggleMenu = document.createElement('button');
toggleMenu.textContent = "Menu";
toggleMenu.classList.add('menu-toggle');
nav.prepend(toggleMenu);

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('open');
});
