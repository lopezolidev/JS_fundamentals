// ' Class ' syntax it's just sugar syntax for object creation through functions to appeal more to other object oriented languages based on classes. JavaScript is based on Prototypes

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const person1 = new Person('Felicia', 22)

person1.greet()
// Hello, my name is Felicia and I'm 22 years old