/**
 *  Spread operator:
 *      - Used to deconstruct arrays and utilize them in different contexts 
 *      - Uses cases:
 *          1. Copying arrays → copying an array without using the same memory reference
 *          2. Combining arrays → mixing two arrays
 *          3. Passing arguments to a function → if our function takes more than one argument, we use the spread operator to send multiple arguments in the form of a deconstructed array
 *          4. Creating an array with extra elements → decontructing an 'original' array and then including the other elements
 */

// 1.- Copying arrays

const first = [1, 2, 3, 4, 5]

const copy_first = [...first]

console.log(first)
// [1, 2, 3, 4, 5]

console.log(copy_first)
// [1, 2, 3, 4, 5]


// 2.- Combining arrays

const some_numbers = [6, 5, 4, 3, 2, 1]

const other_numbers = [-7, -8, -9, -10, -11]

const array_combination = [...some_numbers, ...other_numbers]

console.log(array_combination) 
//[    6,  5,  4,  3,   2, 1, -7, -8, -9, -10, -11 ]


// 3.- Passing arguments to a function

function three_op (a, b, c) {
    return (a * b) - c
}

const numbers = [7, 1, -4]

const result = three_op(...numbers)

console.log(result)
// 11

// 4.- Creating an array with extra elements

const original = ['a', 'b', 'c', 'd', 'e']

const added = [...original, 'f', 'g', 'h']

console.log(added)
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]