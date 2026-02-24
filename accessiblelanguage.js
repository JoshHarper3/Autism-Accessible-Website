const themeSwitchLanguage = document.getElementById('switch-language');
const switchTextLanguage = document.getElementById('switch-text-language');

if (localStorage.getItem('accessible-language-mode') === 'active') {
    document.body.classList.add('accessible-language-mode');
    themeSwitchLanguage.checked = true;
    switchTextLanguage.textContent = "Disable Accessible Language Mode"
    accessibleLanguageMode();
} else{
    switchTextLanguage.textContent = "Enable Accessible Language Mode"
}
const enableAccessibleLanguageMode = () => {
    document.body.classList.add('accessible-language-mode');
    localStorage.setItem('accessible-language-mode', 'active');
    switchTextLanguage.textContent = "Disable Accessible Language Mode";
    accessibleLanguageMode();
} 

const disableAccessibleLanguageMode = () => {
    document.body.classList.remove('accessible-language-mode');
    localStorage.setItem('accessible-language-mode', null);
    switchTextLanguage.textContent = "Enable Accessible Language Mode";
    defaultLanguageMode();
}

themeSwitchLanguage.addEventListener("change", () => {
if (themeSwitchLanguage.checked) {
    enableAccessibleLanguageMode();
} else {
    disableAccessibleLanguageMode();
}

})

function accessibleLanguageMode() {
    document.querySelectorAll('[data-default-language]').forEach(element => {
        element.textContent = element.getAttribute('data-accessible-language');
    });
}

function defaultLanguageMode() {
    document.querySelectorAll('[data-accessible-language]').forEach(element => {
        element.textContent = element.getAttribute('data-default-language');
    });
}
