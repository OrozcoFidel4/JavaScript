Vue.createApp({
    data() {
        return {
            nombre: '',
            carrera: '',
            edad: 0,
            resultado : ''
            
        }
    },methods: {

        calcular(){
            if(this.edad >= 18){
                this.resultado = 'Eres mayor de edad!!'

            }else{
                this.resultado = 'Eres menor de edad!!'
            }
        }
        
    }    
}).mount("#nombre");