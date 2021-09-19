export default function initMenu() {
    const mobileMenuDIV = document.querySelector('.mobile-menu');
    const menuButtons = document.querySelectorAll('.menu-button.not-main');
    const openMenuButton = document.querySelector('.menu-button.main');

    openMenuButton.addEventListener('click', () => {
        openMenuButton.classList.toggle('active');
        mobileMenuDIV.classList.toggle('active');
        menuButtons.forEach((button) => button.classList.toggle('active'));
    });
}

initMenu();
