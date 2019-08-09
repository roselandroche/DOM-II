// Your code goes here
// Mouseover
const mainNav = document.querySelectorAll("a");
mainNav.forEach(navItem => 
    navItem.addEventListener("mouseover", (event) => 
        navItem.style.cursor = "help"
    )
);
// Keydown
const title = document.querySelector(".logo-heading");

document.addEventListener("keydown", makeYellow);

function makeYellow(event) {
    if(event.keyCode === 32) {
        title.style.backgroundColor = "yellow";
    }
}

const header = document.querySelector("header");

document.addEventListener("keyup", makeBlue);

function makeBlue(event) {
    if(event.keyCode === 32) {
        header.style.backgroundColor = "blue";
    }
}

// Wheel
const page = document.querySelector("body");

document.addEventListener("wheel", zoom);

function zoom(event) {
    event.preventDefault;
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  // Apply scale transform
    page.style.transform = `scale(${scale})`;
}

let scale = 1;

// Drag
const busPic = document.querySelector("header img");
const body = document.querySelector("body");

busPic.addEventListener("drag", function(event) {
    body.style.color = "red";
})

// Dragend
busPic.addEventListener("dragend", function(event) {
    event.preventDefault();
    event.target = document;
    body.style.color = "black";
})

// Load
window.addEventListener('load', (event) => {
    console.log('Congratulations to meet you!');
});

// Resize
window.addEventListener('resize', reportWindowSize);

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

// Click
const advImg = document.querySelector(".img-content img");
advImg.addEventListener("click", (event) => {
    advImg.style.borderRadius = "50%";
});

// Double Click
const boatImg = document.querySelector(".inverse-content img");

boatImg.addEventListener("dblclick", event => {
    boatImg.style.borderRadius = "0";
})

// Mouse Over
const boatBeachImg = document.querySelector(".content-destination img");

boatBeachImg.addEventListener("mouseover", event => {
    boatBeachImg.style.borderRadius = "25%";
})