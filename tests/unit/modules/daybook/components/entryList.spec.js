import {createStore} from 'vuex';

import { getEntriesByTerm } from '@/modules/daybook/store/journal/getters';
import { journalState } from '../../../mock-data/test-state';
import { shallowMount } from '@vue/test-utils';
import EntryList from '@/modules/daybook/components/Entry-List';


describe('Pruebas en el EntryList', () => {

    const journalMockModule = {
        namespaced: true,
        getters: {
            getEntriesByTerm,
        },

        state: () => ({
            isLoading: false,
            entries: journalState.entries
        })
    }


    const store =  createStore({
        modules: {
            journal: { ...journalMockModule }
        }
    })


    const wrapper = shallowMount( EntryList, {
        global: {
            mocks: {
                // TODO: $router 
            },
            plugins: [store]
        }
    })

    test('debe de llamar el getEntriesByTerm sin termino y mostrar 3 entradas', () => {
        console.log(wrapper.html());
    })
    
})




