/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// base case: last element in index
// recursive case: element is greater than previous element
// recursive step: check if element is true

// your code here

const isSorted = function(array, i = 1){
  if (i === array.length){
    return true;
  }

  let check = array[i] > array[i - 1];

  if (check){
    return isSorted(array, i + 1);
  } else {
    return false;
  }

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
