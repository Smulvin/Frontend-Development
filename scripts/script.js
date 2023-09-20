// JavaScript Document
hamburgerButton = document.querySelector("header button");

hamburgerButton.addEventListener("click", openMenu);

function openMenu() {
    console.log("test");
    var hamburgerMenu = document.querySelector("header nav section");
    hamburgerMenu.classList.add("toonHamburger");
}