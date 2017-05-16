var breakMinus = document.querySelector(".breakMinus");
var breakPlus = document.querySelector(".breakPlus");
var breakTime = document.querySelector(".breakTime");
// var  = document.querySelector(".");
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