/* =========================
   SIDE MENU
========================= */

function openMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
        sideMenu.classList.add("open");
    }
}

function closeMenu() {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
        sideMenu.classList.remove("open");
    }
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

// Exact match with your popular destination image sources
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

    // Wrap-around index calculation
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

/* Automatically change image every 6 seconds */
let sliderInterval = setInterval(nextSlide, 6000);
