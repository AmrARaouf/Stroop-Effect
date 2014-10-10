var codes = ["fd0004", "ffff01", "76ff02", "0000fe", "ac10cf", "ff4103", "593e1e", "010101"]
var colours = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "black"]
var counter_m = 0;
var counter_mm = 0;
var timer_timeout_m;
var timer_timeout_mm;
var timer_m = 0;
var timer_mm = 0;
var correct_answer_m;
var correct_answer_mm;
var incorrect_answers_m = 0;
var incorrect_answers_mm = 0;
var initialize = true;
var match = true;

$(document).ready(function(){
	$("#count-down").fadeOut(1);
	$(".spinner").last().click(function(){
		startCountDown();
	});
});

function startExperiment() {
	if(match) {
		startTimer('match');
		setColourTable();
	}
	else {
		startTimer('mismatch');
	}
	randomizeColour();
}
function randomizeColour(clicked_id) {
	if(!match) {
		counter_mm++;
		if(counter_mm > 25) {
			stopTimer('mismatch');
			alert("Congratulations you got '" + (25 - incorrect_answers_mm) + "' correct answers and '" + incorrect_answers_mm + "' incorrect answers in '" + (timer_mm/1000) + "' seconds.");
			return;
		}
		if(initialize) {
			initialize = false;
		}
		else {
			if(correct_answer_mm != clicked_id) {
				incorrect_answers_mm++;
				console.log(incorrect_answers_mm);
			}
		}
		var ctext = document.getElementById('colourName');
		var idx1 = getRandomInt(0,codes.length - 1);
		var idx2 = idx1;
		while (idx2 == idx1) {
			idx2 = getRandomInt(0,colours.length - 1);
		}
		ctext.innerHTML = colours[idx2];
		ctext.style.color = "#" + codes[idx1];
		correct_answer_mm = "tr" + idx1;
	}
	else {
		counter_m++;
		if(counter_m > 25) {
			stopTimer('match');
			alert("Congratulations you got '" + (25 - incorrect_answers_m) + "' correct answers and '" + incorrect_answers_m + "' incorrect answers in '" + (timer_m/1000) + "' seconds.");
			resetExperiment();
			return;
		}
		if(initialize) {
			initialize = false;
		}
		else {
			if(correct_answer_m != clicked_id) {
				incorrect_answers_m++;
				console.log(incorrect_answers_m);
			}
		}
		var ctext = document.getElementById('colourName');
		var idx1 = getRandomInt(0,codes.length - 1);
		var idx2 = idx1;
		while (idx2 == idx1) {
			idx2 = getRandomInt(0,colours.length - 1);
		}
		ctext.innerHTML = colours[idx2];
		ctext.style.color = "#" + codes[idx2];
		correct_answer_m = "tr" + idx2;
	}
}

function setColourTable() {
	if(match) {
		for (var i = 8; i >= 1; i--) {
			var button = document.getElementById('tr' + i);
			button.style.background = "#" + codes[i-1];
		}
		$(".tr").click(function(){
			var id = "tr" + (parseInt($(this).attr('id').replace('tr', '')) - 1);
			randomizeColour(id);
		});
	}
	else {
		for (var i = 8; i >= 1; i--) {
			var button = document.getElementById('tr' + i);
			button.style.background = "#" + codes[i-1];
		}
		$(".tr").click(function(){
			var id = "tr" + (parseInt($(this).attr('id').replace('tr', '')) - 1);
			randomizeColour(id);
		});
	}
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTimer(type) {
	if(type == 'match') {
			timer_timeout_m = setInterval(function(){
			timer_m += 100;	
			console.log(timer_m / 1000);
		}, 100);
	}
	else {
		timer_timeout_mm = setInterval(function(){
			timer_mm += 100;	
			console.log(timer_mm / 1000);
		}, 100);
	}
}

function stopTimer(type) {
	if(type == "match") {
		clearInterval(timer_timeout_m);
	}
	else {
		clearInterval(timer_timeout_mm);
	}
}

function startCountDown() {
	count_down = $("#count-down");
	count_down.fadeIn(500);
	setTimeout(function(){
		count_down.fadeOut(500);
	}, 500);
	setTimeout(function(){
		count_down.text('2');
		count_down.fadeIn(500);
	}, 1000);
	setTimeout(function(){
		count_down.fadeOut(500);
	}, 1500);
	setTimeout(function(){
		count_down.text('1');
		count_down.fadeIn(500);
	}, 2000);
	setTimeout(function(){
		count_down.fadeOut(500);
	}, 2500);
	setTimeout(function(){
		startExperiment();
	}, 3000);
}

function resetExperiment() {
	initialize = true;
	match = false;
	$("#count-down").text('3');
	startCountDown();
}