Vue.component('users', {
	template: 
			`<div class="componente">
				<h2>Componente de {{ titulo }}</h2>
				<h2>Ejemplo de listado con ajax dentro de un componente</h2>
		
				<ol v-if="users">
					<li v-for="(user, index) in users">
						{{ user.name + " (" + user.username + ")" }}
					</li>
				</ol>
				<span v-else>Cargando listado por ajax...</span>
			</div>`,
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/users').then((respuesta) => {
			this.users = respuesta.data;
		});
	},
	data(){
		return {
			titulo: "Usuarios vía ajax",
			users: null
		}
	}
});

Vue.component('peliculas', {
	template: `<h2>Componente de {{ titulo }}</h2>`,
	data(){
		return {
			titulo: "Peliculas"
		}
	}
});

Vue.component('frutas', {
	props: ['objeto'],
	template: `
		<div>
			<h2>Componente de Frutas 1 </h2>
			<h3>Nombre de la fruta: {{objeto.nombre}}</h3>
		</div>`
});

Vue.component('frutass', {
	props: ['objeto']
});

Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue({
	el: "main",
	
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/users').then((respuesta) => {
			this.users = respuesta.data;
		});
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