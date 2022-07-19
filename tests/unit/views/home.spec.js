import { shallowMount } from "@vue/test-utils"
import Home from '@/views/HomeView';

describe('Pruebas del Home view', () => {
    test('Debe de renderizar el componente correctamente', () => {
        const wrapper = shallowMount( Home )
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('hacer click en un boton debe redireccionar a no-entry', () => {
        
        const mockRourter = {
            push: jest.fn()
        }

        const wrapper = shallowMount( Home , {
            global: {
                mocks: {
                    $router: mockRourter
                }
                // reemplazamos el $router por el mockRouter, para no utilizar el real sino solo esperar que sea llamado
            }
        })

        wrapper.find('button').trigger('click')

        expect( mockRourter.push ).toHaveBeenCalled()
        expect( mockRourter.push ).toHaveBeenCalledWith({ name: 'no-entry' })

    })
})




