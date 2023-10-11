// This is for the Hamburger Menu
let displaySideNav = document.getElementById("mobile-side-nav");
let x = window.matchMedia("(max-width: 700px)")

function showSideNav() {
  displaySideNav.classList.add('open')
}
function closeSideNav() {
  displaySideNav.classList.remove('open')
}
window.onclick = function (event){
  if (event.target == displaySideNav){
    displaySideNav.classList.remove('open')
  }
}

let hangingMenu = document.getElementById("hangingMenu");

// hangingMenu.addEventListener('scroll', showHangingMenu);
// hangingMenu.style.display = "none";

function showHangingMenu() {
  hangingMenu.style.display = "flex";
}

const hangingLinks = document.getElementById('.hanging-menu-links')
hangingLinks.addEventListener("click", activeHangingLinks)

let activetab =false;
function activeHangingLinks(){
 if (activetab) {
    hangingLinks.document.classList.add('active')
 } else {
    hangingLinks.document.classList.remove('active')
 }
}