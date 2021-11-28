const menuButton = document.querySelector('.menu_button');
const navigationMenu = document.querySelector('.navigation_menu');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("open");
    navigationMenu.classList.toggle("open");
});