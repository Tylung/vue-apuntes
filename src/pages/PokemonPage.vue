
<template>

    <h1>¿Quien es este pokémon?</h1>

    <PokemonPicture :pokemonId="248" :showPokemon="true" />

    <PokemonOptions :pokemons="pokemonArr" />

</template>

<script>
import PokemonPicture  from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log( getPokemonOptions() )

export default {
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonArr: []
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            console.log(this.pokemonArr);
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>






