/*
    Objects are a data structure. Composed by attributes (variables) and methods (functions). Their utility is to abstract many characteristics from the real world. Therefore, their existence suffices the Object Oriented Paradigm, to form Object Oriented Programming.

    Structure:

    obj {
    
    key: value ← allows us to store information in the form of key / value pair
   
    }
*/

const obj_car = {
    color: 'silver',
    year: 2020,
    brand: 'Volvo',
    model: 'sedane',
    has_gas: false,
    turn_on () {
        if (obj_car.has_gas) {
            return console.log(`The ${obj_car.brand} ${obj_car.model} is ready to roll`)
        } 
        console.log(`The ${obj_car.brand} ${obj_car.model} has no fuel!`)
    }
}

obj_car.turn_on()

// accessing properties

console.log(obj_car.color) // with the ' . ' operator
// silver


// modifying properties 

obj_car.model = 'couple'

console.log(obj_car)
/**
  {
  color: 'silver',
  year: 2020,
  brand: 'Volvo',
  model: 'couple',
  has_gas: false,
  turn_on: [Function: turn_on]
}
 */


// adding  properties

obj_car.plate = 'AXL-909'

console.log(obj_car)
/*
{
  color: 'silver',
  year: 2020,
  brand: 'Volvo',
  model: 'couple',
  has_gas: false,
  turn_on: [Function: turn_on],
  plate: 'AXL-909'
}
*/

// adding methods

obj_car.parked = true

obj_car.is_parked = () => {
    if (obj_car.parked) {
        return console.log('The car is parked')
    } 
    console.log('The car is not parked')
}

obj_car.is_parked()
// The car is parked

// deleting properties

delete obj_car.color 

console.log(obj_car)
/*

{
  year: 2020,
  brand: 'Volvo',
  model: 'couple',
  has_gas: false,
  turn_on: [Function: turn_on],
  plate: 'AXL-909',
  parked: true,
  is_parked: [Function (anonymous)]
}

*/

// deleting methods

delete obj_car.turn_on

console.log(obj_car)
/*
{
  year: 2020,
  brand: 'Volvo',
  model: 'couple',
  has_gas: false,
  plate: 'AXL-909',
  parked: true,
  is_parked: [Function (anonymous)]
}
*/