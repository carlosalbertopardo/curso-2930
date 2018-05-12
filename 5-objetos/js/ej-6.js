/*  

EJERCICIO N°6
1) Crear una funcion que genere animales, la cual reciba los siguientes parámetros:
- tipo: string () gato, perro, loro, etc..),
- nombre: string
- edad: number
- hablar: function

2) La funcion debe retornar el objeto "animal" para luego incluirlo en un array llamado "animales".
3) Finalmente mostrar el array por pantalla y llamar al método hablar de cada aniamal.
4) Cargar al menos 3 animales.

*/

'use strict';


function crearAnimal (tipo, nombre, edad) {

	this.tipo = tipo;
	this.nombre = nombre;
	this.edad = edad;
	//this.hablar = hablar;

}

crearAnimal.prototype.hablar = function () {
	console.log('miaaaaau');
}

var gato = new crearAnimal('gato','michifus',12);

var animales = [];

animales.push(gato);