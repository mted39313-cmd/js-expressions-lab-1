// Sample 30-day temperature data (mix of Celsius 'C' and Fahrenheit 'F')
// Replace this array with your actual 30-day dataset
const temperatures = [
  "22C", "72F", "21C", "68F", "23C", "75F", "20C", "19C", "65F", "24C",
  "77F", "25C", "79F", "21C", "70F", "22C", "71F", "24C", "76F", "19C",
  "66F", "23C", "74F", "20C", "69F", "25C", "80F", "22C", "73F", "21C"
];

let totalCelsius = 0;
let daysCount = temperatures.length; // Should be 30

// Using a basic for loop and arithmetic operators
for (let i = 0; i < daysCount; i++) {
  let currentTempStr = temperatures[i];
  
  // Extract the numeric value and the unit character
  let unit = currentTempStr.slice(-1); // Gets 'C' or 'F'
  let value = parseFloat(currentTempStr); // Extracts the number
  
  let tempInCelsius = 0;
  
  // Check the unit and convert if necessary using basic operators
  if (unit === "F") {
    tempInCelsius = (value - 32) * 5 / 9;
  } else {
    tempInCelsius = value;
  }
  
  // Accumulate the total using basic assignment and addition
  totalCelsius = totalCelsius + tempInCelsius;
}

// Calculate the average temperature
let averageCelsius = totalCelsius / daysCount;

console.log("Total Days Analyzed:", daysCount);
console.log("Average Temperature (°C):", averageCelsius.toFixed(2));