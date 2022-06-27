
<template>

    <div>
        <router-link to="/">PokemonList</router-link>
        <router-link to="/id">Pokemon by Id</router-link>
        <router-link to="/about">About</router-link>
    </div>

</template>



<style scoped>

div {
    list-style: none;
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

a.router-link-exact-active {
    color: #42b983;
}

</style>