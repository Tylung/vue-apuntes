

// console.log('Hola Developer!');
const apiKey = '76BcX0eFN6wWFLz3P5CpCj7al8AcWWOK'


// https://api.giphy.com/v1/gifs/random?api_key=76BcX0eFN6wWFLz3P5CpCj7al8AcWWOK


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    })
    // .then(img => {
        // console.log(img)
    // })


