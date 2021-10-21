function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


function remainder(number1, number2) {
  return number1 % number2;
}

function converttempCtoF(number1, number2) {
  return (number1 * (9 / 5)) + 32;
}





$(document).ready(function() {
  $("form#add").submit(function(event) {
   event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});