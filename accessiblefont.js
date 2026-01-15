const themeSwitchFont = document.getElementById('switch-font');
const switchTextFont = document.getElementById('switch-text-font');

if (localStorage.getItem('accessible-font-mode') === 'active') {
    document.body.classList.add('accessible-font-mode');
    themeSwitchFont.checked = true;
    switchTextFont.textContent = "Disable Accessible Font Mode"
} else{
    switchTextFont.textContent = "Enable Accessible Font Mode"
}
const enableAccessibleFontMode = () => {
    document.body.classList.add('accessible-font-mode');
    localStorage.setItem('accessible-font-mode', 'active');
    switchTextFont.textContent = "Disable Accessible Font Mode";
} 

const disableAccessibleFontMode = () => {
    document.body.classList.remove('accessible-font-mode');
    localStorage.setItem('accessible-font-mode', null);
    switchTextFont.textContent = "Enable Accessible Font Mode";
}

themeSwitchFont.addEventListener("change", () => {
if (themeSwitchFont.checked) {
    enableAccessibleFontMode();
} else {
    disableAccessibleFontMode();
}

})
