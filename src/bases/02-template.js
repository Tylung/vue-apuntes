console.log('Hola Dev!')

const nombre = 'Tulip'
const apellido = 'Olsen'

// const nombreCompleto = nombre + apellido;
const nombreCompleto = `${nombre} se apellida ${apellido}`;

console.log(nombreCompleto)
console.log(`Resultado es ${2 + 2}`)

function getSaludo ( nombre ){
    return 'Hola ' + nombre
}

console.log(` Este es un texto ${getSaludo(nombre)}`)

