var secciones = [];
var tiempo_splash = 2;
const palabras = ["Tortuga","Pez","Ballena","Agua","Corales"];
var vidas;
var puntos;
var divJuego;
var palabraSelecionada;
var htmlLineas = [];
var spanLetraJuego;

window.onload = function(){
    inicializarReferencias();
    this.palabraSelecionada = palabraAleatoria();
    this.console.log(this.palabraSelecionada);
    llenarLineas();
    vidas = 5;
    puntos = 1000;
    setTimeout(cambiarSplash,tiempo_splash);
}

function inicializarReferencias(){
    divJuego = document.getElementById("juego");
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
    secciones[6] = document.getElementById("seccion_6");
    secciones[7] = document.getElementById("seccion_7");
    secciones[8] = document.getElementById("seccion_8");
    secciones[9] = document.getElementById("seccion_9");
}

function cambiarSplash(){
    secciones[1].className = "splash oculto";
    secciones[2].className = "home animated zoomInUp";
}

//https://developer.mozilla.org/es/docs/Web/API/Element/classList
//https://www.youtube.com/watch?v=2z0wMNHPbzk
function cambiarSeccion(id_seccion){

    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }

    secciones[id_seccion].classList.add("animated");
    secciones[id_seccion].classList.add("fadeInRight");
    secciones[id_seccion].classList.remove("oculto");
}


function palabraAleatoria() {
    return palabras[parseInt(Math.random()*(palabras.length-1))];
}
function llenarLineas() {
    console.log(this.palabraSeleccionada);
    for(var i = 0; i<this.palabraSeleccionada.length;i++){
        console.log(this.palabraSelecionada);
        this.htmlLineas[i] = '<span class = "letra">_</span>';
    }
    divJuego.innerHTML(this.htmlLineas);
}
function procesarLetra(letra) {
    spanLetraJuego = document.getElementById(letra);
    let encontrada = false;
    for(var i = 0; i < this.palabraSelecionada.length;i++){
        if(letra == this.palabraSelecionada[i]){
            this.htmlLineas[i] = '<u>'+letra+'</u>';
            encontrada = true;
        }
    }
    if(!encontrada){
        if(vidas>0){
            vidas--;
        }else if(vidas == 0){
            perderJuego();
        }
    }else{
        puntos+=200;
    }
    if(palabraSelecionada == htmlLineas){
        ganarJuego();
    }
}
function ganarJuego(){
    cambiarSeccion(8);
}
function perderJuego(){
    cambiarSeccion(9);
}