const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

//fruits.splice(1, 2);

//console.log(fruits);


//const fruitNames = fruits.map(fruit => fruit.name);
//const fruitColors = fruits.map(fruit => fruit.color);
//const fruitCalories = fruits.map(fruit => fruit.calories);


//console.log(fruitCalories);

//const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
//const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

//console.log(highCalFruits);

const maxFruit = fruits.reduce( (max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);
                              
const minFruit = fruits.reduce( (min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruit.calories);
console.log(minFruit.calories);