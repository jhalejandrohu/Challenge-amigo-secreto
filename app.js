// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombreAmigos = [];
// Funcion encargada de vaciar la lista una vez se haya realizado el sorteo
function vaciarLista(){

    listaNombreAmigos = [];

}
// funcion encargada de actualizar los nombres a mostrar en pantalla
function actualizarLista() {
    // Limpiar la lista antes de agregar nuevos elementos
    resultado.innerHTML = "";
    // Recorrer el array y agregar cada amigo como un <li>
    for (let amigo of listaNombreAmigos) {       
        resultado.innerHTML += `<li>${amigo}</li>`;
    }
}
// Funcion encargada de agregar nuevos amigos
function agregarAmigo(){

    let nombreDeAmigo = document.getElementById('amigo').value;
    console.log(nombreDeAmigo);
    if (nombreDeAmigo) { 
        listaNombreAmigos.push(nombreDeAmigo);
        console.log(listaNombreAmigos);
        document.getElementById("amigo").value = "";
        actualizarLista();
        return nombreDeAmigo;
        
    } else {
        console.log(listaNombreAmigos);
        return alert("¡Por favor ingrese un nombre válido!");
    }
   
}
// funcion encargada de sortear los amigos
function sortearAmigo(){
    let amigoSorteado 
    if(listaNombreAmigos.length === 0){
        return alert("¡no existen nombres para sortear!");
    } else{
        let numeroGenerado =  Math.floor(Math.random()*listaNombreAmigos.length);
        amigoSorteado = listaNombreAmigos[numeroGenerado]
        // Mostrar el resultado en el HTML
        resultado.innerHTML = `El amigo seleccionado es: <strong>${amigoSorteado}</strong>`;
        vaciarLista();
    }
}