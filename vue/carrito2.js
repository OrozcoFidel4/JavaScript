Vue.createApp({
    data(){
        return{
        carrito:[
            ],
        producto:''
        }
        
    },
    methods:{
        agregarProducto(){
            this.carrito.push(this.producto);
            this.producto = '';
        }
        
    }
}).mount('#app')