document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }

  button.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    button.textContent = isDark ? "☀️" : "🌙";
  });
});