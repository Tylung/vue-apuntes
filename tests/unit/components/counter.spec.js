import { shallowMount,  } from '@vue/test-utils'
import Counter from '@/components/Counter'
// el @ hace referencia a la raiz del proyecto

describe('Counter Component', () => {

    test('h2 debe tener el valor por defecto "Counter"', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.find("h2").exists() ).toBeTruthy()

        const h2Value = wrapper.find("h2").text()

        expect( h2Value ).toBe('Counter')
    })


    test('el valor por defecto debe de ser 100 en el p', () => {
        const wrapper = shallowMount( Counter )
        const value = wrapper.find( '[data-test-id="counter"]' ).text()
        expect( value ).toBe('100')
    })


    test('debe de incrementar y decrementar el valor del contador', async () => {
        const wrapper = shallowMount( Counter )
        
        const increaseBtn = wrapper.find('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')

        let value = wrapper.find( '[data-test-id="counter"]' ).text()

        // TODO: Tarea
        const decreaseBtn = wrapper.findAll('button')[1]

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        
        value = wrapper.find( '[data-test-id="counter"]' ).text()
        expect( value ).toBe('101')
    })
})



