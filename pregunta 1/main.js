/*Se ha creado el siguiente algoritmo que busca que el 
usuario ingrese elementos hasta que indique lo contrario, 
para lo cual ingresará la palabra "fin". Este algoritmo 
no está completo, se pide arreglarlo.

Hint: ocupar isNaN() */

var suma = parseInt(0);
var sumas = parseInt(0);

do {
 var ingreso = parseInt(prompt("ingresa un numero y cuando eligas terminar escribe fin"));
 suma = (ingreso);
 
 console.log(suma);

 if (isNaN(ingreso)) {
 }
 else{
 sumas = sumas + ingreso;
 }

}

while (isNaN(ingreso) != true);
console.log(sumas);