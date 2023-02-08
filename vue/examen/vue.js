const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            descripcion: '',
            creador: '',
            imagen: '',
            precio: '',
            cantidad: '',
            total: '',

            curso: [

            ]

        }
    }, methods: {
        agregar() {
            const curso = {
              nombre: this.nombre,
              descripcion: this.descripcion,
              creador: this.creador,   /* Se crea el objeto en el metodo */
              imagen: this.imagen,
              precio: this.precio,
              cantidad: this.cantidad,
              
          }  

          
  
          this.curso.push(curso); /* Aqui ya se empuja la variable anterior que tiene el arreglo completo */
          },

          precioTotal(){
            this.precio = this.precio * this.cantidad
            this.total = this.total + this.precio
        },
    },
})



