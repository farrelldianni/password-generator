// Assignment code here
var passPrompts = function() {
  // prompts for password. might need to be moved later
  yesLower = window.confirm("Should the password have lower case letters? Press cancel for No."); //true = include lowercase
  // console.log(yesLower);
  yesUpper = window.confirm("Should the password have upper case letters? Press cancel for No."); //true = include uppercase
  // console.log(yesUpper);
  yesSpecial = window.confirm("Should the password have special characters? Press cancel for No."); //true = include specials
  // console.log(yesSpecial);
  yesNumber = window.confirm("Should the password have numbers? Press cancel for No."); //true = include numbers
  // console.log(yesNumber);
}



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

    // prompt for password length. might need to be moved later
    var passLength = (prompt("How long should the password be? From 8 characters to 128 characters"));
    console.log(passLength);

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

// sending user back to passPrompts to have the proper conditions with at least one character type
    while (!yesLower && !yesSpecial && !yesNumber && !yesUpper) {
      alert("please accept at least one character type")
      passPrompts();
    }



//storing answers for pass generation
// var tempYesLower = "";
// var tempYesUpper = "";
// var tempYesSpecial = "";
// var tempYesNumber = "";

      
// use math.random to grab variable from array 

// concatenates each array
  if (yesLower) {
    totalArray = totalArray.concat(lower);
    console.log(yesLower);
  }

  if (yesUpper) {
    totalArray = totalArray.concat(upper);
    console.log(yesUpper);
  }

  if (yesNumber) {
    totalArray = totalArray.concat(number);
    console.log(yesNumber);
  }

  if (yesSpecial) {
    totalArray = totalArray.concat(special);
    console.log(yesSpecial);
  }


  //combining stored pass values to generate whole password 
  var password = "";  
  // var character = password.length;

  //checking pass length and randomizing
  for (var i = 0; i < passLength; i++) {
    password += totalArray[Math.floor(Math.random() * totalArray.length)];
  }

  return password;


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


