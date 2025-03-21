
let escolha = ''
let computador = ['pedra', 'papel', 'tesoura']

// não fazer com o pessoal
let pontos_vc = 0
let pontos_pc = 0

function gerarNumero(){
    return Math.floor(Math.random() * 3)
}

document.querySelector('#pedra').addEventListener('mouseover', (tag) => {
    // console.log(tag)
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal')
})

document.querySelector('#pedra').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '')
})

document.querySelector('#papel').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal')
})

document.querySelector('#papel').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '')
})

document.querySelector('#tesoura').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal')
})

document.querySelector('#tesoura').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '')
})


document.querySelector('#pedra').addEventListener('click', (tag) => {
    document.querySelector('#papel').style.filter = 'brightness(100%)'
    document.querySelector('#tesoura').style.filter = 'brightness(100%)'
    tag.currentTarget.style.filter = 'brightness(50%)' 
    escolha = 'pedra'
    console.log("jogador escolheu " + escolha)
})

document.querySelector('#papel').addEventListener('click', (tag) => {
    document.querySelector('#pedra').style.filter = 'brightness(100%)'
    document.querySelector('#tesoura').style.filter = 'brightness(100%)'
    tag.currentTarget.style.filter = 'brightness(50%)'    
    escolha = 'papel'
    console.log("jogador escolheu " + escolha)
})

document.querySelector('#tesoura').addEventListener('click', (tag) => {
    document.querySelector('#pedra').style.filter = 'brightness(100%)'
    document.querySelector('#papel').style.filter = 'brightness(100%)'
    tag.currentTarget.style.filter = 'brightness(50%)'    
    escolha = 'tesoura'
    console.log("jogador escolheu " + escolha)
})



document.querySelector('button').addEventListener('click', () => {
    let aleatorio = gerarNumero()
    console.log('computador escolheu ' + computador[aleatorio])

    const obj2 = document.querySelector(`#${computador[aleatorio]}-pc`)
    obj2.style.filter = 'brightness(100%)'
    obj2.setAttribute('class', 'a-jello-horizontal')
    
    if (escolha == computador[aleatorio]) {
        console.log('Empate')
    } else if (escolha === 'pedra' && computador[aleatorio] === 'tesoura') {
        console.log('Você ganhou')
        pontos_vc++
    } else if (escolha === 'papel' && computador[aleatorio] === 'pedra') {
        console.log('Você ganhou')
        pontos_vc++
    } else if (escolha === 'tesoura' && computador[aleatorio] === 'papel') {
        console.log('Você ganhou')
        pontos_vc++
    } else {
        console.log('Você perdeu')
        pontos_pc++
    }

    console.log(obj2)


    //não fazer com o pessoal
    document.querySelector('#pontos-jogador').innerHTML = pontos_vc
    document.querySelector('#pontos-maquina').innerHTML = pontos_pc

    setTimeout(() => {
        obj2.style.filter = 'brightness(0%)'
        obj2.setAttribute('class', '')
    }, 3000)
    
    gerarNumero()
})  
