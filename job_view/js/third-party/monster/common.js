/*
    ONLY APPROVED JAVASCRIPT FILES WILL BE INCLUDED HERE
    DO NOT ADD TO THIS LIST WITHOUT FIRST DISCUSSING IT WITH THE FRONT-END ARCHITECT
 */
requirejs.config({
    baseUrl: '../js/third-party',
    paths: {
        app: '../app',
        /* Load jquery from google cdn. On fail, load local file. */
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min', 'jquery/jquery-1.10.1.min'],
        'underscore': 'underscore/underscore-1.5.2',
        'bootstrap': 'bootstrap/bootstrap-3.1.1.min',
        'jquery.tablesorter': 'jquery/jquery.tablesorter',
        'jquery.shuffle': 'jquery/jquery.shuffle',
        'domReady': 'domReady/domReady',
        'moment': 'moment/moment-2.4.0.min',
        'jquery.bridget': 'jquery/jquery.bridget',
        /* Load numeral from cdn. On fail, load local file. */
        'numeral': ['//cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min', 'numeral/numeral.min'],

        /* templating libraries for prototyping. NOT for production. Correlates to .Net partial views  */
        'mustache': 'mustache/mustache',
        'jQuery-Mustache': 'jquery/jquery.mustache',

        /* Charting libraries, not all will be used, but all of them work nicely in this environment */
        /* Load raphael from cdn. On fail, load local file. */
        'raphael': ['//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min', 'raphae/raphael-2.1.2.min'],
        'morris': 'morris/morris-0.5.0',
        'chartjs': 'chartjs/chart',
        'd3': 'd3/d3-3.3.11.min',
        'rickshaw': 'rickshaw/rickshaw'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery.tablesorter': {
            deps: ['jquery']
        },
        'jquery.shuffle': {
            deps: ['jquery']
        },

        /* templating libraries for prototyping. NOT for production. Correlates to .Net partial views  */
        'mustache': {
            exports: 'Mustache'
        },
        'jQuery-Mustache': {
            deps: ['jquery']
        },

        /* Charting libraries, not all will be used, but all of them work nicely in this environment */
        'raphael': {
            exports: 'Raphael'
        },
        'morris': {
            deps: ['jquery', 'raphael'],
            exports: 'Morris'
        },
        'chartjs': {
            exports: 'Chart'
        },
        'd3': {
            exports: 'd3'
        },
        'rickshaw': {
            deps: ['d3'],
            exports: 'Rickshaw'
        }
    }
});

// Initialize the application
require(["app"], function (app) {
    console.log("initialize the app");
    app.init();
});