function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperatureInput").value);
    var unit = document.getElementById("unitSelect").value;
    var convertedTemperature;
    var convertedUnit;

    if (unit === "celsius") {
      convertedTemperature = (temperature * 9) / 5 + 32;
      convertedUnit = "Fahrenheit";
    } else {
      convertedTemperature = ((temperature - 32) * 5) / 9;
      convertedUnit = "Celsius";
    }

    document.getElementById("resultText").innerHTML =
      "Converted temperature: " + convertedTemperature.toFixed(2) + " " + convertedUnit;
  }