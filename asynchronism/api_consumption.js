fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(r => console.log(r))