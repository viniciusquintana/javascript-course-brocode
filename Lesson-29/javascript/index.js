function generatePassword(lenght, includeLowerCase, inclueUpperCase, includeNumbers, includeSymbols){

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789"
  const symbolChars = "!@#$%¨&*()_+-=´`[{~^]}<>;:?/\|*,."

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase? lowercaseChars: "";
  allowedChars += inclueUpperCase? uppercaseChars: "";
  allowedChars += includeNumbers? numberChars: "";
  allowedChars += includeSymbols? symbolChars: "";

  if(lenght <=0){
    return `(password legth must be at least 1)`;
  }
  if(allowedChars.length === 0){
    return `(At least 1 set of characters needs to be selected)`;
  }

  for(let i = 0; i < lenght; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLenght = 12;
const includeLowerCase = true;
const inclueUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, 
                                  includeLowerCase, 
                                  inclueUpperCase, 
                                  includeNumbers, 
                                  includeSymbols);
console.log(`Generated password: ${password}`)