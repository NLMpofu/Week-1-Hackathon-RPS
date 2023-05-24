console.log("Hackathon");

// TASK 1:
//hard-code the move for a player in a variable ✅
// hard-code the move for the computer in a variable ✅
// console log to see if the variable gives us the move ✅
// need if statements that decide on the winner✅
// one if statement for each move combination
// rock > scissors
// scissors > paper
// paper > rock

// within each if statement you'll print the result ✅
//console.log the result in each statement
// have statements above and below to seperate answers

// we need to change the variable for the player and computer and see the results
//7 different versions ✅
//first term in condition is PLAYER, second term is COMPUTER
// rock vs rock ✅
// rock vs paper✅
// rock vs scissors ✅
// paper vs paper ✅
// paper vs rock ✅
// paper vs scissors ✅
// scissors vs scissors ✅
// scissors vs rock✅
// scissors vs paper✅
// hard code each result seperately ✅

//let playerMove = "scissors";
//let computerMove = "scissors";

//if (playerMove === "rock" && computerMove === "scissors")
//{console.log("player wins");}

//if (playerMove === "rock" && computerMove === "paper")
//{console.log("computer wins")}

//if (playerMove === "paper" && computerMove === "rock")
//{console.log("player wins")}

//if (playerMove === "paper" && computerMove === "scissors")
//{console.log("computer wins")}

//if (playerMove === "scissors" && computerMove === "rock")
//{console.log("computer wins")}

//if (playerMove === "scissors" && computerMove === "paper")
//{console.log("player wins")}

//if (playerMove === computerMove)
//{console.log("Draw");}

//TASK 2
// Taking if statementS and putting them ALL into ONE FUNCTION
//Recall structure of a FUNCTION
// function INFORMATIVENAME (parameters)
// {code block, return statement}
// then call the function
// you have to call the function with ANY TWO moves.
// THE RETURN STATEMENT is the SCORE.
// the words "scissors" "rock" "paper" are VARIABLES
//the parameters for the FUNCTION are the VARIABLES (3 variables)

function getWinner(playerMove, computerMove) {
  // if statements go here
  if (playerMove === "rock" && computerMove === "scissors") {
    return 1;
  }
  if (playerMove === "rock" && computerMove === "paper") {
    return -1;
  }
  if (playerMove === "paper" && computerMove === "rock") {
    return 1;
  }
  if (playerMove === "paper" && computerMove === "scissors") { 
    return -1;
  }
  if (playerMove === "scissors" && computerMove === "rock") { 
    return -1;
  }
  if (playerMove === "scissors" && computerMove === "paper") {
    return 1;
  }
  if (playerMove === computerMove) {
    return 0;
}}

let result = getWinner("scissors", "rock");

console.log(result);

//FUNCTIONS EXPLAINED:
//A funcion is a machine - it needs an input, an instruction and be 
//told what to output
    //the input is the parameters in smooth brackets (...)
    //we make a function by writing the word..- "function"
    //we name the function so we can call it later - "getWinner" 
//parameters - in the smooth brackets you tell the machine how many
//inputs to expect - "playerMove, computerMove" - expect 2 inputs
    //we name a TELESCOPE "result" so we can point it at the function - " let result"
    //we have pointed the RESULT telescope AT the FUNCTION - "let result = getWinner"
    //we call the function, using our telescope and give it its input - "let result = getWinner("..","..)
//in the code block, you tell the machine what to do with those parameters (inputs) - {}
    //we told it to take the value of playerMove and computerMove and compare them
    //when it finds a statement that is true when compared, it is told to give (return) us a number
    //that number is the output of the function
//in order to see if the function even works... we print the value of result