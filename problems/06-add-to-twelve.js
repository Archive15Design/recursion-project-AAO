/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

const addToTwelve = function(numbers, i = 0){
  const currentEle = numbers[i];
  const previousEle = numbers[i - 1];

  if (currentEle + previousEle === 12){
    return true;
  }

  if (i > numbers.length){
    return false;
  } else {
    return addToTwelve(numbers, i + 1);
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
