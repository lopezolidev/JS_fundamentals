/*

    - Useful in control flow logic

    - 3 operators: && (and), || (or), ! (not)

    True && True → True
    True && False → False
    False && True → False
    False && False → False


    True || True → True
    True || False → True
    False || True → True
    False || False → False

    !True → False
    !False → True

*/ 

const a = 0
const b = 1
const c = "0"

console.log(a === b && a == c) // false
console.log(a === b || a == c) // true
console.log(a <= b && a !== c) // true
console.log(!(a !== b || c < b)) // false
