// Variable definitions
let showcase = document.getElementById('showcase-banner');

// document load events
function docLoadEvents() {

    // Check size of screen
    checkSize();

}

// Check size of the window
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


// Close menu function also clicks elsewhere to prevent link highlighting on mobile

function closeMenu() {

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width <= 768) {
        document.querySelector('.navbar-toggler').click();
    }


}







// Document event listeners

// Window on load events
document.addEventListener('load', docLoadEvents());

// Check for resizing of window and adjust accordingly
window.addEventListener('resize', () => {
    checkSize();
})

// On click of menu item
document.querySelectorAll('.nav-link-custom').forEach(link => {

    link.addEventListener('click', closeMenu);

})