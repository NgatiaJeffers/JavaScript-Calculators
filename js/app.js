var operator = prompt("Select Operator (* + - /)");
var number1 = parseInt(prompt("Ente First NUmber:"));
var number2 = parseInt(prompt("Enter Second Number:"));

var result;
if (operator == "*") {
    result = number1 * number2;
    document.write("The total number is " + result);
} else if (operator == "+") {
    result = number1 + number2;
    document.write("The total number is " + result);
} else if (operator == "-") {
    result = number1 - number2;
    document.write("The total number is " + result);
} else if (operator == "/") {
    result = number1 / number2;
    document.write("The total number is " + result);
} else {
    document.write("Incorrect Operator");
}


// BMI CALCULATOR
 function BMI() {
     var h = document.getElementById('h').value;
     var w = document.getElementById('w').value;
     var bmi = w / (h / 100 * h / 100);

     var bmio = (bmi.toFixed(2));

     document.getElementById("result").innerHTML="Your BMI is " + bmio;
 }