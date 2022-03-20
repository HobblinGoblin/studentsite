document.addEventListener('DOMContentLoaded', function() {

    //console.log('Javascript is ready');
    //Toggle Nav Mobile Menu for Small Screens
    const menubutton = document.querySelector('.menu-button');
    const menunav =document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function(){
        if(menunav.getAttribute('data-navstate')==='open'){
            menunav.setAttribute('data-navstate', 'closed');
        }else{
            menunav.setAttribute('data-navstate', 'open');
        };
    });


    //TOGGLE ACCORDIAN VIA ADDING/REMOVING A CLASS
    var acc = document.querySelectorAll('.accordian');
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].getElementsByTagName('h4')[0].onclick = function () {
            this.parentElement.classList.toggle("open");
        }
    }

    //STICKY NAV LINKS TOGGLE MENU NAV
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var stickyheader = document.querySelector(".sticky");
    var j;
    for (j = 0; j < stickynavlinks.length; j++) {
        stickynavlinks[j].onclick = function () {
            stickyheader.setAttribute('data-navstate', 'closed');
        };
    };
});