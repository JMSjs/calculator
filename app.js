const add = (num1,num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => {
    if (num2 === 0) {
        return "error";
    }
    return (num1 / num2);
}
let displayNumber = 0;

const operate = (num1, num2, operator) => {
    switch(operator) {
        case add: return add(num1,num2);
        case subtract: return subtract(num1,num2);
        case multiply: return multiply(num1,num2);
        case divide: return divide(num1,num2);
    }
};
const displayLine = document.querySelector(".displayLine");
const refresh = () => displayLine.textContent = displayNumber;

const btnPercent = document.querySelector("#percent");
btnPercent.addEventListener("click", () => {
    displayNumber = displayNumber/100;
    refresh();
 });

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    displayNumber = 0;
    refresh();
});

const btnBack = document.querySelector("#backspace");
btnBack.addEventListener("click", () => {
    console.log(displayNumber);
});

const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
const btnSubtract = document.querySelector("#subtract");
const btnAdd = document.querySelector("#add");

const btnToggleNeg = document.querySelector("#toggleNeg");
btnToggleNeg.addEventListener("click", () => {
    displayNumber = displayNumber*(-1);
    refresh();
});

const btnDecimal = document.querySelector("#decimal");
btnDecimal.addEventListener("click", () => {
    displayLine.textContent = displayLine.textContent + ".";
})
const btnTotal = document.querySelector("#total");


const numKeys = document.querySelectorAll(".numkeys");
numKeys.forEach((number) => number.addEventListener("click", function(e) {
    let keyClicked = e.target.id;
    console.log(keyClicked);
    displayNumber = parseFloat(displayNumber+ keyClicked);
    displayLine.textContent = displayNumber
}))
