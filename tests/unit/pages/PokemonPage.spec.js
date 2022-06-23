import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';


describe('PokemonPage Component', () => {

    let wrapper
    // let mixPokemonArraySpy

    beforeEach( ()=> {
        // mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        wrapper = shallowMount( PokemonPage )
    })
    

    test('debe de hacer match con el snapshot', () => {

        expect( wrapper.html() ).toMatchSnapshot()
        
    })

    test('debe de llamar el mixPokemonArray al montar', () => {
        
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })



})




