const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function(){console.log(`Hi! I am ${this.name}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}
const person2 = {
  name: "Patrick",
  favFood: "Pizza",
  sayHello: function(){console.log(`Hi! I am ${this.name}`)},
  eat: function(){console.log(`${person2.name} is eating ${person2.favFood}`)},
}
person1.eat();
person2.eat();