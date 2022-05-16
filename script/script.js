// Elements

let expands = document.querySelectorAll('.js-faq-questions__expand')
let answers = document.querySelectorAll('.js-faq-questions__answer')
let arrows = document.querySelectorAll('.js-faq__arrow')
let questions = document.querySelectorAll('.faq-questions__statement')

// Event Listener

for (let i = 0; i in expands; i++) {
    expands[i].addEventListener('click', function() {
        answerCutout(expands[i], answers[i], arrows[i], questions[i])
    })
}

// Show de answers 

function answerCutout(expand, answer, arrow, question) {
    if (answer.classList.contains('js-answer-active')) {
        expand.classList.remove('js-faq-questions__expand-active')
        answer.classList.remove('js-answer-active')
        arrow.classList.remove('js-arrow-active')
        question.classList.add('js-faq-questions__statement')
    } else {
        expand.classList.add('js-faq-questions__expand-active')
        answer.classList.add('js-answer-active')
        arrow.classList.add('js-arrow-active')
        question.classList.remove('js-faq-questions__statement')
    }
}