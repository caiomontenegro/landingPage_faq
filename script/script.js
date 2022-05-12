// Elements

let expands = document.querySelectorAll('.js-doubt__expand')
let answers = document.querySelectorAll('.js-doubts__answer')
let arrows = document.querySelectorAll('.js-doubts__arrow')
let questions = document.querySelectorAll('.doubts__question')

// Event Listener

for (let i = 0; i in expands; i++) {
    expands[i].addEventListener('click', function() {
        dropAnswer(expands[i], answers[i], arrows[i], questions[i])
    })
}

// Show de answers 

function dropAnswer(expand, answer, arrow, question) {
    if (answer.classList.contains('js-answer-active')) {
        expand.classList.remove('js-doubt__expand-active')
        answer.classList.remove('js-answer-active')
        arrow.classList.remove('js-arrow-active')
        question.classList.add('doubts__js-question')
    } else {
        expand.classList.add('js-doubt__expand-active')
        answer.classList.add('js-answer-active')
        arrow.classList.add('js-arrow-active')
        question.classList.remove('doubts__js-question')
    }
}