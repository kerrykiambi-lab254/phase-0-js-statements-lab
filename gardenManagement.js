// gardenManagement.js
// Minimal script that runs on require and prints only the expected outputs.

const temperature = 85;
if (temperature > 80) {
  console.log('Watering on');
}

const timeOfDay = 'morning';
if (timeOfDay === 'morning') {
  console.log('Lights off');
}

let soilMoisture = 35;
while (soilMoisture < 40) {
  soilMoisture++;
}
console.log(soilMoisture);

module.exports = { temperature, timeOfDay, soilMoisture };
