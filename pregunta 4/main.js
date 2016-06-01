/*Pregunta 4 (2 ptos)
El usuario ingresa un número N en pantalla a través de window.promot, se debe dibujar en la consola del navegador un
cuadrado hueco de largo n.
Ejemplo: Si el usuario ingresó 6
Dibujar la primera y última línea (1 pto)
Dibujar las líneas intermedias línea (1 pto)*/

var n = prompt("ingresa un numero de lado del cuadrado");
var punto = "*";
var lado ="";
var alto ="";

for(var h = 0; h < n; h++){
	lado = lado + punto;
	for(var a = 0; a < n; a++){
	alto = alto + punto;		
	}	
}

console.log(lado);
console.log(alto);
console.log(lado);
