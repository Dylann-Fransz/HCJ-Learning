// MENU

const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

// ANIMATIONS

const data_viewport = document.querySelectorAll('[data-inviewport]');

const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// FUNCTIONS

function toggleMainMenu() {
  if (menu.classList.contains("hideMenu")) {
    menu.classList.remove("hideMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("hideMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

// CONNECTIONS

hamburger.addEventListener("click", toggleMainMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMainMenu);
  }
)

data_viewport.forEach(el => {
  Obs.observe(el, obsOptions);
});
