var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 1200, 800);


function limpiarPantalla() {

    pincel.clearRect(0, 0, 1200, 800);
}