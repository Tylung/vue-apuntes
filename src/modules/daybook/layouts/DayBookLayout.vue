<template>
    <Navbar />

    <div 
        class="row justify-content-md-center" v-if="isLoading">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
        <h3 class="mt-2">
            <i class="fa fa-spin fa-sync"></i>
        </h3>
        </div>
    </div>

    <div 
        class="d-flex" v-else>
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex';

export default {
    components: {
    Navbar: defineAsyncComponent(() => import("../components/Nav-bar.vue")),
    EntryList: defineAsyncComponent(() => import('../components/Entry-List.vue'))
    },

    computed: {
        ...mapState('journal', ['isLoading'])
    },

    methods: {
        ...mapActions('journal', ['loadEntries'])
    },

    created() {
        this.loadEntries()
    }
}

</script>

