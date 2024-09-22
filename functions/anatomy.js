function discountWhenOver10 (items, discount) {
    let accum = 0
    let i = 0
    while (i < items.length){
        accum = accum + items[i].price
        i++
    }

    let disc = 0

    if (items.length >= 7 ) {
        disc = (accum * discount) / 100
    } 

    const final_price = accum - disc 
    return final_price
}
 // if there're 8+ articles, the discount is applied

 const elements = [
    { name: "Product 1", price: 29.99 },
    { name: "Item 2", price: 15.75 },
    { name: "Thing 3", price: 49.95 },
    { name: "Object 4", price: 12.30 },
    { name: "Stuff 5", price: 8.99 },
    { name: "Item 6", price: 34.50 },
    // { name: "Thing 7", price: 22.10 },
    // { name: "Object 8", price: 5.25 }
  ]


  const discount = 25

  console.log("Articles in your shopping cart: " + elements.length)
  console.log("applied discount when 8+ articles: " + discount + '%')
  console.log("The final price is: " + discountWhenOver10(elements, discount).toFixed(2) + "$")