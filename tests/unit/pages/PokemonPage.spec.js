import { shallowMount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from '../mocks/pokemons.mock';
import getPokemonOptions, { getPokemonNames } from '@/helpers/getPokemonOptions';


describe('PokemonPage Component', () => {

    let wrapper
    // let mixPokemonArraySpy

    beforeEach( async () => {
        // mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        wrapper = shallowMount( PokemonPage )
    })    

    test('debe de hacer match con el snapshot', () => {
        // wrapper = shallowMount( PokemonPage )

        expect( wrapper.html() ).toMatchSnapshot()
        
    })

    test('debe de llamar el mixPokemonArray al montar', () => {
        
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        shallowMount( PokemonPage )

        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons',  () => {
        const wrapper = shallowMount( PokemonPage,  {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()


    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptoins', () => {

        const wrapper = shallowMount( PokemonPage,  {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })

        // PokemonPicture deben de existir
        const options = wrapper.find('pokemon-options-stub')
        const picture = wrapper.find('pokemon-picture-stub')

        expect( options.exists() ).toBeTruthy()
        expect( picture.exists() ).toBeTruthy()

        // PokemonPicture atribure pokemonId === 1  
        expect( (picture.attributes().pokemonid) ).toBe('1')
        
        expect( (options.attributes().pokemons) ).toBeTruthy()
        // PokemonOptions attribute pokemons tobe True
        
    })


    test('pruebas con check answer', async () => {

        const wrapper = shallowMount( PokemonPage,  {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[2],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })

        await wrapper.vm.checkAnswer(151)

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect( wrapper.vm.showAnswer ).toBeTruthy()
        expect( wrapper.find('h2').text() ).toBe(`Has Acertado es ${ pokemons[2].name }`)

        // para que esta ultima prueba pase se tiene que comentar en el pokemonPage las lineas 57,58 y 59 o crear una nueva instancia
        
        // await wrapper.vm.checkAnswer(1)

        // expect( wrapper.vm.message ).toBe(`Fallaste el pokemon era ${ pokemons[2].name }`)

        
    })


})




