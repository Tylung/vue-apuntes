# Estado del componente Data en Vue.js

En el metodo `Vue.createApp` tenemos varias opciones 

Tenemos los `methods`, `watch`, `template`, etc.

**A esto se le danomina Options Api y se siguen usando a día de hoy en vue**

```js
const app = Vue.createApp({
    template: `
         <h1> Holas </h1>
    `,
    methods: {},
    watch: {},
})
``` 

Dentro de las opciones esta `data` que no es una propiedad, sino que es una función 

```js
const app = Vue.createApp({
    data() {
        return {
            message: 'Hola Mundo!'
            // esto crea un objeto reactivo
        }
    }
    
})
``` 

**Objeto reactivo**: _Cualquier modificación que se le haga a este objeto Vue automaticamente se dara cuenta mediante su virtul dom y va a renderizar unicamente lo que sufrió cambios_

Para renderizar estos cambios se llama en el html la propiedad que sufre cambio

```js
data() {
    return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
    }
}
```

```html 
<div id="myApp">
    <h3> {{ quote }} </h3>
    <blockquote> -{{ author }} </blockquote>
</div>
```