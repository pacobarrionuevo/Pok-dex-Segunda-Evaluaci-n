getPokemonData(3);
const listaPokemon = document.getElementById("lista-pokemon");
async function getData(url) {
    const response = await fetch (url);
    const json = await response.text();
    return JSON.parse(json);
}
async function getPokemonData(id) {
    const obj = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(obj);
    listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.name+ '<div>';
    listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.weight/10+ 'Kg <div>';
    listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.height/10+ 'm<div>';
    listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.order+ '<div>';
    listaPokemon.innerHTML += '<center><img src= '+ obj.sprites.other["official-artwork"].front_default+'></center>';
    if (obj.types.length>1) {
        listaPokemon.innerHTML += '<div style = "text-align: center;">' + obj.types[0].type.name + '/' + obj.types[1].type.name +'<div>';
    } else {
        listaPokemon.innerHTML += '<div style = "text-align: center;">' + obj.types[0].type.name + '<div>'
    }
    listaPokemon.innerHTML += '<br>';
    for (let i = 0; i < 6; i++) {
        listaPokemon.innerHTML +=  '<div style = "text-align: center;">' + obj.stats[i].base_stat+ '</div style = "width: 180px; width:(/255)%>"';
    }
    const elementoVistaInterna = document.getElementById("vista-interna-pokemon");
    elementoVistaInterna.innerHTML += `
    <div className='container-stats'>
    <h1>Estadísticas</h1>
    <div className='stats'>
        <div className='stat-group'>
            <div>Vida</div>
            <div className='progress-bar'></div>
            <div className='counter-stat'>
             +{obj.stats[0].base_stat}+
            </div>
        </div>
        <div className='stat-group'>
            <div>Ataque</div>
            <div className='progress-bar'></div>
            <div className='counter-stat'>
            {obj.stats[1].base_stat}
            </div>
        </div>
        <div className='stat-group'>
            <div>Defensa</div>
            <div className='progress-bar'></div>
            <div className='counter-stat'>
                {obj.stats[2].base_stat}
            </div>
        </div>
        <div className='stat-group'>
            <div>Ataque Especial</div>
            <div className='progress-bar'></div>
            <div className='counter-stat'>
                {obj.stats[3].base_stat}
            </div>
        </div>
        <div className='stat-group'>
            <div>Defensa Especial</div>
            <div className='progress-bar'></div>
            <div className='counter-stat'>
                {obj.stats[4].base_stat}
            </div>
        </div>
        <div className='stat-group'>
        <div>Velocidad</div>
        <div className='progress-bar'></div>
        <div className='counter-stat'>
            +{obj.stats[5].base_stat}+
        </div>
    </div>
        </div>
    </div>
    </div>
    }
    `;
    function setupEvolutionChain(evolutionChain) {
        const chain = evolutionChain.chain
        const chainContainer =  document.getElementById('current-pokemon-evolution-chain-container')
        const chainImages = [document.getElementById('current-pokemon-evolution-0'), document.getElementById('current-pokemon-evolution-1'), document.getElementById('current-pokemon-evolution-2')]
        const chainLevels = [document.getElementById('current-pokemon-evolution-level-0'), document.getElementById('current-pokemon-evolution-level-1')]
    
        if(chain.evolves_to.length != 0) {
            chainContainer.classList.remove('hide');
    
            setupEvolution(chain, 0);
    
            if(chain.evolves_to[0].evolves_to.length != 0) {
                setupEvolution(chain.evolves_to[0], 1);
    
                chainImages[2].classList.remove('hide');
                chainLevels[1].classList.remove('hide');
            } else {
                chainImages[2].classList.add('hide');
                chainLevels[1].classList.add('hide');
            };
        } else {
            chainContainer.classList.add('hide');
        };
    };
    async function getCadenaEvolutiva(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
      
        const cadenaEvolutiva = data.evolution_chain;
      
        
        const cadenaEvolutivaData = [];
        let currentChain = evolutionChain.chain;
        while (currentChain) {
          const speciesData = await getPokemonData(currentChain.species.name);
      
          evolutionChainData.push({
            species: speciesData,
            isBaby: currentChain.is_baby,
            evolutionDetails: currentChain.evolution_details,
          });
      
          currentChain = currentChain.evolves_to[0];
        }
      
        return evolutionChainData;
      }
      
const botonModoClaroOscuro = document.getElementById("modo-claro-oscuro");

botonModoClaroOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
}            
)} 
