
const miPromesa = () => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            // resolve('Tenemos un valor ne la promesa')
            reject('REJECT en miPromesa')
        }, 1000)
    })
}

const timeAsync = async () => {
    
    try {
        console.log('Inicio')
        const respuesta = await miPromesa()
        console.log(respuesta);
        console.log('Fin');
        return 'Final de timeAsync'
    } catch (error) {
        throw 'Catch timeAsync'
    }


    // throw 'Error en timeAsync'
}




timeAsync()
    .then( valor => console.log('THEN Exitoso', valor) )
    .catch(err => console.log(`err: ${err}`))

