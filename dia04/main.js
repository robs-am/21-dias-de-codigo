const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys') //teclas
const key = e.target
const action = key.dataset.action

keys.addEventListener('click', e => {
    if (e.target.matches('button')) { //e retorna o botão que começou o evento
    if (!action) {
        console.log('number key!')
    }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'clear'     ||    
        action === 'calculate'
    ) 
        
    
    
)