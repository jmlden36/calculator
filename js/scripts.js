function add(prompt1answer, prompt2answer) {
  return number1 + number2;
}

function subtract(prompt1answer, prompt2answer) {
  return number1 - number2;
}

function multiply(prompt1answer, prompt2answer) {
  return number1 * number2;
}

function divide(prompt1answer, prompt2answer) {
  return number1 / number2;
}

function remainder(prompt1answer, prompt2answer) {
  return number1 % number2;
}

function converttempCtoF(prompt1answer) {
  return (number1 * (9 / 5)) + 32;
}




  const number1 = parseInt(prompt("Enter a temperature in degrees celsius:"));
  const number2 = parseInt(prompt("Enter another number:"));
  const result = remainder(number1, number2);  
  alert(result);