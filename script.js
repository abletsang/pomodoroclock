var breakMinus = document.querySelector(".breakMinus");
var breakPlus = document.querySelector(".breakPlus");
var breakTime = document.querySelector(".breakTime");
var sessionMinus = document.querySelector(".sessionMinus");
var sessionPlus = document.querySelector(".sessionPlus");
var sessionTime = document.querySelectorAll(".sessionTime");
var sessionDisplay = document.querySelector(".sessionDisplay");
// var  = document.querySelector(".");

var breakCount = 5;
var session = 25;

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
	}
});

sessionPlus.addEventListener("click", function() {
		session++;
		sessionTime.textContent = session;
		sessionDisplay.textContent = session;
});