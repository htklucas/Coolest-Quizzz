let elementPergunta1 = document.getElementById('pergunta1')
let elementPergunta2 = document.getElementById('pergunta2')
let elementPergunta3 = document.getElementById('pergunta3')
var resposta

function resultado(){

    resposta = Number(elementPergunta1.value) + Number(elementPergunta2.value) + Number(elementPergunta3.value)

    if (resposta < 0) {

        alert('Alguma pergunta está sem resposta!')
        

    } else if (resposta < 3 && resposta > 0) {

        alert('Quiz Finalizado! Confira sua pontuação :)')

        pontuacao.value = resposta

    } else if (resposta == 3) {

        alert('Parabéns, Pontuação máxima! :D')

        pontuacao.value = resposta
    }
}
