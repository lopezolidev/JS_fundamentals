/* 
- Global scope → outer context 

- Local scope → inner context

 The local scope is identified by brackets, what is inside is considered local scope and what's outside is considered global scope
*/

const global_variable = 'ø'

function local_function() {

    const local_variable = 'ł'

    console.log(global_variable)
    console.log(local_variable)
}

local_function()

const brand = 'Adidas'
const price = 599
const product = 'jacket'

function ad () {
    const brand = 'Nike'
    const price = '325'
    const product = 'Sneakers'

    return `The product is ${product}, with a price of ${price} from ${brand}`
}

function ad2 () {
    return `The product is ${product}, with a price of ${price} from ${brand}`
}

console.log(ad()) // this variable references are to local variables
console.log(ad2()) // this variable references are for global variables
console.log(`The product is ${product}, with a price of ${price} from ${brand}`) // this variable references are to global scope

// from local scope we can access global scope → BUT NOT viceversa