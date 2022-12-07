let calculadora = document.querySelector('.calc')


const adicionaDigito = (digito, display) => {
    //Adicionando valores no display
        /* se o número:
            valor do display = valor do display + valor da tecla      
        */
    const numerosList = ('1234567890').split("")
    console.log(numerosList.indexOf(digito))
    //Adicionando digitos númericos
    if(numerosList.indexOf(digito) != -1){
        display.textContent = display.textContent == "0" ? 
        digito : display.textContent + digito
    }
}

const somar = (op1, op2) => op1 + op2

calculadora.addEventListener("click", (event)=>{
    const elemClicado = event.target
    const display = document.querySelector('.calc-display')

    if(elemClicado.tagName.toLowerCase() == "button"){
        console.log(`Botão clicado: ${elemClicado.textContent}`)
    adicionaDigito(elemClicado.textContent, display)
    }
})

/*desafios
número decimal
    adicionar o ponto

Operações
Soma
*/