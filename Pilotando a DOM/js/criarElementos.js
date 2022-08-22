//Criando e adicionando elementos

//createElement

//const div = document.createElement('div');  //cria a div
//div.innerText = "Olá Devs"  //adiciona texto dentro da div



//apeend prepend - append - adiciona algo depois

//const body = document.querySelector('body')  //seleciona o body

//body.prepend(div); //adiciona algo antes
//body.append(div); //adiciona algo depois

//Adicionando Elementos
const div =document.createElement('div');
div.innerText = "Olá, Devs!"

//insertBefore
//const body = document.querySelector('body')
//const script = body.querySelector('script')


//body.insertBefore(div, script) //body(parent) recebe dois argumentos (elemento novo e nó de referencia, respectivamente).Nesse caso adicionará uma nova div entre a tag body e a script

//simular um insertAfter
//const body = document.querySelector('body')
//const header = body.querySelector('header')

//body.insertBefore(div,header.nextElementSibling)