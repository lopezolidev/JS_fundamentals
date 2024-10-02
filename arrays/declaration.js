/*
    Arrays are a linear collection of elements 
*/  

// Creating arrays

// 1.- With ' Array() '

const my_arr = Array("item 1", "item 2", "item 3", "item 4")
console.log(my_arr) // [ 'item 1', 'item 2', 'item 3', 'item 4' ]

const my_arr_2 = Array(2) 
console.log(my_arr_2) // [ <2 empty items> ] ← with only one number, creates an empty array of that number of position

// 2.- With ' new Array() '

const my_arr_3 = new Array(-1, -2, -3, -4, -5)
console.log(my_arr_3) // [ -1, -2, -3, -4, -5 ]

const varied_my_array_4 = new Array(true, "OOP", 99, {attribute: "another jest"}, -7)
console.log(varied_my_array_4) // [ true, 'OOP', 99, { attribute: 'another jest' }, -7 ]

// const my_arr_e = new Array(-1)
// console.log(my_arr_e) ← RangeError: Invalid array length

// 3.- with ' [] '

const empty_arr = []

const single_element_array = [-6]

const multiple_elements_array = [6, 9, 3, -12, -33, 72]

const varied_array = [
    4,
    true,
    {
        ingredient: 'cream',
        value: 4
    },
    "spring",
    8.6857473,
]

console.log(varied_array) // [ 4, true, { ingredient: 'cream', value: 4 }, 'spring', 8.6857473 ]


// Accessing elements

console.log(varied_array[4])    // 8.6857473
console.log(varied_array[2])    // { ingredient: 'cream', value: 4 }

// Knowing the length of an array

console.log(varied_array.length) // ← its an attribute, not a method from the Object Array
// 5

