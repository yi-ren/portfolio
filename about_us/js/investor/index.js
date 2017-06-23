requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {
        console.log("search/index.js DOM is loaded");
        console.log("search/index.js DO WORK");
        $('body').scrollspy({ target: '.side-nav' });
        $('.side-nav a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
        $('.more-customers li').tooltip();
        var titleBottom = $('.page-title').offset().top + $('.page-title').innerHeight();
        $(window).scroll(function () {
            var topOfWindow = $(window).scrollTop();
            console.log(titleBottom + " " + topOfWindow);
            if (topOfWindow > titleBottom) {
                $('.nav').addClass('fixed');
            } else {
                $('.nav.fixed').removeClass('fixed');
            }
        });
    });
});
