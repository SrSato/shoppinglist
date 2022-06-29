function muestraModal(id_contenido){
    const modal = document.querySelector(".modal"); // Selecciono la modal
    id_contenido = document.getElementById(id_contenido);// Selecciono el contenido que debe verse en la modal
    escondeHijas()    // Escondo todo lo que hay dentro de la modal
    id_contenido.style.display="flex"; // Vuelvo mostrable el contenido que se ha escogido
    modal.style.display="flex"; //Enseño la modal con el contenido correcto ya mostrable

}

function escondeModal(){
    const modal = document.querySelector(".modal");
    modal.style.display="none";
}

function escondeHijas(){
    const hijas = document.getElementsByClassName("modalhija");
    for (hija of hijas) {
        hija.style.display="none";
    }
}

function sumaNum(num, idInputNumber, min){
    let input = document.getElementById(idInputNumber);
    input.value = Number(input.value) + num;
    
    if(min!=null){        
        if (input.value < min){
            input.value = min;
        }       
    }
}