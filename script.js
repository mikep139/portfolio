const body = document.querySelector("body");
const button = document.querySelector("#dark-mode-controls");
const hamburger = document.querySelector("#hamburger-container");
const navLinks = document.querySelector(".nav-links");

function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "dark-mode");
    } else {
        localStorage.setItem("darkMode", null);
    }
}

// on page RELOAD checks localStorage for dark mode status
function checkDarkMode() {
    if (localStorage.getItem("darkMode") === "dark-mode"){ 
        body.classList.add("dark-mode");
        button.checked = true;
    } else {
        body.classList.remove("dark-mode");
        button.checked = false;
    }
}
button.addEventListener("change", toggleDarkMode);
document.addEventListener("DOMContentLoaded", checkDarkMode);

function toggleHamburgerMenu() {
    navLinks.classList.toggle("mobile-menu");
}

hamburger.addEventListener("click", toggleHamburgerMenu);