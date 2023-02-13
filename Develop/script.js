// Assignment code here
// GIVEN I need a new, secure password

//Step 1: 
// WHEN I  click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Variables
let upperLetters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmopqrstuvwxyz';
let numbers = '0123456789';
let specialChar = '!@#$%^&*()_+=-{[]};/.?.,><';
let chosen = '';



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //1. prompt the user for password criteria
         // A. Password length between 8-128
         // B. Lowercase, uppercase, special characters
         var length = prompt('choose a password length between 8 and 128 character')

  // 2. Validate the input.

  //3. Generate password based on criteria

    //4. Display password on page







  return 'Generated Password will go here'

}








//Step 2:
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//Step 3:
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

//Step 4:
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//Step 5:
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

//Step 6:
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

//Step 7:
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




