// this methods iterate over the original array and DO NOT modify the original array (Immutability)

// ' filter() ' ← returns an array with the elements that pass certain condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const odd_nums = nums.filter( n => n % 2 === 1 )

console.log(odd_nums)   // [ 1, 3, 5, 7, 9 ]

// ' reduce() ' ← returns the sum, product, or any operation regarding the numbers in an array

const divided = nums.reduce( (accumulator, currentValue) => (accumulator / currentValue) + currentValue, 0) 
// the last value in reduce() indicates from which accumulator will start

console.log(divided)

// how to count the frequency of elemens in an array?

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon'];

const new_words = words.reduce( (accum, currV) => {

    if( accum[currV] ){
        accum[currV]++
    } else {
        accum[currV] = 1
    }

    return accum // returning the object at the end, allows the function to compare if such element exists in the object previously

}, {})

console.table(new_words)

/*
┌────────────┬────────┐
│  (index)   │ Values │
├────────────┼────────┤
│   apple    │   2    │
│   banana   │   2    │
│   cherry   │   2    │
│    date    │   2    │
│ elderberry │   2    │
│    fig     │   2    │
│   grape    │   2    │
│  honeydew  │   2    │
│    kiwi    │   2    │
│   lemon    │   2    │
└────────────┴────────┘
*/