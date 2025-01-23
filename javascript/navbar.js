document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;

    // Adjust for the homepage URL if needed
    if (path === "/") {
        path = "/index.html";  // or whatever your homepage file is named
    }

    // Select all the links in the navigation
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        
        // If the link's href matches the current path, add 'active'
        if (href === path || path.indexOf(href) !== -1) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
  
        if (href && !href.startsWith('#') && href.endsWith('.html')) {
          event.preventDefault(); // Prevent instant navigation
          document.body.classList.add('swipe-left');
          
          setTimeout(() => {
            window.location.href = href; // Navigate after animation
          }, 500); // Match transition duration
        }
      });
    });
  });


  function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach((section) => {
      section.style.display = 'none';
    });
  
    // Show the selected content section
    document.getElementById(sectionId).style.display = 'block';
  }
  