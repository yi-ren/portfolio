define(['jquery', 'underscore', 'domReady', 'mustache', 'bootstrap', 'jQuery-Mustache'], function ($, _, domReady, Mustache) {
    return {
        init: function () {
            // for common application logic that is used across all the pages of the site.
            console.log("app.js::init");

            window.Mustache = Mustache;

            $.Mustache.load('../templates/shared/navbar.htm').done(function () {
                $('#navigation').empty();
                $("#navigation").mustache('global-nav', null, { method: 'append' });
            });
        }
    };
});