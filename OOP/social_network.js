/*
    Requirements:

    1. The user should be able to insert it's name and password
    
    2. The system must be able to validate if those name and password exist in the database

    3. If so, the system should be able to display a welcome message and print the user timeline

    4. If not, the system should display an error message and don't print any timeline

*/

const usersDatabase=[
    {
        username:"andres",
        password:"123",
    },
    {
        username:"caro",
        password:"456",
    },
    {
        username:"mariana",
        password:"789",
    },
]

const usersTimeline=[
    {
        username:"Estefany",
        timeline:"Me encata Javascript!",
    },
    {
        username:"Oscar",
        timeline:"Bebeloper es lo mejor!",
    },
    {
        username:"Mariana",
        timeline:"A mi me gusta mas el cafe que el te",
    },
    {
        username:"Andres",
        timeline:"Yo hoy no quiero trabajar",
    },
]

const username = prompt("What's your username?")
const userPassword = prompt("What's your password?")

function validateData(userName, userPassword, usersDataBase, usersTimeline) {
    const condition = usersDataBase.some(user => userName == user.username && userPassword == user.password)
    
    if (!condition){
        console.log(`Sorry! ${username} is not registered in the system`)
        return
    } 

    const timelineMessage = usersTimeline.find(user => userName == user.username.toLowerCase())

    if (timelineMessage == undefined) {
        console.log(`Sorry! ${userName} does not have any records yet in the system`)
        return
    }
    console.log(`${timelineMessage.timeline}`)
    return

}

validateData(username, userPassword, usersDatabase, usersTimeline)