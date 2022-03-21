var pantalla = document.getElementById("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 1250, 800);

function drawGallow() {
    if (pantalla.getContext) {
        pincel.lineCap = "butt";
        pincel.lineWidth = 10;

        pincel.beginPath(); // inicio codigo horca
        pincel.moveTo(175, 750);
        pincel.lineTo(50, 775);
        pincel.lineTo(300, 775);
        pincel.closePath();
        pincel.stroke();
        pincel.beginPath();
        pincel.moveTo(170, 20);
        pincel.lineTo(600, 20);
        pincel.moveTo(175, 20);
        pincel.lineTo(175, 750);
        pincel.stroke();
        pincel.beginPath();
        pincel.moveTo(600, 100);
        pincel.lineTo(600, 15);
        pincel.stroke(); // fin codigo horca


        pincel.beginPath(); //linea palabra: J
        pincel.moveTo(250, 775);
        pincel.lineTo(300, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: A
        pincel.moveTo(350, 775);
        pincel.lineTo(400, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: V
        pincel.moveTo(450, 775);
        pincel.lineTo(500, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: A
        pincel.moveTo(550, 775);
        pincel.lineTo(600, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: S
        pincel.moveTo(650, 775);
        pincel.lineTo(700, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: C
        pincel.moveTo(750, 775);
        pincel.lineTo(800, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: R
        pincel.moveTo(850, 775);
        pincel.lineTo(900, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: I
        pincel.moveTo(950, 775);
        pincel.lineTo(1000, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: P
        pincel.moveTo(1050, 775);
        pincel.lineTo(1100, 775);
        pincel.stroke();
        pincel.beginPath(); //linea palabra: T
        pincel.moveTo(1150, 775);
        pincel.lineTo(1200, 775);
        pincel.stroke();
    }
}

function drawHead() {
    pincel.beginPath();
    pincel.arc(600, 150, 50, 0, Math.PI * 2, true); //cabeza
    pincel.stroke();
}

function drawTrunk() {
    pincel.beginPath(); //tronco
    pincel.moveTo(600, 195);
    pincel.lineTo(600, 450);
    pincel.stroke();
}

function drawLeftLeg() {
    pincel.beginPath(); //pierna izquierda
    pincel.moveTo(600, 445);
    pincel.lineTo(500, 600);
    pincel.stroke();
}

function drawRightLeg() {
    pincel.beginPath(); //pierna derecha
    pincel.moveTo(600, 445);
    pincel.lineTo(700, 600);
    pincel.stroke();
}

function drawLeftArm() {
    pincel.beginPath(); //brazo izquierdo
    pincel.moveTo(600, 300);
    pincel.lineTo(700, 200);
    pincel.stroke();
}

function drawRightArm() {
    pincel.beginPath(); //brazo izquierdo
    pincel.moveTo(600, 300);
    pincel.lineTo(500, 200);
    pincel.stroke();
}

function gameOver() {
    texto = "Fin del juego"; //texto de prueba
    pincel.beginPath() //iniciar ruta
    pincel.fillStyle = "red"; //color de relleno
    pincel.font = "bold 60px arial"; //estilo de texto
    pincel.fillText(texto, 775, 380); //texto con método fill
}

function readKey(event) {
    var x = event.key;
    document.getElementById("demo").innerHTML = "The pressed key was: " + x;
}