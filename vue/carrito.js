Vue.createApp({
    data(){
        return{
        carrito:[
            'soda', 
            'tomates',
            'sal'],
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