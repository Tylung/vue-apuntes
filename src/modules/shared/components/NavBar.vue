
<template>

    <div>
        <!-- <router-link :to="{ name: '/home' }">PokemonList</router-link>
        <router-link :to="{name:'pokemon-id', params: { id: 1 }}">Pokemon by Id</router-link>
        <router-link :to="{ name: '/about' }">About</router-link> -->
        <CustomLink 
            v-for="link in links" 
            :key="link.to" 
            :link="link"
        />
    </div>

</template>


<script>
import { defineAsyncComponent } from 'vue'

export default {

    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons'},
                { to: 'pokemon-id', name: 'Por ID', id: 151},
                { to: 'pokemon-about', name: 'About'},
                { to: 'dbz-characters', name: 'Characters'},
                { to: 'dbz-about', name: 'DBZ-About'},
                { to: 'https://google.com', name: 'Google'},
            ],
        }
    },

    components: {
        CustomLink:  defineAsyncComponent(() => import(/* webpackChunkName: "CustomLink"*/ '@/modules/shared/components/CustomLink.vue') )
    }
}

</script>

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

/* a.router-link-exact-active { */
    /* color: #42b983; */
/* } */

</style>