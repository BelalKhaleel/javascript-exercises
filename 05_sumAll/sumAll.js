const sumAll = function(int1, int2) {
  debugger
  let arr = [];

  if (int1 < 0 || int2 < 0 || !(typeof int1 === "number") || !(typeof int2 === "number")) {
    return "ERROR";

  } else if (int1 < int2) {
  for (let i = int1; i <= int2; i++) {
    arr.push(i);
  }
  } else if (int1 > int2) {
  for (let i = int2; i <= int1; i++) {
    arr.push(i);
  }
  }
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum;
};

sumAll(-10, 4)
// Do not edit below this line
module.exports = sumAll;
