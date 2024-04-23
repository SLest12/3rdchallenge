var generateBtn = document.getElementById('generate');

function generatePassword() {
  // Define possible characters to include in the password
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|?><";
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var special = '!@#$%^&*()_+{}[]|?><';
  var possibleCharacters = '';

  // Prompt user for desired password length
  var length = parseInt(prompt("Enter desired password length:"));
  
  // Validate the user's input
  if (isNaN(length)) {
    alert("Invalid input. Please enter a numeric value.");
    return;
  }

  // How would we validate the user input to make sure we have more than 8 and less than 128(?)
  if(length < 8) {
    alert("Invalid input. Password must be at least 8 characters");
    return
  }
  
  if(length > 128) {
    alert("Invalid input. Password must be less than 128 characters");
    return
  }

  var useUpper = confirm('Would you like to use UPPER case letters in your password?');
  //console.log(useUpper)
  if(useUpper == true) {
    possibleCharacters = possibleCharacters + uppercase;
  }


 var useLower = confirm('Would you like to use LOWER case letters in your password?');
 //console.log(useLower)
  if(useLower == true) {
possibleCharacters = possibleCharacters + lowercase;
 }

 var useNumber = confirm('Would you like to use NUMBERS case letters in your password?');
 //console.log(useLower)
  if(useNumber == true) {
possibleCharacters = possibleCharacters + Number;
 }



 //var useSpecial = confirm('Would you like to use SPECIAL characters in your password?');
 //console.log(useSpecial)
//if(useSpecial == true) {
// possibleCharacters = possibleCharacters + special;
// }
  
 // console.log("Possible Characters Dataset: ", possibleCharacters);
  // Generate password
  var generate = "";
  for (var i = 0; i < length; i++) {
   generate += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  // Display the generated password on the web page
  document.getElementById("password").textContent = generate;


  return 
}

generateBtn.addEventListener('click', generatePassword)
//generatePassword();