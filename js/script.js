


var swiper = new Swiper(".mySwiper", {
  
  
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  autoplay: {
    delay: 5000,
    },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  
  
const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".mobile__menu"); 
const body = document.querySelector("body");

hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
  body.classList.toggle("hidden")
});  

const whiteHamburger = document.querySelector(".white-ham");
const recipes = document.querySelector(".catalog .block__recipes-body");

whiteHamburger.addEventListener('click', () => {  
  whiteHamburger.classList.toggle("change")  
  if (recipes.style.display === "block") {
    recipes.style.display = "none";
  } else {
    recipes.style.display = "block";
  } 
});  

//функція для роботи стрілки вверх
$(function() {
 
  $(window).scroll(function() { 
  if($(this).scrollTop() != 0) {   
  $('#toTop').fadeIn();   
  } else {   
  $('#toTop').fadeOut();   
  }   
  });   
  $('#toTop').click(function() {   
  $('body,html').animate({scrollTop:0},800);   
  });

});

//функція для розгортання та згортання тексту
function myFunction1() {
  
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("btn__more1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читати більше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читати менше";
    moreText.style.display = "inline";
  }

  
} 

function myFunction2() {
  
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("btn__more2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читати більше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читати менше";
    moreText.style.display = "inline";
  }

  
} 

 
