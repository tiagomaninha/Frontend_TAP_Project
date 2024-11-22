document.addEventListener("DOMContentLoaded", () => {
    let images = document.querySelectorAll(".image"); 
    let currentSlide = 0;
    const totalSlides = images.length - 2;

    images.forEach((image) => {
        image.style.transition = "none";
        image.style.transform = `translateX(-100%)`;
    });

    function moveSlide() {
        images.forEach((image) => {
            image.style.transition = "transform 0.5s ease-in-out";
            image.style.transform = `translateX(${-100 * (currentSlide + 1)}%)`;
        });

        setTimeout(() => {
            if (currentSlide === totalSlides) {
                images.forEach((image) => {
                    image.style.transition = "none";
                    image.style.transform = `translateX(-100%)`;
                });
                currentSlide = 0;
            } else if (currentSlide === 0) {
                images.forEach((image) => {
                    image.style.transition = "none";
                    image.style.transform = `translateX(-${100 * totalSlides}%)`;
                });
                currentSlide = totalSlides - 1;
            }
        }, 500); // transicao
    }

    setInterval(() => {
        console.log(currentSlide)
        currentSlide++;
        moveSlide();
    }, 30 * 1000); // 30 segundos
});
