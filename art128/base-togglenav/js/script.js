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

});