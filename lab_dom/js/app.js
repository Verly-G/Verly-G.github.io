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

document.getElementById("button").addEventListener("click", () => {
    const att11 = document.getElementById("onenumber");
    const att12 = document.getElementById("twonumber");
    const res1 = document.getElementById("resposta1");
    res1.innerHTML = soma(parseFloat(att11.value), parseFloat(att12.value))
})