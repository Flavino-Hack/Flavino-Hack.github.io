// Menu mobile pour les petits écrans
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    // Créer un bouton burger pour mobile
    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = '☰';
    burger.style.cssText = `
        display: none;
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
        background: none;
        border: none;
    `;
    logo.parentNode.insertBefore(burger, logo.nextSibling);

    // Gestion du menu burger
    burger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#1a2a3a';
        navLinks.style.padding = '1rem';
    });

    // Affichage du burger sur mobile
    if (window.innerWidth <= 768) {
        burger.style.display = 'block';
        navLinks.style.display = 'none';
    }

    // Réinitialisation sur redimensionnement
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            burger.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.style.position = 'static';
            navLinks.style.flexDirection = 'row';
            navLinks.style.backgroundColor = 'transparent';
            navLinks.style.padding = '0';
        } else {
            burger.style.display = 'block';
            if (!navLinks.classList.contains('active')) {
                navLinks.style.display = 'none';
            }
        }
    });

    // Animation au scroll pour les cartes
    const cards = document.querySelectorAll('.projet-card, .skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Gestion du formulaire de contact (simulé)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('📨 Message envoyé ! Je vous répondrai dans les plus brefs délais.');
            this.reset();
        });
    }
});