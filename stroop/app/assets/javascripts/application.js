// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree 
$(document).ready(function() {
	$('.spinner').click(function() {

	    $(this).parent().parent().parent().parent().parent().animate({
	        left: '-100%'
	    }, 500, function() {
	        $(this).parent().parent().parent().parent().parent().css('left', '150%');
	    });

	    $(this).parent().parent().parent().parent().parent().next().animate({
	        left: '0%'
	    }, 500);
	});

	$(".start_timer").click(function() {
		setTimeout(function() {
			$("#countdown").html("2");
		},1000);
		setTimeout(function() {
			$("#countdown").html("1");
		},2000);
		
	});
});



