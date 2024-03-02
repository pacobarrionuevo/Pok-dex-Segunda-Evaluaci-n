export function traducirTipo(pokemonTipo) {
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
