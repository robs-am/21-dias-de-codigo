//Alterando estilos
// Atribui CSS ao Javascript

//const element = document.querySelector('body')

//element.style.backgroundColor = "#F9F3D2"
//console.log(element.backgroundColor)



//classList

const element = document.querySelector('body')
element.classList.add('active', 'green') //adiciona classes

console.log(element.classList)

element.classList.remove('active') //remove a classe selecionada

element.classList.toggle('active') //ele pesquisa e se a classe existir ele remove, se não existir, ele adiciona(funciona como um interruptor on/off)
