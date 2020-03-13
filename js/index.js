var secciones = [];
var tiempo_splash = 2;
const palabras = ["CAPITAN","GAVIOTA","NAVEGAR","SIRENA","FRAGATA","CAÑONES","BAÑADOR"];
const preguntas = ["JEFE DEL BARCO","AVE MARINERA","MANIOBRAR UN BARCO","CRIATURA MITOLÓGICA","BUQUE DE GUERRA","ARMA DE PÓLVORA",
"VESTIMENTA PARA NADAR"];
var vidas;
var puntos;
var divJuego;
var palabraSeleccionada;
var htmlLineas = [];
var spanPregunta;
var aciertos;

window.onload = function(){
    inicializarReferencias();
    initJuego();
    setTimeout(cambiarSplash,tiempo_splash);
}
function initJuego(){
    this.palabraSeleccionada = palabraAleatoria();
    vidas = 5;
    puntos = 1000;
    this.aciertos = 0;
    llenarLineas();
}

function inicializarReferencias(){
    divJuego = document.getElementById("adivinar");
    spanPregunta = document.getElementById("pregunta");
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
    secciones[6] = document.getElementById("seccion_6");
    secciones[7] = document.getElementById("seccion_7");
    secciones[8] = document.getElementById("seccion_8");
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
    var indice = parseInt(Math.random()*(palabras.length-1));
    spanPregunta.innerHTML = preguntas[indice];
    console.log(spanPregunta.innerHTML);
    return palabras[indice];
}
function llenarLineas() {
    console.log(this.palabraSeleccionada);
    for(var i = 0; i<this.palabraSeleccionada.length;i++){
        console.log(this.palabraSeleccionada);
        this.htmlLineas[i] = '<span class = "letra">_</span>';
    }
    divJuego.innerHTML = this.htmlLineas;
}
function procesarLetra(letra) {
    let encontrada = false;
    for(var i = 0; i < this.palabraSeleccionada.length;i++){
        if(letra == this.palabraSeleccionada.charAt(i).toUpperCase()){
            this.htmlLineas[i] = '<u>'+letra+'</u>';
            encontrada = true;
            aciertos++;
        }
    }
    
    if(!encontrada){
        if(vidas>0){
            puntos-=200;
            vidas--;
        }else if(vidas == 0){
            puntos-=200;
            perderJuego();
        }
    }else{
        divJuego.innerHTML = this.htmlLineas;
        puntos+=200;
    }
    if(aciertos == palabraSeleccionada.length){
        ganarJuego();
    }
}
function ganarJuego(){
    initJuego();
    cambiarSeccion(7);
}
function perderJuego(){
    initJuego();
    cambiarSeccion(8);
}