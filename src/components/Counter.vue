
<template>
  <h2> {{ customTitle }} </h2>
  <p> {{ counter }} <sup>2</sup> = {{ counter * counter }} </p>

    <div class="buttons-container">
        <button v-on:click="increase"> +1 </button>
        <!-- Ambos son sinonimos -->
        <button @click="decrease"> -1 </button>
    </div>

</template> 

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator( value ) {
                return value >= 0
            }
        }
    },
    // name: 'R2d2'
    data() {
        return {
            counter: this.start,
        }
    },
    methods: {
        getSquare() {
            console.log('getSquareValue')
            return this.counter * this.counter
        },
        // increase
        increase() {
            // this.counter =  this.counter + 1
            this.counter++
        },
        // decrease
        decrease() {
            // this.counter =  this.counter - 1
            this.counter--
        }
    },
    computed: {
        squareCounter() {
            console.log('computed squareCounter')
            return this.counter * this.counter
        },
        customTitle() {
            return this.title ? this.title : 'Counter'
            // return this.title || 'Counter'
        }
    }
}
</script>

<style>

button {
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #1abc9c;
    transition: 0.3s ease-in-out;
}

</style>


