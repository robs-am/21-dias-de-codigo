const buttonOpenModal = document.getElementById ('openModal'); //seleciona o botão pelo id openModal


const modalWrapper = document.querySelector('.modal-wrapper') //seleciona a div modal-wrapper

buttonOpenModal.onclick = function() {
    modalWrapper
    .classList
    .remove('invisible')
}

// executa a funcao de remover o parametro invisible do modalWrapper ao clicar no button

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})