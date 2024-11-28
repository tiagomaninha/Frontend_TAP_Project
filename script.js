// SLIDES 
let slides = document.querySelectorAll(".slide"); 
let botoesSlides = document.querySelectorAll(".dots-container div")
let currentSlide = 0;
const totalSlides = slides.length - 1;

slides.forEach((slide) => {
    slide.style.transition = "none";
});

function moveSlide() {
    slides.forEach((slide) => {
        slide.style.transition = "transform 0.5s ease-in-out";
        slide.style.transform = `translateX(${-100 * (currentSlide)}%)`;
    });
    
    setTimeout(() => {
        if (currentSlide === totalSlides) {
            slides.forEach((slide) => {
                slide.style.transition = "none";
                slide.style.transform = `translateX(0%)`;
            });
            currentSlide = 0;
        }
    }, 500); // transicao
    
}

setInterval(() => {
    let slide
    let elementoAtivo = document.querySelector(".active")
    
    currentSlide++;
    slide = currentSlide
    moveSlide();

    if (currentSlide == totalSlides) {
        slide = 0
    }
    
    elementoAtivo.classList.remove("active")
    botoesSlides[slide].classList.toggle("active")
}, 20 * 1000); // 30 segundos

function changeSlide(n) {
    let elementoAtivo = document.querySelector(".active")

    elementoAtivo.classList.remove("active")
    botoesSlides[n-1].classList.toggle("active")
    currentSlide = n - 1

    slides.forEach((slide) => {
        slide.style.transition = "transform 0.5s ease-in-out";
        slide.style.transform = `translateX(${-100 * (n - 1)}%)`;
    });
}

// HEADER 

window.onscroll = function() {
    let precisoMudarDeImagem = window.innerWidth >= 1024 && window.innerWidth <= 1150 ? true : false;

    fixarHeader(precisoMudarDeImagem)
};

var blackLogo = document.getElementById("blackLogo");
var whiteLogo = document.getElementById("whiteLogo");
var header = document.querySelector("header"); 
var sticky = header.offsetTop;

function fixarHeader(bool) {
    if (window.scrollY > sticky) {
        header.classList.add("fixed");

        if (!bool) {
            blackLogo.classList.add("showImage")
            whiteLogo.classList.add("hideImage")
        }
    } else {
        header.classList.remove("fixed");

        
        if (!bool) {
            blackLogo.classList.remove("showImage")
            whiteLogo.classList.remove("hideImage")
        }
    }
}    