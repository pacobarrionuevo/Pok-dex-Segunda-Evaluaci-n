import { traducirTipo as _traducirTipo } from "./traducirTipo.js";

const buscador = document.getElementById('barraBusqueda'); 
const listaPokemon = document.getElementById('lista-pokemon');
const arrayPokemonTodos = [];

pokemon();

async function pokemon() {
    await obtenerPokemons();
    drawPokemons(arrayPokemonTodos);
} 

async function obtenerPokemons() {
    for (let i = 1; i <= 151; i++) {
        let pokemon = await getData(`https://pokeapi.co/api/v2/pokemon/${i}`);
        arrayPokemonTodos.push(pokemon);
    }
}

function drawPokemons(pokemons) {
    listaPokemon.innerHTML = '';
    for(const pokemon of pokemons){
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemonCard');
        pokemonCard.innerHTML += `<a id="linkPokemon" href="vistainterna.html">`;
        pokemonCard.innerHTML += `<img id="imagen" style="height=200px; display: grid; margin: 0 auto;" src="${pokemon.sprites.other["official-artwork"].front_default}">`;
        pokemonCard.innerHTML += `<h2 id="nombre" style = "text-align: center;">${pokemon.name}</h2>`;
        pokemonCard.innerHTML += `</a>`;
        pokemonCard.innerHTML += `<p id="codigo" style = "text-align: center;">ID: ${(pokemon.id).toString().padStart(3,"00")}</p>`;     
        pokemonCard.innerHTML += '<div style = "text-align: center;" class="'+ cambiarColor(pokemon.types[0].type.name) +'">' + _traducirTipo(pokemon.types[0].type.name) +'</div>';
        if (pokemon.types.length > 1) {
            pokemonCard.innerHTML += '<div style = "text-align: center;" class="'+ cambiarColor(pokemon.types[1].type.name) +'">' + _traducirTipo(pokemon.types[1].type.name) +'</div>';
        }
        pokemonCard.innerHTML += '</a>';
        listaPokemon.appendChild(pokemonCard);
    }
}

async function getData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

function cambiarColor(tipo) {
    switch (tipo) {
        case 'grass':
            return 'pokemonCardPlanta';
            break;
        case 'bug':
            return 'pokemonCardBicho';
            break;
        case 'fire':
            return 'pokemonCardFuego';
            break;
        case 'water':
            return 'pokemonCardAgua';
            break;
        case 'ice':
            return 'pokemonCardHielo';
            break;
        case 'electric':
            return 'pokemonCardElectrico';
            break;
        case 'ground':
            return 'pokemonCardTierra';
            break;
        case 'rock':
            return 'pokemonCardRoca';
            break;
        case 'fighting':
            return 'pokemonCardLucha';
            break;
        case 'steel':
            return 'pokemonCardAcero';
            break;
        case 'psychic':
            return 'pokemonCardPsiquico';
            break;
        case 'poison':
            return 'pokemonCardVeneno';
            break;
        case 'fairy':
            return 'pokemonCardHada';
            break;
        case 'normal':
            return 'pokemonCardNormal';
            break;
        case 'dragon':
            return 'pokemonCardDragon';
            break;
        case 'ghost':
            return 'pokemonCardFantasma';
            break;
        case 'flying':
            return 'pokemonCardVolador';
            break;
        default:
            break;
    }
}

buscador.addEventListener('input', () => {
    const searchText = buscador.value.toLowerCase().trim();
    const pokemonEncontrados = arrayPokemonTodos.filter(pokemon => pokemon.name.includes(searchText) || pokemon.id.toString().includes(searchText));
    console.log('Pokémon filtrados:', pokemonEncontrados);
    drawPokemons(pokemonEncontrados);
});
