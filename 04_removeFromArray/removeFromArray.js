const removeFromArray = function(arr, arg1, arg2, ...args) {
  arr.splice(arg1 - 1, 1)
  if (arg2) {
    arr.splice(arg2 - 1, 1);
  }
  return arr;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
// Do not edit below this line
module.exports = removeFromArray;
