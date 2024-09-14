// Number data type
const integer = 5
const float_number = 6.78
console.log(typeof integer) // number
console.log(typeof float_number) // number

// JS treats integers and floats as the same

// Scientific notation:
const sci = 3e8
const sci2 = 4e-9
console.log(sci) // 300000000
console.log(sci2) // 4e-9

// Inifinite and NaN

const infty = Infinity
const this_is_not_a_number = NaN

// basic operations

const sum = 3 + 7
const sum_integer_float = 2 + 9.643
console.log(sum_integer_float) // 11.643 ← the result is casted into a float

const substraction = 5 - 8
const multiplication = 32 * 65
const divison = 12 / 6

// more complex operations

const exponentiation = 4 ** 6
const square_root = Math.sqrt(64)
const abs_value = Math.abs(-7.5)
const random_number = Math.random()
console.log(square_root) // 8
console.log(abs_value) // 7.5
console.log(random_number) // 0.660103242261775
const modulo = 23 % 5

// issues with appreciation 
const rounding_sum = 0.1 + 0.2
console.log(rounding_sum) // 0.30000000000000004 ← this is a number
console.log(rounding_sum.toFixed(1)) // 0.3 ← this is a string
console.log(typeof rounding_sum.toFixed(1)) // string

console.log(parseFloat(rounding_sum.toFixed(1))) // 0.3 ← now this is a number
console.log(typeof parseFloat(rounding_sum.toFixed(1))) // number

// Let's do comparissons
console.log(rounding_sum == rounding_sum.toFixed(1)) // false → comparing a number to a string
console.log(rounding_sum == parseFloat(rounding_sum.toFixed(1))) // false → comparing a number to another float but with different number of digits

console.log(rounding_sum === rounding_sum.toFixed(1)) // false → comparing value and type of a number to a string
console.log(rounding_sum === parseFloat(rounding_sum.toFixed(1))) // false → comparing value and type of number to another number but with different number of digits