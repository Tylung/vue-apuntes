# Directiva v-model

Esta directiva enlaza un elemento del html de tipo input como:

```html
<select>
<input>
<textarea>
```

Y lo podemos enlazar a una propiedad reactiva para que cada vez que se haga un cambio se guarde

```js
const app = Vue.createApp({
    data() {
        return {
            quotes,
            newQuote: 'Hola mundo'
        }
    },
})
```

```html
 <div id="myApp">
        <h1>Batman Quotes <small> {{ newQuote }} </small></h1>

    <label for="quote">Quote:</label>
    <br>
    <input type="text" id="quote" v-model="newQuote">       
          
    <hr>

    <ul>
        <li v-for="({ quote, author }, index) in quotes"> 
            <span> {{ index + 1 }}.  {{ quote }} </span>
            <blockquote> -{{ author }} </blockquote>
        </li>
    </ul>

 </div>
```


