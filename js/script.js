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

function validateContactFields() {
    // Checking first name field
    if (document.contact_form.FirstName.value == "") {
        alert("Введіть ім'я");
        document.contact_form.FirstName.focus();
        return false;
    }

    // Cheking if in first name field only letters
    if (!/^[a-zA-Z]*$/g.test(document.contact_form.FirstName.value)) {
        alert("В ім'я введіть тільки букви.");
        document.contact_form.FirstName.focus();
        return false;
    }

    // Checking email field
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contact_form.Email.value)))
    {
        alert("Введіть корректну email адресу!")
        return false;
    }

    // Checking if text message field have more then 3 and less then 50 symbols
    var amountOfSymbols = document.getElementById('textMessage').value;
    if (amountOfSymbols < 3) {
        alert("В полі \"Текст повідомлення\" введіть що найменше три символи.");
        return false;
    } else if (amountOfSymbols > 50){
        alert("В полі \"Текст повідомлення\" не може бути більше 50 символів.");
        return false;
    }
}