Vue.createApp({
    data() {
        return {
            nombre: '',
            precio: '',
            cantidad: '',
            departamento: '',
            codigo: '',
            vencimiento:'',

            productos: [
                
            ]
        }

    }, methods: {
        agregar() {
          const producto = {
            nombre: this.nombre,
            precio: this.precio,
            cantidad: this.cantidad,   /* Se crea el objeto en el metodo */
            departamento: this.departamento,
            codigo: this.codigo,
            vencimiento: this.vencimiento
        }  

        this.productos.push(producto); /* Aqui ya se empuja la variable anterior que tiene el arreglo completo */
        }

    }

}).mount('#app')