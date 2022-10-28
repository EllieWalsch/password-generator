const generateBtn = document.querySelector("#generate");

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Gets random integer between a min and max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Use the random integer function to randomize choices
// list.length - 1 ensures that all items are accounted for (indexes start at 0)
function getRandom(list) {
  return list[getRandomIntInclusive(0, list.length - 1)]
}

// Generates a random password
function generatePassword() {
  const passwordLength = getPasswordLength ();
  
  const availableChar = [];

  const password = [];

  
  // If passwordLength is false, return nothing
  if (!passwordLength) {
    return password;
  }

  // Ask user for character types
  const lowercase = confirm ("Click ok to include lowercase characters.");
  const uppercase = confirm ("Click ok to include uppercase characters.");
  const numbers = confirm ("Click ok to include numbers.");
  const specialChar = confirm ("Click ok to include special characters.");

  // Add selected characters to available characters for password generator
  if (lowercase) {
    availableChar.push(lowerCasedCharacters)
  }
  if (uppercase) {
    availableChar.push(upperCasedCharacters)
  }
  if (numbers) {
    availableChar.push(numericCharacters)
  }
  if (specialChar) {
    availableChar.push(specialCharacters)
  }

  // TODO: use the getRandom function to loop user choices for the password length
  // TODO: create a for loop ^^

}


// Ask user for password length
function getPasswordLength () {
  const passwordLength = prompt("Please choose a password length between 8 and 128 characters.");

  // *********Returns user input and transforms string into number
  if (passwordLength >= 8 && passwordLength <= 128) {
    return parseInt(passwordLength);
  }

  else if (passwordLength < 8 ) {
    alert("Please choose a longer password.");
    return false;
  }

  else if (passwordLength > 128 ) {
    alert("Please choose a shorter password.");
    return false;
  }
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
