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
const sectionTextP1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
const sectionTextP2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Adds extra sections referred to in rubric
function addSection(title, text1, text2){
    const newSection = document.createElement('section');
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h2');
    const newPara = document.createElement('p');
    const newPara2 = document.createElement('p');
    const currentSections = getSections();
    const currentSectionsLen = currentSections.length + 1;
    newSection.setAttribute('id','section'+currentSectionsLen);
    newSection.setAttribute('data-nav','Section '+currentSectionsLen);
    newDiv.className = 'landing__container';
    newPara2.textContent = text2;
    newPara.textContent = text1;
    newTitle.textContent = title;
    newPara.appendChild(newPara2);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newPara);
    newSection.appendChild(newDiv);
    const lastSection = currentSections[currentSections.length-1];
    let navbarFragment = document.createDocumentFragment();
    navbarFragment.appendChild(newSection);
    lastSection.parentElement.appendChild(navbarFragment);
}
//Gets current sections based on HTML 
function getSections() {
    const sections = document.querySelectorAll('section');
    return sections;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//Builds Nav based on secctions
function buildNav() {
    const navbarList = document.getElementById('navbar__list');
    const navSections = getSections();
    let navbarFragment = document.createDocumentFragment();
    for( let i=0; i < navSections.length; i++){
        let navbarListItem = "";
        navbarLink = document.createElement('a');
        navbarLink.className = "menu__link "+navSections[i].id;
        navbarLink.setAttribute('href','#section'+(1+i));
        navbarListItem = document.createElement('li');
        navbarLink.textContent = navSections[i].dataset.nav;
        navbarListItem.appendChild(navbarLink);
        navbarFragment.appendChild(navbarListItem);
    }
    navbarList.appendChild(navbarFragment);
}

function hideNav() {
    const pageHead = document.querySelector('.page__header');
    pageHead.classList.add('hide')
}

function showNav() {
    const pageHead = document.querySelector('.page__header');
    pageHead.classList.remove('hide');
}

function navVisible() {
    showNav();
    window.setTimeout(hideNav, 5000);
}

//Sets active Nav highlight
function setNavHighlight() {
    // navVisible();
    const sections = getSections();
    for(const section of sections ) {
        const currentPos = getCurPos (section);
        const currentItem = document.querySelector('.menu__link.'+section.id);
        if(currentPos.top < 150 && currentPos.bottom > 150 ){
            section.classList.add('active');
            currentItem.classList.add('active');
        } else {
            section.classList.remove('active');
            currentItem.classList.remove('active');
        }
    }
}

//Adds event listner to window to set navigation for section
function checkPageLocation() { 
        window.addEventListener('scroll', function(event) {
            navVisible();
            setNavHighlight();
            showScrollToTop();
    } ) 
} 

//shows Scroll To Top Icon
function showScrollToTop() {
const headClass = document.querySelector('.main__hero');    
const topIcon = document.querySelector('.topIcon');
const currentPos = getCurPos(headClass);
    if(currentPos.height+currentPos.top < 0 ){
        topIcon.classList.remove('hide');    
    } else {
        topIcon.classList.add('hide');
    }
}

//Retrieves current window position
function getCurPos(element) {
    const currentPos = element.getBoundingClientRect();
    return currentPos;
}

//Scrolls to top of page
function scrollToTop(){
    window.scrollTo(0,0);
}

//Adds a go to top icon at page bottom
function addTopIcon() {
    const footElem = document.querySelector('footer');
    const upFrag = document.createDocumentFragment();
    const upLink = document.createElement('a');
    const upPara = document.createElement('p');
    const upText = "\u2191";
    upPara.textContent = upText;
    upPara.style.cssText = 'position: fixed; display: inline-block; bottom: 0.1em; right: 1em; color:#fff; background-color: #fff; font-size: 10em; line-height: 0;';
    upPara.addEventListener('click', () => scrollToTop ());
    upLink.appendChild(upPara);
    upLink.className = 'topIcon hide';
    upFrag.appendChild(upLink);
    footElem.parentElement.appendChild(upFrag);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

//Adds new Section programmatically
document.addEventListener('DOMContentLoaded', addSection("Section 4", sectionTextP1, sectionTextP2));
//***adds additional section*** // document.addEventListener('DOMContentLoaded', addSection("Section 5", sectionTextP1, sectionTextP2));
checkPageLocation();
// Build menu 
buildNav();
// Scroll to on page load
scrollToTop();
//Programmatically add goto top icon.
addTopIcon();
