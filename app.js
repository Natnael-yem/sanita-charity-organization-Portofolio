const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll',()=>{
    var scroll_postion = window.scrollY;
    if(scroll_postion > 250){
        header.style.backgroundcolor="#29323c";
    }
    else{
        header.style.backgroundcolor="transparent";
    }
});

const carouselSlide = document.querySelector(".carousel-slides"),
carouselImages = document.querySelector(".carousel-slides img"),
nextSlide= document.querySelector("#nextSlide"),
prevSlide= document.querySelector("#prevSlide"),
currentSlide= document.querySelector(".current-slide"),
allSlides= document.querySelector(".all-slides");

let counter = 0;
const size = carouselImages[0].clientWidth;

nextSlide.addEventListener("click", () => {
    if(counter>= carouselImages.length -1) return;

    counter++;
    carouselSlide.style.transform = 'translateX(${-size * counter}px)'
    currentSlide.textContent = counter + 1
});


prevSlide.addEventListener("click", () => {
    if(counter <= 0) return;

    counter--;
    carouselSlide.style.transform = 'translateX(${-size * counter}px)'
    currentSlide.textContent = counter + 1
});

allSlides.textContent = carouselImages.length;


const parallax = document.querySelector('.parallax-container');
            const layers = parallax.querySelectorAll('.parallax-layer');
            
            function moveLayersDependsOnScroll() {
              const scrollTop = window.pageYOffset;
              layers.forEach(layer => {
                const speed = layer.getAttribute('data-speed');
                const movement = scrollTop * speed / 10;
                layer.style.transform = `translateY(-${movement}px)`;
              });
            }
            
            window.addEventListener('scroll', moveLayersDependsOnScroll);
