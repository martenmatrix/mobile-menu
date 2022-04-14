export default function initMenu() {
    const mobileMenuDIV = document.querySelector('.mobile-menu');
    const menuButtons = document.querySelectorAll('.menu-button.not-main');
    const openMenuButton = document.querySelector('.menu-button.main');

    openMenuButton.addEventListener('click', () => {
        openMenuButton.classList.toggle('active');
        mobileMenuDIV.classList.toggle('active');
        menuButtons.forEach((button) => button.classList.toggle('active'));
    });

    menuButtons.forEach((button) => button.addEventListener('click', (e) => {
        menuButtons.forEach((menuButton) => {
            const circleDIV = menuButton.querySelector('.circle');
            circleDIV.classList.remove('selected');
        });

        const currentTargetCircleDIV = e.currentTarget.querySelector('.circle');
        currentTargetCircleDIV.classList.add('selected');

        // redirect
        window.location.href = e.currentTarget.dataset.redirect;
    }));
}

initMenu();
