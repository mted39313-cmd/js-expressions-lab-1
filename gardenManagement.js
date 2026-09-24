const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Check the temperature and control watering
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Check the time of day and control the lights
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// Increment soilMoisture by 5 until it reaches 40
while (soilMoisture < 40) {
  soilMoisture = soilMoisture + 5;
  console.log(soilMoisture);
}