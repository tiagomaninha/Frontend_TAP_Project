// SLIDES 
let slides = document.querySelectorAll(".slide"); 
let botoesSlides = document.querySelectorAll(".dots-container div")
let botoesMenu = document.querySelectorAll(".multi-menu-container button")
let currentSlide = 0;
let currentMenu = 1;
const totalSlides = slides.length - 1;

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
    let elementoAtivo = document.querySelector(".dots-container .active")
    
    currentSlide++;
    slide = currentSlide
    moveSlide();

    if (currentSlide == totalSlides) {
        slide = 0
    }
    
    elementoAtivo.classList.remove("active")
    botoesSlides[slide].classList.toggle("active")
}, 30 * 1000); // 30 segundos

function changeSlide(n) {
    let elementoAtivo = document.querySelector(".dots-container .active")

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

    fixarHeader(precisoMudarDeImagem, window.innerWidth)
};

var blackLogo = document.querySelector(".main-header #blackLogo");
var whiteLogo = document.querySelector(".main-header #whiteLogo");
var mainHeader = document.querySelector(".main-header"); 
var sticky = mainHeader.offsetTop;

function fixarHeader(bool, width) {
    if (window.scrollY > sticky) {
        if (width > 1024) {
            mainHeader.classList.add("fixed");
        }

        if (!bool) {
            blackLogo.classList.add("showImage")
            whiteLogo.classList.add("hideImage")
        }
    } else {
        if (width > 1024) {
            mainHeader.classList.remove("fixed");
        }

        if (!bool) {
            blackLogo.classList.remove("showImage")
            whiteLogo.classList.remove("hideImage")
        }
    }
}    

botoesMenu.forEach((botao) => {
    botao.addEventListener("click", function(event) {
        let elementoAtivo = document.querySelector(".multi-menu-container .active")
        let pai = event.target.parentElement
        
        elementoAtivo.classList.remove("active")
        pai.classList.toggle("active")

        console.log("aqui", event.target.parentElement)
    })
});

let botoes = document.querySelectorAll(".footer-links div button")

for(let i=0; i<botoes.length; i++){
    botoes[i].addEventListener("click",function(){
        let lista = this.nextElementSibling
       
        if(lista.classList.contains("desaparecer")){
            lista.classList.remove("desaparecer")
        }
        else{
            lista.classList.add("desaparecer")
        }

    })
}

function changeMenu(menu) {
    document.getElementById("menu" + currentMenu).style.display = "none"
    document.getElementById("menu" + menu).style.display = "block"
    currentMenu = menu
}

let sandwich = document.querySelector(".sandwich-menu")
let liMainHeaderButton = document.querySelectorAll(".header-title")
let subListTitle = document.querySelectorAll(".list-title")

if (window.innerWidth <= 1024) {
    sandwich.addEventListener("click", function() {
        let sandwichMenu = document.querySelector(".mediaquery-sandwich")
    
        if (sandwichMenu.classList.contains("active")) {
            sandwichMenu.classList.remove("active")
        } else {
            sandwichMenu.classList.add("active")
        }
    })

    liMainHeaderButton.forEach(element => {
        let pai = element.parentElement
        element.addEventListener("click", function() {
            console.log("boas")
            if (pai.classList.contains("active")) {
                pai.classList.remove("active")
            } else {
                liMainHeaderButton.forEach((title) => {title.parentElement.classList.remove("active")})
                pai.classList.add("active")
            }
        })

        console.log(this)
    });

    subListTitle.forEach(element => {
        let pai = element.parentElement

        element.addEventListener("click", function() {
            if (pai.classList.contains("selected")) {
                pai.classList.remove("selected")
            } else {
                subListTitle.forEach((title) => {title.parentElement.classList.remove("selected")})
                pai.classList.add("selected")
            }
        })
    })
}