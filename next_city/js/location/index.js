

    $( document ).ready(function() {
       
		$('#explore').click(function(){
			if($('#job-title').val() == "UX Designer"){
				 $('#quick-facts > div').addClass('hidden');
				 $('#quick-facts .ux').removeClass('hidden');
			}else if($('#job-title').val() == "Registered Nurse"){
				 $('#quick-facts > div').addClass('hidden');
				 $('#quick-facts .nurse').removeClass('hidden');
			}else{
				$('#quick-facts > div').addClass('hidden');
				$('#quick-facts .notice').removeClass('hidden');
			}
			
			return false;
		});

        var map = L.map('map').setView([37.8, -96], 4);

        L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
            maxZoom: 8,
            id: 'ryiii.j49bp65k'
        }).addTo(map);

        
        
       








        $('#starter-question').modal('show');


        
    });