//global variables
var wins = 0;
var losses = 0;
var randomWord;
var guesses;
var guessesArray;
var wordBlank;
var guessesLeft;
var wordList = ["lakers", "clippers", "warriors", "kings", "raptors", "rockets", "bucks", "celtics", "pacers", "nuggets", "jazz", "heat", "hornets", "suns", "pistons", "magic", "cavaliers", "hawks", "nets", "knicks", "mavericks", "grizzlies", "timberwolves", "pelicans", "thunder", "spurs" , "wizards"];
//var wordList = ["trail blazers"]


//execute game function
wordGame();

//game starting/restarting point
function wordGame() {

    guessesArray = [];
    guessesLeft = 9;
    wordBlank = [];

    randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    for (var i = 0; i < randomWord.length; i++) {
        wordBlank.push("_");
    }

}

//main game loop
document.onkeyup = function (event) {

    guesses = event.key;

    if (guesses === "a" || guesses === "b" || guesses === "c" || guesses === "d" || guesses === "e" || guesses === "f" || guesses === "g" || guesses === "h" || guesses === "i" || guesses === "j" || guesses === "k" || guesses === "l" || guesses === "m" || guesses === "n" || guesses === "o" || guesses === "p" || guesses === "q" || guesses === "r" || guesses === "s" || guesses === "t" || guesses === "u" || guesses === "v" || guesses === "w" || guesses === "x" || guesses === "y" || guesses === "z") {
        
        if (guessesArray.indexOf(guesses) === -1) {

        if (guessesLeft > 0 && randomWord.indexOf(guesses) > -1) {
    
            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] == guesses) {
                    wordBlank[i] = guesses;
                    if (wordBlank.join("") === randomWord) {
                        wins++;
                        
                        alert("Correct! The answer was " + randomWord)
                        wordGame();
                    }
                }
            }

        }
        else if (guessesLeft > 0 && randomWord.indexOf(guesses) === -1) {
            guessesArray.push(guesses);
            guessesLeft--;
        }
        else {
            losses++;
            alert("The answer was " + randomWord)
            wordGame();
        }
    } 
    else {
        alert("Already guessed this letter")
    }
}
    else {
        alert("Enter a lowercase letter")
    }

    //writing to HTML
    document.getElementById("guessLeftDisplay").innerHTML = guessesLeft;
    document.getElementById("winDisplay").innerHTML = wins;
    document.getElementById("lossDisplay").innerHTML = losses;
    document.getElementById("guessedDisplay").innerHTML = guessesArray;
    document.getElementById("blankWordDisplay").innerHTML = wordBlank.join(" ");
}

