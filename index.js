// This is for the Hamburger Menu
let displaySideNav = document.getElementById("mobile-side-nav");
let hambElem = document.querySelector('.hamburger-btn')

// document.querySelector('.lightmode_switch').addEventListener('click', lightMode)
// function lightMode(){
//   document.body.style.background = 'white'
//   document.body.style.color = 'black'
// }

function showSideNav() {
  displaySideNav.classList.toggle('open')
  hambElem.classList.toggle('hamb_open')
}

const closure = document.querySelectorAll('.mobSide li')

closure.forEach(item => item.addEventListener('click', showSideNav))

window.onclick = function (event){
  if (event.target == displaySideNav){
    displaySideNav.classList.remove('open')
  }
}

let hangingMenu = document.getElementById("hangingMenu");

// hangingMenu.addEventListener('scroll', showHangingMenu);
// hangingMenu.style.display = "none";

// function showHangingMenu() {
//   hangingMenu.style.display = "flex";
// }

// const hangingLinks = document.getElementById('.hanging-menu-links')
// hangingLinks.addEventListener("click", activeHangingLinks)

// let activetab =false;
// function activeHangingLinks(){
//  if (activetab) {
//     hangingLinks.document.classList.add('active')
//  } else {
//     hangingLinks.document.classList.remove('active')
//  }
// }


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("testimonial-text");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}