
<template>

    <h1 v-if="!pokemon" class="wait">Espere porfavor .... </h1>

    <div v-else class="game"> 
        <h1>¿Quien es este pokémon?</h1>

        <h3 class="highScore">HighScore: {{ highScore }}</h3>

        <div v-if="show" class="score-lifes-container">
            <h3>Vidas: {{ lifes }}</h3>
            <h3>Score: {{ score }}</h3>
        </div>
    
        <PokemonPicture
            v-if="show"
            :pokemon-id="pokemon.id"
            :show-pokemon="showPokemon" />    
        <PokemonOptions
            v-if="show"
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer" />    


        <div class="resp-container" v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button class="fade-in" @click="newGame"> 
               {{ buttonText }}
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
            show: true,
            showAnswer: false,
            message: '',
            buttonText: '',
            lifes: 3,
            score: 0,
            highScore: JSON.parse(localStorage.getItem('highScore')) || 0
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
                this.score++
            } else {
                this.message = `Fallaste el pokemon era ${ this.pokemon.name }`
                this.lifes--
                
            }       

        },
        newGame() {
            ( !this.show ) ? this.show = true : ''
            this.pokemonArr =  [],
            this.pokemon = null,
            this.showPokemon = false,
            this.showAnswer = false,
            this.message = ''
            this.mixPokemonArray()
        },
        guardarHighScore(){
            localStorage.setItem('highScore', this.score);
            this.highScore = JSON.parse(localStorage.getItem('highScore'))
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
    updated() {
        if( this.lifes === 0 ){
            this.message = `Has perdido el juego, tu puntaje ha sido de ${ this.score }`  
            this.lifes = 3
            this.show = false
            this.pokemon.isDisable
        } 
        if( this.show === false ){
            this.buttonText = 'Nuevo Juego'
            if ( this.highScore < this.score ){
                this.guardarHighScore()
            }
            this.score = 0
        } else {
            this.buttonText = 'Siguiente Pokemon'
        }
    }
}
</script>



<style scope>

* {
    margin: 0;
}

h2 {
    margin-right: -5%;
    margin-top: opx;
}

.score-lifes-container {
    display: flex;
}

.score-lifes-container h3 {
    margin:  0px 10px 20px;
}

.highScore {
    text-anchor: 8px;
    margin: 10px;
}

.resp-container {
    margin: 10px;
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
    margin: 10px 5px;
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


