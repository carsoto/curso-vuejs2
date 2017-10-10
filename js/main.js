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
		],
		superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
		peliculaNueva: null
	},
	methods:{
		crearPelicula(){
			//alert(this.peliculaNueva);
			this.peliculas.unshift(this.peliculaNueva);
			this.peliculaNueva = null;
		},
		borrarPelicula(index){
			//alert(index);
			this.peliculas.splice(index, 1);
		}
	}
});