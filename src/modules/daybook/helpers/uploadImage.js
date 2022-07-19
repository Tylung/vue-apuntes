import axios from 'axios'

const uploadImage = async ( file ) => {

    if ( !file ) return
    
    try {
        
        const dataForm = new FormData()
        dataForm.append('upload_preset', 'curso-vue')
        dataForm.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/drelgczps/image/upload'

        const { data } = await axios.post(url, dataForm)

        console.log(data)

        return data.secure_url

    } catch (error) {
        console.error('Error al cargar la imagen, revisar logs')
        console.log(error)
        return null
    }

}

export default uploadImage