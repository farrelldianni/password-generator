// Assignment code here
var yesNumber;
var yesSpecial;
var yesLower;
var yesUpper;


function generatePassword () {

    // password acceptable characters
    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var special = ["!", "'", "#", "$", "%", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var totalArray = [];

    // prompts for password. might need to be moved later
    var passLength = (prompt("How long should the password be? From 8 characters to 128 characters"));
    // var typeLower = confirm("Should the password have lower case letters? Press cancel for No.") //true = include lowercase
    // var typeUpper = confirm("Should the password have upper case letters? Press cancel for No.") //true = include uppercase
    // var typeSpecial = confirm("Should the password have special characters? Press cancel for No.") //true = include specials

    // console.log(passLength);
    // console.log(yesLower);
    // console.log(yesUpper);
    // console.log(yesSpecial);


//checking password length is between 8 and 128 and returning until correct value is given 
    if (passLength < 8 || passLength > 128) {
      alert("please stay in between 8 and 128 characters")
      return generatePassword();
    } 
        else if (isNaN(passLength)) {
          alert("please input a numerical value between 8 and 128")
        }
            else {
              passPrompts();
            }

//storing answers for pass generation

var tempYesLower = "";
var tempYesUpper = "";
var tempYesSpecial = "";
var tempYesNumber = "";

      
// use math.random to grab variable from array 
// need to add variable to store that info 

  if (yesLower) {
    totalArray = totalArray.concat(lower);
    tempYesLower = lower[Math.floor(math.random() * lower.length)]
  }

  if (yesUpper) {
    totalArray = totalArray.concat(upper);
    tempYesUpper = upper[Math.floor(math.random() * upper.length)]
  }

  if (yesNumber) {
    totalArray = totalArray.concat(number);
    tempYesNumber = number[math.floor(math.random() * number.length)]
  }

  if (yesSpecial) {
    totalArray = totalArray.concat(special);
    tempYesSpecial = special[math.floor(math.random() * special.length)]
  }

  var password = tempYesLower + tempYesUpper + tempYesNumber + tempYesSpecial


}

var passPrompts = function() {
  // prompts for password. might need to be moved later
  var yesLower = window.confirm("Should the password have lower case letters? Press cancel for No.") //true = include lowercase
  var yesUpper = window.confirm("Should the password have upper case letters? Press cancel for No.") //true = include uppercase
  var yesSpecial = window.confirm("Should the password have special characters? Press cancel for No.") //true = include specials
  var yesNumber = window.confirm("Should the password have numbers? Press cancel for No.") //true = include numbers
}

// 

if (typeLower = false) {

}

   


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


