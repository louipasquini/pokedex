const offset = 0
const limit = 151
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
        console.error(error)
        console.log('Requisição falhou!')
    })