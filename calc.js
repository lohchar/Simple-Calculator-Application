let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let adding = num1 + num2
    sumEl.textContent = "Sum:" + adding
}

function subtract() {
    let subtraction = num1 - num2
    sumEl.textContent = "Subtraction:" + subtraction
} 

function divide() {
    let division = num1 / num2
    sumEl.textContent = "Division:" + division
}

function multiply() {
    let multiplacation = num1 * num2
    sumEl.textContent = "multiplacation:" + multiplacation
}