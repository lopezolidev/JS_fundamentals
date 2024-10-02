/*
Pure functions:
    - don't alter any external variables, objects, or the state of elements. 
    - only work with inner operations
    - composition of pure functions is also a pure function
    - have a deterministic behavior
    - easier to debug

Impure functions:
    - alter the state of global variables or the state of elements such as:
        - HTTP Requests
        - html elements brought into the javascript file (DOM manipulation)
        - objects outside of the execution context
    - their behavior is undeterministic
    - harder to debug in complex projects

 */

    // pure function

function pure_A (parameter) {
    return parameter + 5
}

console.log(pure_A(10)) // 15

    // composition of pure functions

function pure_B (a) {
    return a * a
}

const result = pure_A(pure_B(9)) // ← composition is also a pure function

console.log(result) // 86

// impure function

let i = 0

function impure_A () {
    i++
}


console.log(i) // 0
impure_A()

console.log(i) // 1
impure_A()

console.log(i) // 2

function impure_B (b) {
    i**
    b()
    return
}

impure_B(impure_A) // composition of impure functions is also an impure function
console.log(i)  // 3

