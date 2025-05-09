// mainblogs.js

document.addEventListener('DOMContentLoaded', () => {
    // Add a click effect to blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.97)';
        });
        card.addEventListener('mouseup', () => {
            card.style.transform = '';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Placeholder: Future dynamic blog loading can be added here
    // Example: Fetch blogs from an API and render them
}); 