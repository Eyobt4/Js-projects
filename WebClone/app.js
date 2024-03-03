// div slider
const slides = document.querySelectorAll(".slides .inclusive")
let slideIndex=0;
let intervalId=null;

// initializeslider
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,5000)
    }
}
function showSlide(index){
    if(index >= slideIndex.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex = slide.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("dislaySlide")
    });
    slides[slideIndex].classList.add("dislaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}