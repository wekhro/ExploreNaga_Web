/* ========================================================
   EXPLORENAGA - CORE SCRIPT
   Side Drawer, Dynamic Menu Loader & Hero Slider
======================================================== */

// ================= HERO SLIDER LOGIC =================
const slides = [
  {
    src: "images/Sheep Farm.jpeg",
    alt: "Sheep Farm, Kohima, Nagaland"
  },
  {
    src: "images/Kacharu.jpeg",
    alt: "Kachari Ruins, Dimapur"
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khonoma_village,_Nagaland,_India.jpg",
    alt: "Khonoma Village, Kohima"
  },
  {
    src: "images/Dzukou.jpeg",
    alt: "Dzükou Valley, Nagaland"
  }
];

let currentSlide = 0;
let slideTimer;

function startAutoSlide() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 4000); // Advances every 4 seconds
}

function showSlide(index) {
  const heroImg = document.getElementById("heroImage");
  const dots = document.querySelectorAll(".dots .dot");

  // Wrap around boundaries
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Update image and alt text
  if (heroImg) {
    heroImg.src = slides[currentSlide].src;
    heroImg.alt = slides[currentSlide].alt;
  }

  // Update dot indicators
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlide);
  });

  // Reset timer so it doesn't jump immediately after manual interaction
  startAutoSlide();
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Start auto-slide on page load
startAutoSlide();


// ================= DRAWER MENU CONTROLS =================
function openMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  if (sideMenu && menuOverlay) {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
  }
}

function closeMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  if (sideMenu && menuOverlay) {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  }
}


// ================= DYNAMIC MENU LOADER =================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menu-container");
  if (container) {
    fetch("menu.html")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load menu.html");
        return res.text();
      })
      .then((html) => {
        container.innerHTML = html;
        if (window.lucide) lucide.createIcons();
      })
      .catch((err) => console.warn("Menu loader notice:", err));
  }
});