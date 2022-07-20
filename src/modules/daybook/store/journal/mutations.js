
export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

}

export const updateEntry = ( state, entry ) => { // * entrada Actualizada

    // * state.entries => arr
    // console.log(entry.id)

    const idx = state.entries.map( e => e.id ).indexOf( entry.id )
    state.entries[idx] = entry 
    
}

export const addEntry = ( state, entry ) => {
    // state => entries, la nueva entrada debe ser al primera
    state.entries = [ entry, ...state.entries ]
}

export const deleteEntry = ( state, id ) => {
    // remover la entry por el id
    state.entries = state.entries.filter( e => e.id !== id )
}