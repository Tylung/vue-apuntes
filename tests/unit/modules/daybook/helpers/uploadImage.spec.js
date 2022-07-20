import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'drelgczps',
    api_key: '813892189533876',
    api_secret: 'UQRchbESxnC8fxf5vV2LQQiwSME'
})


describe('Pruebas en el upload image', () => {
    test('debe retornar un archivo y retornar el url', async (  ) => {

        const {data} = await axios.get('https://res.cloudinary.com/drelgczps/image/upload/v1658252457/cld-sample-2.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof( url ) ).toBe('string')


        // tomar el id

        const segments = url.split('/')
        const imgId = segments[ segments.length -1 ].replace('.jpg', '')

        cloudinary.v2.api.delete_resources( imgId, {}, () => {
            // done()
            // no se puede usar done junto a sync/await a partir de la version 26.6
        })

    })
})



