function muestraModal(contenido){
    const modal = document.querySelector(".modal");
    escondeHijas(clase)
    const hijas = document.getElementsByClassName("modalhija");
    contenido = document.getElementById(contenido);
    for (hija of hijas) {
        hija.style.display="none";
    }
    contenido.style.display="flex";
    modal.style.display="flex";

}

function escondeModal(){
    const modal = document.querySelector(".modal");
    modal.style.display="none";
}