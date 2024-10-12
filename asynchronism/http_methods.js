/*
    We're going to create 2 functions related to http requests and fetch, one using promises and the other using async / await
*/

const listElement = document.querySelector(".posts")

const postTemplate = document.getElementById("single-post")

const form = document.querySelector("#new-post form")

const fetchButton = document.querySelector("#available-posts button")

const postList = document.querySelector("#posts-container");

function sendHTTPRequest (method, url, data ) {
    return fetch(url, {     
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then( (res) => {
        return res.json()})

    /*
     fetch recieves 2 arguments, an url and an object, composed by: 
    -   A method, wheter it is: GET, POST, PUT, DELETE;
    -   A body, which will be stringified, parsing it into the format that the server can store
    -   An object of headers, which will be the content type, cors, and other parameters
    
    Then we solve the promise parsing it in JSON, in the case of a GET
    */
   }

async function fetchData () {
    let responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    
    const listOfPosts = responseData
    
    let postsArray = []

    for(const post of listOfPosts){
        
        const postContainer = document.createElement("article")    

        postContainer.id = post.id 
        //  the post Id comes with the GET HTTP response from the server. We're assigning this Id to the postContainer Id, which later on we'll use in the DELETE method or even in the PUT method. Knowing this Id helps us to send the doc-appropriate request to the server. 
        
        postContainer.classList.add("post-item")
        
        const title = document.createElement("h2")
        
        title.textContent = post.title
        
        const body = document.createElement("p")
        body.textContent = post.body
        
        const button = document.createElement("button")
        
        button.textContent = "DELETE Content"
        
        postContainer.append(title)
        
        postContainer.append(body)
        
        postContainer.append(button)
        
        postsArray.push(postContainer)
    }


    listElement.append(...postsArray)
    // optimizing loading of content by storing each post object inside an array and then loading each post from the array into the listElement (DOM). That way we're loading the HTML only once instead for every new post that comes in the GET request

}// this function creates and appends the posts in the HTML, manipulating the DOM, and inyecting such information in each of our html elements, that later on we'll append in the listElement (container in the HTML)

fetchButton.addEventListener('click', fetchData)

async function createPost(title, content) {
    const userId = Math.random()

    const post = {
        title: title,
        body: content,
        userId: userId
    }


    sendHTTPRequest('POST', "https://jsonplaceholder.typicode.com/posts", post)
} // this function sends a POST request to the jsonplaceholder API, takes the title and content we want to send (extracted from any source of the DOM) and a random userID


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = event.currentTarget.querySelector('#title').value

    const content = event.currentTarget.querySelector('#content').value

    createPost(title, content)
}) // method to create cards with posts in the DOM, using our function of createPost, which in turn sends an HTTP request using fetch with post method and the data we extract from title and content fields in the html

postList.addEventListener('click', (e) => {
    console.log(e)
    if(e.target.tagName === 'BUTTON'){
        const postId = e.target.closest('article').id 
        // with .closest('<html element>') we extract the closest html element from this event.target, that is the closest specific html element to such other html element that triggered the event

        sendHTTPRequest ('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
        // we're deleting such specific post using this method by sending the id. This form to delete an element from what the API provides comes from the official docs 
    }
})

