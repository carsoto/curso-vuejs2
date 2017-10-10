new Vue({
	el: "main",
	data: {
		texto: "Hola Mundo desde VueJS 2",
		nombre: "Carmen María",
		apellido: "Soto",
		nota: 5,
		peliculas: ['Batman vs Superman', 'A', 'La verdad duele', 'B', 'Los mercenarios', 'Spiderman 3', 'C', 'Titanic', 'D'],
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
	},
	computed: {
		nombreYapellido(){
			var d = new Date();
			var year = d.getFullYear();

			return this.nombre + " " + this.apellido + " - Nota: " + this.nota + " - Año: " + year;
		},
		peliculasOrdenadas(){
			return this.peliculas.sort();
		}
	}
});