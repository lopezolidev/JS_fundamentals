/*

    ' this' → refers to the lexical binding but for variables, regarding the object in instances, or the constructor of class (builder function), which later on will refer to the instance of such class. 

*/

class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

const person1 = new Person('Alice', 23)

person1.newMethod = function () {
    console.log(`My name is ${this.name} and I'm ${this.age}`)
}

person1.newMethod()
// My name is Alice and I'm 23