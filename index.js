// make element variables
let NAVBAR, tabButton, tabContent;
document.addEventListener('DOMContentLoaded', () => {
    // Define element variables after everything is loaded
    NAVBAR = document.getElementById('NAVBAR');
    tabButton = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tab-content');

    // Add EventListeners
    for (let i = 0; i < tabButton.length; i++) {
        tabButton[i].addEventListener('click', () => { switchTab(tabButton[i], tabContent[i]) });
    }
    // Make the Arrival tab as initial tab with switchTab
    tabButton[0].click()
    // Controls the NAVBAR's height
    NAVBAR.style.height = `${window.innerHeight}px`;
    window.addEventListener('resize', () => {
        NAVBAR.style.height = `${window.innerHeight}px`;
    });
});

// a function for NAVBAR's tab switching buttons. NOTE : the order of buttons and its corresponding content must be the same because this function is order dependant
let prevButton, prevContent;
function switchTab(_button, _content) {
    // deactivate previous stuff
    if (prevButton != undefined) {
        prevButton.classList.remove('active');
        prevContent.style.display = 'none';
    }
    // activate current button and content
    _button.classList.add('active');
    _content.style.display = 'block';
    // now current is remembered as previous
    prevButton = _button;
    prevContent = _content;
}