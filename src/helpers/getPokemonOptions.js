

const getPokemons = () => {

    // const pokemonsArr = Array.from( Array[650] );

    const pokemonsArr = Array(650).fill(null)

    return pokemonsArr.map( ( _, index ) => index + 1 )
}




const getPokemonOptions = () => {

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

    getPokemonNames( mixedPokemons.splice(0, 4) )




}

const getPokemonNames = ( [a, b, c, d  ] = [] ) => {

    console.log({a, b, c, d});
    
}



export default getPokemonOptions

