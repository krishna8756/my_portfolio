const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} Krishna`;
}

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isLightTheme = document.body.classList.toggle("light-theme");
        themeToggle.setAttribute("aria-pressed", String(isLightTheme));
        themeToggle.setAttribute(
            "aria-label",
            isLightTheme ? "Switch to dark theme" : "Switch to light theme"
        );
        themeToggle.innerHTML = isLightTheme
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.2A8.6 8.6 0 0 1 8.8 3.8a8.7 8.7 0 1 0 11.4 11.4Z"/></svg>';
    });
}

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const homeNavbar = document.querySelector(".home-navbar");

if (mobileMenuToggle && homeNavbar) {
    const closeMobileMenu = () => {
        homeNavbar.classList.remove("menu-open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
        mobileMenuToggle.setAttribute("aria-label", "Open navigation menu");
    };

    mobileMenuToggle.addEventListener("click", () => {
        const isOpen = homeNavbar.classList.toggle("menu-open");
        mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
        mobileMenuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    homeNavbar.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && homeNavbar.classList.contains("menu-open")) {
            closeMobileMenu();
            mobileMenuToggle.focus();
        }
    });
}
