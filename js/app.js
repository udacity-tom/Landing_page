/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//gets sections creates array of each section as basis for li
function getSections() {
    const sections = document.querySelectorAll('section');
    let navSections = []; 
    for(let i=0; i < sections.length; i++){
        navSections[i] = sections[i].attributes.id.textContent;
    }
    return (navSections);
}
//Adds fourth section referred to in rubric
function addSection(){

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    const navElements = getSections();
    let navbarFragment = document.createDocumentFragment();
    const homeLink = document.createElement('a');
    homeLink.className = "menu__link";
    const homeItem = document.createElement('li');
    homeItem.textContent = "Home";
    homeLink.appendChild(homeItem);
    // homeLink.setAttribute('href', Thetopof the page);)
    navbarFragment.appendChild(homeLink);
    for( let i=0; i < navElements.length; i++){
        let navbarListItem = "";
        navbarLink = document.createElement('a');
        navbarLink.className = "menu__link";
        navbarLink.setAttribute('href','#section'+i);
        navbarListItem = document.createElement('li');
        navbarListItem.textContent = navElements[i];
        navbarLink.appendChild(navbarListItem);
        navbarFragment.appendChild(navbarLink);
    }
    const navbarList = document.getElementById('navbar__list');
    navbarList.appendChild(navbarFragment);
}

function hideNav() {
//setTimeout(for some time) Then add class hide nav
}

// Add class 'active' to section when near top of viewport
function setActiveSection(){

}
// Scroll to anchor ID using scrollTO event
function scrollToSection(){

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
scrollToSection();
// Set sections as active
setActiveSection();