//create array for all the states
var states = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", 
"connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", 
"iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan",
"minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", 
"new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma",
"oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", 
"texas", "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming"];

//choose random word
var randomWord = states[Math.floor(Math.random() * states.length)];
console.log(randomWord);

var wins = 0;
var guessRemain = 0;
var gameWon = true;


//array to fill spaces with '_', create as empty array first
var answerFill = [];
//check length of random word chosen to then fill with '_'
for (var i = 0; i < randomWord.length; i++){
	answerFill[i] = "_";
}

var userSelect = [];

//give the user as many chances as word length + 4
guessRemain = randomWord.length + 4;

//create array same length as randomWord to keep track of letters to be guessed
var remainingLetters = 0;
remainingLetters  = randomWord.length;

document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

userSelect.push(userGuess);
console.log(userGuess);

//loop to keep code running if boolean holds true
//condition checks if all letters in randomWord have been selected
if(remainingLetters > 0 && guessRemain > 0) {
	guessRemain--;
	//for loop to check each index of state
	for (var j = 0; j < randomWord.length; j++){
		if(randomWord[j] === userGuess){
			answerFill[j] = userGuess;
			//decrement length of remainingLetters
			remainingLetters--;
		}	
	}


	var answer = document.getElementById("answer");
	answer.innerHTML = answerFill;
	var letterGuessed = document.getElementById("letterGuessed");
	letterGuessed.innerHTML = userSelect;
	var showGuessRemaining = document.getElementById("guessRemain");
	showGuessRemaining.innerHTML = guessRemain;

	
}

if(remainingLetters === 0 || guessRemain === 0){
	for(var z = 0; z < answerFill.length; z++){
		if(answerFill[z] === '_'){
			gameWon = false;
		}
	}
	if(gameWon === true){
		alert("You Won!");
			wins++;
	}
	else{
		alert("You Lost :(");
	}

var countWins = document.getElementById("wins");
countWins.innerHTML = wins;	
location.reload();

}
}









