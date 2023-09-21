const convertToCelsius = function(farenTemp) {
  return Math.round(((farenTemp-32)/1.8)*10)/10;
  
};

const convertToFahrenheit = function(celciusTemp) {
  return Math.round(((celciusTemp*1.8) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
