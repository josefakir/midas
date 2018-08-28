jQuery(window).scroll(function(){
	if(jQuery(document).scrollTop() > 0){
		jQuery('header').addClass('small');
	}else{
		jQuery('header').removeClass('small');
	}
});

jQuery(document).ready(function($){
	$('#triggermenu').click(function(e){
		e.preventDefault();
		$('#menu').slideDown('fast');
	});
	$('#cerrarmenu').click(function(e){
		e.preventDefault();
		$('#menu').slideUp('fast');
	});
	$(".owl-carousel").owlCarousel({
		items : 1
	});

	$('#menu li a').click(function(e){
		e.preventDefault();
		target = $(this).attr('href');
		$('body').scrollTo(target,800);
	})
})