//let a = 1;
//let b = 2;

//[a, b] = [b, a];

//console.log(a);
//console.log(b);

//const colors = ["red", "green", "blue", "black", "white"];

//[colors[0], colors[4]] = [colors[4], colors[0]];

//console.log(colors);

//const colors = ["red", "green", "blue", "black", "white"];

//const[firstColor, secondColor, thirdColor, ...extraColors] = colors;

//console.log(firstColor);
//console.log(secondColor);
//console.log(thirdColor);
//console.log(extraColors);

function displayPerson({firstName, lastName, age, job="Unemployed"}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: "Spongebob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
}

//const {firstName, lastName, age, job="Unemployed"} = person2;

//console.log(firstName);
//console.log(lastName);
//console.log(age);
//console.log(job);

displayPerson(person2);