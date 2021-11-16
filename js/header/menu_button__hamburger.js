const menuButton = document.querySelector('.menu_button');
const navigationMenu = document.querySelector('.navigation_menu');
let isOpen = false;
menuButton.addEventListener('click', () => {
    if (!isOpen) {
        menuButton.classList.add('open');
        isOpen = true;
    } else {
        menuButton.classList.remove('open');
        isOpen = false;
    }
});