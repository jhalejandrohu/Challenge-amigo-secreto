// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombreAmigos = [];


function agregarAmigo(){

    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);
    if (nombreDeAmigo) { 
        listaNombreAmigos.push(nombreDeAmigo);
        console.log(listaNombreAmigos);
        document.getElementById("amigo").value = "";
        return nombreDeAmigo;
        
    } else {
        console.log(listaNombreAmigos);
        return alert("¡Por favor ingrese un nombre válido!");
    }
   
}

function sortearAmigo(){
    
    if(listaNombreAmigos.length === 0){
        return alert("¡no existen nombres para sortear!");
    } else{
        let numeroGenerado =  Math.floor(Math.random()*listaNombreAmigos.length);
        return alert(listaNombreAmigos[numeroGenerado]);
    }
}