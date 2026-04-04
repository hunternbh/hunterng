document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const root = document.documentElement;
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  function applyTheme(isDark) {
    root.classList.toggle("dark-mode", isDark);
    body.classList.toggle("dark-mode", isDark);
    button.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  applyTheme(savedTheme === "dark");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isDark = !body.classList.contains("dark-mode");
    applyTheme(isDark);
  });
});