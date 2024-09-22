// functions can have multiple forms of declaration and usage. As objects, these share the same properties of an object in Javascript.

// "classic" declaration → declarative functions

function a(){
    /* ... code ...*/
}

// "variable" declaration → expressive functions
const f = function () {
    // ... more code
}

// nested functions
function some () {
    function thing () {
        function inside () {
            return
        }

        return inside()
    }

    return thing()
}
some()

// we can send a function as parameter to another function → callbacks

function m () { 
    // ...
    return
}

function w (m){
    //...
    return
}
w()

// bounding an object to a function → setting as the execution context of the function the bounded object

const obj_A = {}
function k () {
    return
}

k.call(obj_A)

// nesting a function and returning its declaration → closure
function l () {
    function p () {
        return "Hi"
    }

    return p
}
console.log(l()) // [Function: p]
console.log(l()()) // Hi

// functions inside objects 
const obj = {
    name: 'W',
    function_as_attribute: function function_as_attribute () {
        console.log("I'm a function inside an object, therefore I am a ")
    }
}

obj.function_as_attribute()
console.log(typeof obj.function_as_attribute) // function

