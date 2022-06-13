import axios from 'axios'
console.log('Hola Dev')

const apiKey = '76BcX0eFN6wWFLz3P5CpCj7al8AcWWOK'

// `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random').then( resp => {
    // console.log(resp.data.data.images.original.url)
    // const url = resp.data.data.images.original.url
//     const { data } = resp.data 
//     const { url } = data.images.original
//     console.log(url);
//     const img = document.createElement('img')
//     img.src = url
//     document.body.append(img)
// })




