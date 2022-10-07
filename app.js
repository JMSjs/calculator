const add = (num1,num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => {
    if (num2 === 0) {
        return "error";
    }
    return (num1 / num2);
}