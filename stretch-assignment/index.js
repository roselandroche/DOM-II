const allBlocks = document.querySelectorAll(".block");

const redBlock = document.querySelector(".block--red");
redBlock.addEventListener("click", (event) => {
    redBlock.style.position = "relative";
    redBlock.style.top = "0px";
})

const blueBlock = document.querySelector(".block--blue");
blueBlock.addEventListener("click", (event) => {
    blueBlock.style.position = "relative";
    blueBlock.style.top = "-120px";
    redBlock.style.position = "relative";
    redBlock.style.top = "120px";
})

const greenBlock = document.querySelector(".block--green");
greenBlock.addEventListener("click", (event) => {
    greenBlock.style.position = "relative";
    greenBlock.style.top = "-240px";
    blueBlock.style.position = "relative";
    blueBlock.style.top = "120px";
    redBlock.style.position = "relative";
    redBlock.style.top = "120px";
})

const pinkBlock = document.querySelector(".block--pink");
pinkBlock.addEventListener("click", (event) => {
    pinkBlock.style.position = "relative";
    pinkBlock.style.top = "-360px";
    greenBlock.style.position = "relative";
    greenBlock.style.top = "120px";
    blueBlock.style.position = "relative";
    blueBlock.style.top = "120px";
    redBlock.style.position = "relative";
    redBlock.style.top = "120px";
})

const grayBlock = document.querySelector(".block--gray");
grayBlock.addEventListener("click", (event) => {
    grayBlock.style.position = "relative";
    grayBlock.style.top = "-480px";
    pinkBlock.style.position = "relative";
    pinkBlock.style.top = "120px";
    greenBlock.style.position = "relative";
    greenBlock.style.top = "120px";
    blueBlock.style.position = "relative";
    blueBlock.style.top = "120px";
    redBlock.style.position = "relative";
    redBlock.style.top = "120px";
})
