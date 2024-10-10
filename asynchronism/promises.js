/*
Promises in JavaScript

Promises in JavaScript are a core concept for dealing with asynchronous operations. They let developers write cleaner, more organized, and easier-to-manage code when working with tasks that take time to finish, like fetching data from an API or running background jobs.

What's an Asynchronous Operation?

An asynchronous operation is a task that starts and then runs later, without stopping the main part of your code from running. This means your program can keep doing other things while the asynchronous task finishes up.

* How Do Promises Work?

Promises have two main states:

- Pending: The promise hasn't finished yet.

- Fulfilled: The task finished successfully, and we get a result.

- Rejected: Something went wrong, and we get an error.

You make a promise using the Promise() function. Inside this function, you put another function that does the asynchronous work. 

This inner function has two parts:

- Resolve: This is called when the task finishes successfully. You give it the result.
- Reject: This is called when something goes wrong. You give it the error.

* Chaining Promises

You can connect promises together using .then() and .catch(). .then() is used to do something with the result when the promise is fulfilled, and .catch() is used to handle errors.

    Promises are an object that represents a future action, which will have:
    
    States:
    -   Pending (starting state, the promised hasn't been resolved yet)
    -   Fulfilled (promise was a success)
    -   Rejected (promise wasn't resolved)

    Callbacks: ← actions that can be taken with the promise once it has been fulfilled or rejected 
    -   resolve (do something with the result of the promise)
    -   reject (deal with the failed promise)

    methods:
    .then() ← allows us to work with the callbacks of the promise once it is out of pending state
*/

const promise = new Promise( (resolve, reject) => {
    
    setTimeout(() => {
        let operationSuccessful = true

        if(operationSuccessful) {
            resolve("The promised was fulfilled with no issues")
        } else {
            reject("The promise failed")
        }
        // ' resolve ' and ' reject ' are somehow like returns, or functions that execute or return what you send as argument
    }, 3000)

    // a setTimeout function to execute the callbacks or ' resolve ' and ' reject ' once the time has passed and the condition is met in the conditional
})

promise
    .then( (successMessage) => {
        console.log(successMessage)

        // this ' .then() ' deals with the ' resolve ' callback. Recieves the call from ' resolve ' and outputs it's result 
    })
    .catch( (failedMessage) => {
        console.log(failedMessage)

        // ' .catch() ' method deals with the ' reject ' callback,  uses the argument of the ' reject ' as argument in its body  
    })
// this part is how the promise is going to be executed


promise
// this is how we call a promise. We must remember that is an object that somewhat behaves like a function, it must have an inner mechanism to work

// ...after 3 seconds... The promised was fulfilled with no issues

console.log(typeof(promise))
/*

object
The promised was fulfilled with no issues  

←←← after 3 seconds the promise was resolved. But first it came an execution of the console.log, that means the JavaScript leaved the promise in WebAPI section while was solving the tasks at the callstack, leaving the result in the queue and finally, after the callstack was empty, delivered the result of the promise (dequeueing the promise) to the callstack
*/