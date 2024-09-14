/*
    if (certain condition w/ →
        - comparison operators
        - logical operators) 
        {
            ...code goes here
        }
    else if ( another condition...)
    {
        ... more code
    }
    else {
        ... whatever code is executed here if the main (or any) condition doesn't execute → default
    }

*/

const a = -20

if (a >= 100){
    console.log("the number is greater than 100")
} else if (  a > 10 && a < 40) {
    console.log("the number is less than 40 and greater than 10")
} else if ( a < 0 ){
    console.log("this is a negative number")
} else {
    console.log("this is a number between 0 and 10 or between 40 and 99")
}