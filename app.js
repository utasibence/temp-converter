const celsius_input = document.querySelector("#celsius input");
const fahrenheit_input = document.querySelector("#fahrenheit input");
const kelvin_input = document.querySelector("#kelvin input");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function convertCelsius(celsius_value) {
  fahrenheit_input.value = roundNum(celsius_value * (9/5) + 32);
  kelvin_input.value = roundNum(celsius_value + 273.15);
}

function convertFahrenheit(fahrenheit_value) {
  celsius_input.value = roundNum((fahrenheit_value - 32) * (5/9));
  kelvin_input.value = roundNum((fahrenheit_value + 459.67) * (5/9));
}

function convertKelvin(kelvin_value) {
  celsius_input.value = roundNum(kelvin_value - 273.15);
  fahrenheit_input.value = roundNum(kelvin_value * (9/5) - 459.67);
}

function main() {
  celsius_input.addEventListener('input', function() {
    convertCelsius(parseFloat(celsius_input.value));
  });

  fahrenheit_input.addEventListener('input', function() {
    convertFahrenheit(parseFloat(fahrenheit_input.value));
  });

  kelvin_input.addEventListener('input', function() {
    convertKelvin(parseFloat(kelvin_input.value));
  });
}

main();
