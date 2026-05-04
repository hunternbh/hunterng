document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  function setToggleState(isDark) {
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";

    button.textContent = isDark ? "☀️" : "🌙";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.dataset.tooltip = label;
  }

  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark";

  document.documentElement.classList.toggle("dark-mode", isDarkMode);
  document.body.classList.toggle("dark-mode", isDarkMode);
  setToggleState(isDarkMode);

  button.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    document.documentElement.classList.toggle("dark-mode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setToggleState(isDark);
  });
});
