var codes = ["fd0004", "ffff01", "76ff02", "0000fe", "ac10cf", "ff4103", "593e1e", "010101"]
var colours = ["red", "yellow", "green", "blue", "purple", "orange", "brown", "black"]
var counter = 0;
var timer_timeout1;
var timer1 = 0;
var correct_answer1;
var incorrect_answers = 0;
var initialize = true;

$(document).ready(function(){
	$(".spinner").last().click(function(){
		startExperiment();
	});
});

function startExperiment() {
	alert("As soon as you press 'Ok' Your timer will start");
	startTimer();
	randomizeColour();
	setColourTable();
}
function randomizeColour(clicked_id) {
	counter++;
	if(counter > 25) {
		stopTimer();
		alert("Congratulations you got '" + (25 - incorrect_answers) + "' correct answers and '" + incorrect_answers + "' incorrect answers in '" + (timer1/1000) + "' seconds.");
		return;
	}
	if(initialize) {
		initialize = false;
	}
	else {
		if(correct_answer1 != clicked_id) {
			incorrect_answers++;
			console.log(incorrect_answers);
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
	correct_answer1 = "tr" + idx1;
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
	timer_timeout1 = setInterval(function(){
		timer1 += 100;	
		console.log(timer1 / 1000);
	}, 100);
}

function stopTimer() {
	clearInterval(timer_timeout1);
}