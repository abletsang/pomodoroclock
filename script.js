"use strict";

var breakMinus = document.querySelector(".breakMinus");
var breakPlus = document.querySelector(".breakPlus");
var breakTime = document.querySelector(".breakTime");
var sessionMinus = document.querySelector(".sessionMinus");
var sessionPlus = document.querySelector(".sessionPlus");
var sessionTime = document.querySelector(".sessionTime");
var sessionDisplay = document.querySelector(".sessionDisplay");
var sessionDisplaySeconds = document.querySelector(".sessionDisplaySeconds");
var play = document.querySelector(".fa-play");
var pause = document.querySelector(".fa-pause");
var stop = document.querySelector(".fa-stop");

var breakCount = 5;
var breakSeconds = breakCount * 60;
var session = 25;
var fullSeconds = session*60;
var temp;
var on = false;

play.addEventListener("click", function() {
	if (on === false) {
		on = true;
		temp = setInterval(countdown, 1000);
	}	
});

pause.addEventListener("click", function() {
	clearInterval(temp);
	on = false;
});

stop.addEventListener("click", function() {
	clearInterval(temp);
	sessionDisplaySeconds.textContent = "00";
	sessionDisplay.textContent = session;
	on = false;
});

function countdown() {
	if (fullSeconds > 0) {
		fullSeconds--;
		if (fullSeconds % 60 < 10) {
			sessionDisplaySeconds.textContent = "0" + fullSeconds % 60
		} else {
			sessionDisplaySeconds.textContent = (fullSeconds % 60);
		}
		sessionDisplay.textContent = Math.floor(fullSeconds/60);
	}
	else {
		clearInterval(temp);
		sessionDisplay.textContent = breakCount;
		temp = setInterval(breakCountdown, 1000);
	}
}

function breakCountdown() {
	if (breakSeconds > 0) {
		breakSeconds--;
		if (breakSeconds % 60 < 10) {
			sessionDisplaySeconds.textContent = "0" + breakSeconds % 60;
		} else {
			sessionDisplaySeconds.textContent = breakSeconds % 60;
		}
		sessionDisplay.textContent = Math.floor(breakSeconds/60);
	}
	else {
		clearInterval(temp);
		on = false;
	}
}

breakMinus.addEventListener("click", function() {
	if (breakCount > 1) {
		breakCount--;
		breakSeconds = breakCount * 60;
		breakTime.textContent = breakCount;
	}
});

breakPlus.addEventListener("click", function() {
		breakCount++;
		breakSeconds = breakCount * 60;
		breakTime.textContent = breakCount;
});

sessionMinus.addEventListener("click", function() {
	if (session > 1) {
		session--;
		sessionTime.textContent = session;
		sessionDisplay.textContent = session;
		fullSeconds = session*60;
	}
});

sessionPlus.addEventListener("click", function() {
		session++;
		sessionTime.textContent = session;
		sessionDisplay.textContent = session;
		fullSeconds = session*60;
});