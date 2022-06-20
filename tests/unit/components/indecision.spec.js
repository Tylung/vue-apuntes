import Indecision from '@/components/Indecision'
import { shallowMount } from '@vue/test-utils'



describe('Indecision Component', () => {

    let wrapper
    let clgSpy

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
            // "answer": "no",
            // "forced": false,
            // "image": "https://yesno.wtf/assets/yes/2.gif"
        })
    }))  

    beforeEach( () => {
        wrapper = shallowMount( Indecision )

        clgSpy = jest.spyOn( console, 'log' )

        jest.clearAllMocks()

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

    test("escribir el simbolo '?' debe disparar el fetch", async () => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect( clgSpy ).toHaveBeenCalledTimes(1)

        expect( getAnswerSpy ).toHaveBeenCalled()
    })

    test('pruebas en getAnswer si recibe Yes', async () => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect( wrapper.vm.answer ).toBe('Si!')
    })

    test('pruebas en getAnswer si recibe No', async () => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        // expect( img.exists() ).toBeTruthy()
        // expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/no/2.gif')
        // expect( wrapper.vm.answer ).toBe('No!')
    })

    test('pruebas en getAnswer - fallo en el API', async () => {

        
        fetch.mockImplementationOnce( () => Promise.reject('API is down :C'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')


        expect( img.exists() ).toBeFalsy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
    })
}) 


