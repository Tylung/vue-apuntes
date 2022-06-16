

describe('Example Component', () => {

  // hacer una evaluacion pequeña
  test( 'Debe de ser mayor a 10', () => {

    // Arreglar - Arrange
    let value = 10;

    // Estimulo
    value = value + 2

    // Assert - Observar el resultado

   expect( value ).toBeGreaterThan( 10 )
  })

})

