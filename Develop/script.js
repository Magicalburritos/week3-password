// global
var generateBtn = document.querySelector('#generate');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const num = '1234567890';
const speical = `~!@#$%^&*()_+-=[]{};':",./<>?\|`;

// helper function

// main function

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//run

generateBtn.addEventListener('click', writePassword);
