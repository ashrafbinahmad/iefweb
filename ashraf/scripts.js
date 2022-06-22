var nav = document.querySelector('.nav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ){
        nav.classList.add("nav-black");
        nav.classList.remove("nav-white");
    } 
    else {
        nav.classList.add("nav-white");
        nav.classList.remove("nav-black");
    }
};