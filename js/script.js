const opcoes = ['pedra', 'papel', 'tesoura']
let escolha = ''
let pontosJogador = 0
let pontosComputador = 0

const regras = {
  pedra: 'tesoura',
  papel: 'pedra',
  tesoura: 'papel'
}

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * opcoes.length)
}

function resetarFiltros() {
  opcoes.forEach(opcao => {
    const botao = document.querySelector(`#${opcao}`)
    botao.style.filter = 'brightness(100%)'
  })
}

function configurarEventosBotoes() {
  opcoes.forEach(opcao => {
    const botao = document.querySelector(`#${opcao}`)
    
    botao.addEventListener('mouseover', () => {
      botao.classList.add('a-jello-horizontal')
    })
    
    botao.addEventListener('mouseout', () => {
      botao.classList.remove('a-jello-horizontal')
    })
    
    botao.addEventListener('click', () => {
      resetarFiltros()
      botao.style.filter = 'brightness(50%)'
      escolha = opcao
      console.log(`jogador escolheu ${opcao}`)
    })
  })
}

function jogarComputador() {
  const numeroAleatorio = gerarNumeroAleatorio()
  const escolhaComputador = opcoes[numeroAleatorio]
  console.log(`computador escolheu ${escolhaComputador}`)
  
  const botaoComputador = document.querySelector(`#${escolhaComputador}-pc`)
  botaoComputador.style.filter = 'brightness(100%)'
  botaoComputador.classList.add('a-jello-horizontal')
  
  if (escolha === escolhaComputador) {
    console.log('Empate')
  } else if (regras[escolha] === escolhaComputador) {
    console.log('Você ganhou')
    pontosJogador++
  } else {
    console.log('Você perdeu')
    pontosComputador++
  }
  
  document.querySelector('#pontos-jogador').innerHTML = pontosJogador
  document.querySelector('#pontos-maquina').innerHTML = pontosComputador
  
  setTimeout(() => {
    botaoComputador.style.filter = 'brightness(0%)'
    botaoComputador.classList.remove('a-jello-horizontal')
  }, 3000)
}

document.addEventListener('DOMContentLoaded', () => {
  configurarEventosBotoes()
  document.querySelector('button').addEventListener('click', jogarComputador)
})
