var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return Math.floor(number1 / number2);
};

var findRemainder = function(number1, number2) {
  return number1 % number2;
};

$(document).ready(function() {
  $("form#calcInput").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#numberInOne").val());
    var number2 = parseInt($("#numberInTwo").val());

    $("ul#initNums").prepend("<li>"+number1+", "+number2+"</li>")
    $("ul#sumLog").prepend("<li>sum: "+add(number1, number2)+"</li>");
    $("ul#diffLog").prepend("<li>difference: "+subtract(number1, number2)+"</li>");
    $("ul#prodLog").prepend("<li>product: "+multiply(number1, number2)+"</li>");
    $("ul#quotLog").prepend("<li>quotient: "+divide(number1, number2)+"</li>");
    $("ul#remainLog").prepend("<li>remainder: "+findRemainder(number1, number2)+"</li>");
  });
});

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var resultOne = add(number1, number2);
// var resultTwo = subtract(number1, number2);
// var resultThree = multiply(number1, number2);
// var resultFour = divide(number1, number2);
// var resultFive = findRemainder(number1, number2);
// var confirmAdd = confirm("Do you wish to see the addition value (sum) of the two numbers you provided?");
// if (confirmAdd) {
// 	alert("The result of the addition is " + resultOne);
// }
// var confirmSubtract = confirm("Do you wish to see the subtraction value (difference) of the two numbers you provided?");
// if(confirmSubtract) {
// 	alert("The result of the subtraction is " + resultTwo);
// }
// var confirmMultiply = confirm("Do you wish to see the multiplied value (product) of the two numbers you provided?");
// if (confirmMultiply) {
// 	alert("The result of the multiplication is " + resultThree);
// }
// var confirmDivide = confirm("Do you wish to see the divided value (quotient) of the two numbers you provided?");
// if(confirmDivide) {
// 	alert("The result of the division is " + resultFour);
// }
// var confirmRemainder = confirm("Do you wish to see the remainder value from dividing the two numbers you provided?");
// if(confirmRemainder) {
// 	alert("The remainder of the division result is " + resultFive);
// }
