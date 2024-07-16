let numeroSecreto=0;
let numeroIntento=0;
let listaSorteados=[];
let numeroMaximo=10;

function asignacionTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verifivacion() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
if (numeroSecreto===numeroUsuario){
    asignacionTextoElemento('p' , `acertaste el numero en ${numeroIntento} ${(numeroIntento===1) ? 'vez':'veces'}`);

    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    //el usuario no acerto.
    if(numeroUsuario>numeroSecreto){
        asignacionTextoElemento('p' , 'el numero es menor');
    
    }else{
    asignacionTextoElemento('p' , 'el numero es mayor');
    }
    numeroIntento++;
    limparCaja();
}
    return;
}

function limparCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}
function condicioneIniciale(){
    asignacionTextoElemento('h1','juego del numero secreto');
    asignacionTextoElemento('p',`indica un numero 1  al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    numeroIntento= 1;
}
function generarNumeroSecreto() {
      let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
      console.log(numeroGenerado);
      console.log(listaSorteados);
      if (listaSorteados.length==numeroMaximo) {
        asignacionTextoElemento('p','alcanzasta el maximo de numero, el juego se termino')
        document.getElementById('comenzar').removeAttribute('disabled');
    }else{

    if (listaSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
listaSorteados.push(numeroGenerado);
        return numeroGenerado;   
    }
}
  
}
function reiniciarJuego(){
    //reiniciar juego
    limparCaja();
    //indicar numero 
    // generar el numero aleatorio
    //inicializar el numero intento
    condicioneIniciale();
    //desabilitar el boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}
function comenzarDeCero() {
    listaSorteados=[];
    reiniciarJuego();
    document.getElementById('comenzar').setAttribute('disabled','true');
}


condicioneIniciale();