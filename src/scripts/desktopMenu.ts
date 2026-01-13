export function initDesktopMenu(): void {
    const links = document.querySelectorAll(".nav__inner-link");

    if (!links) return;

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const href = link.getAttribute('href');

            if (href && href.startsWith("#")) {
                const element = document.querySelector(href) as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }

            }
        })
    })
}
