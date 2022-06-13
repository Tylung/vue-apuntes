
const app = Vue.createApp({
    // template: `
        // <h1> Holas </h1>
    // `
    // methods: {},
    // watch: {},
    // options api
    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('click');
            this.author = 'Juan el Taquero'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')
