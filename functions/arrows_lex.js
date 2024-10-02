// arow functions are a concise way to write functions and simplify the readability of our code minimizing the syntax

// traditional function declaration → expressive function

const trad_1 = function (name) {
    return `Hello ${name}`
} 

// expressive function w/ simplified syntax

const simplified = (name) => {
    return `Hello there ${name}`
} 

// arrow function → expressive function → only possible through this declaration

const arrowFun = name => `How're you doing, ${name}?` // ← as there's only one parameter we don't need to place parenthesis

console.log(trad_1('Charles')) // Hello Charles
console.log(simplified('Stephanie')) // Hello there Stephanie
console.log(arrowFun('Ann')) // How're you doing, Ann?

/* ==================================== */

// lexical binding refers to the context of execution of functions

const character = {
    name: 'Peter Parker',
    messageTradFunction: function (message) {
        return `Hi, I'm ${this.name}, and ${message}`
    },
    messageArrowFun: (message) => `Hi, I'm ${this.name}, and ${message}`,
    messageArrowFunThis:
        function (message) {
            that = this
            const arrow_fun = (message, that) => `Hi, I'm ${that.name}, and ${message}`
            return arrow_fun(message, that)
        }
}

const phrase = "I'm just a kid from Queens."
console.log(character.messageTradFunction(phrase)) // Hi, I'm Peter Parker, and I'm just a kid from Queens.
console.log(character.messageArrowFun(phrase)) // Hi, I'm undefined, and I'm just a kid from Queens.
console.log(character.messageArrowFunThis(phrase)) // Hi, I'm Peter Parker, and I'm just a kid from Queens.
// with arrow functions, they're not "aware" of the execution context. Like that doesn't exist for them. In order to correct this we can use bind, create a class or a temporary variable
