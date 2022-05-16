// Elements

let accordions = document.querySelectorAll('.js-faq-questions__accordion')
let answers = document.querySelectorAll('.js-faq-questions__answer')
let arrows = document.querySelectorAll('.js-faq__arrow')
let questions = document.querySelectorAll('.faq-questions__statement')

// Event Listener

for (let i = 0; i in accordions; i++) {
    accordions[i].addEventListener('click', function() {
        answerCutout(accordions[i], answers[i], arrows[i], questions[i])
    })
}

// Show de answers 

function answerCutout(accordion, answer, arrow, question) {
    if (answer.classList.contains('js-answer-active')) {
        accordion.classList.remove('js-faq-questions__accordion-active')
        answer.classList.remove('js-answer-active')
        arrow.classList.remove('js-arrow-active')
        question.classList.add('js-faq-questions__statement')
    } else {
        accordion.classList.add('js-faq-questions__accordion-active')
        answer.classList.add('js-answer-active')
        arrow.classList.add('js-arrow-active')
        question.classList.remove('js-faq-questions__statement')
    }
}