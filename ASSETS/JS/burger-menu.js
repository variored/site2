let buttonClose = document.getElementById("home__burger-button");
let menu = document.getElementById("home__top-menu");
let buttonOpen = document.getElementById("home__burger-menu-button_open");
let topMenu = document.getElementById("home__top-mobile-menu");

buttonClose.onclick = CloseMenu;
buttonOpen.onclick = OpenMenu;

function CloseMenu(){
    menu.classList.remove("home__top-menu_active");
    topMenu.classList.add("home__top-mobile-menu_active");
    document.body.style.overflow = "auto";
}
function OpenMenu(){
    menu.classList.add("home__top-menu_active");
    topMenu.classList.remove("home__top-mobile-menu_active");
    document.body.style.overflow = "hidden";
}