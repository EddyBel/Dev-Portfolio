// This page is in charge of managing all the Web Animations that use the window scroll as an event.

// Global variables
let previewLocation = window.location.pathname;

// ---------------------------- ANIMATIONS OF GLOBAL WEB ELEMENTS ------------------------------------

// Obtain the elements of the domain that will be animated
const ButtonScrollTop = document.querySelector('.button__scroll__top') as HTMLElement;
const Navbar = document.querySelector('.navbar') as HTMLElement;
const NavbarBackground = document.querySelector('.navbar__container__menus') as HTMLElement;

/** This function will dictate the animation to hide or show the button according to scroll */
function AnimationScrollTopButton() {
  if (window.scrollY == 0) ButtonScrollTop.classList.remove('visible');
  else if (window.scrollY > 40) ButtonScrollTop.classList.add('visible');
}

// Define external variables for animation
/** Variables to store the previous position of the scroll */
let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

/** This function shows or hides the navigation bar as the scroll moves. */
function AnimationWatchNavBar() {
  /** Variable that stores the current scroll position */
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Compare current position with previous position to determine scroll direction
  // Scroll down
  if (currentScrollPosition > previousScrollPosition) Navbar.classList.add('hidden');
  // Scroll up
  else Navbar.classList.remove('hidden');

  // Update the previous position with the current position
  previousScrollPosition = currentScrollPosition;
}

/*+ This function changes the color of the navbar once a distance threshold is passed. */
function AnimationChangeTransparentNavBar() {
  if (window.scrollY < 100) NavbarBackground.classList.add('transparent');
  else NavbarBackground.classList.remove('transparent');
}

// ---------------------------- ANIMATIONS TO BE USED FOR THE HOME SECTION ------------------------------------

// Obtain the elements of the domain that will be animated
let homeTitleWorkExperience = document.querySelector('.index__experience__title') as HTMLElement;
let homeParagraphsWorkExperience = document.querySelectorAll('.index__experience__paragraph');

// Variables and Constants
const distance = 600;

function AnimationTextExperience(currentLocation: string) {
  if (currentLocation != previewLocation) {
    homeTitleWorkExperience = document.querySelector('.index__experience__title') as HTMLElement;
    homeParagraphsWorkExperience = document.querySelectorAll('.index__experience__paragraph');
  }

  if (homeTitleWorkExperience?.getBoundingClientRect().top < distance)
    homeTitleWorkExperience?.classList.add('visible');
  else homeTitleWorkExperience?.classList.remove('visible');

  homeParagraphsWorkExperience.forEach((element) => {
    if (element.getBoundingClientRect().top < distance) element.classList.add('visible');
    else element.classList.remove('visible');
  });
}

// ---------------------------- ANIMATIONS TO BE USED FOR THE WORKS SECTION ------------------------------------

function AnimationWorksCards() {
  console.log('Exmaple');
}

// ---------------------------- MAIN FUNCTION THAT MANAGES ANIMATIONS ------------------------------------

/** This function contains all the animations that will be executed in the scroll event. */
function ScrollFunctions() {
  AnimationScrollTopButton();
  AnimationWatchNavBar();
  AnimationChangeTransparentNavBar();

  /** Extracts the current web path */
  const currentLocation = window.location.pathname;

  // Validate that you are on the HOME or "/" page to run your animations.
  if (currentLocation == '/') {
    AnimationTextExperience(currentLocation);
  }

  /** Update the web route */
  previewLocation = currentLocation;
}

let scrollAnimationFrameId: number | null = null;

function scrollHandler() {
  if (scrollAnimationFrameId) return; // Evita múltiples llamadas si ya se está procesando un cuadro de animación

  scrollAnimationFrameId = requestAnimationFrame(() => {
    ScrollFunctions();
    scrollAnimationFrameId = null;
  });
}

/** Scroll event to handle all animations */
window.addEventListener('scroll', scrollHandler);
