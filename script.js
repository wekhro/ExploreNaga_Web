/* ========================================================
   DYNAMIC MENU LOADER
======================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menu-container");
    if (container) {
        fetch("menu.html")
            .then(response => {
                if (!response.ok) throw new Error("Could not load menu.html");
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
            })
            .catch(err => console.error("Error loading navigation menu:", err));
    }
});

/* ========================================================
   MENU TOGGLE FUNCTIONS
======================================================== */
function openMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    if (sideMenu) sideMenu.classList.add("active");
    if (overlay) overlay.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    if (sideMenu) sideMenu.classList.remove("active");
    if (overlay) overlay.classList.remove("active");

    document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});

/* ========================================================
   SLIDER LOGIC (For index.html)
======================================================== */
const images = [
    "images/Sheep Farm.jpeg",
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kachari_Ruins,_Dimapur,_Nagaland.jpg",
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khonoma_village,_Nagaland,_India.jpg",
    "https://www.oddessemania.in/wp-content/uploads/2023/08/Dzukou-valley-trek-photo-02-1-1024x668.jpeg"
];

let currentSlide = 0;
let sliderInterval = null;

function showSlide(number) {
    const heroImage = document.getElementById("heroImage");
    const dots = document.querySelectorAll(".dot");

    if (!heroImage) return;

    currentSlide = (number + images.length) % images.length;
    heroImage.src = images[currentSlide];

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });

    resetAutoplay();
}

function nextSlide() { showSlide(currentSlide + 1); }
function previousSlide() { showSlide(currentSlide - 1); }

function resetAutoplay() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 6000);
}

if (document.getElementById("heroImage")) {
    resetAutoplay();
}
