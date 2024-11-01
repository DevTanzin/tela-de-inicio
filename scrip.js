document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.hamburger');
    const menuLateral = document.querySelector('.menu-lateral');

    menuToggle.addEventListener('click', function() {
        menuLateral.classList.toggle('show');
    });
});
