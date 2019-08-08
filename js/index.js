// Your code goes here
// Mouseover
const mainNav = document.querySelectorAll("a");
mainNav.forEach(navItem => 
    navItem.addEventListener("mouseover", (event) => 
        navItem.style.cursor = "help"
    )
);
// Keydown
const header = document.querySelector("header");

document.addEventListener("keydown", makeYellow);

function makeYellow(event) {
    if(event.keyCode === 89) {
        header.style.backgroundColor = "yellow";
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
const advImg = document.querySelector(".img-content");

advImg.addEventListener("click", event => {
    advImg.style.borderRadius = "50%";
});
