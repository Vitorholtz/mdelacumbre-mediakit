let menuToggle = document.querySelector('.mobile-menu-toggle');
let mobileMenu = document.querySelector('.md-header');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('mobile-menu-toggle--active');
    mobileMenu.classList.toggle('md-header--mobile');
})

window.onload