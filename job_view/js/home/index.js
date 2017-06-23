requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {
        console.log("home/index.js DOM is loaded");
        console.log("home/index.js DO WORK");
    });
});

