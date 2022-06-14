
<template>
  <h2>Counter</h2>
  <p> {{ counter }} <sup>2</sup> = {{ counter * counter }} </p>
</template>

<script>
export default {
    // name: 'Patito'
    data() {
        return {
            counter: 5,
        }
    },
    methods: {
        getSquare() {
            console.log('getSquareValue')
            return this.counter * this.counter
        }
    },
    computed: {
        squareCounter() {
            console.log('computed squareCounter')
            return this.counter * this.counter
        }
    }
}
</script>

<style>

</style>


