document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });

    // Scroll animations for lawyer profiles
    const lawyerProfiles = document.querySelectorAll('.lawyer-profile');
    
    function checkLawyerProfiles() {
        lawyerProfiles.forEach((profile, index) => {
            const profileTop = profile.getBoundingClientRect().top;
            const profileBottom = profile.getBoundingClientRect().bottom;
            
            if (profileTop < window.innerHeight && profileBottom > 0) {
                setTimeout(() => {
                    profile.classList.add('visible');
                }, index * 200);
            }
        });
    }

    // Initial check
    checkLawyerProfiles();

    // Check on scroll
    window.addEventListener('scroll', checkLawyerProfiles);

    // Mobile menu toggle
    const createMobileMenu = () => {
        const header = document.querySelector('.header .container');
        const nav = document.querySelector('.main-nav');
        
        if (window.innerWidth <= 768) {
            const menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-button';
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
            
            header.insertBefore(menuButton, nav);
            
            menuButton.addEventListener('click', () => {
                nav.classList.toggle('active');
                menuButton.innerHTML = nav.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
    };

    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
}); 