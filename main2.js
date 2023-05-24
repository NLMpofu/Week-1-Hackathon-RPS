//TASK 1 LOGIC PLAN
//write a set of if statements that will determine the winner
//store the moves in 2 variables
//hard code the moves in the variables for now 
//and check that each if statement works
//inside each if block console.log the outcome (win, lose, draw)
//do this for all possible moves (player first move, computer second)
    // possible moves
    // rock vs scissors >
    // rock vs paper >
    // paper vs scissors >
    // paper vs rock >
    // scissors vs rock >
    // scissors vs paper >
    // self vs self = draw

//TASK 2 plan
//Take the if statements and put them into a function 
    //function getWinner(player, computer){ if statements adjusted to return a value
    //rather than console log a statement} call the function inside a variable  
    //let result = getWinner("rock", "paper")
//prior variables taken as parameters
//so you can call the function with ANY TWO MOVES (two arguements given)
//rather than console.log the result, return a value 
//player wins = 1, player loses = -1, draw = 0


function computerMoveGenerator () {
    let x = Math.floor(Math.random() * possibleMove.length);
    let randomMove = possibleMove[x];
    return randomMove;
}
//this function was not working because rather
//than RETURNING the value of the function - i.e telling
//the function to stop running and log that as its result
//it is instead just printing the value in the console.
const possibleMove = ["rock", "paper", "scissors"];

function getWinner(playerMove, computerMove) {
if (playerMove === "rock" && computerMove ==="scissors"){return alert(1)};
if (playerMove === "rock" && computerMove ==="paper"){return alert(-1)};
if (playerMove === "paper" && computerMove ==="scissors"){return alert(-1)};
if (playerMove === "paper" && computerMove ==="rock"){return alert(1)};
if (playerMove === "scissors" && computerMove ==="rock"){return alert(-1)};
if (playerMove === "scissors" && computerMove ==="paper"){return alert(1)};
if (playerMove === computerMove){return alert(0)};}


let playerMove = prompt("Do you choose Rock, Paper, Scissors?");
console.log(playerMove); 
let computerMove = computerMoveGenerator();
console.log(computerMove);

getWinner(playerMove, computerMove);

confirm("Would you like to play rock, paper, scissors?\nEither Click OK to continue or Cancel.");


//let result = getWinner("rock", "scissors");
//here, we have placed the function into a variable so that when we print the 
//value of the variable, we call the function? why do this?

//console.log(result)

//console.log(getWinner("paper", "paper"));
//both line 95 and lines 89 and 93 accomplish the same thing..without saving
//the function into a variable


//TASK 3
//Use `prompt` and get a value from the user for player move
    //code a prompt
    //save value of user input to the playermove variable
//call the function with that value and the HARD CODED computer move
//display the result in an `alert`

//TASK 4
// write a function that generates a random computer move (rock, paper or scissors)
// the computer move must be randomly chosen each time rather than hard coded

    //make an array
    //store the possible moves in it 
    //use math.random() to select an index position from the array (0,1,2)
    //hold that value in the variable computerMove

// the player must provide the move in the prompt, the computer move is chosen at random
// and the result shown in the alert.

//is the order the code is being read in the issue? if so, i've moved it up top

//TASK 5
//Game must run as many times as you'd like, without the user needing to refresh
//the page 
//use a WHILE LOOP and CONFIRM
    //while loop
        // while (condition){code that executed if the condition is true}
    //confirm method displays a dialog box with a message, an OK button, and a Cancel button.
    //The confirm() method returns true if the user clicked "OK", otherwise false.

    //link the two: while confirm = true run the game code 
    //which part of the game should be in the loop?
//done when the player can play indefinitely and have the option to stop playing
//after each round.