# Hola Mundo en Vue.js

Tenemos que agregar Vue de manera de script con el siguiente código:

```html
<script src="https://unpkg.com/vue@3"></script>
```

Agregamos el div de nuestra app que controlara 100% Vue, con el id App

```html
<div id="myApp">
</div>
```

Y en el archivo de JavaScript que importamos desde el html con: 

```html
<script src='app.js'></script>
```

Y ahora en el archivo app.js tenemos el objeto Vue, que es grandisimo y tiene un montón de cosas

## Crear una app con Vue

Usamos la opcion template para mandar el html de nuestra app

```js
const app = Vue.createApp({
    template: `
        <h1> Hola Mundo desde app.js </h1>
    `
})
```

Y al final montamos nuestra app

```js
app.mount('#myApp') 
```

Y si guardamos y recargamos el navegador tendremos nuestro hola Mundo