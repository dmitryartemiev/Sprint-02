'use strict'

const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

function sortEvenOdd(x){
    function compare(a, b){
        return a%2 - b%2
    }
    function secondCompare(a,b ){
        return a - b;
    }
    (x.sort(secondCompare)).sort(compare);
}

sortEvenOdd (arr);
console.log (arr);