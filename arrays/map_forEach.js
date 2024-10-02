// Methods that DO NOT modify the original array but iterate over each element → ' forEach() ' & ' map() '

// ' map() '

const numbers = [1, 3, 6, 9, 12, 15]

const cubed = numbers.map(num => num **3 ) // ' map() ' creates a new array

console.log(numbers) // [ 1, 3, 6, 9, 12, 15 ]
console.log(cubed) // [ 1, 27, 216, 729, 1728, 3375 ]

// ' forEach() '

const squared = numbers.forEach(num => console.log(num ** 2))
// 1 9 36 81 144 225

console.log(squared) // undefined ← nothing here!

// transforming temperatures from Farenheit into Celcius

const farenheit_degrees = [32, 40, 50, 60, 70, 80, 90, 100, 110, 120] 

const celcius_degrees = farenheit_degrees.map(degree => parseFloat(((degree - 32) * 5/9).toFixed(2)) )

console.log(farenheit_degrees)
// [ 32, 40,  50,  60,  70, 80, 90, 100, 110, 120 ]

console.log(celcius_degrees)
// [ 0,  4.44, 10, 15.56, 21.11, 26.67, 32.22, 37.78, 43.33, 48.89 ]

// sum the elements in an array
const randomIntegers = [];

for (let i = 0; i < 10; i++) {
  randomIntegers.push(Math.floor(Math.random() * 100)); // Generates random integers between 0 and 99
}

let sum = 0

randomIntegers.forEach( num => {
    sum += num
})

console.log(sum) // 501