/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

const fibonacci = function(n, fibonacciArr = [], i = 0){
  if (n === 0){
    return null;
  } else if (n < 3){
    return 1;
  }

  // base case return
  if (fibonacciArr.length === n){
    return fibonacciArr[i];
  } else if (fibonacciArr.length === 0){
    fibonacciArr = [1, 1];
    i = 1;
    return fibonacci(n, fibonacciArr, i);
  } else {
    i++;
    // init variables to be summed for next number, setting undefined to 1.
    let last = fibonacciArr[i - 1];
    if (last === undefined) {last = 1;}
    let secondLast = fibonacciArr[i - 2];
    if (secondLast === undefined) {secondLast = 1;}
    // calculate next num in sequence
    let nextNum = last + secondLast;
    // push next num and then do recursive call with increased i
    fibonacciArr.push(nextNum);
    return fibonacci(n, fibonacciArr, i);
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
