Vue.filter('mayusculas', (value) => value.toUpperCase());
new Vue({
	el: "main",
	
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/users').then((respuesta) => {
			this.users = respuesta.data;
		});8
	},

	data: {
		texto: "Hola Mundo desde VueJS 2",
		nombre: "Carmen María",
		apellido: "Soto",
		users: null,
		busqueda: "",
		nota: 5,
		peliculas: ['Batman vs Superman', 'A', 'La verdad duele', 'B', 'Los mercenarios', 'Spiderman 3', 'C', 'Titanic', 'D'],
		frutas: [
			{nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
			{nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
			{nombre: 'Cereza', temporada: 'Primavera', precio: 'Alto'},
			{nombre: 'Sandía', temporada: 'Verano', precio: 'Medio'}
		],
		superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
		peliculaNueva: null,
		marcado: null
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
		},

		marcar(index){
			this.marcado = index;
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
		},

		buscarFruta(){
			/*return this.peliculas.filter(function (pelicula) {
				pelicula.includes(this.busqueda);
			});*/
			return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
		}
	}
});

const vue2 = new Vue({
	el: "#app",
	data: {
		texto: "Segunda instancia de VueJS2"
	}
});

const vue3 = new Vue({
	el: "#app2",
	data: {
		texto: "Tercera instancia de VueJS2"
	}
});