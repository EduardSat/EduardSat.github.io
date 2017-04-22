  var link = document.querySelector(".companies-contacts__btn");
 var close = document.querySelector(".if-loose__close");
// //  var mapPopup = document.querySelector(".modal-content-map");
// //  var mapClose = document.querySelector(".about-map__close");
 var popup = document.querySelector(".companies-contacts__form");
if (popup !== null) {
  document.querySelector(".companies-contacts__btn").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".companies-contacts__form").classList.add("contacts-form-show");
  });

  document.querySelector(".if-loose__close").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".companies-contacts__form").classList.remove("contacts-form-show");
  });
}
// map modal window

// // window.addEventListener("keydown", function (event) {
// //   if (event.keyCode === 27) {
// //     if (document.querySelector(".modal-content-map").classList.contains("modal-content-show")) {
// //       document.querySelector(".modal-content-map").classList.remove("modal-content-show");
// //     }
// //     document.querySelector(".companies-map-window").addEventListener("click", function (event) {
// //       event.preventDefault();
// //       document.querySelector(".modal-content-map").classList.add("modal-content-show");
// //     });

// //     document.querySelector(".about-map__close").addEventListener("click", function (event) {
// //       event.preventDefault();
// //       document.querySelector(".modal-content-map").classList.remove("modal-content-show");
// //     });
// //   }
// // });

// catalog popup
var catalogPopup = document.querySelector(".cart-form");
if (catalogPopup !== null) {
  var buttons = document.querySelectorAll(".actions-buy")
  Array.prototype.forEach.call(buttons, function (item) {

  })
  document.querySelector(".actions-buy").addEventListener("click", function (event) {
    event.preventDefault();
    catalogPopup.classList.add("cart-form-show");
  });

  document.querySelector(".cart-form__close").addEventListener("click", function (event) {
    event.preventDefault();
    catalogPopup.classList.remove("cart-form-show");
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.querySelectorAll("gallery-slide");
  var dots = document.querySelectorAll("dot");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length ; i) {
    slides[i].style.display= "none";

  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");

  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}