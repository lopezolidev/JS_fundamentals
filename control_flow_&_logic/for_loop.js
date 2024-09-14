/*
    for (iterator variable, condition for repetition of the cicle, increment of iterator variable) {
        ... some code
    }

    internally this happens:
    1 - declaration and initalization of iterator variable
    2 - check condition for the repetition of the loop
    if true: 
        3 - code inside the loop executes
        4 - increment of the iterator variable
        5 - go back to (2)
    if false:
        6 - stops the loop
*/

const list = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}
/*
    a
    b
    c
    d
    e
*/