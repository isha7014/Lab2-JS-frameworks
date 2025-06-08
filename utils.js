// utils.js

//Greets the user with a welcome message using their first and last name
function greetUser(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to G@I College!`);
}

//Converts a temperature value from Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

//Calculates and returns the square root of a given number
function calculateSquareRoot(number) {
  return Math.sqrt(number);
}

//Generates a random alphanumeric password of a specified length
function generatePassword(length) {
  // Characters to use in the password
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  //Generate random characters from the string above
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

//Exporting all functions so they can be used in other files (like index.js)
module.exports = {
  greetUser,
  convertCelsiusToFahrenheit,
  calculateSquareRoot,
  generatePassword,
};
