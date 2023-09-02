const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  debugger
  if (num === 0) {
    return 1;
  } else {
	let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((product, current) => product * current);
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
