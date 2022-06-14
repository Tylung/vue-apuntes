# V-if & V-show 

Estas directivas pueden parecer iguales pero trabajan muy diferente 

## V-if

Es como un condicional de toda la vida y podemos evaluar si un elemento html existe y si existe mostrarlo

```html
<blockquote v-if="author"> -{{ author }} </blockquote>
    <!-- si existe el author lo creara  -->
```

v-if también es perezoso: si la condición es falsa en el procesamiento inicial, no hará nada: el bloque condicional no se procesará hasta que la condición se vuelva verdadera por primera vez.

```html
<blockquote v-if="false"> -{{ author }} </blockquote> 
    <!-- ❌ No creara nada -->
```

## v-show

En cambio el V-show siempre lo creara, pero si es falsa se le pondra un style="display: none;"

Por lo que el V-if es más rapido, pero si vas a renderizar algo bastantes veces usa v-show.

### No usar V-if y V-for en el mismo bloque

```html 
<!-- Mala Práctica ❌ -->
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

```html
<!-- Buena Práctica ✅ -->
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul>
  <template v-for="user in users" :key="user.id">
    <li v-if="user.isActive">
      {{ user.name }}
    </li>
  </template>
</ul>
```