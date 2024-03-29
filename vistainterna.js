 import { traducirTipo as _traducirTipo } from "./traducirTipo.js";

    const pokemonURL = new URLSearchParams(window.location.search);
    const id = pokemonURL.get('id');

    getPokemonData(id);
    const listaPokemon = document.getElementById("lista-pokemon");
    async function getData(url) {
        const response = await fetch (url);
        const json = await response.text();
        return JSON.parse(json);
    }

    async function getPokemonData(id) {   
        const obj = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
        listaPokemon.classList.add('flex');
        listaPokemon.innerHTML += '<div class = "centrar">';
        listaPokemon.innerHTML +=  '<div id ="nombre" style = "text-align: center;font-size:50px">' + obj.name+ '<div>';
        listaPokemon.innerHTML +=  '<div style = "text-align: center;opacity:0.4">N°' + obj.id+ '<div>';
        listaPokemon.innerHTML += '<img src=' + obj.sprites.other.showdown.front_default + ' style="height=200px; display: grid; margin: 0 auto;">';
        listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.weight/10+ 'Kg <div>';
        listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.height/10+ 'm<div>';
        if (obj.types.length>1) {
            listaPokemon.innerHTML += '<div style = "text-align: center;">' + _traducirTipo(obj.types[0].type.name) + '/' + _traducirTipo(obj.types[1].type.name) +'<div>';
        } else {
            listaPokemon.innerHTML += '<div style = "text-align: center;">' + _traducirTipo(obj.types[0].type.name) + '<div>'
        }
        listaPokemon.innerHTML += '<br>';
        listaPokemon.innerHTML += `
        <div style = "text-align: center;"><h1>Estadísticas</h1></div>
                <div style = "text-align: center;">Vida</div>
                <div style = "text-align: center;">
                <progress value="${obj.stats[0].base_stat}" max="255"></progress>
                ${obj.stats[0].base_stat}
                </div>
                <div style = "text-align: center;">Ataque</div>
                <div style = "text-align: center;">
                <progress value="${obj.stats[1].base_stat}" max="255"></progress>
                ${obj.stats[1].base_stat}
                </div>
                <div style = "text-align: center;">Defensa</div>
                <div style = "text-align: center;">
                <progress value="${obj.stats[2].base_stat}" max="255"></progress>
                    ${obj.stats[2].base_stat}
                </div> 
                <div style = "text-align: center;">Ataque Especial</div>
                <div style = "text-align: center;">
                <progress value="${obj.stats[3].base_stat}" max="255"></progress>
                    ${obj.stats[3].base_stat}
                </div> 
                <div style = "text-align: center;">Defensa Especial</div>
                <div style = "text-align: center;">
                    <progress value="${obj.stats[4].base_stat}" max="255"></progress>
                    ${obj.stats[4].base_stat}
                </div>
            <div style = "text-align: center;">Velocidad</div>
            <div style = "text-align: center;">
            <progress value="${obj.stats[5].base_stat}" max="255"></progress>
                ${obj.stats[5].base_stat}`; 
    listaPokemon.innerHTML +='</div>';

}    
    const botonModoClaroOscuro = document.getElementById("modo-claro-oscuro");
    botonModoClaroOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    });
        ;  
