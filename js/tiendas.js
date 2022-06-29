let col_tiendas;

col_tiendas = {
    "tiendas" : [
        {"nombre":"Melones de Leyenda"},
        {"nombre":"Mercadona"},
        {"nombre":"ALDI"}
    ]
}


function rellenaSelect( idSelect, coleccion){

    let select = document.getElementById(idSelect);
    let opciones= '';

    opciones = `<option value="no seleccionado"></option>`;
    
    for( tienda of coleccion){
        opciones += ` <option value= "${tienda.nombre}" > ${tienda.nombre} </option>`
                              
    }
   
    select.innerHTML = opciones;
}


