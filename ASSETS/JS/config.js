//EDIT HERE
var GooglePlay         =    "https://play.google.com/store";
var FaceBook           =    "https://www.facebook.com/";
var Twitter            =    "https://twitter.com/";
var Picasa             =    "https://picasa.google.com/";
var GooglePlus         =    "https://myaccount.google.com/profile";


//LINKS-------/////////////////////////////////////////////////////
UpdateLinks(".Button_GooglePlay", GooglePlay);
UpdateLinks(".Button_FB", FaceBook);
UpdateLinks(".Button_TW", Twitter);
UpdateLinks(".Button_PC", Picasa);
UpdateLinks(".Button_GP", GooglePlus);

function UpdateLinks(_class, _link){
    let buttons = document.querySelectorAll(_class);
    console.log(`buttons.length:${buttons}`);
    for (var i = 0; i < buttons.length; i++){
        buttons[i].href=_link;
    }
}