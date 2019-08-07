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
