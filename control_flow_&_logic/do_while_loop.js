/*
    - Do...while loop, almost the same as the while loop, key difference: executes at least once before checking the condition and restarting the loop
    
    Structure:

    iterator declaration & initialization

    do {
        code ...

        iterator increment
    } while ( condition )
*/

let i = -1 // iterator declaration and initialization

do {

    console.log(i + 2*i) // code → formulae for negative odd numbers

    i -= 1 // iterator increment (or decrement in this case)

} while (i > -10) // condition

/*

-3
-6
-9
-12
-15
-18
-21
-24
-27

*/