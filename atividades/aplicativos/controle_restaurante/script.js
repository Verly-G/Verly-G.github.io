const url = 'https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json'

fetch(url)
.then(resposta => {
    if(resposta.ok !== true){
        let msgErro = resposta.status + ' - ' + resposta.statusText
        document.querySelector('#erro').textContent = msgErro
    }return resposta
})
.then(resposta => resposta.json())
.then(cardapio => {
    cardapio.forEach(({ code, photo, price, name, details, title }) => {
        name == null ?  menuList(code, photo, price, title, details) : menuList(code, photo, price, name, details)
    });
})
.catch(erro => "Erro: " + erro)

const menuList = (code, photo, price, name, details) => {
    console.log(code, photo, price, name, details)
}

const classclassification =  code => {
    //Ordenar o menu por meio do code dos produtos
    foodCode.innerHTML = `${code}`
    let classCode
    // code.substr(0,1) == code.substr(0,1) ? 
    foodCode.classList.add(classCode)
}

const total = price => {
    //Calcula o valor total dos produtos comprados pelo cliente
}