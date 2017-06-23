requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {
        console.log("job_view_social/index.js DOM is loaded");
        console.log("job_view_social/index.js DO WORK");


        $('.fa-info-circle').tooltip();

        /* top/bottom bar appear/disappear on scroll */
        $(window).scroll(function () {
            /* Check the location of desired element */
            var bottom_of_header = $('#target-buttons').offset().top + $('#target-buttons').outerHeight();
            var bottom_of_button2= $('#target-buttons2').offset().top + $('#target-buttons2').outerHeight();
            var top_of_window = $(window).scrollTop();
                /* If the object is completely visible in the window, fade it in */
            if ($(window).width() > 767) {
                if (top_of_window >= bottom_of_header) {
                        $('#top-bar').fadeIn();
                } else {
                    
                        $('#top-bar').fadeOut();
                   
                }

            } else {
                if (top_of_window >= bottom_of_button2) {
                    console.log("show");
                    $('#bottom-bar').fadeIn();
                } else {
                    $('#bottom-bar').fadeOut();
                }
            }



        });

       
       
        var twitterURL = "https://twitter.com/share";
        twitterURL += "?via=monster";
        twitterURL += encodeURI("&text=[company] is hiring a [position name] in [location].");
        twitterURL += "&hashtags=UX,Jobs,Hashtag3";

        var facebookURL = "http://www.facebook.com/share.php";
        facebookURL += "?u=";
        facebookURL += $(location).attr('href');

        var linkedinURL = "https://www.linkedin.com/shareArticle";
        linkedinURL += "?mini=true";
        linkedinURL += "&url=";
        linkedinURL += $(location).attr('href');

        var googleplusURL = "https://plus.google.com/share";
        googleplusURL += "?url=";
        googleplusURL += $(location).attr('href');


        $('.share .twitter').attr('href', twitterURL);
        $('.share .facebook').attr('href', facebookURL);
        $('.share .linkedin').attr('href', linkedinURL);
        $('.share .googleplus').attr('href', googleplusURL);

        $('.share .popup').click(function (event) {
            var width = 575,
                height = 400,
                left = ($(window).width() - width) / 2,
                top = ($(window).height() - height) / 2,
                url = this.href,
                opts = 'status=1' +
                         ',width=' + width +
                         ',height=' + height +
                         ',top=' + top +
                         ',left=' + left;

            
            window.open(url, 'Share', opts);
            $(this).parent().parent().parent().removeClass('open');

            return false;
        });

        $('.dropdown-menu li').click(function () {
           
            
        });
        
        
        
        /* share via message, set body text
        var currentLink = $(location).attr('href');
        var message = "I just found this awesome job for you on job.com, check it out ";
        message += currentLink;
        var href = "sms:?body=";
        href += message;
        var hrefencode = href.html();
        console.log(hrefencode);
        $('.share-via-message a').attr('href', href);
        

        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            $('.share-via-message').hide();
        }
        */


    });
});