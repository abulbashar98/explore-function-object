var i = 0;

// normal while loop

// while (i < 21) {
//     console.log(i)
//     i++;
// }




// BREAK



// while (i < 21) {
//     console.log(i)
//     i++;
//     if (i == 9) {
//         break;
//     }
// }


// for (var i = 0; i <= 25; i++) {
//     console.log(i)
//     if (i == 9) {
//         break;
//     }
// }


// array

var numbers = [51, 45, 34, 23, 78, 95, 109, 65, 32, 60]

// while (i < numbers.length) {
//     var number = numbers[i];
//     console.log(number)
//     i++
//     if (number > 90) {
//         break;
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i]
//     console.log(number)
//     if (number > 100) {
//         break;
//     }
// }




// CONTINUE

while (i < numbers.length) {
    var number = numbers[i]
    i++;
    if (number >= 70) {
        continue;
    }
    console.log(number)
}

