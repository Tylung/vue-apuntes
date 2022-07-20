import dayBookRouter from '@/modules/daybook/router';


describe('Pruebas con el Router module del Daybook', () => {

    test('el router debe tener esta configuración', async () => {
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

        // expect( (await dayBookRouter.children[0].component()).default.name ).toBe( 'NoEntrySelected' )
        // expect( (await dayBookRouter.children[1].component()).default.name ).toBe( 'EntryView' )
        const promiseRoutes = []

        dayBookRouter.children.map( child => promiseRoutes.push( child.component() ) )

        const routes = (await Promise.all( promiseRoutes )).map( r => r.default.name )
        // los parentesis indican que se espere a que se resuelvan las promesas

        expect( routes ).toContain('EntryView')
        expect( routes ).toContain('NoEntrySelected')

        // expect(  )
        

    })

})



