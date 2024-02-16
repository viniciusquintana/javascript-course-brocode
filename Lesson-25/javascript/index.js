let fruits = ["apple", "orange", "banana", "coconut"];

//fruits[3] = "coconut"

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango")
//fruits.shift();

//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

//let numOfFruits = fruits.length;
//let index = fruits.indexOf("coconut");

fruits.sort().reverse();

for(let fruit of fruits) {
  console.log(fruit);
}