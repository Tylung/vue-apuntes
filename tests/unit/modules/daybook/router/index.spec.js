import dayBookRouter from '@/modules/daybook/router';


describe('Pruebas con el Router module del Daybook', () => {

    test('el router debe tener esta configuración', () => {
        expect( dayBookRouter ).toMatchObject({
            name: 'daybook',
            component: expect.any( Function ),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any( Function ),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any( Function ),
                    props: expect.any( Function )
                }
            ]
        })
    })

})



