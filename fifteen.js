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
    winnings();
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

function movePiece(thisPiece) {
    if (thisPiece.value === true) {
        var tempT = parseInt(thisPiece.style.left);
        var tempU = parseInt(thisPiece.style.top); 

        thisPiece.style.left = emptyT + "px";
        thisPiece.style.top = emptyU + "px";

        emptyT = tempT;
        emptyU = tempU;

        if (solvable === true) {
        //Checks if the puzzle was solved before being shuffled.
            checkIfSolved();
        }
    }
}

function movablePiece() {.
//Checks moveability of the piece
    if (tryT(this) || tryU(this)) {
        hoveredPiece(this);
    }
}

function makeMovable() {
//Assigns mouse-up listener to each piece.
    movePiece(this)
}

function naturalBorder() {
    this.style.border = "5px solid black";
    this.style.color = "black";
    this.style.cursor = "default";
    this.value = false;
}

function backgroundSelector() {
//Adds functionality to drop down list of background choices.
    var selection = document.getElementById("backgrounds");
    selection.onchange = puzzleBackground;
}

function puzzleBackground() {
//Adding a background to each piece of the puzzle.
    var backG = document.getElementById("backgrounds").value;
    var piecesDem = document.querySelectorAll(".puzzlepiece");

    for (var m = 0; m < piecesDem.length; m++) {
        piecesDem[m].style.backgroundImage = "url(" + backG + ")";        
    }
    locally["backgrounds"] = backG;
}

function highlightedPiece(thisPiece) {
//Changes the features of a movable piece.
    highlight = document.getElement("moveablepiece") 
    thisPiece.value = true;
}

function shuffleButton() {
//Adds functionality to the shuffle button
    var button = document.getElementById("shufflebutton");
    button.onclick, shuffleGame;
}

function shuffleGame() {
//Shuffle the board pieces
    document.getElementById("winnerDetermined").innerHTML = ""; //clears the "you win" text from screen. 

    solvable = false;
    var piecesDem = document.getElementsByClassName("puzzlepiece");

    for (m = 0; m < 1000; m++) {
    //Searches for movable pieces and randomly chooses one movable piece to put into the empty space.
        var spacesBeside = [];
        for (var n = 0; n < piecesDem.length; n++) {
            if (tryT(piecesDem[n]) || tryU(piecesDem[n])) {
                spacesBeside.push(pieces[n]);
            }
        }
        var sumn = Math.floor(Math.random() * spacesBeside.length);

        spacesBeside[sumn].value = true;
        movePiece(spacesBeside[sumn]);
        spacesBeside[sumn].value = false;
    }

    solvable = true;
}   

function checkSolved(){
//Checks the completeness of the puzzles.
    var solveT = 0;
    var solveU = 0;
    var count = 0;
    var finish = 0;
    var piecesDem = document.getElementsByClassName("puzzlepiece");

    for (var m = 0; m < piecesDem.length; m++) {
    //skips through the spaces to compare the coordinates to the current positions of the puzzle pieces.
        if (count == puzzleRows_Columns) {
        //If coordinates match then completed counter is increased by one, or if not then it is reset to zero.
            solveT = 0;
            solveU += sizeForPiece;
            count = 0;
        }    
        if (parseInt(piecesDem[m].style.left) == solveT && parseInt(piecesDem[m].style.top) == solveU) {
            finish++;
        }
        else {
            finish = 0;
        }
        count++;
        solveT += sizeForPiece;
    }

    if (finish == sizeForPiece) {
    //if the puzzle is complete then the "you won" message is displayed and the number of wins incremented by one.
        document.getElementById("winnings").innerHTML = "Raaaaaae!! You WON!!";
        var wins = locally["winsSoFar"] = wins;
        winnings;
    } 
    else {
    //Win message is cleared from the screen
    document.getElementById("winsSoFar").innerHTML = "";
    }   
}

function tryT(thisPiece) {
    if (parseInt(thisPiece.style.left) == emptyT) {
        if (parseInt(thisPiece.style.top) == (emptyU - sizeForPiece) || parseInt(thisPiece.style.top) == (emptyU + sizeForPiece)) {
            return true;
        }
    }
}

function tryU(thisPiece) {
    if (parseInt(thisPiece.style.top) == emptyU) {
        if (parseInt(thisPiece.style.left) == (emptyT - sizeForPiece) || parseInt(thisPiece.style.left) == (emptyT + sizeForPiece)) {
            return true;
        }
    }
}

function returnBackground() {
//function to determine the user's selected background.
    if(locally["backgrounds"]) {
        var backG = document.getElementById("backgrounds");
        backG.value = locally["backgrounds"];

        var piecesDem = document.querySelectorAll(".puzzlepiece");
        for (var m = 0; m < piecesDem.length; m++) {
            piecesDem[m].style.backgroundImage = "url(" + backG.value + ")";
        }
    }
} 

function winnings() {
//Determines the numnber of wins so far and returns that amount
    var wins = document.getElementById("winsSoFar");
    if (!locally["winsSoFar"]) {
        locally["winsSoFar"] = 0;
    }
    wins.innerHTML = "Total wins: " + locally["winsSoFar"];
}();
