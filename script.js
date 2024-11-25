document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide"); 
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
        currentSlide++;
        moveSlide();
    }, 30 * 1000); // 30 segundos


    window.onscroll = function() {
        let precisoMudarDeImagem = window.innerWidth >= 1024 && window.innerWidth <= 1150 ? true : false;

        fixarHeader()
    };
    
    var header = document.querySelector("header");
    var sticky = header.offsetTop;
    
    function fixarHeader() {
        if (window.scrollY > sticky) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }
});
