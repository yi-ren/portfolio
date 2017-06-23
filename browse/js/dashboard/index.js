requirejs(['jquery', 'underscore', 'domReady', 'mustache', 'bootstrap', 'jQuery-Mustache'], function ($, _, domReady, Mustache) {
    "use strict";

    window.Mustache = Mustache;

    domReady(function () {
        console.log("home/index.js DOM is loaded");
        console.log("home/index.js DO WORK");

        $.Mustache.load('../templates/dashboard/graphs.htm').done(function () {
            $('#click-chart').empty();
            $("#click-chart").mustache('bar-chart', {"clicks":450}, { method: 'append' });
        });
    });
});

