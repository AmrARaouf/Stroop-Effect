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
		setTimeout(function() {
			$("#middle").html(
				'<div id = "text">' +
      			'<h1 class = "main" id="colourName">Testing</h1>' +
      			'</div>'+
      			'<div class = "tablecloth">'+
        		'<div class = "table">'+
        		'<div id = "tr1" class = "tr"></div>'+
	            '<div id = "tr2" class = "tr"></div>'+
	            '<div id = "tr3" class = "tr"></div>'+
	            '<div id = "tr4" class = "tr"></div>'+
	            '<div id = "tr5" class = "tr"></div>'+
	            '<div id = "tr6" class = "tr"></div>'+
	            '<div id = "tr7" class = "tr"></div>'+
	            '<div id = "tr8" class = "tr"></div>'+
        		'</div>'+
        		'</div>');
			randomizeColour();
			setColourTable();
		},3000);
	});
});

var codes = ["fd0004", "ffff01", "76ff02", "0000fe", "ac10cf", "ff4103", "593e1e", "010101"]
var colours = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "black"]

function randomizeColour() {
	var ctext = document.getElementById('colourName');
	var idx1 = getRandomInt(0,codes.length - 1);
	var idx2 = idx1;
	while (idx2 == idx1) {
		idx2 = getRandomInt(0,colours.length - 1);
	}
	ctext.innerHTML = colours[idx2];
	ctext.style.color = "#" + codes[idx1];
}

function setColourTable() {
	for (var i = 8; i >= 1; i--) {
		var button = document.getElementById('tr' + i);
		button.style.background = "#" + codes[i-1];
		button.addEventListener("click", function() {
			randomizeColour(); 
		});
	}
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}