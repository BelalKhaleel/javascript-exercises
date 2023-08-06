const convertToCelsius = function(tempInFahrenheit) {
  function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
  tempInCelsius = (tempInFahrenheit - 32) * 5/9;
  return round(tempInCelsius, 1);
};

const convertToFahrenheit = function(tempInCelsius) {
  function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
  tempInFahrenheit = (tempInCelsius * 9/5) + 32;
  return round(tempInFahrenheit, 1);
};

convertToCelsius(-100);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
