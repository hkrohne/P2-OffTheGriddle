// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
'use strict'


function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(700);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}

    $('.slideshow').square1({
        animation: 'slide',
        transition_time: 1000,
        prev_next_nav: 'hover',
        dots_nav: 'hover'
    });

//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu)


// End of Your Code . Don't delete that line below!!
});




