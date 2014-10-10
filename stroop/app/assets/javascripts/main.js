var codes = ["fd0004", "ffff01", "76ff02", "0000fe", "ac10cf", "ff4103", "593e1e", "010101"]
var colours = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "black"]
var counter = 0;
var timer_timeout_m;
var timer_m = 0;
var correct_answer;
var incorrect_answers1 = 0;
var initialize = true;

$(document).ready(function(){
	$("#count-down").fadeOut(1);
	$(".spinner").last().click(function(){
		startCountDown();
	});
});

function startExperiment() {
	startTimer();
	randomizeColour();
	setColourTable();
}
function randomizeColour(clicked_id) {
	counter++;
	if(counter > 25) {
		stopTimer();
		alert("Congratulations you got '" + (25 - incorrect_answers1) + "' correct answers and '" + incorrect_answers1 + "' incorrect answers in '" + (timer_m/1000) + "' seconds.");
		return;
	}
	if(initialize) {
		initialize = false;
	}
	else {
		if(correct_answer != clicked_id) {
			incorrect_answers1++;
			console.log(incorrect_answers1);
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
	correct_answer = "tr" + idx1;
}

function setColourTable() {
	for (var i = 8; i >= 1; i--) {
		var button = document.getElementById('tr' + i);
		button.style.background = "#" + codes[i-1];
	}
	$(".tr").click(function(){
		var id = "tr" + (parseInt($(this).attr('id').replace('tr', '')) - 1);
		randomizeColour(id);
	});
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTimer() {
	timer_timeout_m = setInterval(function(){
		timer_m += 100;	
		console.log(timer_m / 1000);
	}, 100);
}

function stopTimer() {
	clearInterval(timer_timeout_m);
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