////////////////////////// FUNCIONES DE CARGA DE  PAISES JSON PARA CONTACTO //////////////////////////

function traer() {
    fetch("https://gist.githubusercontent.com/ratrabbit/e39778d3de34286e8dd36fe80c05e237/raw/187ebd1d7052af70bdcbb47cc5224f3f40084bac/countries.json")
    //fetch("paises.json")
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}
traer();

function tabla(datos) {
    var mainMenu = "<table class='table table-striped'>";
    mainMenu += "<thead>";
    mainMenu += "<tr>";
    mainMenu += "<th>CODIGO</th>";
    mainMenu += "<th>NOMBRE</th>";
    mainMenu += "<th>FAVORITO</th>";
    mainMenu += "</tr>";
    mainMenu += "</thead>";
    mainMenu += "<tbody>";

    for(let valor of datos.countries){
        mainMenu += "<tr>"
        mainMenu += "<td>" + valor.name + "</td>";
        mainMenu += "<td>" + valor.es_name + "</td>";
        mainMenu += "<td>john@example.com</td>"
        mainMenu += "</tr>"
    }
    mainMenu += "</select>";
    document.getElementById("mainMenu").innerHTML = mainMenu;
}

////////////////////////// FUNCIONES DE CARGA DE  PAISES JSON PARA CONTACTO //////////////////////////
