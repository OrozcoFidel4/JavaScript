Vue.createApp({
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        decrementar() {
            this.contador --; //this. hace referencia que tomara las variables del data

            if (this.contador < 0){
                this.contador = 0
                alert("No se permiten numeros negativos!!")
            }
        },
        incrementar(){
            this.contador ++
        },
        reset(){
            this.contador = 0
        }
    }
}).mount("#cont"); // .mount(#app) es para decirle que cosa usara vue
