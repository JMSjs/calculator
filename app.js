const add = (num1,num2) => (parseFloat(num1) + parseFloat(num2));
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => {
    if (num2 == 0) {
        return "divide by zero :("; //can't divide by zero
        refresh();
    }
    return (num1 / num2);
};

let num1 = 0;
let num2 = 0;
let operatorChosen = null;
let solution = 0;
let displayNumber = 0;

const operate = (num1, num2, operator) => {
    switch(operator) {
        case "add": return add(num1,num2);
        case "subtract": return subtract(num1,num2);
        case "multiply": return multiply(num1,num2);
        case "divide": return divide(num1,num2);
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
    displayNumber = displayLine.textContent.slice(0,-1);
    if (!displayNumber || displayNumber) { //prevents user from deleting the entire display.
        displayNumber = 0; 
    }
    refresh();
});

const btnToggleNeg = document.querySelector("#toggleNeg");
btnToggleNeg.addEventListener("click", () => {
    displayNumber = displayNumber*(-1);
    refresh();
});

const btnDecimal = document.querySelector("#decimal");
btnDecimal.addEventListener("click", () => {
    displayLine.textContent = displayLine.textContent + ".";
})

const numKeys = document.querySelectorAll(".numkeys");
numKeys.forEach((number) => number.addEventListener("click", function(e) {
    let keyClicked = e.target.id;
    displayNumber = parseFloat(displayNumber+ keyClicked);
    displayLine.textContent = displayNumber;
}))

const operKeys = document.querySelectorAll(".oper");
operKeys.forEach((operator) => operator.addEventListener("click", function(e) {
    operatorChosen = e.target.id;
    num1 = parseFloat(displayLine.textContent);
    displayNumber = 0;
    displayLine.textContent = `[${operatorChosen}]`;
    console.log(num1 , "for" , operatorChosen);
}));

const btnTotal = document.querySelector("#total");
btnTotal.addEventListener("click", () => {
    num2 = displayLine.textContent;
    if (!parseFloat(num2)) {
        num2 = 0;
    }
    solution = operate(num1, num2, operatorChosen);
    console.log(`${num1} ${operatorChosen} ${num2} = ${solution}`);
    displayLine.textContent = solution;
    num2 = null;
    
});