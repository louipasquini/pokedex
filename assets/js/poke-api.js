const PokeApi = {

}

PokeApi.getPokemons = (offset = 0, limit = 151) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((res) => res.json())
        .then((response) => response.results)
        .catch((error) => {
            console.error(error)
            console.log('Requisição falhou!')
        })
}