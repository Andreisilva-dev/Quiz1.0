
// SELECIONANDO OS ELEMENTOS HTML
let inscrucoes = document.querySelector('#instrucoes')
let articleDaQuestoes = document.querySelector('.questoes')
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')
let total = document.querySelector('#total')
let alternativas = document.querySelector('#alternativas')

// alternativa de a,b e c
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// DOM de aviso abaixo da alternativas
let aviso = document.querySelector('#aviso')
let numeroDaQuestaoAtual = document.querySelector('#numero')
let totalDeQuestoes = document.querySelector('#total')

const q0 = {
    numQuestao  : 0,
    pergunta    : 'pergutaDaQuestao 0',
    alternativaA: 'alternativaA',
    alternativaB: 'alternativaB',
    alternativaC: 'alternativaC',
    correta     : 'correta'
}

const q1 = {
    numQuestao  : 1,
    pergunta    : 'Qual o Clã do sasuke?',
    alternativaA: 'uzumaki',
    alternativaB: 'uchiha',
    alternativaC: 'haruno',
    correta     : 'uchiha'
}

const q2 = {
    numQuestao  : 2,
    pergunta    : 'Quem matou jiraya?',
    alternativaA: 'pain',
    alternativaB: 'madara',
    alternativaC: 'obito',
    correta     : 'pain'
}

const q3 = {
    numQuestao  : 3,
    pergunta    : 'Quem pertence ao clã Nara?',
    alternativaA: 'Rock-lee',
    alternativaB: 'Shikamaru',
    alternativaC: 'Neji',
    correta     : 'Shikamaru'
}

numero.textContent = '1'
// armazenar todos os objetos em um array
let questoes = [q0,q1,q2,q3]

total.textContent = (questoes.length)-1
// MOSTRAR A QUESTAO NO HTML PELO JAVASCRIPT
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

function proximaQuestao(nQuestao){
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
}

// contador que faz passar para proxima questao quando recebe um clique
let contador = 1
let ponto = 0
function verificarSeAcertou(elemento){
    // O elemento é o elemento DOM, do tipo HTMLLIElement (ou seja, um objeto JavaScript que representa aquele <li> do seu HTML).

    // Esse elemento é o mesmo que você pegaria com document.querySelector, só que já vem pronto.

    //console.log(elemento) mostra a li inteira
    //console.log(elemento.textContent) mostra o que tem dentro da li
    
    // console.log(contador)
    // proximaQuestao(contador)

    let alternativaEscolhida = elemento.textContent
    // console.log(`voce escolheu a opção ${elemento.id}: ${elemento.textContent}`)
    
    console.log(`voce escolheu ${alternativaEscolhida}`)

    // qual questao está
    numero.textContent = contador

    if(alternativaEscolhida == questoes[contador].correta){
        console.log('acertou')
        ponto = ponto + 10
    }else {
        console.log('errou')
    }
    contador++
    numero.textContent = contador
    
    console.log(`voce tem ${ponto}`)
    
    if(contador < questoes.length){
        proximaQuestao(contador)
    }else {
        console.log('fim de jogo')
        //pergunta.style.color = 'red'
        articleDaQuestoes.classList.add('bloqueado')
        aviso.classList.add('bloqueado')
        inscrucoes.textContent = `parabéns você fez ${ponto} pontos`

        setTimeout(function(){
            limpar()
        },4000)
    }
    
}

function limpar(){
    location.reload()
}
