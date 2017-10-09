new Vue({
	el: "main",
	data: {
		texto: "Hola Mundo desde VueJS 2",
		nombre: "Nombre por defecto",
		nota: 5,
		peliculas: ['Batman vs Superman', 'La verdad duele', 'Los mercenarios', 'Spiderman 3', 'Titanic'],
		frutas: [
			{nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
			{nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
			{nombre: 'Cereza', temporada: 'Primavera', precio: 'Alto'},
			{nombre: 'Sandía', temporada: 'Verano', precio: 'Medio'}
		]
	}
});