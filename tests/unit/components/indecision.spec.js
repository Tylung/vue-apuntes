import Indecision from '@/components/Indecision'
import { shallowMount } from '@vue/test-utils'



describe('Indecision Component', () => {

    let wrapper

    beforeEach( () => {
        wrapper = shallowMount( Indecision )
    }) 

    test('debe hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })
}) 


