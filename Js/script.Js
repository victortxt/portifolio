const cardLeft = document.querySelector('#card-left')
const cardRight= document.querySelector('#card-right')
const cardCenter= document.querySelector('#card-center')
const linkCenter = document.querySelector('#btnCenterLink')
const linkRight = document.querySelector('#btnRightLink')
const linkLeft = document.querySelector('#btnLeftLink')
let card = document.querySelector('#cards');


//buttonLeft | buttonRight

const btnLeft = document.querySelector('#buttonLeft');
const buttonRight = document.querySelector('#buttonRight');



let contentCard = Array(
    Array('Password Generator', 'HTML, CSS, JS', 'https://victortxt.github.io/projetos/Password%20generator/index.html'),
    Array('Formulario de cartão', 'HTML, CSS, JS', 'https://victortxt.github.io/projetos/Interactive%20card%20details%20form/index.html'),
    Array('Relógio Virtual', 'HTML, CSS, JS', 'https://victortxt.github.io/projetos/relogio_virtual/index.html'),
    Array('Caderno Virtual', 'HTML, CSS, JS', 'https://victortxt.github.io/projetos/caderno-virtual/index.html'),
    Array('Letreco - (Jogo de palavras)', 'HTML, CSS, JS', 'https://victortxt.github.io/projetos/letreco/index.html'),
    Array('Lista Tarefa', 'HTML, CSS, JS', 'https://victortxt.github.io/projetos/tarefas1/index.html'),
); 


const insertContents = (content, indice) => {

    i2 = indice + 1

    if(i2 < 0){
        i2 = 4
    }else if(i2 > 5){
        i2 = 0
    }

    i3 = indice + 2

    if(i3 < 0){
        i3 = 4
    }else if(i3 > 5){
        console.log('entrou aqui')
        i3 = 0
    }

    //centro

    cardCenter.querySelector('h3').innerHTML = content[0]
    cardCenter.querySelector('p').innerHTML = content[1]
    linkCenter.href = content[2]

    //direita

    cardRight.querySelector('h3').innerHTML = contentCard[i3][0]
    cardRight.querySelector('p').innerHTML = contentCard[i3][1]
    linkLeft.href = contentCard[i2][2] 

    //esquerda

    cardLeft.querySelector('h3').innerHTML = contentCard[i2][0]
    cardLeft.querySelector('p').innerHTML = contentCard[i2][1]
    linkRight.href = contentCard[i3][2]   
    console.log(i3) 
}

let i = 0

const btnRightEvent = () => {
    i++

    if(contentCard[i] === undefined){
        i = 0
    }

    insertContents(contentCard[i], i);
}

buttonRight.addEventListener('click', btnRightEvent)

const btnLeftEvent = () => {
    i--

    if(contentCard[i] === undefined){
        i = 5
    }

    insertContents(contentCard[i], i);
}

btnLeft.addEventListener('click', btnLeftEvent)


insertContents(contentCard[1], 1)