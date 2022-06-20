import { shallowMount,  } from '@vue/test-utils'
import Counter from '@/components/Counter'
// el @ hace referencia a la raiz del proyecto

describe('Counter Component', () => {

    let wrapper = 


    beforeEach( () => {
        wrapper = shallowMount( Counter )
    } )

    test('h2 debe tener el valor por defecto "Counter"', () => {

        expect( wrapper.find("h2").exists() ).toBeTruthy()

        const h2Value = wrapper.find("h2").text()

        expect( h2Value ).toBe('Counter')
    })


    test('el valor por defecto debe de ser 100 en el p', async () => {

        const value = wrapper.find( '[data-test-id="counter"]' ).text()
        expect( value ).toBe('100')

    })


    test('debe de incrementar y decrementar el valor del contador', async () => {
        
        const [increaseBtn, decreaseBtn]  = wrapper.findAll('button') 

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        
        const value = wrapper.find( '[data-test-id="counter"]' ).text()

        expect( value ).toBe('101')
    })

    test('debe de establecer el valor por defecto', () => {
        // const start = wrapper.props('start')
        const { start } = wrapper.props()

        const value = wrapper.find('[data-test-id="counter"]').text()

        expect( Number(value) ).toBe( start )

    })

    test('debe de mostrar la prop title', () => {

        const title = 'Hola Mundo!!!'

        const wrapper = shallowMount( Counter, {
            props: {
                title,
                start: 5,
            }
        } )

        expect( wrapper.find('h2').text() ).toBe( title )
    })
})



