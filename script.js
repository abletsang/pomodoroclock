var breakMinus = document.querySelector(".breakMinus");
var breakPlus = document.querySelector(".breakPlus");
var breakTime = document.querySelector(".breakTime");
var sessionMinus = document.querySelector(".sessionMinus");
var sessionPlus = document.querySelector(".sessionPlus");
var sessionTime = document.querySelectorAll(".sessionTime");
var sessionDisplay = document.querySelector(".sessionDisplay");
var sessionDisplaySeconds = document.querySelector(".sessionDisplaySeconds");
var play = document.querySelector(".fa-play");
var pause = document.querySelector(".fa-pause");
var stop = document.querySelector(".fa-stop");
// var  = document.querySelector(".");

var breakCount = 5;
var session = 25;
var fullSeconds = session*60;
// var counting = false;
var temp;

play.addEventListener("click", function() {
	// counting = true;
	temp = setInterval(countdown, 1000);
});

pause.addEventListener("click", function() {
	// counting = false;
	clearInterval(temp);
});

stop.addEventListener("click", function() {
	// counting = false;
	clearInterval(temp);
	sessionDisplaySeconds.textContent = 00;
	sessionDisplay.textContent = session;
});

function countdown() {
	if (fullSeconds >= 0) {
		fullSeconds--;
		sessionDisplaySeconds.textContent = fullSeconds % 60;
		sessionDisplay.textContent = Math.floor(fullSeconds/60);
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