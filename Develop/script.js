// Assignment code here
var pwdLength;
var pwdLowCase;
var pwdUpCase;
var pwdNum;
var pwdSpecial;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  // prompts
  pwdLength = prompt("Your password must be between 8 and 128 characters. Enter length:");
  console.log("passLength " + pwdLength);

  // if no input or wrong input
  if(!pwdLength) {
    alert("Enter a number between 8 and 128 for your password length.");
  } else if (pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("Your password cannot be under 8 characters or over 128 characters.");
    console.log("passLength " + pwdLength);
  
  } else {
    // confirms
    pwdLowCase = confirm("Do you want lowercase in your password?");
    console.log("passLwrCase " + pwdLowCase);

    pwdUpCase = confirm("Do you want uppercase in your password?");
    console.log("passUprCase " + pwdUpCase);

    pwdNum = confirm("Do you want numbers?");
    console.log("passNum " + pwdNum);

    pwdSpecial = confirm("Do you want special characters?");
    console.log("passSpecial " + pwdSpecial);
  };

  //if no input or wrong input
  if(!pwdLowCase && !pwdUpCase && !pwdNum && !pwdSpecial) {
    prmptAnswers = alert("Your password must include at least one choice");

  // all four true // three true - 4 possibilities // 2 true - 6 possibilities // 1 true - 4
  } else if (pwdLowCase && pwdUpCase && pwdNum && pwdSpecial) {
    prmptAnswers = lowerCase.concat(upperCase, numbers, specials);
    //console.log(prmptAnswers); huge list in console so commented out
  } else if (pwdUpCase && pwdNum && pwdSpecial) {
    prmptAnswers = lowerCase.concat(upperCase, numbers, specials);
  }
  
  // two true

  // one true

  // var for length and loop to randomize result based on prompts
  var passwordGen = [];

  for (var i = 0; i < pwdLength; i++) {
    var combinedAnswers = prmptAnswers[Math.floor(Math.random() * prmptAnswers.length)];
    passwordGen.push(combinedAnswers);
    //console.log(combinedAnswers); also huge list commented out
  }

  var password = passwordGen.join("");
  console.log("Password: " + password);
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