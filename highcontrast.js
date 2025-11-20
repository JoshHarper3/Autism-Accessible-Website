const themeSwitch = document.getElementById('switch');
const switchText = document.getElementById('switch-text');

if (localStorage.getItem('high-contrast-mode') === 'active') {
    document.body.classList.add('high-contrast-mode');
    themeSwitch.checked = true;
    switchText.textContent = "Disable High Contrast Mode"
} else{
    switchText.textContent = "Enable High Contrast Mode"
}
const enableHighContrastMode = () => {
    document.body.classList.add('high-contrast-mode');
    localStorage.setItem('high-contrast-mode', 'active');
    switchText.textContent = "Disable High Contrast Mode";
} 

const disableHighContrastMode = () => {
    document.body.classList.remove('high-contrast-mode');
    localStorage.setItem('high-contrast-mode', null);
    switchText.textContent = "Enable High Contrast Mode";
}

themeSwitch.addEventListener("change", () => {
if (themeSwitch.checked) {
    enableHighContrastMode();
} else {
    disableHighContrastMode();
}

})

