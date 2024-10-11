/*
Async and Await in JavaScript

Async and await are two keywords introduced in JavaScript (ES8) to make asynchronous programming simpler. Before they were introduced, promises were used to handle asynchronous operations, but the code could become complex and difficult to read.

What is Async?

- Async is used to declare a function as asynchronous.
- An asynchronous function always returns a promise.
- Inside an async function, you can use the await keyword.
- What is Await?

Await can only be used inside an async function.
It pauses the execution of the function until the associated promise is resolved or rejected.
The resolved value of the promise is assigned to the variable on the left side of await.

Advantages of using Async/Await:

- More readable code: The code looks more like synchronous code, which improves understanding.
- Easier error handling: You can use try...catch to handle promise errors.
- Better code structure: It makes it easier to organize asynchronous code.


In summary:
Async/await is a syntax that makes asynchronous code easier to write and read. It transforms asynchronous code into a synchronous-like style, improving code maintainability and readability.
*/

// Using promises ↓

// function fetchData () {
//     fetch("https://rickandmortyapi.com/api/location") // ← calling the Rick and Morty API using an URL
//     .then((res) => res.json())  // parsing data into json format (a readable format)
//     .then((data) => console.log(data))  // displaying the result in the console 
//     .catch((err) => console.error(err)) // handling the error
// }
// // function that returns a promise. Using ' fetch ' as a webAPI to display the result of the parsed (in json) response from the API and handling the possible error

// fetchData()

async function fetchData() { // an asynchronous function starts with the keyword ' async '  
    try {   // try / catch block as a good practice, handling errors in every step of the fetching

        let data = await fetch("https://rickandmortyapi.com/api/episode")   // fetching data with keyword ' await ', that leaves the JS engine to work around other parts of the code without stopping synchronously here 

        let response = await data.json()
        // parsing data with ' await ' keyword

        console.log(response) // displaying result in console

    }
        catch ( error ){
        console.error(error) // handling the error in ' catch ' block
    }
}

// fetchData()

// What if we want to iterate over many promises and resolve them iteratively but in an asynchronous context?

const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

// ' for awat ... of ' handles asynchronous code in a synchronous manner like the ' for ... of '

async function fetchNewData() {
    try {
        for await (let url of urls) { 
            // keyword ' await ' after the for loop and declaring a variable of an array or other iterable structure of variables
            
            let response = await fetch(url) // ' await ' for the response from the url
            
            let data = await response.json() // ' await ' to parse data in json format
            
            console.log(data) // displaying data
        }
    } catch (err) {
        console.error(err) // displaying error
    }
}

// even though, it's not a good practice to use ' await ' inside a loop many times. So ' Promise.all() ' solves this issue by handling each promise separately in a parallel manner besides JS being a single thread language.

Promise.all(    // keyword ' all '
    urls.map( url => fetch(url)
                        .then(response => response.json()) // fetch and parsing each url with iterative method ' .map ' along the urls array
            ))
    .then(results => results.forEach( data => console.log(data))) // displaying each result in console
    .catch(error => console.error(`Error: ${error}`)) // handling the error
