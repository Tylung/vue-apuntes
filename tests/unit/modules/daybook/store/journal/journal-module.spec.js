import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-state'

const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            } 
        }
    })

describe('Vuex - Pruebas en el Journal Module', () => {

    // basicas
    test('el state inicial debe lucir así', () => {

        const store = createVuexStore( journalState )
        const { isLoading, entries } = journalState

        // console.log(store.state);
        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )
        
    })

    // mutations
    test('Mutation: set entries', () => {
        const store = createVuexStore({
            isLoading: true,
            entries: []
        })
        const journal = store.state.journal

        store.commit('journal/setEntries', journalState.entries)
        expect( journal.entries.length ).toBe( 2 )
        
        store.commit('journal/setEntries', journalState.entries)
        expect( journal.entries.length ).toBe( 4 )

        expect( journal.isLoading ).toBeFalsy()
        
    })

    test('Mutation: Update Entry', () => {
        //  crear store
        const store = createVuexStore( journalState  )

        const journal = store.state.journal

        // updatedEntry
        const updatedEntry = {
            date: 1658248711828,
            "picture": "https://res.cloudinary.com/drelgczps/image/upload/v1658255408/ygwxuwn6nj1pwy76plju.jpg",
            id: "-N7MJs8HNasey4zAB6zm",
            text: "Hola Dev! desde mock data"
        }

        // commit de la mutation
        store.commit( 'journal/updateEntry', updatedEntry )

        // Expects
        // Entries.lenght = 2
        expect( journal.entries.length ).toBe( 2 )
        // Entries tiene que existir en UpdatedEntry toEqual
        const entry = journal.entries.find( e => e.id === updatedEntry.id )
        
        expect( updatedEntry ).toEqual( entry )

    })

    test('Mutation: AddEntry & DeleteEntry', () => {

        // crear store
        const store = createVuexStore( journalState )

        const newEntry = {
            id: 'ABC-123',
            text: 'Hola Mundo'
        }

        // addEntry { id: 'ABC-123', text: 'Hola Mundo!' }
        store.commit( 'journal/addEntry', newEntry )
        
        let entries = store.state.journal.entries
        let entry = entries.find( e => e.id === 'ABC-123' )
        
        // expects
        // entradas === 3
        expect( entries.length ).toBe( 3 )
        // entrada con el id 'ABC-123' exista
        expect( entry.id ).toBe( 'ABC-123' )
        
        
        store.commit( 'journal/deleteEntry', newEntry.id )
        // deleteEntry id: 'ABC-123'
        entries = store.state.journal.entries
        entry = entries.find( e => e.id === newEntry.id)
        // expects
        // entradas === 2
        expect( entries.length ).toBe( 2 ) 
        // entrada con el id 'ABC-123' no debe existir
        expect( entry ).toBeFalsy()
        
    })

    
})