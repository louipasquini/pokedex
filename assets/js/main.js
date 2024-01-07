// const convertTypes = (pokemonTypes) => {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type}</li>`)
// }

const convertPokemon = (pokemon, number) => {
    number += 1
    number = number.toString()
    return `
    <li class="pokemon ${pokemon.type}">
            <div class="title">
                <span class="name">${pokemon.name}</span>
                <span class="number">#${number.padStart(3,'0')}</span>
            </div>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class='type'>${type}</li>`).join('')}
                </ol>
                <img src="assets/img/pokemons/poke_${number}.gif" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

PokeApi.getPokemons().then((pokemons) => {
    pokemonList.innerHTML += pokemons.map(convertPokemon).join('')
})