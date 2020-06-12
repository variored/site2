let SLIDER_SPEED = 10000;

let sliderline = document.getElementById("reviews__sliderline");
let childrenCount = sliderline.children.length;
let children = sliderline.children;
let sliderLineWidth = childrenCount * 100;

let indicator1 = document.getElementById("reviews__indicator-item_1");
let indicator2 = document.getElementById("reviews__indicator-item_2");
let indicator3 = document.getElementById("reviews__indicator-item_3");

let sliderIter = 0;

sliderline.style.width = sliderLineWidth + "%";

for (let i = 0; i < childrenCount; i++){
    children[i].style.width = (100 / childrenCount) + "%";
}

setTimeout(NextPic, SLIDER_SPEED);

function NextPic(){
    if (sliderIter == 2){
        FirstPic();
    }
    else{
        sliderIter += 1;
        sliderline.style.left = (sliderIter * -100) + "%";
    }

    setTimeout(NextPic, SLIDER_SPEED);
    UpdateIndicators();
}
function FirstPic(){
    if (sliderIter != 0){
        sliderIter = 0;
        sliderline.style.left = (sliderIter * -100) + "%";
    }

    UpdateIndicators();
}
function UpdateIndicators(){
    if (indicator1.classList.contains("reviews__indicator-item_active")){
        indicator1.classList.remove("reviews__indicator-item_active");
    }
    if (indicator2.classList.contains("reviews__indicator-item_active")){
        indicator2.classList.remove("reviews__indicator-item_active");
    }
    if (indicator3.classList.contains("reviews__indicator-item_active")){
        indicator3.classList.remove("reviews__indicator-item_active");
    }
    switch (sliderIter){
        case 0: indicator1.classList.add("reviews__indicator-item_active"); break;
        case 1: indicator2.classList.add("reviews__indicator-item_active"); break;
        case 2: indicator3.classList.add("reviews__indicator-item_active"); break;
    }
}