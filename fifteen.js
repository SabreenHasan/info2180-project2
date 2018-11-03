function() {
	var puzzle_size = 15;
	var puzzle_rows = 4;
	var puzzle_columns = 4;

	window.onload = shuffleGame;
}

function startup() {
	createPieces();
	backgroundSelector();
	shuffleButton();
}

function createPieces() {
	var t = 0;
	var u = 0;
	var count = 0;
	var puzzle = document.getElementById("puzzlearea");
	var piece = document.getElement("div");
	piece.className = "puzzlepiece";

	for (var s = 0; s < puzzle_size; s++) {
		value = s + 1;
		piece.style.left = t + "px";
		piece.style.top = u + "px";
		piece.style.backgroundPosition = -t +"px" + -u + "px";
	}
	
}

function backgroundSelector() {

}

function shuffleButton() {
	var button = getElementById("shufflebutton");
	button.onclick = shuffleGame;
}

window.onload = shuffleGame;
function shuffleGame() {
	alert("got this far");
}