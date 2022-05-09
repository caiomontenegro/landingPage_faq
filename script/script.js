// Elements

let expands = document.querySelectorAll('.js-expand')
let answers = document.querySelectorAll('.js-group__answer')
let arrows = document.querySelectorAll('.js-group__arrow')
let question = document.querySelectorAll('.group__question')

// Event Listener

for (let i = 0; i in expands; i++) {
    expands[i].addEventListener('click', function() {
        dropAnswer(expands[i], answers[i], arrows[i], question[i] )
    })
}

// Show de answers 

function dropAnswer(expand, answer, arrow, question) {
    if (answer.classList.contains('js-answer-active')) {
        expand.classList.remove('js-expand-active')
        answer.classList.remove('js-answer-active')
        arrow.classList.remove('js-arrow-active')
        question.classList.add('group__js-question')
    } else {
        expand.classList.add('js-expand-active')
        answer.classList.add('js-answer-active')
        arrow.classList.add('js-arrow-active')
        question.classList.remove('group__js-question')
    }
}