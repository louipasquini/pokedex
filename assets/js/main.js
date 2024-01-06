const convertPokemon = (pokemon, number) => {
    const firstLetter = pokemon.name[0].toUpperCase()
    const name = pokemon.name.slice(1)
    number += 1
    number = number.toString()
    return `
    <li class="pokemon">
            <div class="title">
                <span class="name">${firstLetter + name}</span>
                <span class="number">#${number.padStart(3,'0')}</span>
            </div>
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
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