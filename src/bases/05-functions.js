// console.log('Hola Dev!')

const { toIdentifier } = require("webpack/lib/Template")

// function saludar( nombre ) {
// return `Hola ${ nombre }`
// }
const saludar = function (nombre) {
    return `Hola ${nombre}`
}

const saludar2 = (nombre = 'Tony') => `Hola ${nombre}`

const nombre = 'Peter'

// console.log( saludar(nombre) )

// console.log( saludar2(nombre) )

const getUser = () => ({
    uid: 'AGR384S',
    username: 'Zack'
})

// Par decir la Js que retorne un objeto lo tenemos que poner entre parentesis el objeto
// console.log(getUser());

const heroes = [
    {
        id: 1,
        name: 'Batman',
    }, {
        id: 2, 
        name: 'Superman'
    }

]

// Tarea

const exist = ( id, arr ) => {
    // id = id - 1
    const condition = ( ) => arr[id - 1] != undefined
    return arr.some( condition )
}
// console.log(heroes[0].id);
// const existNombre = (nombre, arr ) => {
//     let result = false
//     arr.forEach(element => {
//         if ( element.name === nombre){
//             result = true;
//             return result;
//         }
//         return result;
//     });
//     return result
// }
// otras formas de solucionar Fernando Herrera

const heroe = heroes.find( (heroe) => heroe.id == 2 )



// console.log( exist(3, heroes) )
// console.log( existNombre('Superman', heroes) )
// console.log(heroe);

// La mejor funcion
const existNombre = ( arr , nombre ) => { 
    const condition = ( ) => arr.some( heroe => heroe.name === nombre ) 
    return condition()
}

if ( existNombre(heroes, 'Superman') ){
    console.log('Batman es mejor que Superman');
}