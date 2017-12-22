(function ($) {
  //alert("Yes its loding");
  
	$('#printcard').on("click", function(e){
		var cardurl = $('#printcard').data('cardurl');
		printJS({printable:cardurl, type:'pdf', showModal:true})
	});
	
	$(window).on("load",function(){
		$("#content-1").mCustomScrollbar({
			theme:"minimal"
		});
	});
  
  	$(".sticky__section").removeClass("max__height");
	$(".Seemore__icon").removeClass("minimize__icon");
    $(".Seemore__icon").click(function(){
        $(".Seemore__icon").toggleClass("minimize__icon");
        $(".sticky__section").toggleClass("max__height");
    });
	
	var checkScroll = function() {
		if ($('.safetyinformation__sec')[0]) {
			var el = $('.safetyinformation__sec');
			var top_of_object = el.offset().top;
			var bottom_of_object = el.offset().top + el.outerHeight();
			var top_of_window = $(window).scrollTop();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if (top_of_window <= bottom_of_object && bottom_of_window >= top_of_object) {
			   $('.sticky__section').hide();
			} else {
			 $('.sticky__section').show();
			}
		}
	}

  $(window).on('scroll', function() {checkScroll()});
  

	$('#download-form').on('submit', function (e) {
		if(!$('input[type=checkbox]:checked').length) {
			$("label").addClass("error_msg_down");
			return false;
		}
	   return true; 
	}); 	
	
	$('#signup-form').on('submit', function (e) {
		if (! $('#edit-agree')[0].checked){
			$("#frmagree label").addClass("error_msg_down");
			$("#enrollment h3").addClass("error_msg");
			return false;
		}
	   return true; 
	}); 
	
	
	
  
	$(".accordion_head").click(function(){
		if ($('.accordion_body').is(':visible')) {
			$(".accordion_body").slideUp(300);
			$(".expand__icon").text('EXPAND +');
		}
        if( $(this).next(".accordion_body").is(':visible')){
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".expand__icon").text('EXPAND +');
        }else {
            $(this).next(".accordion_body").slideDown(300); 
            $(this).children(".expand__icon").text('HIDE -');
        }
	});
	
	    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
	
	
})(jQuery);