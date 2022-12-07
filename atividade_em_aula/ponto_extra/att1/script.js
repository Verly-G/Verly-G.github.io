// Questão 1:
document.querySelector("#raio_lata").addEventListener("change", () =>{
    let raio = document.querySelector("#raio_lata").value

    document.querySelector("#raioValor").innerHTML = raio
})

document.querySelector("#altura_lata").addEventListener("change", () =>{
    let altura = document.querySelector("#altura_lata").value

    document.querySelector("#alturaValor").innerHTML = altura
})

document.querySelector("#bt1").addEventListener('click', () => {
    let raio = document.querySelector("#raio_lata").value
    let altura = document.querySelector("#altura_lata").value

    let result = document.querySelector("#res1")

    let total = ((Math.PI*(Math.pow(raio, 2))) * altura) / 1000

    result.innerHTML = `A capacidade em litros é: ` + total
})

// Questão 2: 

document.querySelector('#bt2').addEventListener('click', () => {
    let metroCheck = document.querySelector("#metro")
    let polegada = document.querySelector("#polegadas")
    let peCheck = document.querySelector("#pe")
    let res2 = document.querySelector("#res2")
    let number = document.querySelector("#numeroConversor").value
    let polegadas
    let pe
    let metro
    if(metroCheck.checked === true){
        polegadas = number* 39
        pe = number * 3.28084
        res2.innerHTML = `Valor em polegadas: ` + polegadas + `<br>O valor em pé é: ` + pe;
    }
    else if(polegada.checked === true){
        metro = number / 39
        pe = metro * 3.28084
        res2.innerHTML = `Valor em metro: ` + metro + `<br>O valor em pé é: ` + pe;
    }
    else if(peCheck.checked === true){
        metro = number / 3.28084
        polegada = metro * 39,37
        res2.innerHTML = `Valor em metro: ` + metro + `<br>O valor em polegadas é: ` + polegada;
    }
})