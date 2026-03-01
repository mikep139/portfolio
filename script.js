const body = document.querySelector("body");
const button = document.querySelector("#dark-mode-controls");

function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "dark-mode");
    } else {
        localStorage.setItem("darkMode", null);
    }
}

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