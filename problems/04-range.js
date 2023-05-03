/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


const range = function(start, end, rangeArr = []){
  if (end < start){
    return [];
  }

  if (start === end - 1){
    rangeArr.push(start);
    return rangeArr;
  } else {
    rangeArr.push(start);
    return range(start + 1, end, rangeArr);
  }

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
