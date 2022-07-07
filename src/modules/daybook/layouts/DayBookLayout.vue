<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <EntryLIst/>
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
    Navbar: defineAsyncComponent(() => import("../components/Nav-bar.vue")),
    EntryLIst: defineAsyncComponent(() => import('../components/Entry-LIst.vue'))
}
}

</script>

