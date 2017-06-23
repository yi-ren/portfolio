requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {
        console.log("hahahaha");
        console.log("job_view_social/index.js DO WORK");

        styleTiles();

        $('.tile').click(function () {
            $('.tile').addClass('done');
            $('.next-step').removeClass('hidden');
            $('#tell').addClass('hidden');
        });
        
        $(window).resize(function () {
            styleTiles();
        });

        function makeTileSquare() {
            $(".tile").outerHeight($('.tile').outerWidth() *0.8);
        }

        function centerTileContent() {
            var tileHeight = $(".tile").outerHeight();
            var tileContentHeight = $(".tile .content").outerHeight();
            var tilePaddingTop = (tileHeight - tileContentHeight) / 2;
            console.log(tileHeight + ',' + tileContentHeight + ',' + tilePaddingTop);
            $(".tile").css('padding-top', tilePaddingTop);
        }

        function styleTiles() {
            $(".tile").outerHeight($('.tile').outerWidth());
            centerTileContent();
        }

        

        
    });
});