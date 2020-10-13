"use strict";

function checkBrackets(x) {
  // набор переменных
  let countLeft = 0;
  let countRight = 0;
  let sum = 0;
    let countLeftSum =0;
    let countRightSum =0;

  // проверка строка ли это и есть ли в ней ()
  if (!(typeof x === "string") || !x.match(/[()]/)) {
    sum = -1;
  } else {
    // подсчет левых скобок
    for (let i = 0; i <= x.length; i++) {
      if (x.charAt(i) === "(") {
        countLeft++;
      }

      // подсчет правых скобок
      if (x.charAt(i) === ")") {
        countRight++;
      }
    }
    // countLeftSum = countLeft;
    // countRightSum = countRight;

    if (countLeft & 1 ) {
      countLeftSum ++;
    }

    if (countRight & 1) {
      countRightSum++;
    }


    // сравнение левых с правыми
    if (countLeft > countRight) {
      sum =  (countLeft - countRight) ;
      if (countLeft &1){
          sum ++
      }
      if (countRight &1){
          sum++
      }
   
    }

    // сравнение правых с левыми
    if (countRight > countLeft) {
      sum = (countRight - countLeft);
      if (countLeft &1){
        sum ++
    }
    if (countRight &1){
        sum++
    }
    }

    // конечный вывод
  }
  console.log(countLeftSum + " " + countRightSum);
  console.log(countLeft + " " + countRight);
  return sum;
}

console.log(checkBrackets('1)()(())2(()'));
// console.log(checkBrackets(NaN));
