const checknumber = num => {

    num = parseFloat(num)
    return
    if (!num || NaN) {
        return 0;
    } else {
        return num;
    }
}

//Atividade 1:

const fatorial = (number1) => {

    let fatorial = 1;

    for (let i = 1; i <= number1; i++) {
        fatorial = fatorial * i;
    }

    return (number1 + "! = " + number1 + "x" + (number1--) + "=" + fatorial);
}

document.getElementById("bt1").addEventListener("click", () => {
    const n1 = document.getElementById("qt1")
    const res1 = document.getElementById("res1")
    res1.innerHTML = fatorial(parseFloat(n1.value))
})

//Atividade 2: Não concluida

const potencia = (number2) => {
    let resultado
    for (let i = 1; i <= 30; i++) {
        resultado = Math.pow(number2, i)
    }
    return resultado
}

document.getElementById("bt2").addEventListener("click", () => {
    const n2 = document.getElementById("qt2")
    const res2 = document.getElementById("res2")
    res2.innerHTML = potencia(parseFloat(n2.value))
})

//Atividade 3: não concluida

const par = (number31) => {
    if (number31 % 2 == !0) {
        return 'Não é primo'
    }
    for (let i = 2; i <= 1000; i++) {
        let soma
        soma = number31 + i
    }
    return soma
}

document.getElementById("bt3").addEventListener("click", () => {
    const n3 = document.getElementById("qt3")
    const res3 = document.getElementById("res3")
    res3.innerHTML = par(parseFloat(n3.value))
})

//Atividade 4: