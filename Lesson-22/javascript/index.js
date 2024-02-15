//function happyBirthday(username, age){
//  console.log("Happy birthday to you!");
//  console.log("Happy birthday to you!");
//  console.log(`Happy birthday dear ${username}!`);
//  console.log("Happy birthday to you!");
//  console.log(`You are ${age} years old`);
//}

//happyBirthday("Vinícius", 22);
//happyBirthday("Spongebob", 38)
//happyBirthday("Patrick", 39);

function add (x, y){
  return x + y;
}
function subtract(x, y){
  return x - y;
}
function multiply(x, y){
  return x * y;
}
function divide(x, y){
  return x / y;
}
function isEven(number){
  return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("fake@fake.com"));
console.log(isValidEmail("ElonMusk.com"));
console.log(isValidEmail("Zuckerborg@meta.com"));