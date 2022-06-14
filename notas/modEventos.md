# Modificadores de Eventos en Vue.js

Es una necesidad muy común llamar a event.preventDefault() o event.stopPropagation() dentro de los controladores de eventos. Aunque podemos hacer esto fácilmente dentro de los métodos, sería mejor si los métodos pudieran ser puramente de lógica de datos en lugar de tener que lidiar con detalles de eventos DOM.

Para abordar este problema, Vue proporciona modificadores de eventos para v-on. Recuerde que los modificadores son sufijos de directiva indicados por un punto.

```html
  <div id="myApp">
        <h1>Batman Quotes <small> {{ newQuote }} </small></h1>

    <label for="quote">Quote:</label>
    <br>
    <input
      type="text"
      id="quote"
      v-model="newQuote"
      v-on:keypress.enter="addQuote">       
          <!-- Aqui se llama al evento de un enter por la propiedad keypress de v-on -->

          <hr>

        <ul>
            <li v-for="({ quote, author }, index) in quotes"> 
                <span> {{ index + 1 }}.  {{ quote }} </span>
                <blockquote> -{{ author }} </blockquote>
            </li>
        </ul>

    </div>
```
Esto nos ayuda a evitar escribir codigo Js para simplemente escuchar un enter

```js

const app = Vue.createApp({
    data() {
        return {
            quotes,
            newQuote: 'Hola mundo'
        }
    },
    methods: {
        // addQuote({  key  }) {
            // console.log(this.newQuote)
            // ( key === 'Enter' )
                // ? this.quotes.unshift({ quote: this.newQuote })
                // : ''
            // console.log(event)
            ❌
        // }
        // Nos evita escribir todo esto 
        addQuote() {
            this.quotes.unshift({ 
                quote: this.newQuote 
                // Agregando a los quotes el nuevo quote
                ✅
            })
        }
    }
})
```
