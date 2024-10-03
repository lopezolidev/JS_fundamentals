// Creating objects using a constructor function. Using an 'object factory' and prototyping the objects

function Car(year, model, color, brand){
    this.year = year
    this.model = model
    this.color = color
    this.brand = brand
}

const attributes_car_1 = [2020, 'celica', 'black', 'Toyota']

const car_1 = new Car(...attributes_car_1) // ← using ' new ' keyword to create a new object from the 'object factory' function

console.log(car_1)
// Car { year: 2020, model: 'celica', color: 'black', brand: 'Toyota' }


// adding properties → through an attribute in the object

car_1.number = '434-7665-4233'

console.log(car_1)
/*
Car {
  year: 2020,
  model: 'celica',
  color: 'black',
  brand: 'Toyota',
  number: '434-7665-4233'
}
  
*/

// adding properties → through prototyping the object factory function

Car.prototype.plate = 'AXK - 876' // attributes added to the prototype do not appear in the function right away. These exist in the prototype of function itself. There, those are accessible

const attributes_car_2 = [2018, 'explorer', 'black', 'Ford']

const car_2 = new Car(...attributes_car_2)

console.log(car_2)
// Car { year: 2018, model: 'explorer', color: 'black', brand: 'Ford' }

console.log(Car.prototype.plate)
// AXK - 876

console.log(car_2.plate)
// AXK - 876


// Adding methods to the object factory

Car.prototype.turn_on = function() {
    console.log(`The ${this.brand} ${this.model} with plate ${this.plate} is ready to roll!`)
} // now this method is available into the each instantiated object 


car_1.turn_on()
// The Toyota celica with plate AXK - 876 is ready to roll!

car_2.turn_on()
// The Ford explorer with plate AXK - 876 is ready to roll!