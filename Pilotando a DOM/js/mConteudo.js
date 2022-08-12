//Manipulando conteúdo


//textContent - altera ou adiciona elementos

//const element = document.querySelector('h1') //- captura o elemento
//element.textContent += "Boa" //- faz a alteração, nesse caso adicionará ao h1



//innertext

//const element = document.querySelector('h1')
//element.innerText = "Olá Devs!"



//innerhtml - é usado para quando vc quer usar tags htmls que alterem o texto original

//const element = document.querySelector('h1')
//element.innerHTML = "Olá Devs! <small>!!!</small>"



//value - serve para manipular valores de um input

//const element = document.querySelector('input')
//element.value = "Valor que eu quiser"
//obs.: voce pode usar o value do html e usar 
//o element.value do js para trocar o seu valor//



//atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header') //seta o novo atributo a uma tag

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))  //adiciona o atributo

header.removeAttribute('id')
header.removeAttribute('class') //remove os atributos adicionados anteriormente
