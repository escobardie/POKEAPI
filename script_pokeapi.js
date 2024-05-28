////////////////////////// FUNCIONES DE CARGA DE  PAISES JSON PARA CONTACTO //////////////////////////

function traer() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    //fetch("paises.json")
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}
traer();

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
        //mainMenu += "<td>" + valor.url + "</td>";
        /*********************** */
        mainMenu += "<td>";
        mainMenu += "<form action='/detail.html' method='GET'>";
        //mainMenu += "<form action='/detail.html'";
        mainMenu += "<input type='hidden' value ="+ valor.name +">";
        mainMenu += "<input type='submit' value='VER'>";
        mainMenu += "</form>"; 
        mainMenu += "</td>";
        /*********************** */
        mainMenu += "</tr>";
    }
    document.getElementById("mainMenu").innerHTML = mainMenu;
}


function mostrarPokemon(url_pokemon){
/*
<td>
                            <form action='/detail/' method="GET">
                                <!-- <td>{{ pkmon.url }}</td> -->
                                <input type="hidden" name="POKEMON" value = {{ pkmon.name }}>
                                <input type="submit" value="VER">
                            </form>
                        </td>
*/
}

////////////////////////// FUNCIONES DE CARGA DE  PAISES JSON PARA CONTACTO //////////////////////////
