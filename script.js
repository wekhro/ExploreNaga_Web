/* =========================
   SIDE MENU
========================= */

function openMenu() {

    document
        .getElementById("sideMenu")
        .classList
        .add("open");

}


function closeMenu() {

    document
        .getElementById("sideMenu")
        .classList
        .remove("open");

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

    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1400&q=80",

    "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=80"

];


let currentSlide = 0;


function showSlide(number) {

    currentSlide = number;

    document.getElementById("heroImage").src =
        images[currentSlide];


    const dots =
        document.querySelectorAll(".dot");


    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    dots[currentSlide]
        .classList
        .add("active");

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= images.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = images.length - 1;

    }

    showSlide(currentSlide);

}


/* Automatically change image */

setInterval(function() {

    nextSlide();

}, 6000);