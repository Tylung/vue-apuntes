
<template>

    <h1>¿Quien es este pokémon?</h1>

    <PokemonPicture :pokemonId="248" :showPokemon="true" />

    <PokemonOptions />

</template>

<script>
import PokemonPicture  from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log( getPokemonOptions() )

export default {
    components: { PokemonPicture, PokemonOptions }
}
</script>






