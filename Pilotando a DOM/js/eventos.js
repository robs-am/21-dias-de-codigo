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

//const h1 = document.querySelector('h1');

//h1.addEventListener('click', print)

//function print() {
    //console.log('print')
//}



//Outro método adicionando mais de um evento

/* const h1 = document.querySelector('h1');
h1.addEventListener('click', print)

function print() {
    console.log('print')
}

h1.addEventListener('click', function(){
    console.log('outro momento')
})  */

//Nesse exemplo em um clique ele executará as  funcoes 


//argumento Event

const input = document.querySelector('input')
input.onkeypress = function(event){
    console.log(event)
}