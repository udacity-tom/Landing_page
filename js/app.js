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
//gets sections creates console log of them and creaetes ul
function getSections() {
    
    // const sections = document.querySelectorAll('section');
    // console.log(sections);
    // for (section in sections){
    //     console.log(section);
    // }
    // const sectionsLength = sections.length;
    // for(let i=0; i < sectionsLength; i++){
    //     console.log(sections[i].attributes.id.textContent);
    // }
    
    const sections = document.querySelectorAll('section');
    // console.log(sections);
    let navSections = []; 
    for(let i=0; i < sections.length; i++){
        navSections[i] = sections[i].attributes.id.textContent;
    }
    // console.log("Array from getSections() function ", navSections);
    // sections.forEach(console.log(sections));
    return (navSections);
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
    
    for( let i=0; i < navElements.length; i++){
        const navbarListItems = "";
        // const textNode = document.createTextNode(navElements[i]);
        // console.log("current textNode is ", textNode);
        navbarListItem = document.createElement('li');
        navbarListItem.textContent = navElements[i];
        // console.log("Navbarlist item", navbarListItem);
        navbarFragment.appendChild(navbarListItem);
        // .innerText(navElements[i]);
        // console.log(navElements[i]);
    }
    console.log(navbarFragment);
const navbarList = document.getElementById('navbar__list');
console.log(navbarList);
navbarList.appendChild(navbarFragment);
    
    
}

buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active