const themeSwitch = document.getElementById('switch');

if (localStorage.getItem('high-contrast-mode') === 'active') {
    document.body.classList.add('high-contrast-mode');
    themeSwitch.checked = true;
}
const enableHighContrastMode = () => {
    document.body.classList.add('high-contrast-mode');
    localStorage.setItem('high-contrast-mode', 'active');
}

const disableHighContrastMode = () => {
    document.body.classList.remove('high-contrast-mode');
    localStorage.setItem('high-contrast-mode', null);
}

themeSwitch.addEventListener("change", () => {
if (themeSwitch.checked) {
    enableHighContrastMode();
} else {
    disableHighContrastMode();
}

})
