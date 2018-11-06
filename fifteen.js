function() {
    var puzzleSize = 15;
    var puzzleRows_Columns = 4;
    var sizeForPiece = 100;
    var solvable = true;
    var empty_T_Value;
    var empty_U_Value;

    window.onload = startup;
}

function startup() {
//Runs a sequence of different functions in the order the game is expected to be played.
    createPieces();
    backgroundSelector();
    returnBackground();
    shuffleButton();
    winCounter();
}

function createPieces() {
//Makes the 15 pieces for the game
    var t = 0;
    var u = 0;
    var count = 0;
    var puzzle = document.getElementById("puzzlearea");
    
    for (var s = 0; s < puzzle_size; s++) {
        var value = s + 1;
        if (count == puzzleRows_Columns) {
            //Ensures that only 4 pieces are used for each row then goes to the next row whenever that row is full.
            x = 0;
            y += puzzle_size;
            count = 0;
        }
        var piece = document.getElement("div");
        piece.className = "puzzlepiece";
        piece.innerHTML = value;
        
        piece.value = false; //Checking if the value can be moved
        piece.style.left = t + "px";
        piece.style.top = u + "px";
        piece.style.backgroundPosition = -t +"px" + -u + "px";

        piece.onmouseover = movablePiece;
        //Can the selected piece be moved to the empty space.

        piece.onmouseup = makeMovable;
        //Reverts piece to original border and coloration

        piece.onmouseout = naturalBorder;
        puzzle.appendChild(piece);
        count ++
        t += puzzle_size;

        empty_T_Value = t;
        empty_U_Value = u;
    }
    
}

function movePiece() {

}

function backgroundSelector() {

}

function shuffleButton() {
    var button = getElementById("shufflebutton");
    button.addEventListener("click", shuffleGame);
}


































function () {
    
    image.addEventListener("load", onImage);
    image.src = "cj-face.jpeg"
}

function onImage() {
    puzzleWidth = Math.floor(_image.width / PUZZLE_DIFFICULTY)
    puzzleHeight = Math.floor(_image.height / PUZZLE_DIFFICULTY)
    puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
    puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
}