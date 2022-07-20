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

    
})