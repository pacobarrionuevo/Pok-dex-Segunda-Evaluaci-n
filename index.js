const arrayPokemonTodos = [];

pokemon();

async function pokemon() {
    await obtenerPokemons();
    drawPokemons(arrayPokemonTodos);
} 

async function obtenerPokemons() {
    for (let i = 1; i <= 151; i++) {
        const pokemon = await getData(`https://pokeapi.co/api/v2/pokemon/${i}`);
        arrayPokemonTodos.push(pokemon);
    }
}

function drawPokemons(pokemons) {
    const listaPokemon = document.getElementById('lista-pokemon');
    for(const pokemon of pokemons){
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemonCard');
        pokemonCard.innerHTML += '<a href="vistaSecundaria.html">';
        pokemonCard.innerHTML += '<div style = "text-align: center;">' + pokemon.name + ' ('+pokemon.id+')' + '</div>';
        pokemonCard.innerHTML += '<img src=' + pokemon.sprites.other["official-artwork"].front_default + ' style="height=200px; display: grid; margin: 0 auto;">';
        pokemonCard.innerHTML += '<div style = "text-align: center;" class="'+ cambiarColor(pokemon.types[0].type.name) +'">' + traducirTipo(pokemon.types[0].type.name) +'</div>';
        if (pokemon.types.length > 1) {
            pokemonCard.innerHTML += '<div style = "text-align: center;" class="'+ cambiarColor(pokemon.types[1].type.name) +'">' + traducirTipo(pokemon.types[1].type.name) +'</div>';
        }
        pokemonCard.innerHTML += '</a>';
        listaPokemon.appendChild(pokemonCard);
    }
}

async function getData(url) {
    const response = await fetch(url);
    const json = await response.text();
    return JSON.parse(json);
}

function traducirTipo(pokemonTipo) {
    switch (pokemonTipo) {
        case 'grass':
            return 'planta';
            break;
        case 'bug':
            return 'bicho';
            break;
        case 'fire':
            return 'fuego';
            break;
        case 'water':
            return 'agua';
            break;
        case 'ice':
            return 'hielo';
            break;
        case 'electric':
            return 'eléctrico';
            break;
        case 'ground':
            return 'tierra';
        break;
        case 'rock':
            return 'roca';
        break;
        case 'fighting':
            return 'lucha';
            break;
        case 'steel':
            return 'acero';
            break;
        case 'psychic':
            return 'psíquico';
            break;
        case 'poison':
            return 'veneno';
            break;
        case 'fairy':
            return 'hada';
            break;
        case 'normal':
            return 'normal';
            break;
        case 'dragon':
            return 'dragón';
            break;
        case 'ghost':
            return 'fantasma';
            break;
        case 'flying':
            return 'volador';
            break;
        default:
            return 'no tiene tipo';
            break;
    }
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

const botonModoClaroOscuro = document.getElementById("modo-claro-oscuro");

botonModoClaroOscuro.addEventListener("click", () => {document.body.classList.toggle("modo-oscuro");});
