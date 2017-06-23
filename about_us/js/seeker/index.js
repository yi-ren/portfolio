requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {

        console.log("search/index.js DOM is loaded");
        console.log("search/index.js DO WORK");

        /*smooth scrolling*/

        $('a[href*=#]:not([href=#search])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top -100
                    }, 500);
                    return false;
                }
            }
        });

        $('a[href=#search]').click(function () {
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

        /*parallax scrolling*/
        
        var block = $('.section-title');
        var paddingTop = block.css('padding-top');
        var blockTop = block.offset().top;
        var blockBottom = blockTop + block.outerHeight();

        
        $(window).scroll(function () {
            var bottomOfWindow = $(window).scrollTop() + $(window).innerHeight();
            var topOfWindow = $(window).scrollTop();
         

            $('.mainseeker > .row.background').each(function (index) {
                
                var topOfDiv = $(this).offset().top;
                var bottomOfDiv = topOfDiv + $(this).outerHeight();
                var backgroundTop = (topOfDiv - topOfWindow) / 8;
                if (bottomOfWindow > topOfDiv && topOfWindow < bottomOfDiv) {
                    $(this).css("background-position", "center " + backgroundTop + "px");
                }
                
            });
            
        });
        
    });
});
