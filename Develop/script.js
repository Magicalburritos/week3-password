// global
var generateBtn = document.querySelector('#generate');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const num = '1234567890';
const speical = `~!@#$%^&*()_+-=[]{};':",./<>?\|`;

// helper function

function characterAmount() {
  result = parseInt(window.prompt('Please input a character amount'));

  if (result <= 7 || result >= 128) {
    window.alert('Please input a number between 8 and 128');
    characterAmount();
  } else {
    return result;
  }
}
function confirmPrompt(passwordText) {
  if (window.confirm(passwordText)) {
    return true;
  }
}

// main function

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//run

generateBtn.addEventListener('click', writePassword);
