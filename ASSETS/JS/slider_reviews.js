let SLIDER_SPEED = 20000;

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

setTimeout(NextPic, 0);
setTimeout(NextPic, 0);
let interval = setInterval(NextPic, SLIDER_SPEED);

function NextPic(newIter){
    if (newIter != undefined){
        if (sliderIter != newIter){
            sliderIter = newIter;
            sliderline.style.left = (sliderIter * -100) + "%";
        }
    }
    else{
        if (sliderIter == 2){
            FirstPic();
        }
        else{
            sliderIter += 1;
            sliderline.style.left = (sliderIter * -100) + "%";
        }
    }

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
    if (indicator1.classList.contains("indicator-item_active")){
        indicator1.classList.remove("indicator-item_active");
    }
    if (indicator2.classList.contains("indicator-item_active")){
        indicator2.classList.remove("indicator-item_active");
    }
    if (indicator3.classList.contains("indicator-item_active")){
        indicator3.classList.remove("indicator-item_active");
    }
    switch (sliderIter){
        case 0: indicator1.classList.add("indicator-item_active"); break;
        case 1: indicator2.classList.add("indicator-item_active"); break;
        case 2: indicator3.classList.add("indicator-item_active"); break;
    }
}

indicator1.onclick = indicator1_clicked;
indicator2.onclick = indicator2_clicked;
indicator3.onclick = indicator3_clicked;

function indicator1_clicked() {
    clearInterval(interval);
    interval = setInterval(NextPic, SLIDER_SPEED);
    NextPic(0); 
}
function indicator2_clicked() {
    clearInterval(interval);
    interval = setInterval(NextPic, SLIDER_SPEED);
    NextPic(1); 
}
function indicator3_clicked() {
    clearInterval(interval);
    interval = setInterval(NextPic, SLIDER_SPEED);
    NextPic(2); 
}