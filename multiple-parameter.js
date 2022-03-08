// add function

function addNumbers(num1, num2) {
    console.log(num1, num2)
    var total = num1 + num2
    return total;
}

var firstnumber = 48;
var secondnumber = 79;

var result = addNumbers(secondnumber, firstnumber)
console.log('result is: ', result)



// multiplication function

function multiplyTwoNumbers(num1, num2) {
    var total = num1 * num2;
    return total;
}

var result = multiplyTwoNumbers(5, 100)
console.log('total after multiplication:- ', result)


// substract function

function substractNumbers(num1, num2) {
    var total = num2 - num1
    return total;
}

var shopping = 2500;
var credit = 10000;
var result = substractNumbers(shopping, credit)
console.log('Money left after substraction:- ', result)



// Devide function

function devideTwoNumbers(num1, num2) {
    var total = num1 / num2;
    return total;
}

var result = devideTwoNumbers(180, 4)
console.log('result after deviding:- ', result)