// Variable definitions
let showcase = document.getElementById('showcase-banner');

// document load events
function docLoadEvents() {

    // Check size of screen
    checkSize();

}


function checkSize() {

    // Define variable for document width and assign it a value with cross platform capable solution
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Check doc width and adjust banner accordingly
    if (width <= 768) {
        showcase.src = './img/Group_Orange.jpg'
    } else if (width > 768) {
        showcase.src = './img/Banner_Large_NoLogo.png';
    }

}


// Document event listeners
document.addEventListener('load', docLoadEvents());
window.addEventListener('resize', () => {
    checkSize();
})