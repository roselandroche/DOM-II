// Your code goes here
// Changed cursor for top nav
const mainNav = document.querySelectorAll("a");
mainNav.forEach(navItem => 
    navItem.addEventListener("mouseover", (event) => 
        navItem.style.cursor = "help"
    )
);

const funBus = document.querySelector(".intro img");
