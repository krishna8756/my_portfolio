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

const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectSearch = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".showcase-project");
const projectsEmpty = document.getElementById("projects-empty");

if (projectFilters.length && projectSearch && projectCards.length && projectsEmpty) {
    let activeProjectFilter = "all";

    const updateProjects = () => {
        const searchTerm = projectSearch.value.trim().toLowerCase();
        let visibleProjectCount = 0;

        projectCards.forEach((project) => {
            const categories = project.dataset.categories.split(/\s+/);
            const matchesFilter = activeProjectFilter === "all"
                || categories.includes(activeProjectFilter);
            const matchesSearch = project.textContent.toLowerCase().includes(searchTerm)
                || project.dataset.search.toLowerCase().includes(searchTerm);
            const isVisible = matchesFilter && matchesSearch;

            project.hidden = !isVisible;
            visibleProjectCount += Number(isVisible);
        });

        projectsEmpty.hidden = visibleProjectCount > 0;
    };

    projectFilters.forEach((filter) => {
        filter.addEventListener("click", () => {
            activeProjectFilter = filter.dataset.projectFilter;

            projectFilters.forEach((button) => {
                const isActive = button === filter;
                button.classList.toggle("is-active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
            });

            updateProjects();
        });
    });

    projectSearch.addEventListener("input", updateProjects);
}
