
    $( document ).ready(function() {
       
		$('#explore').click(function(){
			if($('#job-title').val() == "UX Designer"){
				 $('#quick-facts > div').addClass('hidden');
				 $('#quick-facts .ux').removeClass('hidden');
			}else if($('#job-title').val() == "Registered Nurse"){
				 $('#quick-facts > div').addClass('hidden');
				 $('#quick-facts .nurse').removeClass('hidden');
			}else{
			}
			return false;
		});

        var map = L.map('map').setView([37.8, -96], 4);

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
				'<b>' + props.name + '</b><br />' + props.jobs + ' jobs</sup>'
				: 'Hover over a state to view number of job results, click to see city level');
        };

        info.addTo(map);

        L.control.zoom({
            position: 'bottomleft'
        });


        // get color depending on population density value
        function getColor(d) {
            return d > 600 ? '#316002' :
			       d > 400 ? '#529A08' :
			       d > 200 ? '#75DE0B' :
			       d > 10 ? '#B8F47B' :
			                  '#F9F9F9';
        }

        function style(feature) {
            return {
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7,
                fillColor: getColor(feature.properties.jobs)
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
				grades = [0, 10, 200, 400, 600],
				labels = [],
				from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
					'<i style="background:' + getColor(from + 1) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = "Number of Jobs<br>" + labels.join('<br>');
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
            $('.saved-cities-slot').removeClass("empty").addClass("full");
            $('#region-selector').removeClass('empty').addClass('full');
			
        });

        $('#overview .show-jobs').click(function () {
        });

        






        

        var bostonMarker = L.geoJson(boston);
        var newyorkMarker = L.geoJson(newyork);
		var sfMarker = L.geoJson(sf);
		var seattleMarker = L.geoJson(seattle);
		var chicagoMarker = L.geoJson(chicago);


        var bostonPopup = L.popup().setContent(boston.properties.popupContent);
        var newyorkPopup = L.popup().setContent(newyork.properties.popupContent);
		var sfPopup = L.popup().setContent(sf.properties.popupContent);
		var seattlePopup = L.popup().setContent(seattle.properties.popupContent);
		var chicagoPopup = L.popup().setContent(chicago.properties.popupContent);

		bostonMarker.on({
            mouseover:showBostonInfo
        });

        newyorkMarker.on({
            mouseover:showNewYorkInfo
        });
		
		sfMarker.on({
            mouseover:showSFInfo
        });
		
		seattleMarker.on({
            mouseover:showSeattleInfo
        });
		
		chicagoMarker.on({
            mouseover:showChicagoInfo
        });
		
		function showChicagoInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(chicago.properties.name);
            $('#overview p').html(chicago.properties.sum);
            $('#overview #results').text(chicago.properties.number_of_job_openings);
            $('#overview #average-wage').text(chicago.properties.medium_annual_income);
            $('#overview #household-income').text(chicago.properties.household);
            $('#overview #cost-of-living').text(chicago.properties.costofliving);
            $('#overview #type').text(chicago.properties.type);
            $('#overview #population').text(chicago.properties.population);
			formatCurrencyFields();
            chicagoMarker.bindPopup(chicagoPopup).openPopup();
        };
		
		function showSeattleInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(seattle.properties.name);
            $('#overview p').html(seattle.properties.sum);
            $('#overview #results').text(seattle.properties.number_of_job_openings);
            $('#overview #average-wage').text(seattle.properties.medium_annual_income);
            $('#overview #household-income').text(seattle.properties.household);
            $('#overview #cost-of-living').text(seattle.properties.costofliving);
            $('#overview #type').text(seattle.properties.type);
            $('#overview #population').text(seattle.properties.population);
			formatCurrencyFields();
            seattleMarker.bindPopup(seattlePopup).openPopup();
        };
		
		function showSFInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(sf.properties.name);
            $('#overview p').html(sf.properties.sum);
            $('#overview #results').text(sf.properties.number_of_job_openings);
            $('#overview #average-wage').text(sf.properties.medium_annual_income);
            $('#overview #household-income').text(sf.properties.household);
            $('#overview #cost-of-living').text(sf.properties.costofliving);
            $('#overview #type').text(sf.properties.type);
            $('#overview #population').text(sf.properties.population);
			formatCurrencyFields();
            sfMarker.bindPopup(sfPopup).openPopup();
        };

        function showBostonInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(boston.properties.name);
            $('#overview p').html(boston.properties.sum);
            $('#overview #results').text(boston.properties.number_of_job_openings);
            $('#overview #average-wage').text(boston.properties.medium_annual_income);
            $('#overview #household-income').text(boston.properties.household);
            $('#overview #cost-of-living').text(boston.properties.costofliving);
            $('#overview #type').text(boston.properties.type);
            $('#overview #population').text(boston.properties.population);
			formatCurrencyFields();
            bostonMarker.bindPopup(bostonPopup).openPopup();
        };


        function showNewYorkInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(newyork.properties.name);
            $('#overview p').html(newyork.properties.sum);
            $('#overview #results').text(newyork.properties.number_of_job_openings);
            $('#overview #average-wage').text(newyork.properties.medium_annual_income);
            $('#overview #household-income').text(newyork.properties.household);
            $('#overview #cost-of-living').text(newyork.properties.costofliving);
            $('#overview #type').text(newyork.properties.type);
            $('#overview #population').text(newyork.properties.population);
			formatCurrencyFields();
            newyorkMarker.bindPopup(newyorkPopup).openPopup();
        };
		
		function formatCurrencyFields(){
			$('#overview #average-wage').formatCurrency();
			$('#overview #household-income').formatCurrency().slice(0,-3);
			$('#overview #average-wage').text($('#overview #average-wage').text().slice(0,-3));
			$('#overview #household-income').text($('#overview #household-income').text().slice(0,-3));
			$('#overview #population').text(numberWithCommas($('#overview #population').text()));
		}
		
		function numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

        map.on('zoomend', onZoomend);
        function onZoomend() {
            if (map.getZoom() >= 6) {
                map.addLayer(bostonMarker);
                map.addLayer(newyorkMarker);
				map.addLayer(sfMarker);
				map.addLayer(seattleMarker);
				map.addLayer(chicagoMarker);
				if ($('.leaflet-top.leaflet-right').children().length > 0) {
                map.removeControl(info);
                map.removeControl(legend);
				}
            };

            if (map.getZoom() < 6) {
				
                map.removeLayer(bostonMarker);
                map.removeLayer(newyorkMarker);
				map.removeLayer(sfMarker);
				map.removeLayer(seattleMarker);
				map.removeLayer(chicagoMarker);
                if ($('.leaflet-top.leaflet-right').children().length == 0) {
                	map.addControl(info);
                	map.addControl(legend);
                }
                $('#overview').addClass('hidden');
            };
        };
    });