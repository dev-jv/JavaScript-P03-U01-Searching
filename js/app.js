    //Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//Contenedor para res..
const resultado = document.querySelector('#resultado');

const maxy = new Date().getFullYear();
const miny = maxy-10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}
    //Events
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);
    llenarSelect();
    // console.log(typeof datosBusqueda.marca);
    
})

//Event listener para los select de búsqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value); // Pues ingresa como String
    filtrarAuto();
});
minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value); // Pues ingresa como String
    filtrarAuto();
});
transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

    // Functions
function mostrarAutos(autos){

    limpiarHTML(); // Elimina lo previo

    autos.forEach( auto => {

        const{marca, modelo, year, precio, puertas, color, transmision} = auto;

        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - color: ${color}
        
        `;
        
        resultado.appendChild(autoHTML);
    })
}

//Limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


function llenarSelect(){

    for(let i = maxy; i>=miny; i--){
        const opcion = document.createElement('option')
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }

    // for(let i = miny; i<maxy; i++){
    //     console.log(i);
    // }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    // console.log(resultado);
    // mostrarAutos(resultado);

    if( resultado.length ){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }

}

function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros parámetros';
    resultado.appendChild(noResultado);

}
 
function filtrarMarca(auto){

    const{marca} = datosBusqueda; // Dest..
    if( marca ) {// Si datosBusqueda.marca no está vacía... [... marca existe.. ...true]
        return auto.marca === marca;// devolver todo auto cuya marca sea igual a datosBusqueda.marca
    }
    return auto;
}

function filtrarYear(auto){

    const{year} = datosBusqueda; // Dest..
    if( year ) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){

    const{minimo} = datosBusqueda; // Dest..
    // console.log(typeof minimo)
    // console.log(typeof auto.precio)
    if( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){

    const{maximo} = datosBusqueda; // Dest..
    // console.log(typeof minimo)
    // console.log(typeof auto.precio)
    if( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){

    const{puertas} = datosBusqueda; // Dest..
    // console.log(typeof puertas)
    // console.log(typeof auto.puertas)
    if( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){

    const{transmision} = datosBusqueda; // Dest..
    if( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){

    const{color} = datosBusqueda; // Dest..
    if( color ) {
        return auto.color === color;
    }
    return auto;
}











