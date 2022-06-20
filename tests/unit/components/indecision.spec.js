import Indecision from '@/components/Indecision'
import { shallowMount } from '@vue/test-utils'



describe('Indecision Component', () => {

    let wrapper
    let clgSpy

    beforeEach( () => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )

    }) 

    test('debe hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async () => {
        
        const getAnswerSpy = jest.spyOn( wrapper.vm , 'getAnswer' )
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).not.toHaveBeenCalled()

    })

    test("escribir el simbolo '?' debe disparar el fetch", () => {
        
    })

    test('pruebas en getAnswer', () => {
        
    })

    test('pruebas en getAnswer - fallo en el API', () => {
        
    })
}) 


