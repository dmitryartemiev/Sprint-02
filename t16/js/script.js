'use strict'

let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

function firstElements (arr, n){
    return arr.slice(-arr.length, n)
}

console.log (firstElements(heroes, 5))