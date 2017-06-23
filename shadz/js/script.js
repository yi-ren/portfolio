$(function () {
	//close overlay
	$('#page-home .overlay .close-overlay').click(function(){
		console.log("clicked");
		$('#page-home .overlay').fadeOut();
	});
    $('#side-nav .dropdown-toggle').dropdown()
    $('.dropdown input, .dropdown label').click(function (e) {
        e.stopPropagation();
    });

	$("#compare .glyphicon-remove").fadeOut(1);
    $( "#slider-range" ).slider({
      range: true,
      min: 15,
      max: 200,
      values: [ 15, 200 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
    $('#compare-question').tooltip();
    $('#page-cart .glyphicon-trash').tooltip();
	
	
	$( "#compare  span#remove-1" ).click(function(){
		recycleImage( $('#compare .thumbnail:nth-child(1)' ));
	});
	
	$( "#compare  span#remove-2" ).click(function(){
		recycleImage( $('#compare .thumbnail:nth-child(2)' ));
	});
	
	$( "#compare  span#remove-3" ).click(function(){
		recycleImage( $('#compare .thumbnail:nth-child(3)' ));
	});
	
	$( "#compare  span#remove-4" ).click(function(){
		recycleImage( $('#compare .thumbnail:nth-child(4)' ));
	});
	
	

	 
    // there's the gallery and the trash
    var $itemList = $( "#item-list" ),
      $compare = $( "#compare" );
 
    // let the gallery items be draggable
    $( "div", $itemList ).draggable({
      cancel:".caption", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    // let the trash be droppable, accepting the gallery items
    $compare.droppable({
	  
      accept: "#item-list > div",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
 
    // let the gallery be droppable as well, accepting items from the trash
    $itemList.droppable({
      accept: "#compare > .gallery > div",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
        recycleImage( ui.draggable );
      }
    });
 
    // image deletion function
    var recycle_icon = "";
	var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
	
    function deleteImage( $item ) {
		if($("#compare > .gallery > div").length == 4){
			alert("Four items max!");
		}else{
		  $item.fadeOut(800, function() {
			var $list = $( "div.gallery", $compare ).length ?
			  $( "div.gallery", $compare ) :
			  $( "<div class='gallery ui-helper-reset'/>" ).appendTo( $compare );
			  $item.find( "a.ui-icon-trash" ).remove();
			  $item.append( recycle_icon ).appendTo($list).fadeIn();
			  changeCompareButton();
		  });
		}
    }
	
	
 
    // image recycle function
    
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-trash" )
            .remove()
          .end()
          .prependTo( $itemList )
          .fadeIn();
		  changeCompareButton();
      });
    }
	
	function changeCompareButton(){
		if($("#compare > .gallery > div").length == 0){
			$("#compare .glyphicon-remove").fadeOut();
		}
		if($("#compare > .gallery > div").length == 1){
			$("#compare #remove-1").fadeIn();
			$("#compare #remove-2").fadeOut();
			$("#compare #remove-3").fadeOut();
			$("#compare #remove-4").fadeOut();
		}
		if($("#compare > .gallery > div").length == 2){
			$("#compare #remove-1").fadeIn();
			$("#compare #remove-2").fadeIn();
			$("#compare #remove-3").fadeOut();
			$("#compare #remove-4").fadeOut();

		}
		if($("#compare > .gallery > div").length == 3){
			$("#compare #remove-1").fadeIn();
			$("#compare #remove-2").fadeIn();
			$("#compare #remove-3").fadeIn();
			$("#compare #remove-4").fadeOut();
		}
		if($("#compare > .gallery > div").length == 4){
			$("#compare #remove-1").fadeIn();
			$("#compare #remove-2").fadeIn();
			$("#compare #remove-3").fadeIn();
			$("#compare #remove-4").fadeIn();
		}
		
		if($("#compare > .gallery > div").length >= 2){
			$("#compare button#compare-button").removeClass("btn-default").addClass("btn-info");
		}else{
			$("#compare button#compare-button").removeClass("btn-info").addClass("btn-default");
		}
	
	}

    //picture picker

	$('#product-pic-container #pic-picker > img').click(function () {
	    
	    if (!$(this).hasClass("active")) {
	        if ($(this).hasClass("first-pic")) {
	            $('#product-pic-container #main-pic .first-pic').fadeIn();
	            $('#product-pic-container #main-pic .sec-pic').fadeOut();
	        } else {
	            $('#product-pic-container #main-pic .first-pic').fadeOut();
	            $('#product-pic-container #main-pic .sec-pic').fadeIn();
	        }
	        $(this).siblings().removeClass("active");
	        $(this).addClass("active");
	    }

	});

	

    //load more comments function
	$('#load-more-review button').click(function () {
	    var moreReviews = $('#initial-reviews').clone();
	    moreReviews.removeAttr("id").addClass("review-block-" + $(this).attr("data-stars"));
	    moreReviews.insertBefore($('#load-more-review')).css({ "display": "none" }).slideDown("slow");
	    applyStars(moreReviews);
	});

	function applyStars(blockOfReviews) {
	    var oneStarReviewTitle = $('<span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span> <span class="glyphicon glyphicon-star-empty"></span> <span class="glyphicon glyphicon-star-empty"></span> <span class="glyphicon glyphicon-star-empty"></span> <span>Bad Review Title!!!</span>')
	    var twoStarReviewTitle = $('<span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span> <span class="glyphicon glyphicon-star-empty"></span> <span class="glyphicon glyphicon-star-empty"></span> <span>Bad Review Title!!!</span>')
	    var threeStarReviewTitle = $('<span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span> <span class="glyphicon glyphicon-star-empty"></span> <span>Average Review Title...</span>')
	    var fourStarReviewTitle = $('<span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span> <span>Good Review Title!!!</span>')
	    var fiveStarReviewTitle = $('<span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span>Good Review Title!!!</span>')
	    if (blockOfReviews.hasClass("review-block-5")) {
	        blockOfReviews.find(".review.average").removeClass('average').addClass('good');
	        blockOfReviews.find(".review.bad").removeClass('bad').addClass('good');
	        blockOfReviews.find(".review h5").html(fiveStarReviewTitle);
	    }
	    if (blockOfReviews.hasClass("review-block-4")) {
	        blockOfReviews.find(".review.average").removeClass('average').addClass('good');
	        blockOfReviews.find(".review.bad").removeClass('bad').addClass('good');
	        blockOfReviews.find(".review h5").html(fourStarReviewTitle);
	    }
	    if (blockOfReviews.hasClass("review-block-3")) {
	        blockOfReviews.find(".review.good").removeClass('good').addClass('average');
	        blockOfReviews.find(".review.bad").removeClass('bad').addClass('average');
	        blockOfReviews.find(".review h5").html(threeStarReviewTitle);
	    }
	    if (blockOfReviews.hasClass("review-block-2")) {
	        blockOfReviews.find(".review.good").removeClass('good').addClass('bad');
	        blockOfReviews.find(".review.average").removeClass('average').addClass('bad');
	        blockOfReviews.find(".review h5").html(twoStarReviewTitle);
	    }
	    if (blockOfReviews.hasClass("review-block-1")) {
	        blockOfReviews.find(".review.good").removeClass('good').addClass('bad');
	        blockOfReviews.find(".review.average").removeClass('average').addClass('bad');
	        blockOfReviews.find(".review h5").html(oneStarReviewTitle);
	    }
	}
	
	//copy payment form
	
	$('#same-with-billing').click(function(){
		if($(this).prop('checked')){
			copy();
		}else{
		clear();
		}
	});
	
	function copy(){
		console.log("checked");
		$('#billing input').each(function(){
			var className = $(this).attr('class');
			var inputValue = $(this).val();
			console.log(className + inputValue);
			$('#shipping input[class="' + className + '"]').val(inputValue);
		});
	}
	
	function clear(){
		$('#shipping input').val("");
	}
	
	//delete cart item
	$('#cart-list .glyphicon-trash').click(function(){
			deleteRow($(this));
	});
	
	
	function deleteRow(deleteIcon){
		deleteIcon.parent().parent().hide('slow',function(){
			$(this).remove();	
			updatePrice();
			if ($('.cart-items tr').length ==0){
				alert("Your cart is empty. Shop first!");
				window.location.href = "index.html";
			}
		});
	}
	
	function updatePrice(){
		var price = 123 * $('.cart-items tr').length;
		$('.total-price').text("$" + price +".00");	
	}

	$('.raty').raty({
		starOff : 'star-off.png',
  		starOn  : 'star-on.png'
	});
	
});