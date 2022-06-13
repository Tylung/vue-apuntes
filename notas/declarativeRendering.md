# Declarative Rendering o Representación Declarativa

En Vue.js si queremos evaluar una expresión de Js usamos doble {}

```js
const app = Vue.createApp({
    template: `
        <h1> {{ 2 + 2 }} </h1>
        <h2> {{ undefined }} </h2>
        <h3> {{ !true }} </h3>
        ✅ <p> {{ true ? 'Activo' : 'Inactivo' }} </p>
        ❌ <p> {{ if(true) {'Activo' : 'Inactivo'} }} </p>
    `
})
```

**No todas las expresiones de Js son soportadas de esta manera, como los `if`**

Para tener el html de la aplicacion en el html podemos hacer

```html
<div id="myApp">
        <h1>Hola Mundo</h1> 
        <p> {{ !true }} </p> ✅
</div>

{{ 1 + 1  }} ❌
```

> Ojo solo ponemos `{{ }}` dentro del bloque de myApp y si app, porque sino no lo reconocerá 

