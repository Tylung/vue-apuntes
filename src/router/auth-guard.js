

const isAuthenticatedGuard = async ( to,from, next ) => {
    console.log({to,from, next});

    return new Promise( () => {
        
        const random = Math.random() * 100
        console.log(random);

        if ( random > 50 ){
            console.log('Esta Autenticado!')
            next()
        } else {
            console.log('Bloqueado por el isAuthenticatedGuard', random)
            next({ name: 'pokemon-home' })
        }
    })
}


export default isAuthenticatedGuard

