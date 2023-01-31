Vue.createApp({
    data() {
        return {
            colorTable: '',
            nombre: '',
            precio: '',
            cantidad: '',
            departamento: '',
            url: '',
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
            url: this.url,
            vencimiento: this.vencimiento,
            
        }  

        this.productos.push(producto); /* Aqui ya se empuja la variable anterior que tiene el arreglo completo */
        }

    }

}).mount('#app')