document.addEventListener("DOMContentLoaded", function() {

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero section text slider
    const heroTexts = document.querySelectorAll("#hero-text-slider h1");
    let currentTextIndex = 0;
    setInterval(() => {
        heroTexts[currentTextIndex].style.display = 'none';
        currentTextIndex = (currentTextIndex + 1) % heroTexts.length;
        heroTexts[currentTextIndex].style.display = 'block';
    }, 4000); // Changes every 4 seconds

    // Scroll-triggered fade-in animations
    const fadeElems = document.querySelectorAll('.scroll-fade');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

});