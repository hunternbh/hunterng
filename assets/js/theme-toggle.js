(function () {
  let isDark = true;
  try {
    isDark = localStorage.getItem("theme") !== "light";
  } catch {
    // Use the default when storage is unavailable.
  }

  document.documentElement.classList.toggle("dark-mode", isDark);

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");

    function applyTheme() {
      document.documentElement.classList.toggle("dark-mode", isDark);
      document.body.classList.toggle("dark-mode", isDark);
      if (!button) return;

      const label = isDark ? "Switch to light mode" : "Switch to dark mode";
      button.textContent = isDark ? "☀️" : "🌙";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      button.setAttribute("aria-pressed", isDark ? "true" : "false");
      button.dataset.tooltip = label;
    }

    applyTheme();
    if (!button) return;

    button.addEventListener("click", function (event) {
      event.preventDefault();
      isDark = !isDark;
      applyTheme();

      try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
      } catch {
        // The current page can still switch themes.
      }
    });
  });
})();
