var breakMinus = document.querySelector(".breakMinus");
var breakPlus = document.querySelector(".breakPlus");
var breakTime = document.querySelector(".breakTime");
var sessionMinus = document.querySelector(".sessionMinus");
var sessionPlus = document.querySelector(".sessionPlus");
var sessionTime = document.querySelectorAll(".sessionTime");
var sessionDisplay = document.querySelector(".sessionDisplay");
var sessionDisplaySeconds = document.querySelector(".sessionDisplaySeconds");
var clock = document.querySelector(".clock");
// var  = document.querySelector(".");

var breakCount = 5;
var session = 25;
var fullSeconds = session*60;
var counting = false;

clock.addEventListener("click", function() {
	counting = !counting;
	if (counting) {
		var temp = setInterval(countdown, 1000);
	}
});

function countdown() {
	if (fullSeconds >= 0) {
		fullSeconds--;
		var seconds = fullSeconds % 60;
		var minutes = Math.floor(fullSeconds/60);
		sessionDisplaySeconds.textContent = seconds;
		sessionDisplay.textContent = minutes;
		console.log(fullSeconds);
	}
}

breakMinus.addEventListener("click", function() {
	if (breakCount > 0) {
		breakCount--;
		breakTime.textContent = breakCount;
	}
});

breakPlus.addEventListener("click", function() {
		breakCount++;
		breakTime.textContent = breakCount;
});

sessionMinus.addEventListener("click", function() {
	if (session > 0) {
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