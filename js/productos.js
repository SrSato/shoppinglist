let col_productos;

col_productos = {
    "productos":[]
}

/*          SACADO DE MI PROTOTIPO - ESTA ES LA PINTA QUE LE DAREMOS AL JSON (nuestra mini base de datos ;) :
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
            "notas": notas,
            "comprado": false
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
    /*        SACADO DE MI PROTOTIPO - ESTA ES LA PINTA DE LA TABLA QUE TENEMOS QUE CREAR DINáMICAMENTE:
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
    let checkado ='';

    for (producto of col_productos.productos) {
        //Para cada producto de mi colección guardo el indice ... Lo usaré en los botones de detalle y borrar
        indice = col_productos.productos.indexOf(producto);
        //Si comprado es true le pondré el atributo checked al checkbox (para que salga ya marcado). Si es false no le pondré nada (vacio la variabe y asi no se imprime nada cuando la uso en la etiqueta)
        if(producto.comprado){
            checkado="checked";
        }else{
            checkado="";
        }
        //Como ya tenemos el indice y si está marcado o no, podemos montar la fila de nuestro producto en la tabla       
        filaTabla = 
            `<tr>
                <td> <input type="checkbox" name="chk_${producto.nombre}" id="chk_${producto.nombre}" ${checkado} onchange="cambiaComprado(${indice})"></td>
                <td> <label for="chk_${producto.nombre}">${producto.nombre}</label></td>
                <td class="td_cant"> ${producto.cantidad} </td>
                <td class="td_icons"> <i class="material-icons" onclick="detallaProducto(${indice})">search</i><i class="material-icons" onclick='borraProducto(${indice})'>delete</i></td>
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
       
    // 1. Eliminar el producto del JSON
    col_productos.productos.splice(eliminable,1);

    // 2. Guardar el JSON actualizado en el localStorage
    localStorage.setItem( "col_productos", JSON.stringify(col_productos) );

    // 3. Volver a pintar la lista
    rellenaLista();
   
}

function detallaProducto(indice){
    /*   SACADO DE MI PROTOTIPO - ES LA PINTA QUE DEBERIA TENER EL DETALLE DE CADA PRODUCTO:
        <header><h4>Plátano</h4></header>
        <div class="row"><span class="label">Compra:</span> <span class="info">12</span></div>
        <div class="row"><span class="label">En: </span> <span class="info">Fruteria Pepi </span></div>
        <div class="row"><span class="label">Notas: </span> <span class="info">Blablabla</span></div>
        <div id="infoprodOk" class="button cancelar" onclick="escondeModal()">Visto</div> */

    let detalle ="";
    let prod = col_productos.productos[indice];
    let contenedor = document.getElementById("infoprod");
    
    detalle = `
        <header><h4>${prod.nombre}</h4></header>
        <div class="row"><span class="label">Compra:</span> <span class="info">${prod.cantidad}</span></div>
        <div class="row"><span class="label">En: </span> <span class="info">${prod.tienda} </span></div>
        <div class="row"><span class="label">Notas: </span> <span class="info">${prod.notas}</span></div>
        <div id="infoprodOk" class="button cancelar" onclick="escondeModal()">Visto</div>
    `
    contenedor.innerHTML = detalle;
    muestraModal('infoprod');
}

function cambiaComprado(indice){
    col_productos.productos[indice].comprado = !col_productos.productos[indice].comprado;
    localStorage.setItem( "col_productos", JSON.stringify(col_productos) );
    rellenaLista(); //¿Hace falta???
}

