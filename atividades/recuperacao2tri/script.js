//Questão 1 e 2:
function bubbleSort(array){
    let swap;
    let last = array.length - 1;
    do{
        swap = false;
        for(let i = 0; i < last; i++){
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
            }
            swap = true;
        }
        last--
    }while(swap)
    return array
}

let numbers = [9, 4, 6, 2]
console.log('Questão 1 e 2: [9,4,6,2] ')
console.log(bubbleSort(numbers))
console.log('Caso queira testar outros números, use: console.log(bubbleSort(número))')

//Questão 3:

function inverte(array){
    let i = array.length - 1;
    for(let j = 0; j < Math.ceil(array.length/2); j++){
        [array[j], array[i - j]] = [array[i -j], array[j]]
    }
    return array
}

console.log('Questão 3: [2,4,6,9] ')
console.log(inverte(numbers))
console.log('Caso queira testar outros números, use: console.log(inverte(número))')


//Questão 4: 

const bt_att4 = document.querySelector('#bt_att4')

let arrayNum = []

bt_att4.addEventListener('click', function question4(){
    let res4 = document.querySelector("#res4")
    let i = arrayNum.length;
    let num = document.querySelector('#num').value
    let qtdArray = document.querySelector('#qtdArray').value
    if(i < qtdArray){
        arrayNum.push(num)
        res4.textContent = arrayNum
    }
    if(arrayNum.length === qtdArray){
        res4.textContent = inverte(arrayNum)
        bt_att4.removeEventListener("click", question4)
    }
})

// Questão 5:

const bt_att5 = document.querySelector('#bt_att5')

arrayNum = []
bt_att5.addEventListener('click', () =>{
    let num = document.querySelector('#num_att5').value
    arrayNum.push(num)
    console.log(arrayNum)
    
    let res5 = document.querySelector("#res5")
    res5.innerHTML += `<br>` + bubbleSort(arrayNum) + `<br>`
})

//Questão 6: 

const bt_att6 = document.querySelector('#bt_att6')

bt_att6.addEventListener('click', () => {
    let vetor_att6 = document.querySelector('#vetor_att6').value
    let num = document.querySelector('#num_att6').value
    let res6 = document.querySelector('#res6')
    vetor_att6 = vetor_att6.split(',')
    console.log(vetor_att6.length)
    vetor_att6.forEach((elem, index) => {
        if(elem === num){
            vetor_att6.push(index)
            res6.innerHTML += `<br>` + index + `<br>`
        }
    })
})

//Questão 7: 

const bt_att7 = document.querySelector("#bt_att7")

bt_att7.addEventListener('click', function fibonacci(){
    let num_att7 = document.querySelector('#num_att7').value
    let res7 = document.querySelector('#res7')
    arrayNum = [1,1]
    arrayNum.reduce((total, elem) => {
        total += elem
        return total
    })
    console.log(arrayNum)
    arrayNum.forEach((elem, index) => {
        if(arrayNum.length === num_att7){
            res7.innerHTML += `<br>` + index + `<br>`
        }
    })
})

//Questão 9:
const section = document.querySelector("#velha")
let result = document.querySelector("#Resposta")

let arrayGame =[]

section.addEventListener("click", (e) => {
    console.log(e.target)
    const elementClick = e.target
    if(elementClick.tagName === "BUTTON"){
        console.log(elementClick.id)
        elementClick.innerHTML = "x"
        AddArray(elementClick.innerHTML)
        verifierWinner(arrayGame, elementClick.id)
    }
})

function AddArray(elem){
    arrayGame.push(elem)
    console.log(arrayGame)
}
function verifierWinner(elem, pos){
    if(elem[pos] === "x" && elem[pos] === "x" && elem[pos] === "x"){
        result.innerHTML = "Você Ganhou"
        console.log("Você Ganhou!")
    }
}

