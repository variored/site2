//EDIT HERE
let GooglePlay         =    "https://play.google.com/store";
let FaceBook           =    "https://www.facebook.com/";
let Twitter            =    "https://twitter.com/";
let Picasa             =    "https://picasa.google.com/";
let GooglePlus         =    "https://myaccount.google.com/profile";

let SingUp_Standart    =    "https://myaccount.google.com/profile";
let SingUp_Business    =    "https://myaccount.google.com/profile";
let SingUp_Premium     =    "https://myaccount.google.com/profile";
let SingUp_Extra       =    "https://myaccount.google.com/profile";


//LINKS-------/////////////////////////////////////////////////////
UpdateLinks(".Button_GooglePlay", GooglePlay);
UpdateLinks(".Button_FB", FaceBook);
UpdateLinks(".Button_TW", Twitter);
UpdateLinks(".Button_PC", Picasa);
UpdateLinks(".Button_GP", GooglePlus);
UpdateLinks(".Button_SING_UP_S", SingUp_Standart);
UpdateLinks(".Button_SING_UP_B", SingUp_Business);
UpdateLinks(".Button_SING_UP_P", SingUp_Premium);
UpdateLinks(".Button_SING_UP_E", SingUp_Extra);

function UpdateLinks(_class, _link){
    let buttons = document.querySelectorAll(_class);
    for (let i = 0; i < buttons.length; i++){
        buttons[i].href=_link;
    }
}