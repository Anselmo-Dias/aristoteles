const elementPhrase = document.querySelector('#phrase')
const elementInput = document.querySelector('#inputName')
const elementButton = document.querySelector('#buttonPhrase')

const phrases = [
    "O prazer no trabalho aperfeiçoa a obra.",
    "Você nunca fará nada neste mundo sem coragem. É a melhor qualidade da mente ao lado da honra.",
    "Nunca existiu uma grande inteligência sem uma veia de loucura.",
    "O ignorante afirma, o sábio duvida, o sensato reflete.",
    "Ter muitos amigos é não ter nenhum.",
    "É fazendo que se aprende a fazer aquilo que se deve aprender a fazer.",
    "A educação tem raízes amargas, mas os seus frutos são doces.",
    "O sábio nunca diz tudo o que pensa, mas sempre pensa tudo o que diz.",
    "Nós somos aquilo que fazemos repetidamente. Excelência então não é um modo de agir, mas um hábito.",
    "Valor final da vida depende mais da consciência e do poder de contemplação, que da mera sobrevivência.",
    "Nosso caráter é o resultado da nossa conduta.",
    "As pessoas dividem-se entre aquelas que poupam como se vivessem para sempre e aquelas que gastam como se fossem morrer amanhã.",
]


function getKnowledge() {
    if(elementInput.value === "Sandro") {
        const phrase = '<div>' + elementInput.value + '📚' + '</div>'

        elementButton.setAttribute('disabled', true)

        const totalPhrases = phrases.length
        const randomNumber = Math.floor(Math.random() * totalPhrases)

        elementPhrase.innerHTML = phrase + phrases[randomNumber]

        elementPhrase.style.opacity=1;

        setTimeout( function() {
            elementPhrase.style.opacity=0;
            elementButton.removeAttribute('disabled')
        }, 6000 )
        
    } else {
        alert("Digite o nome do melhor professor")
        return
    }
}
