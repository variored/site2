let title_1 = document.getElementById("vertical-menu__title_1");
let title_2 = document.getElementById("vertical-menu__title_2");
let title_3 = document.getElementById("vertical-menu__title_3");
let title_4 = document.getElementById("vertical-menu__title_4");
let title_5 = document.getElementById("vertical-menu__title_5");
let content_1 = document.getElementById("vertical-menu__content_1");
let content_2 = document.getElementById("vertical-menu__content_2");
let content_3 = document.getElementById("vertical-menu__content_3");
let content_4 = document.getElementById("vertical-menu__content_4");
let content_5 = document.getElementById("vertical-menu__content_5");

title_1.onclick = Title1Click;
title_2.onclick = Title2Click;
title_3.onclick = Title3Click;
title_4.onclick = Title4Click;
title_5.onclick = Title5Click;

function Title1Click(){
    if (content_1.classList.contains("vertical-menu__content_active")){
        content_1.classList.remove("vertical-menu__content_active")
    }
    else{
        content_1.classList.add("vertical-menu__content_active")
    }
}
function Title2Click(){
    if (content_2.classList.contains("vertical-menu__content_active")){
        content_2.classList.remove("vertical-menu__content_active")
    }
    else{
        content_2.classList.add("vertical-menu__content_active")
    }
}
function Title3Click(){
    if (content_3.classList.contains("vertical-menu__content_active")){
        content_3.classList.remove("vertical-menu__content_active")
    }
    else{
        content_3.classList.add("vertical-menu__content_active")
    }
}
function Title4Click(){
    if (content_4.classList.contains("vertical-menu__content_active")){
        content_4.classList.remove("vertical-menu__content_active")
    }
    else{
        content_4.classList.add("vertical-menu__content_active")
    }
}
function Title5Click(){
    if (content_5.classList.contains("vertical-menu__content_active")){
        content_5.classList.remove("vertical-menu__content_active")
    }
    else{
        content_5.classList.add("vertical-menu__content_active")
    }
}