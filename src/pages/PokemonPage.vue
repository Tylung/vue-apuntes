
<template>

    <h1 v-if="!pokemon" class="wait">Espere porfavor .... </h1>

    <div v-else class="game"> 
        <h1>¿Quien es este pokémon?</h1>
    
        <PokemonPicture
            :pokemon-id="pokemon.id"
            :show-pokemon="showPokemon" />    
        <PokemonOptions
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer" />    


        <div v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button class="fade-in" @click="newGame"> 
                Nuevo juego 
            </button>
        </div>
      
    </div>

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
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[rndInt]

            
        },
        checkAnswer( pokemonId ) {
            if ( this.showPokemon ) {
                return 0;
            }

            this.showPokemon = true
            this.showAnswer = true

            if( this.pokemon.id === pokemonId ){
                this.message = `Has Acertado es ${ this.pokemon.name }`
            } else {
                this.message = `Fallaste el pokemon era ${ this.pokemon.name }`
            }       

        },
        newGame() {
            this.pokemonArr =  [],
            this.pokemon = null,
            this.showPokemon = false,
            this.showAnswer = false,
            this.message = ''
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>



<style scope>

h2 {
    margin-right: -5%;
    margin-top: opx;
}

.wait {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
}


.game {
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
}

.game img {
    margin: auto 10px;
}

button {
    font-size: 1em;
    padding: 1em 2em;
    /* margin-left: 100vw; */
    margin-top: 0px;
    margin-right: -5%;
    -webkit-appearance: none;
    appearance: none;
    background-color: #34495e;
    color: #fff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: all;
} 

button:hover {
    /* color: #000; */
    background-color: #6a5acd;
    transition: backgroud-color ease-in 0.25s, color ease-in 0.25s;
}

</style>


