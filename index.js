getPokemonData(13);
getEvolutionChain(13);
async function getPokemonData(id) {
    const obj = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(obj);
    document.getElementById('imagen').src = obj.sprites.other["showdown"].front_default;
    document.getElementById('name').innerText = obj.name;
    document.getElementById('ability').innerText = obj.abilities[0].ability.name;
    
}
async function getData(url) {
    const response = await fetch (url);
    const json = await response.text();
    return JSON.parse(json);
}

async function getEvolutionChain(id) {
    const obj = await getData(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const evolutionChainURL = obj.evolution_chain.url;
    const evolutionChain = await getData(evolutionChainURL)
    console.log(evolutionChain);
}

