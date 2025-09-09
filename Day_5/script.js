const themeButton = document.getElementById('theme-toggle');
const body = document.body;

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');
  themeButton.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});