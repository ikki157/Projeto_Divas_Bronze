document.addEventListener("DOMContentLoaded", function() {

    // Efeito de scroll na barra de navegação
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // FUNCIONALIDADE DO MENU HAMBÚRGUER
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Abre e fecha o menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        // Troca o ícone de barras para 'X' e vice-versa
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu ao clicar em um link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // Animação de entrada dos elementos (Scroll Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar o elemento depois que ele se tornou visível
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // O elemento é revelado quando 10% dele está visível
    });

    revealElements.forEach((el, index) => {
        // Adiciona um pequeno atraso na transição para cada elemento
        el.style.transitionDelay = `${index * 100}ms`;
        revealObserver.observe(el);
    });

});