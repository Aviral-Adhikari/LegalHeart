// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all language toggle buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest blog content container
            const blogContent = this.closest('article').querySelector('.blog-content');
            
            // Toggle between English and Nepali content
            const englishContent = blogContent.querySelector('.blog-content-english');
            const nepaliContent = blogContent.querySelector('.blog-content-nepali');
            
            if (englishContent.classList.contains('active')) {
                // Switch to Nepali
                englishContent.classList.remove('active');
                englishContent.style.display = 'none';
                nepaliContent.classList.add('active');
                nepaliContent.style.display = 'block';
                // Update all buttons in this article
                const buttons = blogContent.querySelectorAll('.language-btn');
                buttons.forEach(btn => btn.textContent = 'Translate to English');
            } else {
                // Switch to English
                nepaliContent.classList.remove('active');
                nepaliContent.style.display = 'none';
                englishContent.classList.add('active');
                englishContent.style.display = 'block';
                // Update all buttons in this article
                const buttons = blogContent.querySelectorAll('.language-btn');
                buttons.forEach(btn => btn.textContent = 'Translate to Nepali');
            }
        });
    });

    // Check if user is admin (you'll need to implement proper authentication)
    const isAdmin = checkAdminStatus();
    if (isAdmin) {
        document.getElementById('adminForm').style.display = 'block';
    }

    // Load existing blog posts
    loadBlogPosts();

    // Handle form submission for new blog posts
    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            createBlogPost();
        });
    }
});

// Function to load blog posts
function loadBlogPosts() {
    // In a real implementation, this would fetch from a database
    // For now, we'll use localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogGrid = document.getElementById('blogGrid');
    
    blogGrid.innerHTML = posts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h3>${post.title}</h3>
                <div class="blog-meta">
                    <span>By ${post.author}</span>
                    <span>${new Date(post.date).toLocaleDateString()}</span>
                </div>
                <p class="blog-excerpt">${post.content.substring(0, 150)}...</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
    `).join('');
}

// Function to create a new blog post
function createBlogPost() {
    const title = document.getElementById('postTitle').value;
    const imageFile = document.getElementById('postImage').files[0];
    const content = document.getElementById('postContent').value;
    const author = document.getElementById('postAuthor').value;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageBase64 = e.target.result;
            
            const newPost = {
                title: title,
                image: imageBase64,
                content: content,
                author: author,
                date: new Date().toISOString()
            };

            // Get existing posts
            const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            posts.unshift(newPost);
            localStorage.setItem('blogPosts', JSON.stringify(posts));

            // Reset form
            document.getElementById('blogForm').reset();
            
            // Show success message
            alert('Blog post published successfully!');
            
            // Reload page to show new post
            location.reload();
        };
        reader.readAsDataURL(imageFile);
    }
}

// Function to check admin status
function checkAdminStatus() {
    return localStorage.getItem('isAdmin') === 'true';
}

// Function to toggle admin mode (for testing)
function toggleAdminMode() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    localStorage.setItem('isAdmin', !isAdmin);
    location.reload();
} 