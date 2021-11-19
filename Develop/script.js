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

//work horse

function generatePassword() {
  let finalpassword = '';
  const passwordParams = {
    charAmount: characterAmount(),
    specialChar: confirmPrompt('would you like speical characters?'),
    upperChar: confirmPrompt('would you like uppercase?'),
    lowerChar: confirmPrompt('would you like lowercase?'),
    numChar: confirmPrompt('would you like numbers?'),
  };

 // destructure obj
  const { specialChar, charAmount, upperchar, lowerChar, numChar } =
    passwordParams;


  
  // push all parameter into an arry
  let passwordArray = [];

  if (specialChar) {
    passwordArray.push(speical);
  }
  if (upperchar) {
    passwordArray.push(upper);
  }
  if (lowerChar) {
    passwordArray.push(lower);
  }
  if (numChar) {
    passwordArray.push(num);
  }
// main function
  // ensure we have one of each character from the array
  for (let i = 0; i < passwordArray.length; i++)
    finalPassword += passwordArray[i].charAt(
      Math.floor(Math.random() * passwordArray[i].length)
    );
//  ensure we have random characters   
  for (let i = passwordArray.length; i < charAmount; i++) {
    const selection =
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
    finalpassword += selection.charAt(
      Math.floor(Math.random() * selection.length)
    );
  }

  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//run

  generateBtn.addEventListener('click', writePassword);

