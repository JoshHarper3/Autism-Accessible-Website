
const themeSwitchAnimation = document.getElementById('switch-animation');
const switchAnimationOff = document.getElementById('switch-text-animations');

if (localStorage.getItem('disable-animations') === 'active') {
    document.body.classList.add('disable-animations');
    themeSwitchAnimation.checked = true;
    switchAnimationOff.textContent = "Enable Animations";
} else {
    switchAnimationOff.textContent = "Disable Animations";
}


const disableAnimations = () => {
    document.body.classList.add('disable-animations');
    localStorage.setItem('disable-animations', 'active');
    switchAnimationOff.textContent = "Enable Animations";
    themeSwitchAnimation.checked = true;
} 

const enableAnimations = () => {
    document.body.classList.remove('disable-animations');
    localStorage.removeItem('disable-animations');
    switchAnimationOff.textContent = "Disable Animations";
    themeSwitchAnimation.checked = false;
}


themeSwitchAnimation.addEventListener("change", () => {
if (themeSwitchAnimation.checked) {
    disableAnimations();
} else {
    enableAnimations();
}

})
