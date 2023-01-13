const usuario = {
    nombre: 'Fidel',
    email: 'fidel@gmail.com',
    password: '12345'
}

console.log(usuario.email, usuario.nombre) // para imprimir lo que se hace es poner: var.propiedad

const ejercicio = {
    nombre: 'Fidel',
    edad: 19,
    email: 'fidel@gmail.com',
    password: "elfidelion",
    estatura: 1.74,
    colorPiel: 'Moreno claro',
    
}

/* nombre = ejercicio.nombre;
edad= ejercicio.edad;
email = ejercicio.email;            Manera antigua de realizar declaracion de variable para un objeto
password = ejercicio.password;
estatura = ejercicio.estatura;
colorPiel = ejercicio.colorPiel; */

const {nombre, edad, email, password, estatura, colorPiel} = ejercicio // manera moderna de realizar declaracion de variable para un objeto

console.log(`El nombre del usuario es ${nombre} su edad es de ${edad} anios, mide ${estatura} mts.
su color de piel es ${colorPiel} y su correo y contrsenia son ${email} y ${password}`)