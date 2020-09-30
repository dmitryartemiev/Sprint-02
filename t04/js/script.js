var x;
function solver(a, b, c, d, e) {

    x = a * a - 5 * b * c + d / 3 + e;
    if (isNaN(x)){
        return 'Wrong input'
    }
  return Number.parseFloat(x).toFixed(2);
}
