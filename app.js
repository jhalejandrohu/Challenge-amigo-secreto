// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombreAmigos = [];


function agregarAmigo(){

    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);
    if (nombreDeAmigo) { 
        listaNombreAmigos.push(nombreDeAmigo);
        console.log(listaNombreAmigos);
        return nombreDeAmigo;
        
    } else {
        console.log(listaNombreAmigos);
        return alert("¡Por favor ingrese un nombre válido!");
    }
   
}