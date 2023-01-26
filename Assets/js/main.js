//toggle theme
const bodyElement = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme){
    bodyElement.classList.add('theme-light');
}

themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('theme-light');
        if (bodyElement.classList.contains('theme-light')) {
            localStorage.setItem('currentTheme', 'themeActive');
        } else {
            localStorage.removeItem('currentTheme', 'themeActive');
        }
    });