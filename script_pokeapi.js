////////////////////////// FUNCIONES DE CARGA DE  LISTA POKEMON JSON //////////////////////////

function traer() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    //fetch("paises.json")
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}

function tabla(datos) {
    //var mainMenu = "<table class='table table-striped'>";
    var mainMenu = "<p>Numero de Pokemo: "+ datos.count +"</p>";
    mainMenu += "<table class='table table-striped'>";
    mainMenu += "<thead>";
    mainMenu += "<tr>";
    mainMenu += "<th>NOMBRE</th>";
    mainMenu += "<th>URL</th>";
    mainMenu += "</tr>";
    mainMenu += "</thead>";
    mainMenu += "<tbody>";

    for(let valor of datos.results){
        mainMenu += "<tr>"
        mainMenu += "<td>" + valor.name + "</td>";
        /*********************** */
        mainMenu += "<td>";
        mainMenu += "<form action='/detail.html' method='GET'>";
        mainMenu += "<input type='hidden' name='name' value ="+ valor.name +">";
        mainMenu += "<input type='submit' value='VER'>";
        mainMenu += "</form>"; 
        mainMenu += "</td>";
        /*********************** */
        mainMenu += "</tr>";
    }
    document.getElementById("mainMenu").innerHTML = mainMenu;
}
////////////////////////// FUNCIONES DE CARGA DE  LISTA POKEMON JSON //////////////////////////

//obtiene el "name" de la url
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// muestra los detalles del poke
function mostrarPokemon() {
    const pokemonName = getQueryParam('name');
    console.log(pokemonName)
    if (pokemonName) {
       fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonName)
       //fetch(pokemonName)
            .then(response => response.json())
            .then(data => {
                const detailsDiv = document.getElementById('mainDetail');
                detailsDiv.innerHTML = `
                    <h2>${data.name}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p>Height: ${data.height}</p>
                    <p>Weight: ${data.weight}</p>
                    <p>Base Experience: ${data.base_experience}</p>
                    <p>Abilities: ${data.abilities.map(a => a.ability.name).join(', ')}</p>
                `;
            });
    } else {
        document.getElementById('mainDetail').textContent = 'No Pokémon selected.';
    }
}