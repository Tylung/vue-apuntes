import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    })
  })

  test('debe de hacer match con el snapshot', () => {
    
    expect( wrapper.html() ).toMatchSnapshot
    // expect(wrapper.html()).toMatchInlineSnapshot()
    })

test('debe de mostrar las 4 opciones correctamente', () => {
    
    const liG = wrapper.findAll('li')
    const [li1, li2, li3, li4 ] = wrapper.findAll('li')

    // que existan 4 li
    expect( liG.length ).toBe(4)

    // cada li debe de tener su nombre del pokemon
    expect( li1.text() ).toBe('bulbasaur')
    expect( li2.text() ).toBe('charmander')
    expect( li3.text() ).toBe('mew')
    expect( li4.text() ).toBe('mewtwo')

  })

  test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {

    const [li1, li2, li3, li4 ] = wrapper.findAll('li')
    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')
    expect( wrapper.emitted('selection-pokemon').length ).toBe(4)
    expect( wrapper.emitted('selection-pokemon')[0] ).toEqual([1])
    expect( wrapper.emitted('selection-pokemon')[1] ).toEqual([4])
    expect( wrapper.emitted('selection-pokemon')[2] ).toEqual([151])
    expect( wrapper.emitted('selection-pokemon')[3] ).toEqual([150])

    })

    
})
