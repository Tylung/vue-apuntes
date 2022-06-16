

describe('Example Component', () => {

  // hacer una evaluacion pequeña
  test( 'Debe de ser mayor a 10', () => {

    // Arreglar - Arrange
    let value = 5;

    // Estimulo
    value = value + 2

    // Assert - Observar el resultado

    if ( value > 10) {
      // TODO: Todo bien
    } else {
      throw `${ value } no es mayor a 10`
    }
  })

})

