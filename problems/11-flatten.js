/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
const flatten = function(array){
  if (array.length < 1){
    return [];
  }

  let start = [];

  if (Array.isArray(array[0])){
    start = [...flatten(array[0])];
  } else {
    start = [array[0]];
  }

  let rest = array.slice(1);

  return start.concat(flatten(rest));

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
