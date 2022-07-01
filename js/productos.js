let col_productos;

col_productos = {
    "productos":[]
}

/*
col_productos={
    "productos" : [
        { "nombre": "lechuga",
          "cantidad" : 3,
          "tienda" : "ALDI",
          "notas" : "Cuidado con los bichos!"},

        { "nombre": "tomate",
          "cantidad" : 31,
          "tienda" : "Melones de Leyenda",
          "notas" : "Que estén maduros!!"}
    ]
}*/

function creaProducto(){
    //Coge los datos del producto
    let nombre = document.getElementById("inputNombre").value;
    let tienda = document.getElementById("selectTienda").value;
    let cantidad = document.getElementById("inputCantidad").value;
    let notas = document.getElementById("areaNotas").value;

    //Validamos que el nombre no esté vacio
    nombre = nombre.slice(0,1).toUpperCase() + nombre.slice(1);
    if (nombre.trim()=="") {
        limpiaProducto();
        return false;
    }

    //Validamos la cantidad pq no quiero compras negativas
    if (cantidad<=0) {
        cantidad=1;
    }

    //Guardamos los datos en el JSON
    col_productos.productos.push(
        {
            "nombre": nombre,
            "tienda": tienda,
            "cantidad": cantidad,
            "notas": notas 
        }
    );

    //Guardamos el JSON en el localStorage (hay que convertirlo a string pa que entre)
    localStorage.setItem( "col_productos", JSON.stringify(col_productos) );
    
    //Actualizo el listado de productos
    rellenaLista();

    //Limpio la ventana de producto
    limpiaProducto();

}

function limpiaProducto(){
    //limpiamos los inputs
    document.getElementById("inputNombre").value="";
    document.getElementById("selectTienda").value="No seleccionado";
    document.getElementById("inputCantidad").value="";
    document.getElementById("areaNotas").value="";

    //Escondemos la pantalla (esta función está en logica.js)
    escondeModal();
}

function rellenaLista(){
    /*
    <table class="cebreado" id="tablaProds">
        <tr>
            <td> <input type="checkbox" name="chk_platano" id="chk_platano"></td>
            <td> <label for="chk_platano">Plátano</label></td>
            <td class="td_cant"> 12 </td>
            <td class="td_icons"> <i class="material-icons" onclick="muestraModal('infoprod')">search</i><i class="material-icons" onclick='borraProducto("plátano")'>delete</i></td>
        </tr>
    </table>
    */

    let contenedor= document.getElementById("main");
    let tabla = '<table class="cebreado" id="tablaProds">';

    for (producto of col_productos.productos) {
        filaTabla = 
            `<tr>
                <td> <input type="checkbox" name="chk_${producto.nombre}" id="chk_${producto.nombre}"></td>
                <td> <label for="chk_${producto.nombre}">${producto.nombre}</label></td>
                <td class="td_cant"> ${producto.cantidad} </td>
                <td class="td_icons"> <i class="material-icons" onclick="muestraModal('infoprod')">search</i><i class="material-icons" onclick='borraProducto("${producto.nombre}")'>delete</i></td>
            </tr>`;

       tabla += filaTabla;        
    }   
    tabla +="</table>";
    contenedor.innerHTML = tabla;
}

function recuperaArchivados(){

    if( localStorage.getItem("col_productos") ){

        col_productos = localStorage.getItem("col_productos"); //Ahora esto es un string
        col_productos = JSON.parse(col_productos); //Ahora ya no, ahora es un JSON

        rellenaLista();

    }    

}

function borraProducto(eliminable){
    
    for( producto of col_productos.productos){
        if(producto.nombre=eliminable){
            posicion = col_productos.productos.indexOf(producto);
            col_productos.productos.splice(posicion,1);
        }
    }

    localStorage.setItem( "col_productos", JSON.stringify(col_productos) );

    rellenaLista();

    //¿Y si el nombre está vacio??? :(
}

