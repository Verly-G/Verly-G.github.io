const checknumber = num => {

    num = parseFloat(num)
    return
    if (!num || NaN) {
        return 0;
    } else {
        return num;
    }

}

const soma = (number1, number2) => {
    return number1 + number2;
}

document.getElementById("bt1").addEventListener("click", () => {
    const att11 = document.getElementById("onenumber");
    const att12 = document.getElementById("twonumber");
    const res1 = document.getElementById("resposta1");
    res1.innerHTML = soma(parseFloat(att11.value), parseFloat(att12.value))
})

//Atividade 2:

const maiormenor = (num21, num22) => {
    if (num21 > num22) {
        return 'O número um é o maior.';
    } else {
        return 'O número dois é o maior';
    }
}

document.getElementById("bt2").addEventListener("click", () => {

    const att21 = document.getElementById("tnumber")
    const att22 = document.getElementById("t2number")
    const res2 = document.getElementById("res2")
    res2.innerHTML = maiormenor(parseFloat(att21.value), parseFloat(att22.value))

})

//Atividade 3:

const primo = (num31) => {

    if (num31 === 2) {
        return 'O número é primo'
    }
    if (num31 <= 1) {
        return 'O número não é primo'
    }
    for (let i = 2; i < num31; i++) {
        if (num31 % i == 0) {
            return 'O número não é primo'
        }
    }
    return 'O número é primo'
}

document.getElementById("bt3").addEventListener("click", () => {
    const att31 = document.getElementById("3number")
    const res3 = document.getElementById("res3")
    res3.innerHTML = primo(parseFloat(att31.value))
})

//Atividade 4:

const hipotenusa = (num41, num42) => {
    let resultado = num41 * num41 + num42 * num42
    return resultado * resultado
}

document.getElementById("bt4").addEventListener("click", () => {
    const att41 = document.getElementById("41number")
    const att42 = document.getElementById("42number")
    const res4 = document.getElementById("res4")
    res4.innerHTML = hipotenusa(parseFloat(att41.value), parseFloat(att42.value))
})

//Atividade 5:

const salario = (num5) => {
    let n = num5 * 0.11
    return num5 + n
}

document.getElementById("bt5").addEventListener("click", () => {
    const att51 = document.getElementById("5number")
    const res5 = document.getElementById("res5")
    res5.innerHTML = salario(parseFloat(att51.value))
})

//Atividade 6:

const grau = (num6) => {
    return (num6 - 32) / 1.8
}

document.getElementById("bt6").addEventListener("click", () => {

    const att6 = document.getElementById("6number")
    const res6 = document.getElementById("res6")
    res6.innerHTML = grau(parseFloat(att6.value))
})

//Atividade 7

const nota = (num71, num72, num73) => {
    return num71 * 2 + num72 * 3 + num73 * 5 / 10
}

document.getElementById("bt7").addEventListener("click", () => {

    const att71 = document.getElementById("71number")
    const att72 = document.getElementById("72number")
    const att73 = document.getElementById("73number")
    const res7 = document.getElementById("res7")
    res7.innerHTML = grau(parseFloat(att71.value), parseFloat(att72.value), parseFloat(att73.value))
})