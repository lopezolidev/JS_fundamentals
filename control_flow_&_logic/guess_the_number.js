/*
    Code to be executed in the browser

*/

const secret_number = Math.floor(Math.random() * 10 + 1)

const player_number = parseInt(prompt("Insert a number between 1 and 10: "))

console.log(`the number which you're playing is ${player_number}`)

if(player_number == secret_number){
    console.log("Congratulations! ")
} else if(player_number > secret_number){
    console.log("the number is too big!")
} else {
    console.log("the number is too small!")
}