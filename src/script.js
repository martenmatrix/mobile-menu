export default function initMenu() {
    const mobileMenuDIV = document.querySelector('.mobile-menu');
    const menuButtons = document.querySelectorAll('.menu-button.not-main');
    const openMenuButton = document.querySelector('.menu-button.main');

    openMenuButton.addEventListener('click', (e) => {
        openMenuButton.classList.toggle('active');
        mobileMenuDIV.classList.toggle('active');
        menuButtons.forEach((button) => button.classList.toggle('active'));
    });

    menuButtons.forEach((button) => button.addEventListener('click', (e) => {
        menuButtons.forEach((button) => button.classList.remove('selected'));
        e.currentTarget.classList.add('selected');

        // redirect
        location.href = e.currentTarget.dataset.redirect;
    }))
}

initMenu();
