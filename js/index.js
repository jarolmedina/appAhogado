var secciones = [];
var tiempo_splash = 2;
var palabras = ["CAPITAN","GAVIOTA","NAVEGAR","SIRENA","FRAGATA","CAÑONES","BAÑADOR"];
var preguntas = ["JEFE DEL BARCO","AVE MARINERA","MANIOBRAR UN BARCO","CRIATURA MITOLÓGICA","BUQUE DE GUERRA","ARMA DE PÓLVORA",
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

    document.getElementById("divPuntos").classList.add("oculto");
    document.getElementById("divImgAyuda").classList.add("oculto");

    var varAyuda = document.getElementById("divImgAyuda");
    var foto;
    if(palabraSeleccionada == "CAPITAN"){
        foto = "img/capitan.png";
        
    }
    if(palabraSeleccionada == "GAVIOTA"){
        foto = "img/gaviota.png";
        
    }
    if(palabraSeleccionada == "NAVEGAR"){
        foto = "img/navegar.png";
        
    }
    if(palabraSeleccionada == "SIRENA"){
        foto = "img/sirena.png";
        
    }
    if(palabraSeleccionada == "FRAGATA"){
        foto = "img/fragata.png";
        
    }
    if(palabraSeleccionada == "CAÑONES"){
        foto = "img/cañones.png";
        
    }
    if(palabraSeleccionada == "BAÑADOR"){
        foto = "img/bañador.png";
        
    }
    varAyuda.innerHTML = "<img src='"+foto+"'>";
    htmlLineas = [];
    console.log(this.palabraSeleccionada);
    for(var i = 0; i<this.palabraSeleccionada.length;i++){
        console.log(this.palabraSeleccionada);
        this.htmlLineas.push('<span class = "letra">_</span>');
    }
    divJuego.innerHTML = this.htmlLineas;
}

function procesarLetra(letra) {
    var encontrada = false;
    for(var i = 0; i < this.palabraSeleccionada.length;i++){
        if(letra == this.palabraSeleccionada.charAt(i).toUpperCase()){

            if(htmlLineas[i] != '<u>'+letra+'</u>'){
                
            console.log("entra");
            this.htmlLineas[i] = '<u>'+letra+'</u>';
            encontrada = true;
            aciertos++;
            console.log(aciertos);
            }
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

        var divImagen = document.getElementById("divImagen");

        if(divImagen.classList.contains("sinFoto")){
            console.log("llega");
            divImagen.classList.remove("sinFoto");
            divImagen.classList.add("foto1");
        } else if(divImagen.classList.contains("foto1")){
                divImagen.classList.remove("foto1");
                divImagen.classList.add("foto2");
            } else if(divImagen.classList.contains("foto2")){
                divImagen.classList.remove("foto2");
                divImagen.classList.add("foto3");
            }else if(divImagen.classList.contains("foto3")){
                divImagen.classList.remove("foto3");
                divImagen.classList.add("foto4");
            }
    }
    if(aciertos == palabraSeleccionada.length){
        ganarJuego();
    }
}
function ganarJuego(){
    acierto = 0; 
    var divImagen2 = document.getElementById("divImagen");
    divImagen2.classList.remove("foto4");
    divImagen2.classList.remove("foto3");
    divImagen2.classList.remove("foto2");
    divImagen2.classList.remove("foto1");
    divImagen2.classList.add("sinFoto");
    initJuego();
    cambiarSeccion(7);
    
}
function perderJuego(){
    acierto = 0; 
    var divImagen3 = document.getElementById("divImagen");
    divImagen3.classList.remove("foto4");
    divImagen3.classList.remove("foto3");
    divImagen3.classList.remove("foto2");
    divImagen3.classList.remove("foto1");
    divImagen3.classList.add("sinFoto");

    initJuego();
    cambiarSeccion(8);
}

function ayudita(){
    var divImgAyuda = document.getElementById("divImgAyuda");
    divImgAyuda.classList.toggle("oculto");
}

function mostrarPuntos(){
    var divPuntos = document.getElementById("divPuntos");
    divPuntos.classList.toggle("oculto");
    divPuntos.innerHTML = "<p>"+ puntos + " pts</p>";
}
