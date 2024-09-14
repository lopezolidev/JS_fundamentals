/*
    - for...of only works for iterable objects, if 'x' is not iterable this method won't work
    - Iterable objects: 
        - arrays
        - strings
    
    Structure:
        for ( element of list/string) {
            code ...
        }

    - executes the code for every element in the list
    - the reference to the element during the execution in the body of the loop, is the current object of the iteration: 
        iteration 1 → code makes a reference to the element → code applies to the first element
        iteration 2 → code makes a reference to the element → code applies to the second element 

        and so on

*/

const bookshelf = ['A', 'B', 'C', 'D']

for (book of bookshelf){
    if(bookshelf.indexOf(book) % 2 == 0){
        bookshelf[bookshelf.indexOf(book)] = book + ' → øþł' // modifying the characters of an array of strings 
    }
}


console.log(bookshelf)
// [ 'A → øþł', 'B', 'C → øþł', 'D' ]