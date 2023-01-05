const url = 'https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json'
const urlImg = 'https://rafaelescalfoni.github.io/desenv_web/restaurante/'

const divCards = document.querySelector('.cards')
const divcontent = document.querySelector('.content')
const divRequest = document.querySelector('.request')
let imgPoster = document.querySelector('#poster')
let titlePoster = document.querySelector('#title')
let pricePoster = document.querySelector('#price_cont')
let detailsPoster = document.querySelector('#details')

let cardapioList = []

const localStoregeRequest = JSON.parse(localStorage
    .getItem('RestauranteVerly'))
let pedidos = localStorage
    .getItem('RestauranteVerly') !== null ? localStoregeRequest : []

fetch(url)
    .then(resposta => {
        if (resposta.ok !== true) {
            let msgErro = resposta.status + ' - ' + resposta.statusText
            document.querySelector('#erro').textContent = msgErro
        } return resposta
    })
    .then(resposta => resposta.json())
    .then(cardapio => {
        cardapio.forEach(({ code, photo, price, name, details, title }) => {
            name == null ? menuList(code, photo, price, title, details) : menuList(code, photo, price, name, details)
        });

    })
    .catch(erro => "Erro: " + erro)

const getFoodCode = code => '0123456789'.indexOf(code[1]) != -1 ? code.substr(0, 1) : code.substr(0, 2)

const getPrice = code => {
    const cardapioPedido = {
        price: cardapioList.find(elem => elem.code == code).price,
        name: cardapioList.find(elem => elem.code == code).name
    }
    Objeto(cardapioPedido)
    return cardapioPedido.price.substr(1, 4)
}

const Objeto = (cardapio) => {
    let name = document.createElement('h3')
    let price = document.createElement('h4')
    let div = document.createElement('div')

    name.innerHTML = cardapio.name
    price.innerHTML = '$' + cardapio.price.substr(1, 4)

    div.appendChild(name)
    div.appendChild(price)

    divRequest.prepend(div)
}

const getTotal = () => {
    divRequest.innerHTML = ''
    let valorTotal = document.createElement('h5')
    let prato = localStorage.getItem('RestauranteVerly')
    let pratoOBJ = JSON.parse(prato)
    let total = pratoOBJ.reduce((acc, pratoAtual) => acc + Number(getPrice(pratoAtual.code)), 0)

    valorTotal.innerHTML = `Valor Total: <span>${total.toFixed(2)}</span>`

    divRequest.append(valorTotal)
}

const createElement = (code, photo, price, name, details) => {
    const img = document.createElement('img')
    const foodPrice = document.createElement('h4')
    const divCard = document.createElement('div')
    const foodName = document.createElement('h5')
    const foodDetails = document.createElement('p')
    const btCompra = document.createElement('button')

    addClass(img, foodPrice, foodName, foodDetails, btCompra, divCard, code)
    enteringData(img, foodPrice, foodName, foodDetails, btCompra, code, photo, price, name, details)
    groupingData(divCard, foodDetails, img, foodPrice, foodName, btCompra, divCards)

}

const createPrato = (code, photo, price, name, details) => {
    return {
        code: code,
        photo: photo,
        price: price,
        name: name,
        details: details
    }
}

const groupingData = (card, details, photo, price, name, button, divCards) => {
    card.appendChild(details)
    card.appendChild(photo)
    card.appendChild(price)
    card.appendChild(name)
    card.appendChild(button)
    divCards.prepend(card)
}

const addClass = (photo, price, name, details, button, card, code) => {
    photo.classList.add('dis')
    card.classList.add('card')
    card.classList.add(`food-cat-${getFoodCode(code)}`)
    card.classList.add(`food-id-${code}`)
}

const enteringData = (photoElement, priceElement, nameElement, detailElement, button,
    code, photo, price, name, details) => {

    detailElement.innerHTML = details

    photoElement.src = urlImg + photo
    photoElement.alt = "Picture coming soon"

    priceElement.innerHTML = price
    nameElement.innerHTML = name
    button.innerHTML = `<i class="bi cart bi-cart-dash-fill ${code}"></i>`
}

const bannerPrincipal = (photo, price, name, details) => {
    if (titlePoster.innerHTML == "") {
        imgPoster.src = urlImg + photo
        titlePoster.innerHTML = name
        pricePoster.innerHTML = price
        detailsPoster.innerHTML = details
    }
}

const menuList = (code, photo, price, name, details) => {
    let prato = createPrato(code, photo, price, name, details)
    cardapioList.push(prato)

    bannerPrincipal(photo, price, name, details)
    createElement(code, photo, price, name, details)
    getFoodCode(code)
}


const divPoster = () => {
    Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
        ele.addEventListener('click', () => {
            imgPoster.src = ele.getElementsByTagName('img')[0].src
            titlePoster.innerHTML = ele.getElementsByTagName('h5')[0].innerHTML
            pricePoster.innerHTML = ele.getElementsByTagName('h4')[0].innerHTML
            detailsPoster.innerHTML = ele.getElementsByTagName('p')[0].innerHTML
        })
    })
}

const classclassification = code => {

}


const createItem = code => {
    pedidos.push({
        Id: generateID(),
        code: code,
        date: new Date()
    })
    return pedidos
}

const generateID = () => Math.round(Math.random() * 1000)

const saveItem = code => {
    localStorage.setItem(`RestauranteVerly`, JSON.stringify(createItem(code)))
}

divCards.addEventListener('click', function (e) {
    let elemt = e.target
    divPoster()
    if (elemt.tagName == 'I') {
        saveItem(elemt.classList[3])
    }
})

document.querySelector('#carrinho').addEventListener('click', () => {
    divRequest.style.display = "block";
    getTotal()
})