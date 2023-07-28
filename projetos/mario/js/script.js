const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const button = document.querySelector('.btnReiniciar')
let segundos = document.querySelector('#segundos')
let minutos = document.querySelector('#minutos')
let perdeuJogo = false
let milisegundos = 0
let segundo = 0
let minuto = 0
const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500)
}

const reiniciar = () =>{
    if(perdeuJogo == true){
        window.location.reload()
    }
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft


    milisegundos +=10
    if(milisegundos == 1000){
        milisegundos = 0
        segundo +=1
        segundos.innerHTML = segundo
        if(segundo < 10){
            segundos.innerHTML = `0${segundo}` 
        }
    }
    if(segundo == 60){
        segundo = 0
        segundos.innerHTML = `00` 
        minuto += 1
        minutos.innerHTML = minuto
        if(minuto < 10){
            minutos.innerHTML = `0${minuto}:` 
        }
    }

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.margin = '40px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        perdeuJogo = true
        clearInterval(loop)
    }
},10)

button.addEventListener('click', reiniciar)

document.addEventListener('keydown', jump)