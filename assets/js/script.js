let MOBILE_MENU_BUTTON = document.querySelector(".mobile-menu-button");
let MOBILE_NAVIGATION = document.querySelector(".mobile-navigation");
let MOBILE_MENU_ICON = document.querySelector(".mobile-menu-icon");


const BACK_TO_TOP = document.querySelector(".back-to-top-button");
BACK_TO_TOP.addEventListener("click", scrollToTop);

window.onscroll = function () { displayBackToTopButton(); };

function displayBackToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        BACK_TO_TOP.style.opacity = "1";
    } else {
        BACK_TO_TOP.style.opacity = ".3";
    }
}

function scrollToTop() {
    console.log('hello');
    if (window.scroll) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For IE and similar
    }
}

let is_mobile_menu_open = false;

MOBILE_MENU_BUTTON.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(is_mobile_menu_open) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    if(!is_mobile_menu_open) {
        is_mobile_menu_open = true;
        MOBILE_NAVIGATION.classList.remove("hide");
        MOBILE_MENU_ICON.classList.remove("fa-bars");
        MOBILE_MENU_ICON.classList.add("fa-times-circle");

    }
}

function closeMenu() {
    if(is_mobile_menu_open) {
        is_mobile_menu_open = false;
        MOBILE_NAVIGATION.classList.add("hide");
        MOBILE_MENU_ICON.classList.remove("fa-times-circle");
        MOBILE_MENU_ICON.classList.add("fa-bars");
    }
}
