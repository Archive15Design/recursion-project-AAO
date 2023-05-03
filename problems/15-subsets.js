/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

let subsets = function(arr){

  if (arr.length === 0){
      return [[]];
  }


  let first = arr.slice(-1)[0];
  let rest = arr.slice(0, arr.length - 1);

  let result = subsets(rest);
  let copy = result.map(a => {return [...a]});

  for(let i = 0; i < copy.length; i++){
      copy[i].push(first);
  }

  result = result.concat(copy);

  return result;
};

const print = subsets([1, 2, 3]);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
