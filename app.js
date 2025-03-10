// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres//
//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");


//Implementa una función para agregar amigos//



    function agregarAmigo(){
        if(inputAmigo.value ===""){
            alert("Debes ingresar un nombre");
            return;  //detiene la ejecucion si no se ingresa un nombre
        }
        listaAmigos.push(inputAmigo.value); //agrega el nombre al array
        //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; //muestra el nombre en la lista
        inputAmigo.value = ""; //limpia el campo de texto
    }

    

    function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("No hay amigos en la lista para sortear");
        return;  // Detiene le ejecucion si la lista esta vacia
    }
        const random = Math.floor(Math.random() * listaAmigos.length); //genera un numero aleatorio
        const amigoSecreto = listaAmigos[random]; //Selecciona un nombre aleatorio
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; // Muestra el resultado
    }
