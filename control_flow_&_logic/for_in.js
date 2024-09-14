/*
    - For...in loops are used primarily for ENUMERABLE objects, but can be used too in ITERABLE objects
    - Enumerable objects are:
        - objects
        - enums (data type)

    Structure:
        for (property in object) {
            code ...
        }
    
        - the code inside references a property inside the object, therefore, in the iteration refering to the current property in the object just like an element in an interable object. This is:

        1st iteration → code refers to the current property → code applies to the first property of the object
        2nd iteration → code refers to the current property → code applies to the second property of the object
        
        and so on
*/

const power_tools = {
    drill: 47,
    saw: 92,
    hammer: 18,
    screwdriver: 65,
    grinder: 33,
    router: 7,
    sander: 21,
    jigsaw: 56,
    nailGun: 88,
    impactWrench: 12
  }

for (tool in power_tools) {
    console.log("tool: ",tool)
    console.log(`${tool} : ${power_tools[tool]}`)
}

for (tool in power_tools) {
    if (tool.startsWith('s')){
        power_tools[tool] = power_tools[tool] + 100 
    }
}

console.log(power_tools)
/*
{
  drill: 47,
  saw: 192,
  hammer: 18,
  screwdriver: 165,
  grinder: 33,
  router: 7,
  sander: 121,
  jigsaw: 56,
  nailGun: 88,
  impactWrench: 12
}
*/