
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
            return d > 8000 ? '#316002' :
			       d > 6000 ? '#529A08' :
			       d > 4000 ? '#75DE0B' :
			       d > 2000 ? '#B8F47B' :
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
				grades = [0, 2000, 4000, 6000, 8000],
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

        






        

        var houstonMarker = L.geoJson(houston);
        var phoenixMarker = L.geoJson(phoenix);
		var sananMarker = L.geoJson(sanan);
		var seattleMarker = L.geoJson(seattle);
		var dallasMarker = L.geoJson(dallas);


        var houstonPopup = L.popup().setContent(houston.properties.popupContent);
        var phoenixPopup = L.popup().setContent(phoenix.properties.popupContent);
		var sananPopup = L.popup().setContent(sanan.properties.popupContent);
		var seattlePopup = L.popup().setContent(seattle.properties.popupContent);
		var dallasPopup = L.popup().setContent(dallas.properties.popupContent);

		houstonMarker.on({
            mouseover:showhoustonInfo
        });

        phoenixMarker.on({
            mouseover:showphoenixInfo
        });
		
		sananMarker.on({
            mouseover:showsananInfo
        });
		
		seattleMarker.on({
            mouseover:showSeattleInfo
        });
		
		dallasMarker.on({
            mouseover:showdallasInfo
        });
		
		function showdallasInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(dallas.properties.name);
            $('#overview p').html(dallas.properties.sum);
            $('#overview #results').text(dallas.properties.number_of_job_openings);
            $('#overview #average-wage').text(dallas.properties.medium_annual_income);
            $('#overview #household-income').text(dallas.properties.household);
            $('#overview #cost-of-living').text(dallas.properties.costofliving);
            $('#overview #type').text(dallas.properties.type);
            $('#overview #population').text(dallas.properties.population);
			formatCurrencyFields();
            dallasMarker.bindPopup(dallasPopup).openPopup();
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
		
		function showsananInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(sanan.properties.name);
            $('#overview p').html(sanan.properties.sum);
            $('#overview #results').text(sanan.properties.number_of_job_openings);
            $('#overview #average-wage').text(sanan.properties.medium_annual_income);
            $('#overview #household-income').text(sanan.properties.household);
            $('#overview #cost-of-living').text(sanan.properties.costofliving);
            $('#overview #type').text(sanan.properties.type);
            $('#overview #population').text(sanan.properties.population);
			formatCurrencyFields();
            sananMarker.bindPopup(sananPopup).openPopup();
        };

        function showhoustonInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(houston.properties.name);
            $('#overview p').html(houston.properties.sum);
            $('#overview #results').text(houston.properties.number_of_job_openings);
            $('#overview #average-wage').text(houston.properties.medium_annual_income);
            $('#overview #household-income').text(houston.properties.household);
            $('#overview #cost-of-living').text(houston.properties.costofliving);
            $('#overview #type').text(houston.properties.type);
            $('#overview #population').text(houston.properties.population);
			formatCurrencyFields();
            houstonMarker.bindPopup(houstonPopup).openPopup();
        };


        function showphoenixInfo() {
            $('#overview').removeClass('hidden');
            $('#overview .title').text(phoenix.properties.name);
            $('#overview p').html(phoenix.properties.sum);
            $('#overview #results').text(phoenix.properties.number_of_job_openings);
            $('#overview #average-wage').text(phoenix.properties.medium_annual_income);
            $('#overview #household-income').text(phoenix.properties.household);
            $('#overview #cost-of-living').text(phoenix.properties.costofliving);
            $('#overview #type').text(phoenix.properties.type);
            $('#overview #population').text(phoenix.properties.population);
			formatCurrencyFields();
            phoenixMarker.bindPopup(phoenixPopup).openPopup();
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
                map.addLayer(houstonMarker);
                map.addLayer(phoenixMarker);
				map.addLayer(sananMarker);
				map.addLayer(seattleMarker);
				map.addLayer(dallasMarker);
				if ($('.leaflet-top.leaflet-right').children().length > 0) {
                map.removeControl(info);
                map.removeControl(legend);
				}
            };

            if (map.getZoom() < 6) {
				
                map.removeLayer(houstonMarker);
                map.removeLayer(phoenixMarker);
				map.removeLayer(sananMarker);
				map.removeLayer(seattleMarker);
				map.removeLayer(dallasMarker);
                if ($('.leaflet-top.leaflet-right').children().length == 0) {
                	map.addControl(info);
                	map.addControl(legend);
                }
                $('#overview').addClass('hidden');
            };
        };
    });