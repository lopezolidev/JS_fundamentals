// Finding the first elements in an array or its index that suffices a specific criteria. Both return -1 when the element is not found

const random_numbers = []

for (let i = 0; i < 10; i++){
    random_numbers.push(parseInt(Math.floor(Math.random() * 100)))
}

const element = random_numbers.find( n => n > 50)

console.log(element)

const element_index = random_numbers.findIndex( n => n > 40)