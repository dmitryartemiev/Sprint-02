'use strict'

let result ='';
let number = prompt();
if (!number.match(/\d/)){
    alert('Wrong input! Enter a number');
    number = prompt();
}else{
 for(let i=0; i<Number(number); i++){
  for( let j=0; j<=i; j++){ 
      result = result += '*'
  }
  result = result += '\n'
 }
alert (result)
}