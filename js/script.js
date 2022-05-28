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

function validateName() {
    if (document.contact_form.FirstName.value == "") {
        alert("Введіть ім'я");
        document.contact_form.FirstName.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.contact_form.FirstName.value)) {
        alert("В ім'я введіть тільки букви.");
        document.contact_form.FirstName.focus();
        return false;
    }
}