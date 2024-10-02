/*
    There're methods that modify the original array (Mutability) and others that do not (Immutability)
*/

// Mutable methods

//  ' push() '

const letters = ['g', 's', 'x', 'j', 'l']
const new_letters = letters.push('k', 'm')

console.log(letters)
//[ 'g', 's', 'x', 'j', 'l', 'k', 'm' ]

console.log(new_letters)
// 7 ← push returns the size of the modified array

// ' pop() '

const removed_letter = letters.pop()
console.log(letters)
// [ 'g', 's', 'x', 'j', 'l', 'k' ]

console.log(removed_letter)
// 'm' ← pop() returns the last element