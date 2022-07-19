<template>
    <Navbar />

    <div class="d-flex">
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
import { mapActions } from 'vuex';

export default {
    components: {
    Navbar: defineAsyncComponent(() => import("../components/Nav-bar.vue")),
    EntryList: defineAsyncComponent(() => import('../components/Entry-List.vue'))
    },

    methods: {
        ...mapActions('journal', ['loadEntries'])
    },

    created() {
        this.loadEntries()
    }
}

</script>

