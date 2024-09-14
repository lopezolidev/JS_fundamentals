/*
    switch(expr) {  
    
    in the background, switch uses '===' comparison for each case, you cannot insert a logical expression or a different comparison. Only checks strict equality

        case a:  ← comparing the expr with a like so: expr === a → if true, executes the following code
            ...some code
            break ← stops the comparisson here, to not continue comparing to the next case
        case b:
            ... some code
            break
        .
        .
        .
        default:
            ... final code if none of the previous cases got executed
    
    }
*/

const expr = "sphere"

switch(expr){
    case 'triangles':
        console.log("The triangles have 3 sides")
        break
    case 'squares':
        console.log("Squares are 2D figures with 4 equal sides")
        break
    case 'oval':
        console.log("The oval is like an elongated circle")
        break
    case 'sphere':
    case 'cubes':
        console.log("The cubes and spheres are 3D solids")
        break
    default:
        console.log(`I don't know that figure called ${expr}`)
}

