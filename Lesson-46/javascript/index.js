//const person = {
//  fullName: "Spongebob Squarepants",
//  age: 30,
//  isStudent: true,
//  hobbies: ["karate", "jellyfishing", "cooking"],
//  address: {
//    street: "124 Conch St.",
//    city: "Bikini Bottom",
//    country: "Int. Waters"
//  }
//}

//console.log(person.fullName);
//console.log(person.age);
//console.log(person.isStudent);
//console.log(person.hobbies[2]);

//for(const property in person.address){
//  console.log(person.address[property]);
//}

class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person3.address);