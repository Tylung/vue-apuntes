const arreglo = [1, 2, 3, 4]
arreglo.push( 5 )

// const arreglo2 = arreglo.slice()
const arreglo2 = [ ...arreglo ]

arreglo2.push( 6 )
const arreglo3 = arreglo.map(n => n * 2)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)




