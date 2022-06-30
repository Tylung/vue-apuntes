import getRandomInt from '../../helpers/getRandomInt'


const counterStore = {
    namespaced: true,
    state: () => ({
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    }),
    // la funcion de flecha convierte esta parte del objeto en reactiva

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
    },

    getters: {
        squareCount( state ) {
            return state.count * state.count
        }
    },
} 


export default counterStore


