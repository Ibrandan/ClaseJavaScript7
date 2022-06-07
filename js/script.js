// //1) Buscar el id demo y le cambiamos el texto por Hola mundo!
// document.getElementById("demo").innerHTML = "Hola Mundo";

// //2) Buscamos los elementos que sean de tipo body, nos retorna una coleccion: un array
// let element = document.getElementsByTagName("body"); //array length = 1

// //3) Creamos un nuevo elemento de tipo h1
// let newElement = document.createElement("h1");

// //4) Le modificamos a este nuevo elemento su texto por Hola, me agregaron desde JavaScript!
// newElement.innerHTML = "Hola, me agregaron desde JavaScript!";

// //5)Le agregamos al tag body el nuevo elemento creado (el h1 nuevo)
// element[0].appendChild(newElement);

// Con JQUERY
$('#demo').text("Hola mundo!");
// Es igual a document.getElementById("demo").innerHTML = "Hola Mundo";
let elements = $('body');
// Es igual a document.getElementsByTagName("body"); 
let newElem = $('<h1></h1>');
// Es igual a document.createElement("h1");
newElem.text("Hola, me agregaron desde JavaScript!");
// Es igual a newElement.innerHTML = "Hola, me agregaron desde JavaScript!";
$(elements[0]).append(newElem);

$('#demo').addClass('titulo')
// Es igual a document.getElementById("demo").classList.add("titulo"); 

// $('#demo').removeClass('titulo')
// Es igual a document.getElementById("demo").classList.remove("titulo"); 

// function funcionAlHacerClick(){
//     alert("Hiciste click ;(");
// }

let boton = document.getElementById("boton");

// boton.onclick = function() {
//     alert("Hiciste click ;(");
// }
// Es igual que agregarle el onclick al boton

const handler = function() {
    alert("Hiciste click ;(");
};

// Attach handler to the `click` event
// boton.addEventListener('click', handler);

// // Detach the handler from the `click` event
// ele.removeEventListener('click', handler);

// $("#boton").click(function(){
//     alert("Hiciste click ;");
// }
// )

let handler2 = function(){
    $('img').eq(1).attr('width', '500px');
    $('img').eq(1).attr('height', '500px');
};

$("#boton").click(handler2);

let imagess = document.getElementsByTagName('img'); // Un array
let imagee =imagess[0] ;

imagee.setAttribute('width', '500px')
imagee.setAttribute('height', '500px')

// Con JQUERY

let images = $('');
let image = images[0];
