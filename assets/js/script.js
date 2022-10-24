document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    })
  }
  document.getElementById("answer-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  })
  runGame("addition");
})

/**
 * The main game "loop" called, when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {

  document.getElementById("answer-box").value = "";
  document.getElementById("answer-box").focus();
 
  // Generate two random numbers between 1 and 25.
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestion (num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion (num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion (num1, num2);
  } else {
    displayDivisionQuestion (num1, num2);
  } 
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array.
 */
function checkAnswer() {
    
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  if (userAnswer === NaN) {
    alert(`Please eneter an answer`);
  } 

  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = userAnswer === calculatedAnswer[0];
  if (isCorrect) {
    alert("You got it right!"); 
    incrementScore();
  } else {
    alert(`You answered ${userAnswer}.  The correct answer is ${calculatedAnswer}.`);
    incrementWrongAnswer();
  }
  runGame(calculatedAnswer[1]);
}

/**
 * gets operands and operator directly from the dom,
 * and returns the correct answer.
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;
  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if (operator === "x") {
    return [operand1 * operand2, "multiply"];
  } else if (operator === "-") {
    return [operand1 - operand2, "subtract"];
  } else {
    return [operand1 / operand2, "division"];
  }
}

/**
 * Gets the current score from the DOM and increment it by 1
 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").textContent = ++oldScore;
}

/**
 * Gets the tally of wrong answers from the DOM and increment it by 1
 */
function incrementWrongAnswer () {
  let oldWrongScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").textContent = ++oldWrongScore;
}

function displayAdditionQuestion (operand1, operand2) {

  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

  document.getElementById("operand1").textContent = operand1 >= operand2 ? operand1 : opernad2;
  document.getElementById("operand2").textContent = operand1 >= operand2 ? operand2 : opernad1;
  document.getElementById("operator").textContent = "-";
  
}

function displayMultiplyQuestion (operand1, operand2) {

  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {

  document.getElementById("operand1").textContent = operand1 * operand2;
  document.getElementById("operand2").textContent = operand1 >= operand2 ? operand2 : operand1;
  document.getElementById("operator").textContent = "/";
 
}