<template>
    <h1>Pokemon: <span>#{{ id }}</span> </h1>
    <div v-if="pokemon">
        <img class="pokemon" :src="pokemon.sprites.other.home.front_default" alt="pokemon.name">
    </div>
</template>

<script>

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            // id: this.$route.params.pokemonid
            pokemon: null
        }
    },
    
    created() {
        // const { pokemonid } = this.$route.params

        // console.log(pokemonid)

        // this.id = pokemonid
        // console.log(this.$props);
        // console.log(this.$attrs)
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json() )
                console.log(pokemon)
                this.pokemon = pokemon
            } catch(error) {
                this.$router.push('/')
                console.log('No hay nada que hacer aquí')
            }
        }
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }

}
</script>



<style scoped>

.pokemon {
    width: 200px;
}

</style>