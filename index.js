
// los primeros 3 fetch los cree yo para ver las distintas opciones de respuestas que me devuelve la api

let lat="-43.894724517238785",
lon="-69.17854385353475"


fetch(`https://apis.datos.gob.ar/georef/api/ubicacion?lat=${lat}&lon=${lon}`)
.then(res=>res.json())
.then(json=>console.log(json))





let provincia="jujuy"

fetch(` https://apis.datos.gob.ar/georef/api/provincias?nombre=${provincia}`)
.then(res=>res.json())
.then(json=>console.log(json))




let idProvincia="22"


fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=100`)
.then(res=>res.json())
.then(json=>console.log(json))









// El codigo lo cree yo y los comentarios los agregue con la IA de Bing, el motor de búsqueda de Microsoft


const d=document,
$selectPrimary=d.getElementById("select-primary"),
$selectSecondary=d.getElementById("select-secondary")


// Carga las opciones de provincias en un elemento select
function loadProvinces() {
    // Obtiene las provincias desde una API pública
    fetch(`https://apis.datos.gob.ar/georef/api/provincias`)
    .then(res=>res.ok ? res.json(): Promise.reject(res))
    .then(json=>{
        // Crea las opciones de provincias
        let $options= `<option value="">Elige una provicia</option>`
        json.provincias.forEach(el =>$options+= `<option value="${el.id}">${el.nombre}</option>`);
        // Agrega las opciones al elemento select
        $selectPrimary.innerHTML=$options
    })
    .catch(err=>{
        console.log(err);
        let message=err.statusText || "Ocurrio un error"   
        $selectPrimary.nextElementSibling.innerHTML=`Error ${err.status}: ${message}` 
    })
}

// Carga las opciones de municipios en un elemento select
function loadTowns(states) {
    // Obtiene los municipios de una provincia seleccionada desde una API pública
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${states}&campos=id,nombre&max=500`)
    .then(res=>res.ok ? res.json(): Promise.reject(res))
    .then(json=>{
        console.log(json);
        // Crea las opciones de municipios
        let $options= `<option value="">Elige un Municipio</option>`
        json.municipios.forEach(el =>$options+= `<option value="${el.id}">${el.nombre}</option>`);
        // Agrega las opciones al elemento select
        $selectSecondary.innerHTML=$options
    })
    .catch(err=>{
        console.log(err);
        let message=err.statusText || "Ocurrio un error"   
        $selectSecondary.nextElementSibling.innerHTML=`Error ${err.status}: ${message}` 
    })
}

// Cuando el contenido del documento se carga, llama a la función loadProvinces para cargar las opciones de provincias
d.addEventListener("DOMContentLoaded",loadProvinces())

// Cuando se selecciona una provincia, llama a la función loadTowns para cargar las opciones de municipios
$selectPrimary.addEventListener("change",e=>{loadTowns(e.target.value)})