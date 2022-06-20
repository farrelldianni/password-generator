// Assignment code here
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "'", "#", "$", "%", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword () {
    var length = prompt("How long should the password be? From 8 characters to 128 characters")
    var typeLower = confirm("Should the password have lower case letters? Press cancel for No.") //true = include lowercase
    var typeUpper = confirm("Should the password have upper case letters? Press cancel for No.") //true = include uppercase
    var typeSpecial = confirm("Should the password have special characters? Press cancel for No.") //true = include specials

    console.log(length)
    console.log(typeLower)
    console.log(typeUpper)
    console.log(typeSpecial)
}

if typeLower


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


