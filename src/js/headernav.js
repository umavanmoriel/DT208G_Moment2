//Header meny animation
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    
    // Ta reda på vilken sida man är
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || !currentPage.includes('.html')) {
        currentPage = 'index.html';
    }
    
    links.forEach(link => {
        link.classList.remove('active');
        
        let linkPage = link.getAttribute('href').replace('./', '');
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});