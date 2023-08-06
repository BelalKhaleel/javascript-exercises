const removeFromArray = function(arr, ...args) {
  args.forEach((arg) => {
  let index = arr.indexOf(arg);
  while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf(arg);
  }
  });
  return arr;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
// Do not edit below this line
module.exports = removeFromArray;
