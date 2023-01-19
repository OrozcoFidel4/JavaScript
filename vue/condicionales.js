Vue.createApp({
    data() {
        return {
            becado : true
        }
    },
    methods: {
        conBeca() {
            this.becado = true; //this. hace referencia que tomara las variables del data
        },
        sinBeca(){
            this.becado= false;
        },
        
    }
}).mount("#app"); // .mount(#app) es para decirle que cosa usara vue