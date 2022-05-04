// Elements

let questions = document.querySelectorAll('.js-expand')
let answers = document.querySelectorAll('.js-group__answer')
let arrows = document.querySelectorAll('.js-group__arrow')

// Event Listener

for (let i = 0; i in questions; i++) {
    questions[i].addEventListener('click', function() {
        dropAnswer(questions[i], answers[i], arrows[i] )
    })
}

// Show de answers 

function dropAnswer(question, answer, arrow) {
    if (answer.classList.contains('js-answer-active')) {
        question.classList.remove('js-question-active')
        answer.classList.remove('js-answer-active')
        arrow.classList.remove('js-arrow-active')
    } else {
        question.classList.add('js-question-active')
        answer.classList.add('js-answer-active')
        arrow.classList.add('js-arrow-active')
    }
}