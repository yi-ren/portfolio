requirejs(['jquery', 'underscore', 'domReady', 'jquery.shuffle', 'bootstrap'], function ($, _, domReady, shuffle) {
    "use strict";

    domReady(function () {
        console.log("job_view_social/index.js DOM is loaded");
        console.log("job_view_social/index.js DO WORK");



        var map = L.map('map').setView([37.8, -96], 5);

        L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
            maxZoom: 8,
            id: 'ryiii.j49bp65k'
        }).addTo(map);

        
        // control that shows state info on hover
        var info = L.control();

        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };

        info.update = function (props) {
            this._div.innerHTML = '' + (props ?
				'<b>' + props.name + '</b><br />' + props.density + 'K results</sup>'
				: 'Hover over a state to view number of job results, click to see city level <span style="color:red">(Try Massachusetts!)</span>');
        };

        info.addTo(map);

        L.control.zoom({
            position: 'bottomleft'
        });


        // get color depending on population density value
        function getColor(d) {
            return d > 1000 ? '#800026' :
			       d > 500 ? '#BD0026' :
			       d > 200 ? '#E31A1C' :
			       d > 100 ? '#FC4E2A' :
			       d > 50 ? '#FD8D3C' :
			       d > 20 ? '#FEB24C' :
			       d > 10 ? '#FED976' :
			                  '#FFEDA0';
        }

        function style(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7,
                fillColor: getColor(feature.properties.density)
            };
        }

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera) {
                layer.bringToFront();
            }

            info.update(layer.feature.properties);
        }

        var geojson;

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            });
        }

        geojson = L.geoJson(statesData, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        var legend = L.control({ position: 'bottomleft' });

        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
				grades = [0, 10, 20, 50, 100, 200, 500, 1000],
				labels = [],
				from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
					'<i style="background:' + getColor(from + 1) + '"></i> ' +
					from + (to ? '&ndash;' + to : 'K+'));
            }

            div.innerHTML = labels.join('K<br>');
            return div;
        };

        legend.addTo(map);







        $('#starter-question').modal('show');

        $('.titles .title .btn').click(function () {
            $('#filters').toggleClass('disabled');
            if ($(this).hasClass('open')) {
                openComparePanel();
            } else {
                closeComparePanel();
            }
        });

        $('#titles-compare a').click(function () {
            closeComparePanel();
            $('#filters').toggleClass('disabled');
        });



        $('#overview .panel-heading #more').click(function () {
            $(this).find('.glyphicon').toggleClass('glyphicon-chevron-up').toggleClass('glyphicon-chevron-down');
        });


        $('#overview .save').click(function () {
            $('#overview .panel-heading .save span').toggleClass('glyphicon-star-empty').toggleClass('glyphicon-star');
            $('#region-selector.empty').find('.title').text('Saved Cities (4)');
            $('#region-selector.empty').removeClass('empty');
            $('#map-container').css({'padding-bottom':189});
        });

        $('#overview .show-jobs').click(function () {
        });

        $('.compare').click(function () {
            $('#region-selector').animate({ height: '100%' });
            $('#region-selector .panel-heading .btn').toggle();
            $('#region-selector .no-details').addClass('hidden');
            $('#region-selector table').removeClass('hidden');
        });

        $('.back-to-map').click(function () {
            $('#region-selector').animate({ height: 192 });
            $('#region-selector .panel-heading .btn').toggle();
            $('#region-selector .no-details').removeClass('hidden');
            $('#region-selector table').addClass('hidden');
        });





        var boston = {
            "type": "Feature",
            "properties": {
                "name": "Boston, MA",
                "jobs": "120",
                "wage": "$30,000",
                "household": "$50,000",
                "costofliving": "Low",
                "type": "Mid-size City",
                "population": "123,123",
                "crime": "Low",
                "sum": '<p>Boston metro area has <span class="label label-success">low home values</span>, <span class="label label-info">average rent costs</span>, and <span class="label label-danger">high unemployment</span> levels. Its citizens generally have <span class="label label-info">average education</span> levels and <span class="label label-info">average income</span> levels.</p>',
                "popupContent": '<h4>Boston, MA</h4><p><a href="http://www.jobs.com/jobs/search?q=UX+designer&where=Boston%2C+MA&lat=42.321499999999986&lon=-71.0892&gt=5" target="_blank">100 UX designer jobs</a></p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-71.0636, 42.3581]
            }
        };

        var springfield = {
            "type": "Feature",
            "properties": {
                "name": "Springfield, MA",
                "jobs": "100",
                "wage": "$12,000",
                "household": "$10,000",
                "costofliving": "Low",
                "type": "Mid-size City",
                "population": "100,000",
                "crime": "Low",
                "popupContent": '<h4>Springfield, MA</h4><p><p><a href="http://www.jobs.com/jobs/search?q=UX+designer&where=Boston%2C+MA&lat=42.321499999999986&lon=-71.0892&gt=5" target="_blank">50 UX designer jobs</a></p>',
                "sum": '<p>Springfield metro area has <span class="label label-danger">high home values</span>, <span class="label label-info">average rent costs</span>, and <span class="label label-danger">high unemployment</span> levels. Its citizens generally have <span class="label label-info">average education</span> levels and <span class="label label-info">average income</span> levels.</p>'
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-72.5475, 42.1124]
            }
        };

        var bostonMarker = L.geoJson(boston);
        var springfieldMarker = L.geoJson(springfield);


        var bostonPopup = L.popup().setContent(boston.properties.popupContent);
        var springfieldPopup = L.popup().setContent(springfield.properties.popupContent);


        bostonMarker.on({
            mouseover: showBostonInfo
        });

        springfieldMarker.on({
            mouseover:showSpringfieldInfo
        });



        function showBostonInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(boston.properties.name);
            $('#overview p').html(boston.properties.sum);
            $('#overview #results').text(boston.properties.jobs);
            $('#overview #average-wage').text(boston.properties.wage);
            $('#overview #household-income').text(boston.properties.household);
            $('#overview #cost-of-living').text(boston.properties.costofliving);
            $('#overview #type').text(boston.properties.type);
            $('#overview #population').text(boston.properties.population);
            
            bostonMarker.bindPopup(bostonPopup).openPopup();
        };


        function showSpringfieldInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(springfield.properties.name);
            $('#overview p').html(springfield.properties.sum);
            $('#overview #results').text(springfield.properties.jobs);
            $('#overview #average-wage').text(springfield.properties.wage);
            $('#overview #household-income').text(springfield.properties.household);
            $('#overview #cost-of-living').text(springfield.properties.costofliving);
            $('#overview #type').text(springfield.properties.type);
            $('#overview #population').text(springfield.properties.population);
            springfieldMarker.bindPopup(springfieldPopup).openPopup();
        };





        map.on('zoomend', onZoomend);
        function onZoomend() {
            if (map.getZoom() >= 8) {

                map.addLayer(bostonMarker);
                map.addLayer(springfieldMarker);
                map.removeControl(info);
                map.removeControl(legend);

            };

            if (map.getZoom() < 8) {

                map.removeLayer(bostonMarker);
                map.removeLayer(springfieldMarker);
                if ($('.leaflet-top.leaflet-right').children().length == 0) {
                map.addControl(info);
                map.addControl(legend);
                }
                $('#overview').addClass('hidden');
            };
        };
    });
});