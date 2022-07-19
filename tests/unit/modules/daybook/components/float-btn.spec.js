import { shallowMount } from '@vue/test-utils'
import FloatBtn from '@/modules/daybook/components/Float-Btn';

describe('Pruebas con el Float btn component', () => {

    test('debe de mostrar el icono por defecto', () => {
        // fa-plus
        const wrapper = shallowMount( FloatBtn )

        const icon = wrapper.find('i')

        expect( icon.classes('fa-plus') ).toBeTruthy()
        // console.log()
    })

    test('debe de mostrar el icono por argumento: fa-circle', () => {

        const wrapper = shallowMount( FloatBtn, {
            props: {
                icon: 'fa-circle'
            }
        })

        const icon = wrapper.find('i')

        expect( icon.classes('fa-circle') ).toBeTruthy()

    })

    test('debe de emitir el evento on:click cuando se hace click ', () => {
        const wrapper = shallowMount( FloatBtn )
        wrapper.find('button').trigger('click')

        // expect( wrapper.emitted('on:click') ).toBeTruthy()
        expect( wrapper.emitted('on:click') ).toHaveLength(1)
        
        // // wrapper.emmitted('on:click')
        // // console.log( wrapper.emitted('on:click') )
    })
    
})



