<button id="theme-toggle">Toggle Theme</button>
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});