let food = document.querySelector('.food');
let drinks = document.querySelector('.drinks');
let menuBtn = document.querySelector('.menu-icon');
let menuNav = document.querySelector('.header-menu-nav');
let header = document.querySelector('.header');
let headerMenuUl = document.querySelector('.header-menu-ul');



food.addEventListener('click', () => {
    food.style.textDecoration = "underline";
    drinks.style.textDecoration = "none";
});

drinks.addEventListener('click', () => {
    drinks.style.textDecoration = "underline";
    food.style.textDecoration = "none";
});

menuBtn.addEventListener('click', () => {
    if (getComputedStyle(menuNav).display === "none") {
        menuNav.style.display = "block";
        header.style.position = "sticky";
    }
    else if (getComputedStyle(menuNav).display === "block") {
        menuNav.style.display = "none";
        header.style.position = "relative";
    }
});

headerMenuUl.addEventListener("click", () => {
    if (document.documentElement.clientWidth < 960){
        menuNav.style.display = "none";
        header.style.position = "relative";
    }
});
