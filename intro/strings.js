// strings are a sequence of characters that store textual information

let word_1 = 'a memory word' // → with simple quotes
let word_2 = "some data around..." // → w/ double quotes
let word_3 = 'program information !!!'


console.log(word_1) // a memory word
console.log(word_2) // some data around...
console.log(word_3) //  program information !!!
console.log(word_1 + ' ' + word_2) // concatenating 2 strings and adding space in between
// a memory word some data around...

let using_templates = `this is a template literal. You can say "${word_1}" or "${word_3}" like variables`
console.log(using_templates)  
// this is a template literal. You can say "a memory word" or "program information !!!" like variables