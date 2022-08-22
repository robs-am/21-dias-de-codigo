//Eventos
//function print() {
    //console.log('print')
//}
//toda vez que clicar aparecerá um print no console

//onkeydown , onkeyup, onekeypress 
//const input = document.querySelector('input');

//input.onkeypress = function() {
    //console.log('rodei')
//}


//Adicionando Eventos

const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print() {
    console.log('print')
}