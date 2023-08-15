// Assignment code here
function generatePassword() {
    const lowercase = 'qwertyuiopasdfghjklzxcvbnm'
    const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    const special = '!@#$%^&*'
    const number = '123456789'
  
    var passwordLength = Number(prompt('how many characters would you like your password to have?'))
  
    console.log(passwordLength)

    if (passwordLength < 8 || passwordLength > 128) {
        alert('Password length must be between 8 and 128.')
        return null
      }
    
      if (Number.isNaN(passwordLength)) {
        alert('Password length must be a number.')
        return null
      }
    
      var chosenCharacters = "";
    
      var confirmUpperCase = confirm('would you like to use uppercase letter?')
      if (confirmUpperCase) {
        chosenCharacters += uppercase
      }
    
      var confirmLowerCase = confirm('would you like to use lowercase letter?')
      if (confirmLowerCase) {
        chosenCharacters += lowercase
      }
    
      var confirmSpecial = confirm('would you like to use special character?')
      if (confirmSpecial) {
        chosenCharacters += special
      }
    
      var confirmNumbers = confirm('would you like to use numbers?')
      if (confirmNumbers) {
        chosenCharacters += number
      }

      console.log(confirmUpperCase, confirmLowerCase, confirmSpecial, confirmNumbers)

      var password = "";
    
      for (var i = 0; i < passwordLength; i++) {
        var chosenIndex = Math.floor(Math.random() * chosenCharacters.length); password += chosenCharacters[chosenIndex];
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