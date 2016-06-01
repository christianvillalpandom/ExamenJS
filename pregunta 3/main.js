/*Pregunta 3 (2 ptos)
Crear la clase de teléfono (con la función constructora). Un teléfono tiene un número asignado que se le pasa a la función
constructora, y carácterístcas como marca y color. También tiene un contador de llamadas que parte en cero. (1 pto)
Crear un método que se llame "marcar" que reciba como argumento un número de teléfono y aumente un contador de
llamadas en uno (1 pto)*/


var telefono = constructora(
    "3314112915",
    "iPhone",
    "Negro",
    0
	); 

function constructora (a,b,c,d) {

	 alert("Tu numero de telefono: " + a + ", tu marca de telefono es: " + b + ", el color de tu telefono es: " + c + " y tienes: " + d + " llamadas.");
}





document.getElementById("llamar").onclick = function() {llamar()};

var llamadas = 0;

function llamar() {
	while (true) {
		llamadas = llamadas + 1 ;
		alert("Llevas " + llamadas + " llamadas.");
		break;
	}
}