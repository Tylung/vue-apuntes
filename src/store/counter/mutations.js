


export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'íncrement'
}

export const incrementBy = ( state, val) => {
    state.count += val
    state.lastMutation = 'íncrementBy ' + val
    state.lastRandomInt = val
}

export const setLoading = (state,  boolean )  =>{
    boolean 
        ? state.isLoading = true
        : state.isLoading = false
    
    state.lastMutation = 'SetLoading ' + boolean
}


