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
        //HACER UNA FUNCIÓN DONDE GUARDAR ESTO
        //Objetivo: hacer que si un pokemon tiene doble tipo, una mitad sea de un color y la otra de otro.
        switch (pokemon.types[0].type.name) {
            case 'grass':
                pokemonCard.classList.add('pokemonCardPlanta');
                break;
            case 'bug':
                pokemonCard.classList.add('pokemonCardBicho');
                break;
            case 'fire':
                pokemonCard.classList.add('pokemonCardFuego');
                break;
            case 'water':
                pokemonCard.classList.add('pokemonCardAgua');
                break;
            case 'ice':
                pokemonCard.classList.add('pokemonCardHielo');
                break;
            case 'electric':
                pokemonCard.classList.add('pokemonCardElectrico');
                break;
            case 'ground':
                pokemonCard.classList.add('pokemonCardTierra');
            break;
            case 'rock':
                pokemonCard.classList.add('pokemonCardRoca');
            break;
            case 'fighting':
                pokemonCard.classList.add('pokemonCardLucha');
                break;
            case 'steel':
                pokemonCard.classList.add('pokemonCardAcero');
                break;
            case 'psychic':
                pokemonCard.classList.add('pokemonCardPsiquico');
                break;
            case 'poison':
                pokemonCard.classList.add('pokemonCardVeneno');
                break;
            case 'fairy':
                pokemonCard.classList.add('pokemonCardHada');
                break;
            case 'normal':
                pokemonCard.classList.add('pokemonCardNormal');
                break;
            case 'dragon':
                pokemonCard.classList.add('pokemonCardDragon');
                break;
            case 'ghost':
                pokemonCard.classList.add('pokemonCardFantasma');
                break;
            default:
                pokemonCard.classList.add('pokemonCard');
                break;
        }
        pokemonCard.innerHTML += '<div style = "text-align: center;">' + pokemon.name + ' ('+pokemon.id+')' + '</div>';
        pokemonCard.innerHTML += '<img src=' + pokemon.sprites.other["official-artwork"].front_default + ' style="height=200px; display: grid; margin: 0 auto;">';
        if (pokemon.types.length>1) {
            pokemonCard.innerHTML += '<div style = "text-align: center;">' + traducirTipo(pokemon.types[0].type.name) + ' / ' + traducirTipo(pokemon.types[1].type.name) +'</div>';
        } else {
            pokemonCard.innerHTML += '<div style = "text-align: center;">' + traducirTipo(pokemon.types[0].type.name) + '</div>'
        }
        
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
            return 'acero';;
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
