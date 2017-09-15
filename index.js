// NIM - The Game

// DEFINE THE STATE
//  - Number of Dots
//  - Who's turn it is
//  - How many players
//	- How many dots to pick up
var numberOfDots = 16;
var isPlayerOnesTurn = false;

// ACTIONS (these are functions that mess with the state)
//  - Print a bunch of dots
//  - remove dots
//  - change who's turn it is
//  - print the board
//  - check for a winner
function printBoard() {
	// Should print numberOfDots *'s to the  screen
	var star = "*";
	var numDotsToPrint = Math.max(numberOfDots, 0);
	console.log(star.repeat(numDotsToPrint));
}

function gameIsInProgress() {
	// If the number of dots is more than 0, then the game is still in progress
	if (numberOfDots > 0) {
		return true;
	} else {
		return false;
	}
}

function promptUserForDots() {
	// we get input from a user by doing var input = prompt()
	// we can turn strings into integers by using the parseInt() function
	// we'll need to make sure that the user enters a number
	//     that number needs to be 1, 2, or 3
	// Keep asking for input until they finally enter a number
	var userInput = parseInt(prompt("Enter a number between 1 and 3"));

	while ( userInput != 1 && userInput != 2 && userInput != 3) { // we should only enter the loop if they didn't enter a valid number
		userInput = parseInt(prompt("Enter a number between 1 and 3"));
	}

	return userInput;
}

function removeDots(dotsToRemove) {
	// Need to remove dotsToRemove from the number of dots
	numberOfDots -= dotsToRemove;
}

function switchPlayers() {
	isPlayerOnesTurn = !isPlayerOnesTurn;
}


// KICKING EVERYTHING OFF
//  X Show the board right away
//  X Prompt the user for how many dots they want to remove
//  X Actually remove the dots
//  X Print the new result
//  X Switch players
//  X Check to see if they won
//  - Keep looping ^^^ until someone wins


printBoard();

while ( gameIsInProgress() ) { 
// checkForWinner needs to return true if the game is still in progress, false
//  if someone has won
	switchPlayers();
	var dotsToRemove = promptUserForDots();
	removeDots(dotsToRemove);
	printBoard();
	
}


// We need to alert either "player 1 wins" or "player 2 wins"
if (isPlayerOnesTurn) {
	alert('Game Over! Player 1 wins');
} else {
	alert('Game Over! Player 2 wins');
}






