import { getHeroById } from './bases/08-imp-exp'
// console.log('Inicio');

// new Promise( ( resolve, reject ) => {
//     console.log('Cuerpo de la promesa');
//     resolve('Promesa resuelta')
// })
// .then( console.log )
// .catch( console.log )

// // El cuerpo de la promesa se ejecuta
// // inmediatamente pero la resolucion 
// // en una pila diferente

// console.log('Final');

const getHeroByIdAsync = ( id ) => {

    return new Promise( ( res, rej )  => {
        setTimeout(() => {
            
            const hero = getHeroById( id )

            if ( hero ){
                res( hero )
            } else {
                rej('Heroe no encontrado')
            }

        }, 1000);
    });
}

getHeroByIdAsync( 1 )
    .then( h => console.log(`El Heroe es: ${h.name}`) )
    .catch( console.log )