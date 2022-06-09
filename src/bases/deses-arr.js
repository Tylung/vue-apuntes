
// En la desestructuracion de arreglos el orden si importa

const characters = [ 'Loki', 'Batman', 'Superman', 'Spiderman', 'Ironman']

const [ Loki, Batman, Superman, Spiderman, Ironman = 'No tiene valor' ] = characters
// const Batman = characters[1]

console.log({Loki});
console.log({Batman});
console.log({Spiderman});
console.log({Superman});
console.log({Ironman});

const returnArray = () => {
    return ['ABC', 123]
}

const [lets, nums ] = returnArray()

console.log({lets, nums});

