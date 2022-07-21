import { shallowMount } from "@vue/test-utils";
import EntryBook from '@/modules/daybook/components/Entry-Book'
import { journalState } from '../../../mock-data/test-state'

describe('Pruebas en Entry Component', () => {

    // mockRouter

    const mockRouter = {
        push: jest.fn()
    }


    const wrapper = shallowMount( EntryBook, { 
        props: {
            entry: journalState.entries[0]
        },
        
        global: {
            mocks: {
                $router: mockRouter
            }
        }
     })



    test('debe de hacer match con el snapshop', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })


    test('debe de redireccionar al hacer click en el entry-container', async () => {
        // const btns = wrapper.findAll('div')
        // const btn = btns.find( btn => btn.classes('entry-container') )
        const btn = wrapper.find('.entry-container')
        
        await btn.trigger('click')
        // expect( wrapper.vm.$router.push ).toHaveBeenCalledTimes(1)
        expect( mockRouter.push ).toHaveBeenCalledWith({
            'name': 'entry',
            params: {
                id:journalState.entries[0].id
            }
        })
    })

    test('pruebas en las propiedades computadas', () => {
        // wrapper.vm <- ver las propiedades computadas
        const props = wrapper.vm
        expect( props.day ).toBe( 19 )
        expect( props.month ).toBe( 'Julio' )
        expect( props.yearDate ).toBe( '2022, Martes' )
        // day 19
        // month 'Julio'
        // yearDay '2022, Martes'
        
    })
    
})

