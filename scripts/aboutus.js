// aboutus.js - Subtle animations for About Us page

document.addEventListener('DOMContentLoaded', function() {
    // Animate icons on scroll
    const icons = document.querySelectorAll('.about-icon');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('icon-animate');
            }
        });
    }, { threshold: 0.5 });
    icons.forEach(icon => observer.observe(icon));

    // Logo bounce on hover
    const logo = document.querySelector('.about-logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.classList.add('logo-bounce');
        });
        logo.addEventListener('animationend', () => {
            logo.classList.remove('logo-bounce');
        });
    }
});

// CSS for .icon-animate and .logo-bounce should be in aboutus.css 