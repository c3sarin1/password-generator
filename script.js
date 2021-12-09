  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var charset = ""
var generatePassword = ""


window.onload = alert("Welcome! Please click 'Generate password' to start!");


function generatePass(){
var confrimUpper = confirm("would you like upper-case in your password? "); 
if(confrimUpper){
  charset+=abcUpper
  console.log(charset)
}
var confrimLower = confirm("would you like lower-case in your password? ");
if(confrimLower){
  charset+=abcLower
  console.log(charset)

}
var confrimNumbers = confirm("would you like number's in your password? ");
if(confrimNumbers){
  charset+=num
  console.log(charset)
}
var confrimSc = confirm("would you like special-characters in your password? ");
if(confrimSc){
  charset+=sym
  console.log(charset)
}

if(!confrimUpper && !confrimLower && !confrimNumbers && !confrimSc){
  alert("STUPID IDIOT")
  generatePass()
}
var characterLength = prompt("Enter a password length of 8-128")

if(characterLength < 8 || characterLength > 128){
  alert("Eat shit and piss off")
  generatePass()
}

for(i=0; i<characterLength; i++) {
  generatePassword+=charset.charAt(Math.floor(Math.random() * charset.length));
}
return generatePassword

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
