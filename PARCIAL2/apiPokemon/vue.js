Vue.createApp({
    data() {
        return {
            carga: null,
            numero: 0,
            pokemones: [],
            idPokemon: 0,
            pokemonInfo: null
            

        }
    }, methods: {
        async getPokemon() {
            //GET --> Obtener informacion
            //POST --> Crear Recursos
            //PUT --> Modificar recursos
            //DELETE --> Borrar recursos

            this.carga = true;
            for (i = 1; i <= this.numero; i++) {
                /* const random = Math.floor(Math.random() * 630) */
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                }); /*Peticion http*/
                const data = await response.json();
                this.pokemones.push(data);
                console.log(this.pokemones);

            }
            this.carga = false;
        }
         
    }
}).mount('#app')

