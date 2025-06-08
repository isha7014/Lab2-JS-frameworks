// index.js

//Importing functions from the utils.js module using ES Module (ESM) syntax
import { calculateSquareRoot, convertCelsiusToFahrenheit, generatePassword, greetUser } from './utils.js';

// Call the greetUser function with first and last name to display a welcome message
greetUser("Mandeep", "Kaur");

// Call the convertCelsiusToFahrenheit function with 25°C and display the result in °F
console.log("25°C =", convertCelsiusToFahrenheit(25), "°F");

// Call the calculateSquareRoot function with the number 64 and print the square root
console.log("Square root of 64 is", calculateSquareRoot(64));

//Call the generatePassword function to generate a 10-character random password
console.log("Generated password:", generatePassword(10));
