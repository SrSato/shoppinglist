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

    let nombre = document.getElementById("inputNombre").value;
    let tienda = document.getElementById("selectTienda").value;
    let cantidad = document.getElementById("inputCantidad").value;
    let notas = document.getElementById("areaNotas").value;

    col_productos.productos.push(
        {
            "nombre": nombre,
            "tienda": tienda,
            "cantidad": cantidad,
            "notas": notas 
        }
    )

    localStorage.setItem("col_productos", JSON.stringify(col_productos));

}
