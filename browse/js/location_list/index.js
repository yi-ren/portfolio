requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {
        console.log("hahahaha");
        console.log("job_view_social/index.js DO WORK");

        $("#slider-range-max").slider({
            range: "min",
            min: 20000,
            max: 100000,
            value: 20000,
            slide: function (event, ui) {
                $("#amount").val(ui.value);
            }
        });
        $("#amount").val($("#slider-range-max").slider("value"));

        var checkboxes = $(':checkbox');
        checkboxes.prop("checked" , true);
        
        $('.overview-btn').click(function () {
            $(this).toggleClass('clicked');
            if ($(this).hasClass('clicked')) {
                $('.overview').toggleClass('active').animate({ opacity: 1 });
                $(this).text('Hide Overview');
            } else {
                $(this).text('Overview');
                $('.overview').animate({ opacity: 0 }, function () {
                    $(this).toggleClass('active');
                })
            }
            
            $('.thumbnail .img-container').toggleClass('no-layover');
        });
        $('.thumbnail .img-container').addClass('no-layover');
    });
});