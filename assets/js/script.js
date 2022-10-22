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
    runGame("addtion");
})

/**
 * The main game "loop" called, when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
 let num1 = Math.floor(Math.random() * 25) + 1;
 let num2 = Math.floor(Math.random() * 25) + 1;

 if (gameType === "addition") {
    displayAdditionQuestion (num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.  Aborting!`;
    }
 }

 /**
  * Checks the answer against the first element in 
  * the returned calculateCorrectAnswer array.
  */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementsByTagName("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You got it right!"); 
    } else {
        alert(`You answered ${userAnswer}.  The correct answer is ${caluctedAnswer}.`);
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
  } else {
    alert(`Unimplemented operand: ${operand}`);
    throw `Unknown operand: ${operand}. Aborting!`;
}

function incrementScore() {

}

function incrementWrongScore () {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivisionQuestion() {
    
}