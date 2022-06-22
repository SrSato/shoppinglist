function muestraModal(contenido){
    const modal = document.querySelector(".modal"); // Selecciono la modal
    contenido = document.getElementById(contenido);// Selecciono el contenido que debe verse en la modal
    escondeHijas()    // Escondo todo lo que hay dentro de la modal
    contenido.style.display="flex"; // Vuelvo mostrable el contenido que se ha escogido
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