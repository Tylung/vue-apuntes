import { shallowMount,  } from '@vue/test-utils'
import Counter from '@/components/Counter'
// el @ hace referencia a la raiz del proyecto

describe('Counter Component', () => {
    // test('debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount( Counter )

    //     expect( wrapper.html() ).toMatchSnapshot()

    // })

    test('h2 debe tener el valor por defecto "Counter"', () => {

        const wrapper = shallowMount( Counter )

        expect( wrapper.find("h2").exists() ).toBeTruthy()

        const h2Value = wrapper.find("h2").text()

        expect( h2Value ).toBe('Counter')
    })


    test('el valor por defecto debe de ser 100 en el p', () => {
        // wrapper 
        const wrapper = shallowMount( Counter )
        // ptags
        // const ptags = wrapper.findAll('p')
        // expect segundo p === 100
        // const p2 = ptags[1]
        // expect( p2.text() ).toBe('100')
        const value = wrapper.find( '[data-test-id="counter"]' ).text()
        expect( value ).toBe('100')
    })
})



