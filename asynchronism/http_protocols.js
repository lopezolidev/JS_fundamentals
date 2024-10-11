/*

    HTTP is the protocol in which communication across the web occurs. It's the basis for client server communication. Also, the fundamentals for web development and client - server architecture

    Verbs in HTTP:
    -   GET: bring information to the client from the server
    -   POST: deliver information from the client to the server
    -   PUT or PATCH: modify information, requesting from the client to the server
    -   DELETE: eliminate information placed in the server, requesting from the client

    Status codes
    These are numbers ranging from 100 to 599; inform about the result of the communication between the client and the server:
    - Informational responses ( 100 – 199 )
    - Successful responses ( 200 – 299 )
    - Redirection messages ( 300 – 399 )
    - Client error responses ( 400 – 499 )
    - Server error responses ( 500 – 599 )
*/ 

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>console.log(data))

/*  In browser -> Inspector -> Network -> Headers -> General:

Request URL:    https://jsonplaceholder.typicode.com/posts
Request Method: GET             ← HTTP verb
Status Code:    200 OK         ← HTTP status code
Remote Address: 104.21.59.19:443
Referrer Policy:    strict-origin-when-cross-origin
*/