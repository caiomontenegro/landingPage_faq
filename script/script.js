// Elements

let expands = document.querySelectorAll('.js-doubt__expand')
let answers = document.querySelectorAll('.js-faq__answer')
let arrows = document.querySelectorAll('.js-faq__arrow')
let questions = document.querySelectorAll('.faq__question')

// Event Listener

for (let i = 0; i in expands; i++) {
    expands[i].addEventListener('click', function() {
        answerCutout(expands[i], answers[i], arrows[i], questions[i])
    })
}

// Show de answers 

function answerCutout(expand, answer, arrow, question) {
    if (answer.classList.contains('js-answer-active')) {
        expand.classList.remove('js-doubt__expand-active')
        answer.classList.remove('js-answer-active')
        arrow.classList.remove('js-arrow-active')
        question.classList.add('faq__js-question')
    } else {
        expand.classList.add('js-doubt__expand-active')
        answer.classList.add('js-answer-active')
        arrow.classList.add('js-arrow-active')
        question.classList.remove('faq__js-question')
    }
}