const palabras = [{id:1,palabra:"Tortuga"},
    {id:2,palabra:"Pez"},
    {id:3,palabra:"Ballena"},
    {id:4,palabra:"Agua"},
    {id:5,palabra:"Corales"}];
var vidas;
var puntos;
var divJuego;
var palabraSelecionada;
var htmlLineas;
var spanLetraJuego;
window.onload = function(){
    inicializarReferencias();
}
function inicializarReferencias(){
    divJuego = document.getElementById("juego");
}
class Juego{
    constructor(){
        palabraAleatoria();
        llenarLineas();
        vidas = 5;
        puntos = 1000;
    }
}
function palabraAleatoria() {
    palabraSelecionada = palabras[Math.random()*(palabras.length)];
}
function reiniciarJuego() {
    this.Juego = new Juego();
}
function llenarLineas(palabra) {
    palabra.forEach(letra => {
        htmlLineas += '<span class = "letra">_</span>';
    });
    divJuego.innerHTML(htmlLineas);
}
function procesarLetra(letra) {
    spanLetraJuego = document.getElementById(letra);
    let encontrada = false;
    for(var i = 0; i < palabraSelecionada.length;i++){
        if(letra == palabraSelecionada[i]){
            htmlLineas[i] = '<u>'+letra+'</u>';
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

}