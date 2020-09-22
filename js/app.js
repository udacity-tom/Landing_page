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

const navbarList = document.getElementById('navbar__list');
console.log(navbarList);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//gets sections creates array of each section as basis for li
function getSectionsAsArray() {
    const sections = getSections();
    let navSections = []; 
    for(let i=0; i < sections.length; i++){
        navSections[i] = sections[i].attributes.id.textContent;
    }
    return (navSections);
}
//Adds fourth section referred to in rubric
function addSection(){
    
}

function getSections() {
    const sections = document.querySelectorAll('section');
    return sections;
}


// const navbar
// function addListener (element) {
//     element.addEventListener('scroll',() =>{

//     })
// }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createHome() {
    const homeLink = document.createElement('a');
    homeLink.className = "menu__link";
    homeLink.setAttribute('id','home');
    homeLink.setAttribute('href','home');
    const homeItem = document.createElement('li');
    homeItem.textContent = "Home";
    homeLink.appendChild(homeItem);
    return homeLink;
}





function buildNav() {
    const navElements = getSectionsAsArray();
    let navbarFragment = document.createDocumentFragment();
    // const homeLink = createHome();
    // homeLink.setAttribute('href', Thetopof the page);)
    // navbarFragment.appendChild(createHome());
    for( let i=0; i < navElements.length; i++){
        let navbarListItem = "";
        navbarLink = document.createElement('a');
        
        navbarLink.className = "menu__link "+navElements[i];
        navbarLink.addEventListener( 'click', function addClass() {
            // this.ClassList.add('active');
        });
        // navbarLink.ClassList.add(navElements[i]);
        navbarLink.setAttribute('href','#section'+(1+i));
        navbarListItem = document.createElement('li');
        navbarLink.textContent = navElements[i];
        navbarListItem.appendChild(navbarLink);
        console.log("navbarlistitem ",navbarListItem);
        // navbarLink.appendChild(addEventListener())
        
        navbarFragment.appendChild(navbarListItem);
    }
    // const navbarList = document.getElementById('navbar__list');
    // const navbarList = getNavbarList();
    navbarList.appendChild(navbarFragment);
}

function hideNav() {
//setTimeout(for some time) Then add class hide nav
}

// Add class 'active' to section when near top of viewport
// for(section in sections) 

    // console.log("current section is", sections[i]);
    // window.addEventListener('scroll', (el) => {
        // for(let i=0; i < sections.length; i++){
        // console.log(el);
        // console.log("current section is", sections[1]);
        // if (sections[1].scrollY >0){
        //     console.log("yes");
            // section.style.background = "yellow";
        // }
        // console.log(el.getBoundingClientRect);
        // let currentCont = el.getBoundingClientRect();
        
        // if (currentCont.top <= 0 && currentCont.bottom >= 80 || document.documentElement.clientHeight) {
        //     document.getElementById(section).classList.add('active');
        // } else{
        //     document.getElementById(section).classList.remove('active');
        // }   
     
// }
// })

// let last_known_scroll_position = 0;
// let ticking = false;





function addListener(){
    const highlightNav = document.getElementsByClassName('menu__link');
    window.addEventListener('scroll', function() {
        const currentPos = sections.getBoundingClientRect();
        console.log(currentPos.top,currentPos.bottom);
    
        if(currentPos.top < 10 && currentPos.bottom > -10){
            section.classList.add('active');
            document.getElementById()

        } else {
            sections.classList.remove('active');
        }
    } )
}

function doSomething() {
    const sections = getSections();
    const allItems = document.getElementsByClassName('menu__link');
    console.log("all itemsW", allItems);
    // const menuItem = getMenuItem();
    for(const section of sections ) {
        window.addEventListener('scroll', function(event) {
            const currentPos = section.getBoundingClientRect();
            const currentItem = document.querySelector('.menu__link.'+section.id);
            console.log("currentItem", currentItem);
            console.log("I am section ",section,currentPos.top,currentPos.bottom);
        // console.log("html height", section.clientHeight);
            if(currentPos.top < 150 && currentPos.bottom > 150 ){
                section.classList.add('active');
                currentItem.classList.add('active');
            } else {
                section.classList.remove('active');
                currentItem.classList.remove('active');
            }
        } )
    }
}   

function getCurrentItem() {
    window.addEventListener('DOMContentLoaded', () => {
        const currentItem = document.getElementsByClassName('menu__link '+'section1');
        return currentItem;
    })
    
}

//adds a highlight on the nav on the button
document.addEventListener('DOMContentLoaded', function getMenuItem(){
    const allItems = document.getElementsByClassName('menu__link');
    console.log("all itemsW", allItems);
    for(let i=0; i < allItems.length; i++){
        // allItems.classList.remove('active');
     allItems[i].addEventListener('click', () => {
        allItems[i].classList.add('active');
    })}

})

doSomething();


function positionHead () {
    setTimeout(4000);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const pageHead = document.getElementsByClassName('page__header');
    // pageHead.setAttribute(left, (vw/2));
    console.log("vw is", vw, pageHead);
}
// positionHead();
document.addEventListener('DOMContentLoaded', positionHead());



// function listen
// window.addEventListener('scroll', function(event) {
//   last_known_scroll_position = window.scrollY;
//   doSomething(window.scrollY);
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       console.log(last_known_scroll_position);
//       ticking = false;
//     });
//     ticking = true;
//   }
// });
// window.addEventListener()

function setActiveSection(){
    // let rect = el

    //if Section is in viewport then make active
//listen for which section is active
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
// function addClassToMenu() {
// const navbarAddClass = document.querySelectorAll('.menu__Link');
// console.log(".menu__link ", navbarAddClass);
// const navElementsAddClass = getSectionsAsArray();
// for(let i=0; i < navbarAddClass;i++){
//     console.log(navbarAddClass[i],navElementsAddClass[i]);
//     navbarAddClass[i].classList.add(navElementsAddClass[i]);
// }
// }
// addClassToMenu();

// function getMenuItem(){
//     const allItems = document.getElementsByClassName('menu__link');
//     console.log("all itemsW", allItems);
// }





// document.addEventListener('DOMContentLoaded', function getMenuItem(){
//     const allItems = document.getElementsByClassName('menu__link');
//     console.log("all itemsW", allItems);
//     for (let allItem in allItems){
//      function addIt () {allItem.addEventListener('click', function addClass() {
//         this.ClassList.add('active');
//     })}}

// })









// navbarLink.addEventListener( 'click', function addClass() {
    // this.ClassList.add('active');
// });