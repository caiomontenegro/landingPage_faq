// Questions

const question1 = document.querySelector('#js-expand-1')
const question2 = document.querySelector('#js-expand-2')
const question3 = document.querySelector('#js-expand-3')
const question4 = document.querySelector('#js-expand-4')
const question5 = document.querySelector('#js-expand-5')

// Answers

const answer1 = document.querySelector('#js-answer-1')
const answer2 = document.querySelector('#js-answer-2')
const answer3 = document.querySelector('#js-answer-3')
const answer4 = document.querySelector('#js-answer-4')
const answer5 = document.querySelector('#js-answer-5')

// arrows

const arrow1 = document.querySelector('#js-arrow-1')
const arrow2 = document.querySelector('#js-arrow-2')
const arrow3 = document.querySelector('#js-arrow-3')
const arrow4 = document.querySelector('#js-arrow-4')
const arrow5 = document.querySelector('#js-arrow-5')

// Events 

question1.addEventListener('click', function() {
    dropAnswer(answer1, question1, arrow1)
})
question2.addEventListener('click', function() {
    dropAnswer(answer2, question2, arrow2)
})
question3.addEventListener('click', function() {
    dropAnswer(answer3, question3, arrow3)
})
question4.addEventListener('click', function() {
    dropAnswer(answer4, question4, arrow4)
})
question5.addEventListener('click', function() {
    dropAnswer(answer5, question5, arrow5)
})

// Show de answers 

function dropAnswer(answer, question, arrow) {
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