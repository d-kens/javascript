/**
 * Classes
 * The `static` keyword: A method or property declared as static belongs to the entire ckass arther than the objects created from that class.
 * Inheritance: New class (child class) extends properties and methods from an existing class (parent class)
 * Super: Refrence to the parent class
 * Getter: special method that makes a property readable
 * Setter: special method that makes a property writable.
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



/*
    - Inheritance: Allows a new class to inherit properties and method from an existing class. The two classes have a parent child relationship.
    - Inheritance helps with code reusbility. DRY principle.
    - To create a parent child relationship a child extends the parent
    - The child classes can have their own properties and methods.

    - super keyword: used in classes to call the contructor or access the properties and methods of a parent class (super class).
    - The `this` keyword refers to the current object while super refers to the parent.
    - The `super` keyword also helps with code reusability. Any properties that the children share in common the cosntructor can take care of that.
    - The `super` keyword can also be used to extend a method from the parent.
*/

class Animal {
    alive = true;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move() {
        console.log(`The ${this.name} moves at a speed of ${speed} kmph`);
    }

    eat() {
        console.log(`This ${this.name} is eating`)
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}


class Fish extends Animal {
    name = "fish";

    constructor(name,age , swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} is swimming`);
        super.move(this.swimSpeed);
    }
}



class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }


    run() {
        console.log(`This ${this.name} is running`)
        super.move(this.runSpeed);
    }
}

const rabbit = new Rabbit("Bugs Bunny", 3, 100);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);


/*
    - getter: make a property readable
    - seeter: make a property writable
    - They are used to validate (setter) and modify a value (getters) when reading/writing a property.
*/

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.log("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.log("Height must be a positive number");
        }
    }

    get width() {
        return `${this._width.toFixed(1)} cm`;
    }

    get height() {
        return `${this._height.toFixed(1)} cm`;
    }

    get area() {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(-100000, "pizza");
console.log(rectangle.width)