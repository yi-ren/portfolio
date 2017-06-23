//google maps plugin

function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
          center: new google.maps.LatLng(42.2129, -71.0349),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
	  
	  
$(document).ready(function(){
	
	$(".navbar-collapse a").click(function(){
		console.log("hey");
		$(".navbar-collapse").removeClass("in");
		
		});
	  var secondWrapHeight = $('.wrap-2').outerHeight();
	  console.log(secondWrapHeight);
	
	$('.wrap-1').height(secondWrapHeight);
	
	$('body').scrollspy({ target: '.navbar-fixed-top', offset: 51});
		$(function() {
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 500);
        return false;
      }
    }
  });
});
	
	
});