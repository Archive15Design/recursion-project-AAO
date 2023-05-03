/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

const reverse = function(string, i = 0, array = []){
  if (string.length < 2){
    return string;
  }

  if (string.length === array.length){
    return array.join("");
  }else {
    array.unshift(string[i]);
    return reverse(string, i + 1, array);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
