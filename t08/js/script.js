'use strict'

let result;
result = prompt('Enter number from 1 to 4');
if (result > 4 || result < 1){
    alert ('Wrong input');
}
if (result == 1) {
     alert (result*2/'a');
}
if (result == 2 ) {
    alert ((result-result)/0);
}
if (result == 3) {
    alert(0*Infinity);
}
if (result = 4) {
    alert(result*40000000!=Infinity)
}