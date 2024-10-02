/*
    Closure: A function that has access to its outer lexical scope

    lexical scope: Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code. Lexical refers to the definition of variables, functions, etc. Lexical scope is the definition area of an expression. In other words the area where such expression was created.

    Understanding this definition, a "closure" means that a function can access to the outer spaces where variables, functions, and other expressions where defined, also with their own.
*/

const my_var = 10

function outerFunction () {

    function innerFunction () {
        console.log(my_var)
        // my_var lexical scope is the global scope. Is called in the local scope of innerFunction. Therefore it's a closure, it can access to the outer lexical scope, in this case global scope. 
    }

    return innerFunction() // here returning the function invoked
}

// outerFunction() // 10

function other_outer_function () {

    const some_variable = 5

    function other_inner_function () {
        console.log(some_variable)
    }

    return other_inner_function // here rturning the function declaration
}

const expression = other_outer_function() 
// assigning the outer function invoking to a variable, therefore "expression" is a declared function

console.log(expression) // [Function: other_inner_function]

expression() // calling the function → 5

// we can make adders with closures

function my_addr (x) {
    return function (y) {
        return x + y
    }
}

const my_addr5 = my_addr(5)
const my_addr9 = my_addr(9)

console.log(my_addr5(6))    // 11
console.log(my_addr9(7))    // 16
// here we can create a fixed adder with a specific value, then the closure brings the argument "x" we passed first and then invoking the inner function with "y" value we are fixating the first value to sum with any "y"


// we can create functions that "forget" its lexical scope

function incrementer () {
    let count = 0

    return function inc () {
        count++
        console.log(count)
    }
}

const increment_A = incrementer()
increment_A()   // 1
increment_A()   // 2
increment_A()   // 3

const increment_B = incrementer()
increment_B()   // 1
increment_B()   // 2

// increment_B "forgot" its lexical scope. When increment_A was defined, incrementer brought its lexical scope, therefore bringing also the memory within, that includes the value of count. Then, inc could increment count without redeclaring count for it to increment.

// instead, increment_B has no history of count variable. Then it's not the same lexical scope, even though it's the "same" variable. But in memory those (count from increment_A and count from increment_B) are totally different.

// this is not flexible

// can we alter a variable in a global scope using a closure?

let count = 0

function incrementer () {
    return function incr () {
        count++
        console.log(count)
        
    }
}

const inc = incrementer()
// inc() ReferenceError: Cannot access 'count' before initialization
// this happens because the closure would be the global scope, which it could result in double pointers alteration to the same variable. Also because ' count ' is not defined in the same lexical scope of the function ' incr ', therefore it cannot find the variable 