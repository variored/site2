let button = document.getElementById("button-top");
let body = document.body;
let homeBlock = document.getElementById("home");

button.onclick = GoToTop;
body.onscroll = CheckScroll;

function GoToTop(){
    console.log("scroll");
    window.scrollTo({
        top: "0px",
        behavior: "smooth"
    });
}
function CheckScroll(){
    if (document.documentElement.scrollTop > 968){
        button.classList.add("button-top_active");
    }
    else{
        button.classList.remove("button-top_active");
    }
}