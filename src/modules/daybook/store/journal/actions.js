
import journalApi from "@/api/journalApi"

// export const myAction = async ({ commit }) => {


// }

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for( let id of Object.keys( data ) ){
        entries.push({
            id,
            ...data[id]
        })   
    }

    commit('setEntries', entries)

}


export const updateEntry = async ({ commit }, entry) => { // ! entry como param

    const { text, date, picture} = entry
    const dataToSave = {
        date,
        text,
        picture
    }
    // *  extraer solo lo que necesitan ❌ id
    const resp = await journalApi.put(`/entries/${ entry.id }.json`, dataToSave)
    // * await journelApi.put( path.json, data to save)
    // ? commit mutation updateEntry
    commit('updateEntry', { ...entry});

}

export const createEntry = async (/*{ commit } */) => {

}


export const deleteEntry = async (/*{ commit }*/) => {

}



