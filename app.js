const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
  if (num2 == 0) {
    return "divide by zero :("; // can't divide by zero
  }
  return num1 / num2;
};

let num1 = 0;
let num2 = 0;
let operatorChosen = null;
let solution = 0;
let displayNumber = "";

const operate = (num1, num2, operator) => {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
};
const displayLine = document.querySelector(".displayLine");
const refresh = () => (displayLine.textContent = displayNumber);

const btnPercent = document.querySelector("#percent");
btnPercent.addEventListener("click", () => {
  displayNumber = parseFloat(displayLine.textContent) / 100;
  refresh();
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
  displayNumber = "";
  num1 = 0;
  num2 = 0;
  operatorChosen = null;
  solution = 0;
  operKeys.forEach((button) => button.classList.remove("highlight"));
  refresh();
});

const btnBack = document.querySelector("#backspace");
btnBack.addEventListener("click", () => {
  displayNumber = displayLine.textContent.slice(0, -1);
  if (!displayNumber) {
    // prevents user from deleting the entire display.
    displayNumber = "";
  }
  refresh();
});

const btnToggleNeg = document.querySelector("#toggleNeg");
btnToggleNeg.addEventListener("click", () => {
  displayNumber = displayLine.textContent * -1;
  refresh();
});

const numKeys = document.querySelectorAll(".numkeys");
numKeys.forEach((number) =>
  number.addEventListener("click", function (e) {
    // this condition below is to prevent inputs from overflowing the display line. 13 digits max. button blinks red to alert user
    if (displayNumber.length >= 13) {
      this.classList.add("error");
      setTimeout(() => {
        number.classList.remove("error");
      }, 60);
      return;
    }
    const keyClicked = e.target.id;
    if (keyClicked == ".") {
      if (displayLine.textContent.includes(".")) {
        return; // if decimal exists, event returns nothing
      }
    }
    displayNumber += keyClicked;
    console.log(keyClicked, typeof keyClicked, displayNumber);

    displayLine.textContent = displayNumber;
  })
);

const operKeys = document.querySelectorAll(".oper");
operKeys.forEach((operator) =>
  operator.addEventListener("click", function (e) {
    operatorChosen = e.target.id;
    operKeys.forEach((button) => button.classList.remove("highlight")); // resets colors on all operator btns
    this.classList.add("highlight"); // color cue to show active operator
    num1 = parseFloat(displayLine.textContent);
    displayNumber = "";
    refresh();
    console.log(num1, "for", operatorChosen);
  })
);

const btnTotal = document.querySelector("#total");
btnTotal.addEventListener("click", () => {
  num2 = displayLine.textContent;
  if (!parseFloat(num1)) {
    num1 = 0;
  }
  if (!parseFloat(num2)) {
    num2 = 0;
  }
  solution = operate(num1, num2, operatorChosen);
  console.log(`${num1} ${operatorChosen} ${num2} = ${solution}`);
  if (parseFloat(solution)) {
    displayLine.textContent = Math.round(1000 * solution) / 1000; // rounds to the nearest thousandth
  } else {
    displayLine.textContent = solution;
  }
  num2 = null;
  operKeys.forEach((button) => button.classList.remove("highlight"));
});
