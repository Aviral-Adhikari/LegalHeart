// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.preview-item, .expertise-badge, .hero-badge');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.preview-item, .expertise-badge, .hero-badge');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Lawyer profile functionality
function showLawyerProfile(lawyerId) {
    // Hide all lawyer profiles
    document.querySelectorAll('.lawyer-profile').forEach(profile => {
        profile.classList.remove('active');
    });
    
    // Show the selected lawyer profile
    const selectedProfile = document.getElementById(lawyerId);
    if (selectedProfile) {
        selectedProfile.classList.add('active');
        
        // Smooth scroll to the profile section
        selectedProfile.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add hover effect for lawyer preview items
document.querySelectorAll('.preview-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
}); 