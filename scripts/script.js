// JavaScript Document
hamburgerButton = document.querySelector("header nav>section:last-of-type button");
hamburgerCloseButton = document.querySelector(".hamburgerMenu>section:first-of-type button");

videoGamesCloseButton = document.querySelector(".videoGamesMenu>section:first-of-type button");
videoGamesButton = document.querySelector(".hamburgerMenu li:nth-of-type(1)");
videoGamesBackButton = document.querySelector(".videoGamesMenu>section:first-of-type p");

smbwRightColumnButton = document.querySelector(".smbwRightColumn section:nth-of-type(7) button:first-of-type");
smbwRightColumnCloseButton = document.querySelector(".rightColumnPopUp section:first-of-type button");

smbwDescriptionButton = document.querySelector(".smbwDescription button");

main = document.querySelector("main");

var hamburgerMenu = document.querySelector(".hamburgerMenu");
var videoGamesTab = document.querySelector(".videoGamesMenu");
var rightColumnPopUp = document.querySelector(".rightColumnPopUp");
var hiddenDescriptionText = document.querySelector(".smbwDescription section:last-of-type");

hamburgerButton.addEventListener("click", openMenu);
hamburgerCloseButton.addEventListener("click", closeMenu);

videoGamesCloseButton.addEventListener("click", closeMenu);
videoGamesButton.addEventListener("click", toonVideoGames);
videoGamesBackButton.addEventListener("click", closeVideoGames);

smbwRightColumnButton.addEventListener("click", openSMBWPopUp);
smbwRightColumnCloseButton.addEventListener("click", closePopUp);

smbwDescriptionButton.addEventListener("click", showDescriptionText);

main.addEventListener("click", closeMenu);


function openMenu() {
    hamburgerMenu.classList.add("toonHamburger");
}

function toonVideoGames() {
    // zoek de parent van de videoGamesTab
    var parentVideoGames = videoGamesTab.parentElement;

    // bereken de hoogte van die parent
    var hamburgerHeight = parentVideoGames.scrollHeight;

    // geef de videoGamesTab de berekende hoogte
    /*Moest hier .style gebruiken omdat ik de waarde van het complete
    hamburger menu moest overnemen. Daardoor kan ik het niet met een
    classlist.add doen en het dan in het CSS bestand oplossen*/
    videoGamesTab.style.height = hamburgerHeight + "px";

    videoGamesTab.classList.add("toonVideoGames");
}

function closeMenu() {
    hamburgerMenu.classList.remove("toonHamburger");
    videoGamesTab.classList.remove("toonVideoGames");
}

function closeVideoGames() {
    videoGamesTab.classList.remove("toonVideoGames");
}

function openSMBWPopUp() {
    rightColumnPopUp.classList.add("openPopUp");
}

function closePopUp() {
    rightColumnPopUp.classList.remove("openPopUp");
}

// Het was me niet gelukt om deze code te laten werken. Ik had het gedaan 
// aan de hand van de volgende link
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
// Bleek dat ik verkeer had gekeken en dat ik niet een dubbele = moest doen want
// dat is om te checken of het gelijk is

//Ik weet niet precies waarom, maar met een classList.add werkt het niet. Werkt
//alleen met .style

//Het werkt ook alleen op de tweede klik op de knop, maar alleen de eerste keer

/* function showDescriptionText() {
    if(hiddenDescriptionText.style.display === "none"){
        hiddenDescriptionText.classList.add("showText");
    }
    else {
        hiddenDescriptionText.classList.remove("showText");
    }
} */

function showDescriptionText() {
    if(hiddenDescriptionText.style.display === "none"){
        hiddenDescriptionText.style.display = "block";
        smbwDescriptionButton.textContent = "Read Less";
    }
    else {
        hiddenDescriptionText.style.display = "none";
        smbwDescriptionButton.textContent = "Read More";
    }
}