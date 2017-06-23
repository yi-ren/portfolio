$( document ).ready(function() {
		// there's the gallery and the trash
    var $keywords = $( ".keywords" );
	var $jobsKeywords = $("#jobs-keywords");
	var $livingKeywords = $("#living-keywords");
	var $connectionKeywords = $("#connection-keywords");
	var $cultureKeywords = $("#culture-keywords");
    var $top5 = $( "#top5" );
	var $firstBar = $(".firstbar");
	var $secondBar = $(".secondbar");
	var $thirdBar = $(".thirdbar");
	var $forthBar = $(".forthbar");
	var $fifthBar = $(".fifthbar");
	var $bars = $(".bar");
	
	
	$bars.each(function(){
		$(this).hover(barOnHover, barOffHover);
	})
	
	$('.bar').qtip('disable');
	
	function barOnHover(){
		var dontmove = $(this);
		$(".bar").removeClass("blink_me");
		if(dontmove.hasClass("firstbar")){
			var fullLength = 500;
		}else if(dontmove.hasClass("secondbar")){
			var fullLength = 250;
		}else if(dontmove.hasClass("thirdbar")){
			var fullLength = 125;
		}else if(dontmove.hasClass("forthbar")){
			var fullLength = 63;
		}else if(dontmove.hasClass("fifthbar")){
			var fullLength = 32;
		}
		
		var base = dontmove.position().left + dontmove.parent(".city").position().left;
		
		if(dontmove.hasClass("firstbar")){
			$("#base-line").css("left", base+160);
			
		}else{
			$("#base-line").css("left", base);
			
		}
		$(".city-name").each(function(index, element) {
			
            setTimeout(function(){ 
			var parentLeft = $(element).parent(".city").position().left;
			$(element).css("left", -parentLeft + base - 160); 
			$("#crown").css("left", base-60);
			if(dontmove.hasClass("firstbar")){
				$(element).css("left", -parentLeft + base); 
				$("#crown").css("left", base+100);
			}
			}, 200);
        });
		
		
		
		$("#base-line-inner").html("<span id='chart-title'>" + dontmove.attr("data-base-line-text") + "</span><br>0");
		
		if(fullLength > 100){
			if(dontmove.hasClass("firstbar")){
				$("#middle-line").css("left", base+fullLength/2+160);
			}else{
				$("#middle-line").css("left", base+fullLength/2);
			}
			$("#middle-line-inner").text(dontmove.attr("data-middle-line-text"));
		}
		if(dontmove.hasClass("firstbar")){
			$("#top-line").css("left", base+fullLength+160);
		}else{
			$("#top-line").css("left", base+fullLength);
		}
		
		$("#top-line-inner").text(dontmove.attr("data-top-line-text"));
		
		var classes = dontmove.attr("class");
		dontmove.attr("data-move", "dontmove");
		var smallPartofClasses = classes.replace(' bar', '');
		var barsWithSameClasses = $("."+smallPartofClasses);
		barsWithSameClasses.each(function(){
			var targetBar = $(this);
			
			if(targetBar.attr("data-move") != "dontmove"){
				var leftposition = targetBar.position().left
				$(this).parent(".city").css("left", -(leftposition-base));
			}
			targetBar.addClass("blink_me");
			targetBar.siblings(".bar").animate({"opacity": "0.1"});
			showQtip(targetBar);
		});
		
	}
	
	
	
	function showQtip(targetBar){
		targetBar.qtip({ // Grab all elements with a non-blank data-tooltip attr.
					content: {
						attr: 'data-tooltip', // Tell qTip2 to look inside this attr for its content
					},
					show: { ready: true },
					position: {
						at: 'middle right', // at the bottom right of...
						my: 'left center',  // Position my top left...
					},
					style: {
						classes: 'qtip-yi',
						tip: false
					}
		})
	}
	
	function barOffHover(){
		$(".bar").removeClass("blink_me");
		$(".bar").animate({"opacity": "1"}, 50);
		
		$(this).attr("data-move", "");
		$(".line").css("left", -1000);
		$('[data-tooltip!=""]').qtip({ // Grab all elements with a non-blank data-tooltip attr.
				content: {
					attr: 'data-tooltip', // Tell qTip2 to look inside this attr for its content
				},
				show: { event: false, ready: false },
				
		})
	}
	
	$("#bars-container-inner").mouseleave(function(){
		$(".city").css("left", 20);
		$(".city-name").css("left", 0);
		$("#crown").css("left", 120);
	});
	
	function updateChart(){
		var firstProperty = $("#top5 li:nth-child(1)").attr("id");
		var secondProperty = $("#top5 li:nth-child(2)").attr("id");
		var thirdProperty = $("#top5 li:nth-child(3)").attr("id");
		var forthProperty = $("#top5 li:nth-child(4)").attr("id");
		var fifthProperty = $("#top5 li:nth-child(5)").attr("id");
		
		$firstBar.each(function(index, element) {
			var cityName = $(this).parent().attr("id");
			if($("#top5 li").length > 0){
				
				if(firstProperty == "number_of_job_openings"){
					maxNumber = 725;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty]);
					$(this).attr("data-base-line-text", "No. of Job Openings");
					
				}else if (firstProperty == "medium_annual_income"){
					maxNumber = 92236;
					$(this).attr("data-tooltip", "$ " +  window[cityName].properties[firstProperty]);
					$(this).attr("data-base-line-text", "Medium Annual Income");
				}else if(firstProperty == "rent_affordibility"){
					maxNumber = 5.78;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty].toFixed(2) +" / 1");
					$(this).attr("data-base-line-text", "Income / Rent Ratio");
				}else if(firstProperty == "safety"){
					maxNumber = 17.18213058;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Safety Index (Population / Crime)");
				}else if(firstProperty == "house_affordibility"){
					maxNumber = 66288/183100;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Incom / House Value Ratio");
				}else if(firstProperty == "closeness_to_friends"){
					maxNumber = 100;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty]);
					$(this).attr("data-base-line-text", "Number of Friends within 20 Miles");
				}else if(firstProperty == "number_of_trips_home_you_can_afford"){
					maxNumber = 66288/155;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty].toFixed(2));
					$(this).attr("data-base-line-text", "No. of Trips to Home You Can Afford");
				}else if(firstProperty == "tripadvisor_reviews"){
					maxNumber = 410808;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty]);
					$(this).attr("data-base-line-text", "Number of Tripadvisor Reviews");
				}else if(firstProperty == "fun_score"){
					maxNumber = 20.14910979;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Bars & Theaters / Libraries & Museum Ratio");
				}
				else if(firstProperty == "serious_score"){
					maxNumber = 1/14.64541833;
					$(this).attr("data-tooltip", window[cityName].properties[firstProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Libraries & Museum / Bars & Theaters Ratio");
				}
				if(Math.floor(maxNumber) == maxNumber){
					$(this).attr("data-middle-line-text", Math.floor(maxNumber/2));
					$(this).attr("data-top-line-text", maxNumber);
				}else{
					$(this).attr("data-middle-line-text", (maxNumber/2).toFixed(2));
					$(this).attr("data-top-line-text", maxNumber.toFixed(2));
				}
				
				var width = window[cityName].properties[firstProperty]/maxNumber*500;
			}else{
				var width = 0;
			}
			$(this).css("width", width);
			
		});
		$secondBar.each(function(index, element) {
			var cityName = $(this).parent().attr("id");
			if($("#top5 li").length > 1){
				if(secondProperty == "number_of_job_openings"){
					maxNumber = 725;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty]);
					$(this).attr("data-base-line-text", "No. of Job Openings");
					
				}else if (secondProperty == "medium_annual_income"){
					maxNumber = 92236;
					$(this).attr("data-tooltip", "$ " +  window[cityName].properties[secondProperty]);
					$(this).attr("data-base-line-text", "Medium Annual Income");
				}else if(secondProperty == "rent_affordibility"){
					maxNumber = 5.78;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty].toFixed(2) +" / 1");
					$(this).attr("data-base-line-text", "Income / Rent Ratio");
				}else if(secondProperty == "safety"){
					maxNumber = 17.18213058;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Population / Crime Ratio");
				}else if(secondProperty == "house_affordibility"){
					maxNumber = 66288/183100;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Incom / House Value Ratio");
				}else if(secondProperty == "closeness_to_friends"){
					maxNumber = 100;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty]);
					$(this).attr("data-base-line-text", "Number of Friends within 20 Miles");
				}else if(secondProperty == "number_of_trips_home_you_can_afford"){
					maxNumber = 66288/155;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty].toFixed(2));
					$(this).attr("data-base-line-text", "No. of Trips to Home You Can Afford");
				}else if(secondProperty == "tripadvisor_reviews"){
					maxNumber = 410808;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty]);
					$(this).attr("data-base-line-text", "Number of Tripadvisor Reviews");
				}else if(secondProperty == "fun_score"){
					maxNumber = 20.14910979;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Bars & Theaters / Libraries & Museum Ratio");
				}
				else if(secondProperty == "serious_score"){
					maxNumber = 1/14.64541833;
					$(this).attr("data-tooltip", window[cityName].properties[secondProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Libraries & Museum / Bars & Theaters Ratio");
				}
				if(Math.floor(maxNumber) == maxNumber){
					$(this).attr("data-middle-line-text", Math.floor(maxNumber/2));
					$(this).attr("data-top-line-text", maxNumber);
				}else{
					$(this).attr("data-middle-line-text", (maxNumber/2).toFixed(2));
					$(this).attr("data-top-line-text", maxNumber.toFixed(2));
				}
				var width = window[cityName].properties[secondProperty]/maxNumber*250;
				
			}else{
				var width = 0;
			}
			$(this).css("width", width);
		});
		$thirdBar.each(function(index, element) {
			var cityName = $(this).parent().attr("id");
			if($("#top5 li").length > 2){
				if(thirdProperty == "number_of_job_openings"){
					maxNumber = 725;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty]);
					$(this).attr("data-base-line-text", "No. of Job Openings");
					
				}else if (thirdProperty == "medium_annual_income"){
					maxNumber = 92236;
					$(this).attr("data-tooltip", "$ " +  window[cityName].properties[thirdProperty]);
					$(this).attr("data-base-line-text", "Medium Annual Income");
				}else if(thirdProperty == "rent_affordibility"){
					maxNumber = 5.78;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty].toFixed(2) +" / 1");
					$(this).attr("data-base-line-text", "Income / Rent Ratio");
				}else if(thirdProperty == "safety"){
					maxNumber = 17.18213058;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Population / Crime Ratio");
				}else if(thirdProperty == "house_affordibility"){
					maxNumber = 66288/183100;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Incom / House Value Ratio");
				}else if(thirdProperty == "closeness_to_friends"){
					maxNumber = 100;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty]);
					$(this).attr("data-base-line-text", "Number of Friends within 20 Miles");
				}else if(thirdProperty == "number_of_trips_home_you_can_afford"){
					maxNumber = 66288/155;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty].toFixed(2));
					$(this).attr("data-base-line-text", "No. of Trips to Home You Can Afford");
				}else if(thirdProperty == "tripadvisor_reviews"){
					maxNumber = 410808;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty]);
					$(this).attr("data-base-line-text", "Number of Tripadvisor Reviews");
				}else if(thirdProperty == "fun_score"){
					maxNumber = 20.14910979;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Bars & Theaters / Libraries & Museum Ratio");
				}
				else if(thirdProperty == "serious_score"){
					maxNumber = 1/14.64541833;
					$(this).attr("data-tooltip", window[cityName].properties[thirdProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Libraries & Museum / Bars & Theaters Ratio");
				}
				if(Math.floor(maxNumber) == maxNumber){
					$(this).attr("data-middle-line-text", Math.floor(maxNumber/2));
					$(this).attr("data-top-line-text", maxNumber);
				}else{
					$(this).attr("data-middle-line-text", (maxNumber/2).toFixed(2));
					$(this).attr("data-top-line-text", maxNumber.toFixed(2));
				}
				var width = window[cityName].properties[thirdProperty]/maxNumber*125;
			}else{
				var width = 0;
			}
			$(this).css("width", width);
		});
		$forthBar.each(function(index, element) {
			var cityName = $(this).parent().attr("id");
			if($("#top5 li").length > 3){
				if(forthProperty == "number_of_job_openings"){
					maxNumber = 725;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty]);
					$(this).attr("data-base-line-text", "No. of Job Openings");
					
				}else if (forthProperty == "medium_annual_income"){
					maxNumber = 92236;
					$(this).attr("data-tooltip", "$ " +  window[cityName].properties[forthProperty]);
					$(this).attr("data-base-line-text", "Medium Annual Income");
				}else if(forthProperty == "rent_affordibility"){
					maxNumber = 5.78;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty].toFixed(2) +" / 1");
					$(this).attr("data-base-line-text", "Income / Rent Ratio");
				}else if(forthProperty == "safety"){
					maxNumber = 17.18213058;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Population / Crime Ratio");
				}else if(forthProperty == "house_affordibility"){
					maxNumber = 66288/183100;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Incom / House Value Ratio");
				}else if(forthProperty == "closeness_to_friends"){
					maxNumber = 100;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty]);
					$(this).attr("data-base-line-text", "Number of Friends within 20 Miles");
				}else if(forthProperty == "number_of_trips_home_you_can_afford"){
					maxNumber = 66288/155;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "No. of Trips to Home You Can Afford");
				}else if(forthProperty == "tripadvisor_reviews"){
					maxNumber = 410808;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty]);
					$(this).attr("data-base-line-text", "Number of Tripadvisor Reviews");
				}else if(forthProperty == "fun_score"){
					maxNumber = 20.14910979;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Bars & Theaters / Libraries & Museum Ratio");
				}
				else if(forthProperty == "serious_score"){
					maxNumber = 1/14.64541833;
					$(this).attr("data-tooltip", window[cityName].properties[forthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Libraries & Museum / Bars & Theaters Ratio");
				}
				if(Math.floor(maxNumber) == maxNumber){
					$(this).attr("data-middle-line-text", Math.floor(maxNumber/2));
					$(this).attr("data-top-line-text", maxNumber);
				}else{
					$(this).attr("data-middle-line-text", (maxNumber/2).toFixed(2));
					$(this).attr("data-top-line-text", maxNumber.toFixed(2));
				}
				var width = window[cityName].properties[forthProperty]/maxNumber*63;
			}else{
				var width = 0;
			}
			$(this).css("width", width);
		});
		$fifthBar.each(function(index, element) {
			var cityName = $(this).parent().attr("id");
			if($("#top5 li").length > 4){
				if(fifthProperty == "number_of_job_openings"){
					maxNumber = 725;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty]);
					$(this).attr("data-base-line-text", "No. of Job Openings");
					
				}else if (fifthProperty == "medium_annual_income"){
					maxNumber = 92236;
					$(this).attr("data-tooltip", "$ " +  window[cityName].properties[fifthProperty]);
					$(this).attr("data-base-line-text", "Medium Annual Income");
				}else if(fifthProperty == "rent_affordibility"){
					maxNumber = 5.78;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty].toFixed(2) +" / 1");
					$(this).attr("data-base-line-text", "Income / Rent Ratio");
				}else if(fifthProperty == "safety"){
					maxNumber = 17.18213058;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Population / Crime Ratio");
				}else if(fifthProperty == "house_affordibility"){
					maxNumber = 66288/183100;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Incom / House Value Ratio");
				}else if(fifthProperty == "closeness_to_friends"){
					maxNumber = 100;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty]);
					$(this).attr("data-base-line-text", "Number of Friends within 20 Miles");
				}else if(fifthProperty == "number_of_trips_home_you_can_afford"){
					maxNumber = 66288/155;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "No. of Trips to Home You Can Afford");
				}else if(fifthProperty == "tripadvisor_reviews"){
					maxNumber = 410808;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty]);
					$(this).attr("data-base-line-text", "Number of Tripadvisor Reviews");
				}else if(fifthProperty == "fun_score"){
					maxNumber = 20.14910979;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Bars & Theaters / Libraries & Museum Ratio");
				}
				else if(fifthProperty == "serious_score"){
					maxNumber = 1/14.64541833;
					$(this).attr("data-tooltip", window[cityName].properties[fifthProperty].toFixed(2));
					$(this).attr("data-base-line-text", "Libraries & Museum / Bars & Theaters Ratio");
				}
				if(Math.floor(maxNumber) == maxNumber){
					$(this).attr("data-middle-line-text", Math.floor(maxNumber/2));
					$(this).attr("data-top-line-text", maxNumber);
				}else{
					$(this).attr("data-middle-line-text", (maxNumber/2).toFixed(2));
					$(this).attr("data-top-line-text", maxNumber.toFixed(2));
				}
				var width = window[cityName].properties[fifthProperty]/maxNumber*32;
			}else{
				var width = 0;
			}
			$(this).css("width", width);
		});
		
	}
	
	$("#bars-container").hide();
	function order(){
		
		if($("#top5 li").length == 0){
			$("#bars-container").slideUp();
			$("#saved-cities").fadeIn();
		}else{
			$("#bars-container").removeClass("hidden").slideDown();
			$("#saved-cities").fadeOut();
		}
		for(var i=0; i<5; i++){
				cities[i].properties.score = 0;
		}
		for(var i=0; i<5; i++){
			
			for (var j=0; j<cities[i].properties.element.children(".bar").length+2; j++){
				
				cities[i].properties.score += cities[i].properties.element.children('.bar:nth-child('+j+')').width();
			}
		}
		cities.sort(function(a, b) { 
			return b.properties.score - a.properties.score;
		})
		for(var i=0; i<5; i++){
			cities[i].properties.element.attr("data-order", "no"+(i+1));
		}
		$('#crown').remove();
		$('div[data-order="no1"]').append('<img id="crown" src="../img/location/crown.png" width="0">');
		$('#crown').hide().fadeIn(10, function(){
			$('#crown').animate({
        	height : '+=30', // Add 300px to the current height (whatever it is)
			width : '+=30', // Add 300px to the current height (whatever it is)
			"left" : '-=15'
    		}, 'slow', 'easeOutBounce');
		});
		
		
	}
	
 
    // let the gallery items be draggable
    $( "li", $keywords ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    // let the trash be droppable, accepting the gallery items
    $top5.droppable({
      accept: ".keywords li",
      activeClass: "drop-here",
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
		
      }
    });
 
    // let the gallery be droppable as well, accepting items from the trash
    $keywords.droppable({
      accept: "#top5 li",
      activeClass: "drop-here",
      drop: function( event, ui ) {
        recycleImage( ui.draggable );
      }
    });
 
    // image deletion function
    var recycle_icon = '<i class="pe-7s-close pull-right pe-va"></i>';
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ol", $top5 ).length ?
          $( "ol", $top5 ) :
          $( "<ol/>" ).appendTo( $top5 );
		 $item.find("i").remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          
        });
      });
	  setTimeout(function(){ updateChart() }, 500);
	  setTimeout(function(){ order(); }, 800);
    }
 
    // image recycle function
	var plus_icon = '<i class="fa fa-plus pull-right pe-va"></i>';
    function recycleImage( $item ) {
      $item.fadeOut(function() {
      $item.find("i").remove();
		  if($item.hasClass("jobs-keywords")){
			 $item.append( plus_icon ).appendTo($jobsKeywords).fadeIn();
		  }else if($item.hasClass("living-keywords")){
			 $item.append( plus_icon ).appendTo($livingKeywords).fadeIn();
		  }else if($item.hasClass("connection-keywords")){
			 $item.append( plus_icon ).appendTo($connectionKeywords).fadeIn();
		  }else{
			  $item.append( plus_icon ).appendTo($cultureKeywords).fadeIn();
		  }
      });
	  setTimeout(function(){ updateChart() }, 500);
	  setTimeout(function(){ order(); }, 800);
    }
 
 
    // resolve the icons behavior with event delegation
    $( "li" ).click(function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "i.pe-7s-close" ) ) {
        recycleImage( $item );
      }
	  if ( $target.is( "i.fa-plus" ) ) {
        deleteImage( $item );
      }
 
      return false;
    });
	
	
	   
	   
});