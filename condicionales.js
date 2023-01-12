var edad = prompt("Ingresa tu edad");

if(edad < 0 || edad > 100){
    console.log("Edad no valida")
}else{
    if(edad >= 18){
        console.log("Felicidades ya eres mayor de edad!!")
    }else{
        console.log("Aun eres menor, sigue esperando :(")
    }
}