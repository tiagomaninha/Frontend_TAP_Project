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
}, 30 * 1000 * 100); // 30 segundos

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
        let elementoAtivo = document.querySelector(".multi-menu-container > .active")
        let pai = event.target.parentElement
        
        elementoAtivo.classList.remove("active")
        pai.classList.toggle("active")

        console.log("aqui", event.target.parentElement)
    })
});

let botoes = document.querySelectorAll(".footer-links div button")

for(let i=0; i<botoes.length; i++){
    botoes[i].addEventListener("click",function(){
        let lista = this.parentElement
       
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

const filter = document.querySelector(".black-filter")
const allElementsNotHeader = document.querySelector("section, footer")
const body = document.querySelector("body")
let sandwich = document.querySelector(".sandwich-menu")
let liMainHeaderButton = document.querySelectorAll(".header-title")
let subListTitle = document.querySelectorAll(".list-title")
let sandwichMenu = document.querySelector(".mediaquery-sandwich")

sandwich.addEventListener("click", function() {
    if (window.innerWidth <= 1024) {
        
        if (sandwichMenu.classList.contains("active")) {
            filter.style.display = "none"
            body.style.overflow = "auto"
            allElementsNotHeader.style.pointerEvents = "all"
            document.querySelector("header").style.zIndex = "2"
            sandwichMenu.classList.remove("active")
            sandwich.innerHTML = "&#9776;"
        } else {
            filter.style.display = "block"
            body.style.overflow = "hidden"
            allElementsNotHeader.style.pointerEvents = "none"
            document.querySelector("header").style.zIndex = "6"
            sandwichMenu.classList.add("active")
            sandwich.innerHTML = "&#x2715;"
        }
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        filter.style.display = "none"
        allElementsNotHeader.style.pointerEvents = "all"
        body.style.overflow = "auto"

        if (sandwichMenu.classList.contains("active")) {
            sandwichMenu.classList.remove("active")
            sandwich.innerHTML = "&#9776;"
        }
    }
});

liMainHeaderButton.forEach(element => {
    let pai = element.parentElement
    element.addEventListener("click", function() {
        if (window.innerWidth <= 1024) {
            if (pai.classList.contains("active")) {
                pai.classList.remove("active")
            } else {
                liMainHeaderButton.forEach((title) => {title.parentElement.classList.remove("active")})
                pai.classList.add("active")
            }
        }
    })
});

subListTitle.forEach(element => {
    let pai = element.parentElement

    element.addEventListener("click", function() {
        if (window.innerWidth <= 1024) {
            if (pai.classList.contains("selected")) {
                pai.classList.remove("selected")
            } else {
                subListTitle.forEach((title) => {title.parentElement.classList.remove("selected")})
                pai.classList.add("selected")
            }
        }
    })
})

document.getElementById("mostra-row").addEventListener("click",function(){

    const ofertas = document.querySelectorAll(".hiden");

    for(let i=0; i<ofertas.length ; i++){
        ofertas[i].classList.remove("hiden")
    }

    this.parentElement.style.display="none";
})

const selectTipo = document.getElementById("selectTipo")
const selectData = document.getElementById("selectData")
const deInput = document.getElementById("deInput")
const hoje = new Date()

function obterProximoNDia(n) {
    const proximoNDia = new Date(hoje)
    proximoNDia.setDate(hoje.getDate()+n)
    return proximoNDia
}

for (let i = 0; i < 5; i++) {
    let nDia = obterProximoNDia(i)
    const option = document.createElement("option")
    const dia = nDia.getDate().toString().padStart(2, '0');
    const mes = (nDia.getMonth() + 1).toString().padStart(2, '0');
    const ano = nDia.getFullYear();

    option.textContent = dia + "/" + mes + "/" + ano
    option.value = i+1
    selectData.appendChild(option)
}

selectTipo.selectedIndex = "-1"
selectData.selectedIndex = "-1"

selectTipo.addEventListener("click", function() {
    if (this.selectedIndex == "-1") {
        this.selectedIndex = "0"
        this.classList.add("selected")
    }
    
})

selectData.addEventListener("click", function() {
    if (this.selectedIndex == "-1") {
        this.selectedIndex = "0"
        this.classList.add("selected")
    }

})

deInput.addEventListener("input", function() {
    const abreviacao = this.previousElementSibling

    if (this.value.length >= 3) {
        abreviacao.innerText = this.value.slice(0, 3).toUpperCase()
    }
})

let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let diaVooElement = document.querySelector(".dia-voo")
    let tipoVooElement = document.querySelector(".tipo-voo")
    let horaVooElement = document.getElementById("horaVoo")
    let horaVoo2Element = document.getElementById("horaVoo2")
    let estadoVooElement = document.querySelector(".estado-voo")
    let diaVoo = selectData.options[selectData.selectedIndex].text;
    let tipoVoo = selectTipo.options[selectTipo.selectedIndex].text == "Voo de regresso" ? "Chegada" : "Destino";
    let estadoVoo = "No horário"
    diaVooElement.innerText = diaVoo
    tipoVooElement.innerText = tipoVoo + " a " + deInput.value

    if (tipoVoo == "Destino") {
        let dia = Number(diaVoo.slice(0, 2))

        if (dia % 2 != 0) {
            estadoVoo = "Atrasado"
        }        
    } else {
        let mes = Number(diaVoo.slice(3, 5))

        if (mes % 2 != 0) {
            estadoVoo = "Chegou"
        } 
    }

    estadoVooElement.innerText = estadoVoo

    if ((deInput.value).toUpperCase().includes("LISBOA")) {
        let horaInicial = 10
        horaVooElement.innerText = horaInicial + ":05"
        horaVoo2Element.innerText = (horaInicial + 8) + ":05"
    } else {
        let horaInicial = 12
        horaVooElement.innerText = horaInicial + ":10"
        horaVoo2Element.innerText = (horaInicial + 8) + ":05"
    }


    showModal()
});


const modal = document.querySelector(".modal")
const allElements = document.querySelector("section, footer, header")

function showModal() {
    filter.style.display = "block"
    modal.style.display = "flex"
    body.style.overflow = "hidden"
    allElements.style.pointerEvents = "none"
}

function closeModal() {
    filter.style.display = "none"
    modal.style.display = "none"
    body.style.overflow = "auto"
    allElements.style.pointerEvents = "all"
}

document.querySelector(".close-modal").addEventListener("click", closeModal)


const dots = document.querySelectorAll('.dot-container div');
const images = document.querySelectorAll(".mudar-img li")
let currentDot = 0

for (let i = 0; i < dots.length; i++) {
    let dot = dots[i]

    dot.addEventListener('click', () => {
        currentDot = i+1;
        dots.forEach(d => d.classList.remove('ativo'));
        dot.classList.add('ativo');
        console.log(images)

        images.forEach(element => {
            element.style.transform = `translateX(calc(${-103.5 * (i)}%))`;
        });
    });
}



