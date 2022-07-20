import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios';

describe('Pruebas en el upload image', () => {
    test('debe retornar un archivo y retornar el url', async () => {

        const {data} = await axios.get('https://res.cloudinary.com/drelgczps/image/upload/v1658252457/cld-sample-2.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof( url ) ).toBe('string')

    })
})



