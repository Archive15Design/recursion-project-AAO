/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

const sumToN = function(num, term = 0, sum = 0){
  if (num < 0){
    return null;
  }

  sum = sum + term;
  term++;

  if (term > num){
    return sum;
  } else {
    return sumToN(num, term, sum);
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
