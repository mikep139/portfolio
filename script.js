const body = document.querySelector("body");
const button = document.querySelector("#dark-mode-controls");
button.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
    body.classList.toggle("dark-mode");
}