let partner__slider = document.getElementById("partner__slider");
let partner__sliderLine = document.getElementById("partner__sliderLine");
let clients__indicator_item_1 = document.getElementById("clients__indicator-item_1");
let clients__indicator_item_2 = document.getElementById("clients__indicator-item_2");
let clients__indicator_item_3 = document.getElementById("clients__indicator-item_3"); 

let partner__slideIterator = 0;

clients__indicator_item_1.onclick = ind1Clicked;
clients__indicator_item_2.onclick = ind2Clicked;
clients__indicator_item_3.onclick = ind3Clicked;

setTimeout(NextSlide, 0);
setTimeout(NextSlide, 0);
setInterval(NextSlide, 10000);

function ind1Clicked(){
    NextSlide(0);
    ResetIndicatorActive();
    clients__indicator_item_1.classList.add("indicator-item_active");
}
function ind2Clicked(){
    NextSlide(1);
    ResetIndicatorActive();
    clients__indicator_item_2.classList.add("indicator-item_active");
}
function ind3Clicked(){
    NextSlide(2);
    ResetIndicatorActive();
    clients__indicator_item_3.classList.add("indicator-item_active");
}
function ResetIndicatorActive(){
    if (clients__indicator_item_1.classList.contains("indicator-item_active")){
        clients__indicator_item_1.classList.remove("indicator-item_active");
    }
    if (clients__indicator_item_2.classList.contains("indicator-item_active")){
        clients__indicator_item_2.classList.remove("indicator-item_active");
    }
    if (clients__indicator_item_3.classList.contains("indicator-item_active")){
        clients__indicator_item_3.classList.remove("indicator-item_active");
    }
}
function NextSlide(newSlideIterator){
    if (newSlideIterator != undefined){
        partner__slideIterator = newSlideIterator;
        Slide(partner__slideIterator);
    }
    else{
        if (partner__slideIterator == 2){
            NextSlide(0);
        }
        else{
            partner__slideIterator += 1;
            Slide(partner__slideIterator);
        }
    }
    
    ResetIndicatorActive();
    switch(partner__slideIterator){
        case 0: clients__indicator_item_1.classList.add("indicator-item_active"); break;
        case 1: clients__indicator_item_2.classList.add("indicator-item_active"); break;
        case 2: clients__indicator_item_3.classList.add("indicator-item_active"); break;
    }
}
function Slide(SlideTo){
    partner__sliderLine.style.left = (-100 * SlideTo) + "%"; 
}