// PRIMITIVE data types

// strings
let user_name = "Xavier"

// ints
let user_age = 34

// bigints → extremely big integers

let size_of_earth = 2n 
console.log(size_of_earth) // 2n

// floats
let city_size = 300.46

// booleans
let are_you_drunk = true

// Null
let nothing_here = null

// undefined
let i_cannot_understand_this = undefined

// Symbol → a unique element that cannot be compared to nothing else
let unique_key = Symbol('my_unique_key')

let unique_key_2 = Symbol('my_unique_key')

let passwords = {}

passwords[unique_key] = 'Value for unique key'
passwords[unique_key_2] = 'Value for unique key'
//both have the same value

console.log(passwords[unique_key]) // Value for unique key
console.log(passwords[unique_key_2]) // Value for unique key

console.log(unique_key === unique_key_2) // false



// ===================== //

// COMPLEX data types

// objects

let my_data = {
    user_name,
    user_age,
    are_you_drunk
}

// arrays

let vehicles = ['bike', 'toyota corolla', 'truck', 'helicopter']

// functions

function greet(){
    return 'Hello'
}

console.log(greet()) // Hello