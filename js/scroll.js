// ==================== Document ID's ====================
let nav = document.getElementById('nav-bar');
let meetTheTeam = document.getElementById('meet-the-team');
let ageGroups = document.getElementById('age-groups');
let classes = document.getElementById('classes');
let aboutUs = document.getElementById('about-us');
let contactUs = document.getElementById('contact-us');

// Scroll to top button
let scrollTop = document.getElementById('scroll-top');


//Add event listener for each in nav bar and enable scroll function
document.querySelectorAll('.nav-link-custom').forEach(link => {
    // Add the event listener with the event passed as an argument so that the correct ID can be gathered
    link.addEventListener('click', function (event) {

        // Get id of event target
        let idBtn = event.target.id;

        // Get id of corresponding section of page by removing '-btn' from the original id
        let id = idBtn.substring(0, idBtn.length - 4);

        // Pass id into funtion
        scrollToId(id);

    })
})

// Scroll to ID function
function scrollToId(id) {

    // Offset by 5vh, converted is equal to 46.45 px
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let yOffset;

    if (width <= 930) {
        yOffset = -440;
    } else {
        yOffset = -120;
    }

    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

}


// Event Listeners
scrollTop.addEventListener('click', scrollToTop);
