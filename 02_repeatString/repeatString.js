const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR';
  } else {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(string);
  }
  return arr.join("");
}
};

const number = Math.floor(Math.random() * 1000);

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', number);
repeatString('', 10)
// Do not edit below this line
module.exports = repeatString;
