/**
 * Classes
 * The `static` keyword
 */


/*  
 - Class = (ES6 feature) provides a more structired and a cleaner way to work with objects compared to traditional contructor functions.
    example: static keyword, encapsulation, inheritance
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: KES ${this.price}`);
        console.log(`______________________________________`);
    }
}


const product1 = new Product("shirt", 600);
const product2 = new Product("pants", 1500);

product1.displayProduct();
product2.displayProduct();


/*
    - The `static` keyword is used to define properties or methods that belong to the class
    rather that to the objects created from that class (class owns everything static, not the objects)
*/

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumfrence(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumfrence(10));
console.log(MathUtil.getArea(10));


class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User,this.userCount} users online`)
    }

    sayHello() {
        console.log(`Hello, my name is ${this.username}`);
    }
}

const user1= new User('Onyango');
const user2 = new User('Dickens');

user1.sayHello();
user2.sayHello();
User.getUserCount();