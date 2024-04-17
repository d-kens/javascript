/*
    - An Object is a collection of related properties and methods
    - Can represent real world objects (people, product, places)

*/

const person = {
    firstname: 'Onyango',
    lastname: 'Dickens',
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log('Hi! I am Onyango Dickens')
    }
}

const person1 = {
    firstname: 'Diane',
    lastname: 'Mosoti',
    age: 30,
    isEmployed: false,
    sayHello: () => console.log('Hi! I am Diane Mosoti')
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();


/*
 - `this` keyword is a refrence to the object where `this` is used.

*/
const person2 = {
    firstname: 'Gabriel',
    lastname: 'Kennedy',
    sayHello: function() {
        console.log(`Hi! I am ${this.firstname} ${this.lastname}`);
    }
}

person2.sayHello();



/*
- Constructor: Is a special method for defining the properties and methods of objects.
- Constructors come in handy when we have to create a lot of objects.
- Instead of manually creating these objects, we can use a contructor. All we have to do to construct these objects is to pass in unique data into the constuctor.

- Constructors help with code reusability.
*/


function Car(make, model, year, color) { // Reusble method to create car objects
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {
        console.log(`Yopu drive ${this.model}`)
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
car1.drive();


const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)
car2.drive()