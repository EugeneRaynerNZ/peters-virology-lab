document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
    });
});