// function PARAMETERS

// function bringSingara(taka) {
//     console.log('singara ante dise', taka)
//     console.log('mama singara den')
// }

// bringSingara(100);




// // EXTENSIONS

// function bringSingara(taka) {
//     console.log('singara ante dise', taka)
//     console.log('mama singara den')
// }


// var money = 100;
// bringSingara(money);





// Return Function

function bringSingara(taka) {
    console.log('singara ante dise', taka)
    console.log('mama singara den')
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice
    return singaraQuantity;
}


var money = 250;
var singara = bringSingara(money);
console.log(singara)
