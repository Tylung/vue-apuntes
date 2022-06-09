const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 32,
    direccion: {
        ciudad: 'new York',
        zip: 3264,
        lat: 14.3236,
        lng: 73.843344,
    }
}

const persona2 = { ...persona };

// const personaSet = new Set()

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)




