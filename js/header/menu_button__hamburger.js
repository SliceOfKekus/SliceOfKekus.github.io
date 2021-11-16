const menuButton = document.querySelector('.menu_button');
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