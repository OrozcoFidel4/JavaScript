Vue.createApp({
    data() {
        return {
            edad: ''
        }
    },
    computed:{
        calcularEdad(){
            if(this.edad == ''){
                return ''
            }else if(this.edad>=18){
                return 'Eres mayor de edad'
            }else{
                return 'Eres menor de edad'
            }
        }
    }
}).mount('#edad')