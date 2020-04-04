console.log("HELLO WORLD!");

var navButton = document.getElementById("navButton");
var menu = document.getElementById("menu");

navButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("displayMenu");
  navButton.classList.toggle("fa-times");
}

// Slideshow JS

var slideshowImages = document.querySelectorAll(".slideshowImages");

var currentSlide = 0;
var numberOfSlides = slideshowImages.length - 1;

function slideshowInitialize() {
  nextButton.onclick = function () {
    if (currentSlide == numberOfSlides) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    showSlide();
  };

  prevButton.onclick = function () {
    if (currentSlide == 0) {
      currentSlide = numberOfSlides;
    } else {
      currentSlide -= 1;
    }

    showSlide();
  };
}

// shows image based on current slide number
function showSlide() {
  hideAllSlides();
  slideshowImages[currentSlide].classList.remove("hideSlide");
}

// hides all slides
function hideAllSlides() {
  for (let i = 0; i <= numberOfSlides; i++) {
    slideshowImages[i].classList.add("hideSlide");
  }
}
