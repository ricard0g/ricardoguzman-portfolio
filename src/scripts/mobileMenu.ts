export function initMobileMenu(): void {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('nav-mobile__menu');

    if (!burgerBtn || !mobileMenu) return;

    // Toggle menu on burger button click
    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu and smooth scroll when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            mobileMenu.classList.add('hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!mobileMenu.contains(target) && !burgerBtn.contains(target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}
