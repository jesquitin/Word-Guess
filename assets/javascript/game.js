//List or words
var wordList = ["script", "buda", "texas", "austin","laptop", "buda", "fish", "pictures", "sign", "salmon"];
//generated word to guess
var word = wordList[Math.floor(Math.random()*wordList.length )];
//Store the answer
//var answer = wordList[word];
//total number of index values in the word which gives the number of letteres
var display = [];
//Number of undercore spaces '_'  to display to show the number of letters in the word
var letterArray = word.split("");
//Letters already guessed displayed on screen Letter already guessed
var lettersGuessed= []; 
//Incorrect letters guessed displayed on screen for current word
var correctLetters = [];
var guessRemain = 10; 
//var wordGuessed = //numberOfLetters.length = 0; ( true or false)
//number of wins
var wins = 0;
var loses =0;
var output = " ";
document.querySelector(".wins").innerHTML = wins;
document.querySelector(".loses").innerHTML = loses;
document.querySelector(".guessRemain").innerHTML = guessRemain;
document.querySelector(".lettersGuessed").innerHTML = lettersGuessed;

//text.content to write output to html
for (var i=0; i < letterArray.length; i++) {
    display.push("_");

}
console.log(display)
document.querySelector("#answer").innerHTML = display;
   console.log(letterArray);
//Press any key to start the game and display the number of spaces in the word
document.onkeyup = function (){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
         console.log(userGuess);
   
         for (var i=0; i < letterArray.length; i++) {
             if (userGuess == letterArray[i]) {
                 console.log("This is correct");
                 guessRemain--;
             }   
             else if (userGuess !== letterArray) {
                    console.log("Incorrect answer");
             }
         }

        

         }
    
        
          
           

    
   

    

     

    

    


