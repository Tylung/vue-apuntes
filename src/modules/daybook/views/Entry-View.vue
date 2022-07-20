<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">

        <div>
            <span class="text-success fs-3 fw-bold"> {{ day }} </span>
            <span class="mx-1 fs-3"> {{ month }} </span>
            <span class="mx-2 fs-4 fw-light"> {{ yearDay }} </span>
        </div>

        <div>

            <input type="file"
                    v-show="false" 
                    accept="image/png, image/jpeg"
                    @change="onSelectImage"
                    ref="imageSelector">

            <button class="btn btn-danger mx-2"
                v-if="entry.id"
                @click="onDeleteEntry">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary"
                @click="searchFilesImg">
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
        v-if="entry.picture && !localImage"
        :src="entry.picture" 
        alt="entry-picture"
        class="img-thumbnail"
        >
    <img 
        v-if="localImage"
        :src="localImage" 
        
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
import Swal from 'sweetalert2'

import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage';

export default {
    name: 'EntryView',
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
            entry: null,
            localImage: null ,
            file: null
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

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()

            const picture = await uploadImage( this.file )

            this.entry.picture = picture;
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
            this.file = null
            this.localImage = null

            Swal.fire('Guardado', 'Entrada registrada con Exito!', 'success')
        },
        async onDeleteEntry() {
            // console.log('delete', this.entry);
            const { isConfirmed } = await Swal.fire({
                title: 'Esta seguro?',
                text: 'Una vez borrado no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if ( isConfirmed ){
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry( this.entry.id )
                // redireccionar al usuario fuera de aquí..
                this.$router.push({ name: 'no-entry' })

                Swal.fire('Eliminado con exito!', '', 'success')
            }

        },
        onSelectImage( event ) {
            const file = event.target.files[0]
            if( !file ){
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )

        },
        searchFilesImg() {
            // simular el click
            this.$refs.imageSelector.click()

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
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

</style>