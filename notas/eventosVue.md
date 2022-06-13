# Introducción a Eventos en Vue.js

Las propiedades de un *objeto reactivo*, valga la redundancia **son reactivas** también, esto quiere decir que si el quote cambiará, Vue va a renderizar únicamente la parte que cambio

## Creando un evento en Vue.js

---

Agregamos un boton al html

```html
<button>
    Change quote
</button>
```

Vamos a definir la funcion del evento en la opcion methods

```js
const app = Vue.createApp({

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            console.log('click');
    '
        }
    }
})
```

Y en html debemos de escuchar el evento del click para eso:

```html 
<button v-on:click="changeQuote">
    Change quote
</button>
```

agregamos el atributo **v-on** , podemos poner que escuche un doble click, click, etc en este caso escucharemos el click y que llame a la función `changeQuote()`, los parentesis son opcionales, debido a que en Js cuando recibimos un solo argumento podemos resumir solo mandando la referencia a la función

Y ahora cada vez que le demos click la consola pondra click

### Cambiando el author y la frase con el evento

---

Para cambiar el valor de la propiedad reactiva tenemos que hacer referencia al objeto que en este caso es nuestro componente, usando la palabra reservada `this`

```js
const app = Vue.createApp({

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote() {
            this.author = 'Juan el Taquero'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase() 
        }
    }
})
```

Y para capitalizar nuestro quote usamos el metodo `toUpperCase()` y llamamos al método capitalize en changeQuote para que se ejecute cuando se presione el botón 

