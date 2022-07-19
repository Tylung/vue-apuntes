<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold"> {{ day }} </span>
            <span class="mx-1 fs-3"> {{ month }} </span>
            <span class="mx-2 fs-4 fw-light"> {{ yearDay }} </span>
        </div>

        <div>
            <button class="btn btn-danger mx-2"
                v-if="entry.id"
                @click="onDeleteEntry">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr>
    <div 
        class="d-flex flex-column px-3 h-75"
        v-if="entry">
        <textarea placeholder="¿Qué sudedió hoy?"
            v-model="entry.text">
        </textarea>
    </div>


    <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMewPjbNgvumNp6X5p_qAZt1DO_SAfx4tag&usqp=CAU" 
        alt="entry-picture"
        class="img-thumbnail"
        >
    </template>
    <Fab 
        icon="fa-save"
        @on:click="saveEntry"
    />
  
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    components: {
        Fab: defineAsyncComponent(() => import('../components/Float-Btn.vue') )
    },
    
    data() {
        return {
            entry: null
        }
    },

    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },

    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
        loadEntry(  ) {

            let entry;

            if( this.id == 'new' ){
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById( this.id )
                if ( !entry ) return this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry
        },
        async saveEntry() {
            // console.log('Guardando entrada')
            if ( this.entry.id ){
                //Actualizar
                await this.updateEntry( this.entry )
            } else {
                //Crear una nueva entrada
                // action createEntry
                const id = await this.createEntry( this.entry )
                // redirect => entry, param: id
                this.$router.push({ name: 'entry', params: { id  } })
            }
            // Action del journal module
        },
        async onDeleteEntry() {
            // console.log('delete', this.entry);
            await this.deleteEntry( this.entry.id )

            this.$router.push({ name: 'no-entry' })
            // redireccionar al usuario fuera de aquí..
            // entry
        }

    },

    created() {
        // console.log( this.id )
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }



}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    resize: none;
     
    &:focus {
        outline: none;
    }

}

img {
    width: 200px;
    position: fixed;    
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>