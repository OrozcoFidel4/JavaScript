/*const nombre = prompt("Ingresa tu noombre");

const saludo = (_nombre)=> { //se llaman fucniones de flecha manera moderna
    console.log("Holaaaaa " +nombre);
}


function saludo2(_nombre){
    console.log("saludo 2 " + nombre);
}

saludo(nombre);
saludo2(nombre); */

var varedad = prompt("Ingresa tu edad"); //Prompt es lo equivalent a un input

const edad = (_edad)=>{

if(_edad < 0 || edad > 100){
    console.log("Edad no valida")
}else{
    if(_edad >= 18){
        console.log("Felicidades ya eres mayor de edad!!")
    }else{
        console.log("Aun eres menor, sigue esperando :(")
    }
}
}

edad(varedad)