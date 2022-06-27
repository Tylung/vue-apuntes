<template>
    <h1>About Page</h1>
    <hr>
    <h1>{{ name }}</h1>
    <button @click="onChangeName">
        Cambiar nombre
    </button>
</template>


<script>
export default {

    data() {
        return {
            name: 'Zack',
        }
    },

    methods: {
        onChangeName() {
            this.name = 'Mew'
        }
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        this.name = 'Juan Carlos'
        console.log('created')
        // peticiones HTTP
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>