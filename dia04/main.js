const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    
    clear(){
        this.currentOperandTextElement = '';
        this.previousOperandTextElement = '';
        this.operation = undefined;
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.previousOperand;
        this.previousOperandTextElement.innerText = this.currentOperand;
        
    }
}

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

allClearButton.addEventListener('click', () =>  {
    calculator.clear();
    calculator.updateDisplay()
})
