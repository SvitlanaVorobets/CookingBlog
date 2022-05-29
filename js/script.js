const swiper = new Swiper('.swiper', {
    loop: true,
    cssMode: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
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
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn__more");

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

 
