# Directiva V-for en Vue.js

Si queremos barrer un arreglo y convertir su información en html debemos devolverla en el return del data para que se vuelva unn arreglo reactivo

```js
const quotes = [
    // ... Aquí estan los quotes
]

console.log(quotes);

const app = Vue.createApp({
    data() {
        return {
            // quotes: quotes ,
            // cuando tenemos pares de valores podemos dejar con un solo nombre
            quotes,
        }
    },
})
```

**Que pereza tener que escribir cada uno de los quotes!**

Aparte de que si en algun momento cambian los quotes y ahora no son 4 sino 2, dara un error de `undefined`, porque estamoso poniendolo en duro el codigo 

```html 
<h1>Batman Quotes</h1>
 
<ul>
    <li>{{ quotes[0].quote }}</li>
    <li>{{ quotes[1].quote }}</li>
    <li>{{ quotes[2].quote }}</li>
    <li>{{ quotes[3].quote }}</li>
</ul>
```

Entonces lo que debemos utilizar es la directiva `v-for`

```html
<ul>
    <li v-for="quote in quotes"> author </li>
</ul>
```

De esta manera la variable quote que se crea en el v-for barre el arreglo de quotes y va generando los `<li>`