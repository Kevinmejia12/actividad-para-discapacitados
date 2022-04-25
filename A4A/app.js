document.getElementById("busqueda").addEventListener("click", mostrarF);
document.getElementById("btnC").addEventListener("click", ocultarF);
//dos nuevas funciones para el cambio de colores en botones 
document.getElementById("btnD").addEventListener("click", contrasteAlto);
document.getElementById("btnE").addEventListener("click", coloresW);
//importamos y almacenamos en variables todo lo que necesitamos para el cambio de colores
var containerTodo = document.querySelector("#containerTodo");
var containerPersonal = document.querySelector("#containerPersonal");
var containerServicios = document.querySelector("#containerServicios");
var containeryHabitacion = document.querySelector("#containerHabitacion");
var containerPension = document.querySelector("#containerPension");
var containerTerminos = document.querySelector("#containerTerminos");
var containerComentarios = document.querySelector("#containerComentarios");
var inputs = document.querySelector(".inputs");
var btn = document.querySelector("#btn");
var btnC = document.querySelector("#btnC");
var btnD = document.querySelector("#btnD");
var btnE = document.querySelector("#btnE");
var selected = document.querySelector(".selected");

function mostrarF() {
    containerTodo.style.display = "block";
    btnC.style.display = "block";
}

function ocultarF() {
    containerTodo.style.display = "none";
    btnC.style.display = "none";
}
//la primera opcion con la que modificamos los colores del 
//formulario para contraste alto segun windows
function contrasteAlto() {
    containerTodo.style.backgroundColor = "white";
    containerPersonal.style.backgroundColor="white";
    containerPersonal.style.color="black";
    containerServicios.style.backgroundColor = "white";
    containerServicios.style.color ="black";
    containeryHabitacion.style.backgroundColor = "white";
    containeryHabitacion.style.color ="black";
    containerPension.style.backgroundColor = "white";
    containerPension.style.color ="black";
    containerComentarios.style.backgroundColor = "white";
    containerComentarios.style.color ="black";
    containerTerminos.style.backgroundColor = "white";
    containerTerminos.style.color ="black";

    btn.style.backgroundColor ="white";
    btn.style.color="black";
    btnD.style.backgroundColor="white";
    btnC.style.backgroundColor="white";
    btnD.style.color="black";
    btnC.style.color="black"
    btnE.style.backgroundColor="white";
    btnE.style.color="black";

    selected.style.backgroundColor="white";
    selected.style.color ="black";
}

//segunda opcion en la que se imita la paleta de colores
// de windows, en este caso el azul con tema oscuro 
function coloresW () { 
    containerTodo.style.backgroundColor = "#0074D0";
    containerPersonal.style.backgroundColor="#0074D0";
    containerServicios.style.backgroundColor = "#0074D0";
    containeryHabitacion.style.backgroundColor = "#0074D0";
    containerPension.style.backgroundColor = "#0074D0";
    containerComentarios.style.backgroundColor = "#0074D0";
    containerTerminos.style.backgroundColor = "#0074D0";

    btn.style.backgroundColor ="#0074D0";
    btnD.style.backgroundColor="#0074D0";
    btnC.style.backgroundColor="#0074D0";
    btnE.style.backgroundColor="#0074D0";
    selected.style.backgroundColor="#0074D0";
}