/*
- Nested objects are objects inside other objects. Child object is enclosed by a parent object.
- Allow you to represent more complect data sructure.

*/
class Person {
    constructor(name, age, ...address) { // Rest parameter sysntax. It collects the remaining arguements in an array called address.
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // Spread syntax. It takes the elements of the address array and passes them as separate arguements to the Address constructor
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "123 Conch Street", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.city)