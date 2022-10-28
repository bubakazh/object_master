
const pokemons = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    // arr of pokemon objects where the id is evenly divislbe by 3
    let results = []
    for(let i = 0; i < pokemons.length; i++){
        if(pokemons[i].id % 3 === 0){
            results.push(pokemons[i])
        }
    }
    console.log(results)

    // this thing down here does the same thing as the thing up there.
    const prob1 = pokemons.filter((pokemon) => pokemon.id % 3 === 0 )
    console.log(prob1)

    // arr of pokemon obj that are fire type.
    const prob2 = pokemons.filter((pokemon) => pokemon.types.includes("fire"))
    console.log(prob2)

    // arr of pokemon obj that have more than one type
    const prob3 = pokemons.filter((pokemon) => pokemon.types.length > 1)
    console.log(prob3)

    // arr with just names of pokemon
    const prob4 = pokemons.map((pokemon) => pokemon.name)
    console.log(prob4)

    // arr with just names of pokemon w/ id greater than 99
    const prob5 = pokemons.filter((pokemon) => pokemon.id > 99).map((pokemon) => pokemon.name)
    console.log(prob5)

    // arr w/ just names of the pokemon whose only type is poison
    const prob6 = pokemons.filter((pokemon) => pokemon.types.length === 1 && pokemon.types[0] === "poison")
    console.log(prob6)

    // arr containing just the first type of all the pokemon whose second type is flying
    const prob7 = pokemons.filter((pokemon) => pokemon.types.length > 1 && pokemon.types[1] === "flying")
    .map((pokemon) => {
        return(
            {
                name : pokemon.name, 
                type : pokemon.types[0]
            }
        )
    })
    console.log(prob7)

    // a count of the number of pokemon that are the "normal" type
    const prob8 = pokemons.filter((pokemon) => pokemon.types.includes("normal"))
    console.log("Number of normal types: " + prob8.length)