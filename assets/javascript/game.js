var wins = 0;
var losses = 0;
var randomWord;
var guesses;
var guessesArray;
var wordBlank = [];
var guessesLeft;
var wordList = ["lakers", "clippers", "warriors", "kings"];

//Function for random word selection and respective number of blanks
function wordGame() {

    randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    for (var i = 0; i < randomWord.length; i++) {
        wordBlank.push("_");
    }
    document.getElementById("blankWordDisplay").textContent = wordBlank.join(" ");

    guessArray = [];
    guessesLeft = 9;
}

document.onkeyup = function(event) {

    guesses = event.key;

    if (guesses === "a" || guesses === "b" || guesses === "c" || guesses === "d" || guesses === "e" || guesses === "f" || guesses === "g" || guesses === "h" || guesses === "i" || guesses === "j" || guesses === "k" || guesses === "l" || guesses === "m" || guesses === "n" || guesses === "o" || guesses === "p" || guesses === "q" || guesses === "r" || guesses === "s" || guesses === "t" || guesses === "u" || guesses === "v" || guesses === "w" || guesses === "x" || guesses === "y" || guesses === "z") {

        if (guessesLeft > 0 && randomWord.indexOf(guesses) > -1) {
            
        }
        else if (guessesLeft > 0 && randomWord.indexOf(guesses) === -1) {
            guessesArray.push(guesses);
            guessesLeft--;
        }
        else {
            losses++;
            wordGame();
        }
    }
    else {
        alert("Enter a letter")
    }


    document.getElementById("guessLeftDisplay").innerHTML = guessesLeft;
    document.getElementById("winDisplay").innerHTML = wins;
    document.getElementById("lossDisplay").innerHTML = losses;
    document.getElementById("guessedDisplay").innerHTML = guessesArray;
}

//Function call to start game
wordGame();