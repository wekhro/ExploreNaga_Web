/* =========================
   LOAD EXTERNAL MENU
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        // Cache-busting parameter (?v=...) ensures the browser always loads the updated menu.html
        fetch("menu.html?v=" + new Date().getTime())
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load menu.html");
                }
                return response.text();
            })
            .then((html) => {
                menuContainer.innerHTML = html;
            })
            .catch((err) => console.error("Error loading side menu:", err));
    }
});

/* =========================
   SIDE MENU
========================= */

function openMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    if (sideMenu) sideMenu.classList.add("open");
    if (overlay) overlay.classList.add("open");
}

function closeMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");
    if (sideMenu) sideMenu.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
}

/* =========================
   LOGIN
========================= */

function login() {
    alert("Login page coming soon!");
}

/* =========================
   IMAGE SLIDER
========================= */

const images = [
    "images/Sheep Farm.jpeg",
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kachari_Ruins,_Dimapur,_Nagaland.jpg",
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khonoma_village,_Nagaland,_India.jpg",
    "https://www.oddessemania.in/wp-content/uploads/2023/08/Dzukou-valley-trek-photo-02-1-1024x668.jpeg"
];

let currentSlide = 0;

function showSlide(number) {
    const heroImage = document.getElementById("heroImage");
    const dots = document.querySelectorAll(".dot");

    currentSlide = (number + images.length) % images.length;

    if (heroImage) {
        heroImage.src = images[currentSlide];
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

let sliderInterval = setInterval(nextSlide, 6000);
