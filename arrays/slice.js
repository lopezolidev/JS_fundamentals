// obtaining a segment of our array, without modifying the original array

const animals = ['ant', 'camel', 'cow', 'duck', 'pig', 'chicken', 'bee', 'bison']

const from_2 = animals.slice(2)
console.log(from_2) 
// [ 'cow', 'duck', 'pig', 'chicken', 'bee', 'bison' ]

const from_2_to_6 = animals.slice(2, 7) // slice( start, end + 1) ← doesn't include the last position, hence we must sum 1
console.log(from_2_to_6) 
// [ 'cow', 'duck', 'pig', 'chicken', 'bee' ]

const from_2_to_last = animals.slice(2, animals.length + 1)
console.log(from_2_to_last)
// [ 'cow', 'duck', 'pig', 'chicken', 'bee', 'bison' ]

const counting_backwards = animals.slice(-3) // -1 is the last element → -n will be the element in such index starting from the last → -4: pig
console.log(counting_backwards) // [ 'chicken', 'bee', 'bison' ]

const from_3_to_last = animals.slice(3, -1)
console.log(from_3_to_last)
// [ 'duck', 'pig', 'chicken', 'bee' ]

const all_of_the_array = animals.slice() // when without indexes, returns the same array
console.log(all_of_the_array)
// [ 'ant', 'camel', 'cow', 'duck', 'pig', 'chicken', 'bee', 'bison' ]

console.log(animals)
// [ 'ant', 'camel', 'cow', 'duck', 'pig', 'chicken', 'bee', 'bison' ] ← the original array is not modified
