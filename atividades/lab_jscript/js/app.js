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

const fat = (num21) => {
    if (num21 < 0) {
        return "Seu arrombado. \n positivo pfv."
    } else {
        return num21 * (num21 - 1) * (num21 - 2)
    }
}



const fatorial = (number1) => {

    let fatorial = 1;

    for (let i = 1; i <= number1; i++) {
        fatorial = fatorial * i;
    }

    return fatorial;
}

document.getElementById("bt1").addEventListener("click", () => {
    const n1 = document.getElementById("qt1")
    const res1 = document.getElementById("res1")
    res1.innerHTML = fatorial(parseFloat(n1.value))
})

//Atividade 2:

const potencia = () => {

    const res2 = document.getElementById("res2")

    let resultado

    for (let i = 1; i <= 30; i++) {
        resultado = Math.pow(4, i)
        res2.appendChild(document.createTextNode(`4 * ${i} é ${resultado} | `))
    }
    return resultado
}

document.getElementById("bt2").addEventListener("click", () => {
    potencia()
})



//Atividade 3:

function number31() {
    const res3 = document.getElementById("res3")
    let total = 0
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            total += i
        }
    }
    return res3.innerHTML = (`A soma dos números pares até 1000 é ${total}`)
}

document.getElementById("bt3").addEventListener("click", () => {
    number31()
})





//Atividade 4:
const fibonacci = () => {
    const res4 = document.getElementById("res4")
    let result
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < 100; i++) {
        result = fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        res4.appendChild(document.createTextNode(`${result}\n`))
    }
    return result
}
document.getElementById("bt4").addEventListener("click", () => {
    fibonacci()
})

//Atividade 5:

const primo = () => {
    const res5 = document.getElementById("res5")
    for (let i = 2; i <= 1000; i++) {
        if (i % i == 0) {
            i++
            return i
        } else {
            return 0
        }
        res5.appendChild(document.createTextNode(`${primo}\n`))
    }
}

document.getElementById("bt5").addEventListener("click", () => {
    primo()
})

document.getElementById("bt5").addEventListener("click", () => {
    primo()
})