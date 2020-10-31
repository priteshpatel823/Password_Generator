
// Assignment Code
var generateBtn = document.querySelector("#generate")
document.querySelector("#generate").addEventListener("click", writePassword);

//Variable Declaration
var passNumber = [0,1,2,3,4,5,6,7,8,9];
var passLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar =[ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":", ];

//generatePassword function
function generatePassword(){
  var randomPassword = ""

  var Totlength = prompt("How many characters would you like your password to be?");
    if (Totlength <= 7 || Totlength > 128)
    {
      alert("password needs to have between 8 and 128 characters long!\nPlease try again.");
    }
    else{
// Assign an action to the password parameters
      var passwordCharacters = [];
        if(confirm("Do you want numbers?")){
          passwordCharacters = passwordCharacters.concat(passNumber);
        }
        if(confirm("Do you want Uppercase Charecter?")){
          passwordCharacters = passwordCharacters.concat(passUpperCase);
        }
        if(confirm("Do you want Lowercase Charecter?")){
          passwordCharacters = passwordCharacters.concat(passLowerCase);
        }
        if(confirm("Do you want Special Charecter?")){
          passwordCharacters = passwordCharacters.concat(specialChar);
        }
        if(passwordCharacters.length===0){
          alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
        }
        else{
          for (var count = 0; count < Totlength; count++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
          }
          return randomPassword;
          }
        }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
