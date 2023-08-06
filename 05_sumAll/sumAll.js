const sumAll = function(int1, int2) {
  
  let arr = [];
  for (let i = int1; i <= int2; i++) {
    arr.push(i);
  }
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum;
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
