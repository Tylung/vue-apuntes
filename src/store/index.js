
import { createStore } from 'vuex'
import getRandomInt from '../helpers/getRandomInt'

export default createStore({
    
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },

    mutations: {
        increment( state ) {
            state.count++
            state.lastMutation = 'íncrement'
        },
        incrementBy( state, val) {
            state.count += val
            state.lastMutation = 'íncrementBy ' + val
            state.lastRandomInt = val
        },
        setLoading(state,  boolean ) {
            boolean 
                ? state.isLoading = true
                : state.isLoading = false
            
            state.lastMutation = 'SetLoading ' + boolean
        }
    },

    actions: {
        async incrementRandomInt({ commit }) {

            commit('setLoading', true)

            const randomInt = await getRandomInt()
            commit('incrementBy', randomInt )

            commit('setLoading', false)
        
        }
    }
})
