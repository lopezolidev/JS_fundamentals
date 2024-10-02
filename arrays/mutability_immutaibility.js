/*
    Certain methods can alter (or not) the structure of an array. Transforming it into another array. Or it could not alter such structure and leave it the same 
*/

const books = ["snowcrash", "neuromancer", "infinite jest", "it"]

const new_books = books.concat(["the magic mountain", "Don Quijote"])

console.log(books) 
// [ 'snowcrash', 'neuromancer', 'infinite jest', 'it' ]

console.log(new_books) 
// [ 'snowcrash', 'neuromancer', 'infinite jest', 'it', 'the magic mountain', 'Don Quijote' ] ← we created a new array, without altering the original

const things = ['thing 1', 'thing 2', 'thing 3']
things.push('thing 4')
console.log(things)
// [ 'thing 1', 'thing 2', 'thing 3', 'thing 4' ] ← we altered the original array

// checking if an array is an array

const isArray = Array.isArray(things)
console.log(isArray) 
// true

const looks_like_array = {a: 'something', b: 'something', c: 'something' }
const isArray2 = Array.isArray(looks_like_array)
console.log(isArray2)
// false

// mixing loops with arrays

const numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum) // 5

