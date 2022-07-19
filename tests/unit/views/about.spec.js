import { shallowMount } from  '@vue/test-utils'
import About from '@/views/AboutView'

describe( 'Pruebas con el About page', () => {
    test('Match con el snapshot', () => {
        const wrapper = shallowMount( About ) 
        expect( wrapper.html() ).toMatchSnapshot()
    })
})







