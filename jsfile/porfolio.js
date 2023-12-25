//  NAVBAR & MENU ICON 

const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky" , window.scrollY > 100);
});

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 840) {
    navlist.classList.remove('open');
    menu.classList.remove('bx-x');
  }
});



const navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navlist.classList.remove('open');
    menu.classList.remove('bx-x');
  });
});



// Load the API client and authenticate the user


// RUNNING TEXT ANIMATION JAVASCRIPT

const text = ["FULLSTACK DEVELOPER !", "PROBLEM SOLVER !", "GOAL ORIENTED !"]; // Array of text to display
const speed = 150; // Speed of text animation in milliseconds
let index = 0;
let letterIndex = 0;
let runningText = "";

function runText() {
  if (letterIndex === 0) {
    runningText = "";
  }

  runningText += text[index][letterIndex];
  document.getElementById("running-text").innerHTML = "<h3>" + runningText + "</h3>";

  letterIndex++;

  if (letterIndex === text[index].length) {
    index++;
    if (index === text.length) {
      index = 0;
    }
    letterIndex = 0;
  }

  setTimeout(runText, speed);
}

runText();


