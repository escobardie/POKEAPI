var a = [];
var name_session = "session11";

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
    mainMenu += "<th>INFORMACION</th>";
    mainMenu += "<th>FAVORITO</th>";
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
        mainMenu += "<td>";
        //mainMenu += "FAV";
        mainMenu += "<button name="+ valor.name +" onclick='changeText(this)'>Fav</button>";
        mainMenu += "</td>";
        mainMenu += "</tr>";
    }
    document.getElementById("mainMenu").innerHTML = mainMenu;
}
////////////////////////// FIN //////////////////////////

////////////////////////// FUNCIONES DE DATOS POKEMON JSON //////////////////////////
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
////////////////////////// FIN //////////////////////////





function changeText(id) {
    console.log(id.name)
    // gracias al id obtenemos el nombre del pokemon
    var add_pokemon = id.name

    // if (!a.includes(id.name)) { // si no lo contiene, lo guardara // ORIGINAL
    if (!localStorage.getItem(name_session).includes(id.name)) { // si no lo contiene, lo guardara
        console.log("NO contiene")
        id.style.color = "red";
        // lo guardamos en la lista
        SaveDataToLocalStorage(add_pokemon)
    }else{ // si contiene no lo guarda, lo elimina
        console.log("si contiene")
        id.style.color = "blue"; 
        DeleteDataToLocalStorage(add_pokemon);
    }
    
    // https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick3
}

function SaveDataToLocalStorage(add_pokemon){

    //var name_session = "session10"; //original
    //var a = []; //original
    
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem(name_session)) || [];
    // Push the new data (whether it be an object or anything else) onto the array
   	a.push(add_pokemon);
    // console.log(a)
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem(name_session, JSON.stringify(a));
    console.log(a)
    
    //document.getElementById("demo").innerHTML = localStorage.getItem(name_session);
}

function DeleteDataToLocalStorage(add_pokemon){
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem(name_session)) || [];
    // Push the new data (whether it be an object or anything else) onto the array
   	//delete a[add_pokemon];
    //console.log(a)
    // console.log(a)
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem(name_session, JSON.stringify(a));
    console.log(a)
}

//https://www.w3schools.com/jsref/event_onsubmit.asp