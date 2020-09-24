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
// //gets sections creates array of each section as basis for li
// function getSectionsAsArray() {
//     const sections = getSections();
//     let navSections = []; 
//     for(let i=0; i < sections.length; i++){
//         navSections[i] = sections[i].attributes.id.textContent;
//     }
//     return (navSections);
// }
//Adds fourth section referred to in rubric
function addSection(title, text1, text2){
    const newSection = document.createElement('section');
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h2');
    const newPara = document.createElement('p');
    const newPara2 = document.createElement('p');
    // const currentMain = document.getElementsByTagName('footer');
    const currentSections = getSections();
    const currentSectionsLen = currentSections.length + 1;
    // console.log('currentMain', currentMain.length, currentMain);
    newSection.setAttribute('id','section'+currentSectionsLen);
    newSection.setAttribute('data-nav','Section '+currentSectionsLen);
    newDiv.className = "landing__container";
    // const newTitleText = "Section"
    // const sectionTextP1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    // const sectionTextP2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    newPara2.textContent = text2;
    newPara.textContent = text1;
    newTitle.textContent = title;
    newPara.appendChild(newPara2);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPara);
    newSection.appendChild(newDiv);


    const lastSection = currentSections[currentSections.length-1];
    // const theLastSection = document.querySelector('#section3');
    // console.log("lastSection", lastSection);
    let navbarFragment = document.createDocumentFragment();
    navbarFragment.appendChild(newSection);
    // console.log("navbarFragmen", navbarFragment);
    // const footerClass = document.querySelector('.page__footer');
    lastSection.parentElement.appendChild(navbarFragment);

}

const sectionTextP1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
const sectionTextP2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
const sectionTitle = "Section 4";
const sectionTitle2 = "Section 5";


document.addEventListener('DOMContentLoaded', addSection(sectionTitle, sectionTextP1, sectionTextP2));
document.addEventListener('DOMContentLoaded', addSection(sectionTitle2, sectionTextP1, sectionTextP2));

function getSections() {
    const sections = document.querySelectorAll('section');
    return sections;
}

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
    const navbarList = document.getElementById('navbar__list');
    // console.log(navbarList);
    // const navElements = getSectionsAsArray();
    const navElements = getSections();
    let navbarFragment = document.createDocumentFragment();
    // const homeLink = createHome();
    // homeLink.setAttribute('href', Thetopof the page);)
    // navbarFragment.appendChild(createHome());
    for( let i=0; i < navElements.length; i++){
        let navbarListItem = "";
        navbarLink = document.createElement('a');
        navbarLink.className = "menu__link "+navElements[i].id;
        // navbarLink.addEventListener( 'click', function addClass() {        });
        navbarLink.setAttribute('href','#section'+(1+i));
        navbarListItem = document.createElement('li');
        navbarLink.textContent = navElements[i].dataset.nav;
        // const testNav = getSections();
        // console.log("testNav sections are ", testNav);
        // navbarLink.textContent = testNav[i].dataset.nav;
        navbarListItem.appendChild(navbarLink);
        // console.log("navbarlistitem ",navbarListItsem);
        navbarFragment.appendChild(navbarListItem);
    }
    navbarList.appendChild(navbarFragment);
}

function hideNav() {
//setTimeout(for some time) Then add class hide nav
    const currentNav = document.getElementsByClassName('navbar__menu');
    document.window.setTimeout(3000);
    currentNav.setAttribute


}

// function addListener(){
//     const highlightNav = document.getElementsByClassName('menu__link');
//     window.addEventListener('scroll', function() {
//         const currentPos = sections.getBoundingClientRect();
//         console.log(currentPos.top,currentPos.bottom);
    
//         if(currentPos.top < 10 && currentPos.bottom > -10){
//             section.classList.add('active');
//             document.getElementById()

//         } else {
//             sections.classList.remove('active');
//         }
//     } )
// }

function checkPageLocation() {
    const sections = getSections();
    const allItems = document.getElementsByClassName('menu__link');
    sections[0].onscroll = logScroll;
    function logScroll(e) {
        console.log(e.target.scrollTop);
    }
    // console.log("all itemsW", allItems);
    // const menuItem = getMenuItem();
    for(const section of sections ) {
        window.addEventListener('onscroll', function(event) {
            // const currentPos = section.getBoundingClientRect();
            

            console.log(event);
            // fadeNav();
            // const currentItem2 = document.getElementsByClassName('.menu__link');
            // console.log("currentItem2", currentItem2);
            const currentItem = document.querySelector('.menu__link.'+section.id);
            //TODO:Check why only querySelector works and not getElementsByClassName->SUSPECT:QS returns NodeList, not *live* vs others//

            // console.log("currentItem", currentItem);
            // console.log("I am section ",section,currentPos, currentPos.top,currentPos.bottom);
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
const sections = getSections();
sections[0].onscroll = logScroll;
    function logScroll(e) {
        console.log(e.target.scrollTop);
    }

function menufade(){

}

function getCurPos (element) {
    const currentPos = element.getBoundingClientRect();
    return currentPos;
}

function fadeNav (){
    console.log("infadeNav");
    const sections = getSections();
    const startPos2 = Number(getCurPos(sections[0]).top);
    const startPos = startPos2.toString();
    // let startPos = currentPos.top;
    console.log(typeof startPos);
    const pageHead = document.querySelector('.page__header');
    let finishPos = getCurPos(sections[0]).top;
    console.log(startPos,finishPos);
    if(Number(startPos) == finishPos){
        console.log("Yes");
        window.setTimeout(4000);
        
        pageHead.classList.add('fade-out');
    } else {
    pageHead.classList.remove('fade-out');
    window.setTimeout(4000);

    }
}

// function getCurrentItem() {
//     window.addEventListener('DOMContentLoaded', () => {
//         const currentItem = document.getElementsByClassName('menu__link '+'section1');
//         return currentItem;
//     })
    
// }

//adds a highlight on the nav on the button




// document.addEventListener('DOMContentLoaded', function getMenuItem(){
//     const allItems = document.getElementsByClassName('menu__link');
//     // console.log("all itemsW", allItems);
//     for(let i=0; i < allItems.length; i++){
//         // allItems.classList.remove('active');
//      allItems[i].addEventListener('click', () => {
//         allItems[i].classList.add('active');
//     })}

// })

checkPageLocation();


function positionHead () {
    setTimeout(4000);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const clientW = Math.max(document.documentElement.clientWidth);
    const winIn = Math.max(window.innerWidth || 0);
    // const pageHead = document.getElementsByClassName('page__header');
    const pageHead = document.querySelector('.page__header');
    console.log(pageHead);
    pageHead.style.marginLeft = vw/(vw-700)/2+"px";
    console.log("vw is",winIn, clientW, vw, pageHead);
}
// positionHead();
// document.addEventListener('DOMContentLoaded', positionHead());

// document.addEventListener('DOMContentLoaded', addSection(sectionTitle, sectionTextP1, sectionTextP2));

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