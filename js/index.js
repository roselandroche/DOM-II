// Your code goes here
const navOne = document.querySelector("a");
navOne.addEventListener("click", (event) => {
    navOne.style.color = "purple";
    event.preventDefault();
});

// Click 1
const mainNav = document.querySelectorAll("a");
mainNav.forEach(navItem => 
    navItem.addEventListener("mouseover", (event) =>
        navItem.style.cursor = "help"
    )
);

// Mouseover 2
const mainNavBlock = document.querySelector(".main-navigation");
mainNavBlock.addEventListener("click", (event) => {
    mainNavBlock.style.backgroundColor = "lime";
})

// Keydown 3
const title = document.querySelector(".logo-heading");

document.addEventListener("keydown", makeYellow);

function makeYellow(event) {
    if(event.keyCode === 32) {
        event.preventDefault();
        title.style.backgroundColor = "yellow";
    }
}
// Key Up 4
const header = document.querySelector("header");

document.addEventListener("keyup", makeBlue);

function makeBlue(event) {
    if(event.keyCode === 32) {
        event.preventDefault();
        header.style.backgroundColor = "blue";
    }
}

// Wheel 5
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

// Drag 6
const busPic = document.querySelector("header img");
const body = document.querySelector("body");

busPic.addEventListener("drag", function(event) {
    body.style.color = "red";
})

// Dragend 7
busPic.addEventListener("dragend", function(event) {
    event.preventDefault();
    event.target = document;
    body.style.color = "black";
})

// Load 8
window.addEventListener('load', (event) => {
    console.log('Congratulations to meet you!');
});

// Resize 9
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
    TweenMax.from(advImg, 5, {rotation: 360, scale:2});
});

// Double Click 10
const boatImg = document.querySelector(".inverse-content img");

boatImg.addEventListener("dblclick", event => {
    boatImg.style.borderRadius = "0";
})

// Mouse Down
const boatBeachImg = document.querySelector(".content-destination img");

boatBeachImg.addEventListener("mousedown", event => {
    boatBeachImg.style.borderRadius = "25%";
    event.stopPropagation();
})

// Mouse Down
const behindBoatBeach = document.querySelector(".content-destination");

behindBoatBeach.addEventListener("mousedown", (event) => {
    behindBoatBeach.style.backgroundColor = "orange";
})