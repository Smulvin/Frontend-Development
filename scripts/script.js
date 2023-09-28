// JavaScript Document
hamburgerButton = document.querySelector("header section:nth-of-type(2) button");
videoGamesButton = document.querySelector(".hamburgerMenu li:nth-of-type(1)");
main = document.querySelector("main");
var hamburgerMenu = document.querySelector(".hamburgerMenu");
var videoGamesTab = document.querySelector(".videoGamesMenu");

hamburgerButton.addEventListener("click", openMenu);
videoGamesButton.addEventListener("click", toonVideoGames);
main.addEventListener("click", sluitMenu);

function openMenu() {
    hamburgerMenu.classList.add("toonHamburger");
}

function toonVideoGames() {
    // zoek de parent van de videoGamesTab
    var parentVideoGames = videoGamesTab.parentElement;

    // bereken de hoogte van die parent
    var hamburgerHeight = parentVideoGames.scrollHeight;

    // geef de videoGamesTab de berekende hoogte
    videoGamesTab.style.height = hamburgerHeight + "px";

    videoGamesTab.classList.add("toonVideoGames");
}

function sluitMenu() {
    hamburgerMenu.classList.remove("toonHamburger");
    videoGamesTab.classList.remove("toonVideoGames");
}