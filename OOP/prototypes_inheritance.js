// Inheritance is a fundamental pilar from OOP. Where a parent class can inherit to its child classes its attributes and methods, therefore, child classes inherit those attributes and methods and can use them as if they were from them

class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    makeSound () {
        console.log(`${this.name} is making a sound`)
    }
}

class Dog extends Animal {
    constructor(name, type, breed) {
        super(name, type) 
        // with ' super(...) ' we are calling the constructor of the parent class, sending the arguments of the child class makes available in this child class those attributes

        this.breed = breed
        // this is a new attribute for this class, therefore we must initialize it here, in the child class
    }

    makeSound () {
        console.log(`${this.name} the dog, is making a sound`)
    } // overwriting the method from the parent class

    run () {
        console.log(`${this.name} the dog is running with energy`)
    }
}

const dog1 = new Dog('Bontoy', 'dog', 'Doberman')

dog1.makeSound()
// Bontoy the dog, is making a sound

dog1.run()
// Bontoy the dog is running with energy

// we can also look at the prototype of these classes. Each one, when are used, creates a prototype (linked to the prototype chain) which stores all the methods and attributes like a blueprint

console.log(Dog.prototype)
// Animal {}

console.log(Animal.prototype)
// {} ← an object itself

console.log(Animal.prototype.prototype)
// undefined ← all the objects and elements in javascript end in ' undefined '