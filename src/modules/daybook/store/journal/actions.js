
import journalApi from "@/api/journalApi"

// export const myAction = async ({ commit }) => {


// }

export const loadEntries = async ({ commit }) => {

    const { data } = await journalApi.get('/entries.json')

    if (!data) {
        commit('setEntries', [])
        return
    } 


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

    dataToSave.id = entry.id

    // * await journelApi.put( path.json, data to save)
    // ? commit mutation updateEntry
    commit('updateEntry', { ...dataToSave});

}

export const createEntry = async ({ commit },  entry) => {

    // dataToSave  
    const { text, date, picture } = entry
    const dataToSave = { text, date, picture }
    const { data } = await journalApi.post( '/entries.json', dataToSave)
    // console.log(data);

    // data = { "name": "-N7LzwJV9iF3gQ3jXkTQ" }
    dataToSave.id = data.name
    // console.log(entry.id);
    // ! Commit => addEntry
    commit('addEntry', dataToSave )

    return data.name
}


export const deleteEntry = async ({ commit }, id) => {
    // eliminar en db
    await journalApi.delete( `/entries/${ id }.json` )

    // console.log(id);
    // commit => deleteEntry 
    commit('deleteEntry', id)

    return id;
}



