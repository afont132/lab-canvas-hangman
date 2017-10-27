var hangman;
var wordArray = ['cactus', 'sand', 'sun', 'heat'];
var randomNumber = Math.floor(Math.random() * 6);
var lettersArray = [];

function Hangman(fillWord, fillsecretWord, fillLetters, fillGuessed, fillError) {
  this.words = wordArray;
  this.secretWord = wordArray[randomNumber];
  this.letters = lettersArray;
  this.guessedLetters = "";
  this.errorLetters = 10;
}

Hangman.prototype._getWord = function () {
  return wordArray[randomNumber];
};


Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {

};

Hangman.prototype._addCorrectLetter = function(i){

};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
