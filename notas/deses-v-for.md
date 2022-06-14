# Desestructuración en el v-for

Para desestructurar el argumento en el v-for es como lo haciamos en Js simplemente poniendo `{{ property }}` 

```html
<div id="myApp">
        <h1>Batman Quotes</h1>

        <ul>
            <li v-for="({ quote, author }, index) in quotes"> 
                <span> {{ index + 1 }}.  {{ quote }} </span>
                <blockquote> -{{ author }} </blockquote>
            </li>
        </ul>

    </div>
```

Y también podemos recuperar el index del arreglo con la propiedad index y cerrandolo en `( )` con el objeto a desestructurar