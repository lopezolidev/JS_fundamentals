// We want to know if two variables are the same, are different, one is greater or less than the other
const a = 1
const b = 2
const c = "1"

// equality
console.log(a == b) // false

// greater than
console.log(a > b) //false

// less than
console.log(a < b) // true

// less or equal than
console.log(a <= b) // true

// greater or equal than
console.log(a >= b) // false

// strictly equal to
console.log(a === b) // false

// equality of number and string
console.log(a == c) // true

// strict equality between number and string
console.log(a === c) // false

// less or equal of number and string
console.log(a <= c) // true

// greater or equal of number and string
console.log(a >= c) // true
 
// less between number and string
console.log(a < c) // false

// greater than between number and string
console.log(a > c) // false

// different than number and string
console.log(a != b) // true

// strictly different between number and string of numbers with equal type
console.log(a !== b) // true

// different between number and string
console.log(a != c) // false

// strictly different between number and string
console.log(a !== c) // true

// less than between string and number differing in value
console.log(c < b) // true

// different between string and number differing in value and type
console.log(c != b) // true

// strict difference between string and number and string differing in value and type
console.log(c !== b) // true

// less or equal than between string and number differing in value and type
console.log(c <= b) // true