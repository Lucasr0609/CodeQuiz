// varibles
var startingQuiz = document.getElementById("buttonstart");
var questionsBox = document.getElementById("questioncontainer");
var answerChoice = document.getElementById("answerchoices");
let questionShuffled, currentQuestionInput
var questionEl = document.getElementById('quizquestions');
var buttonChoiceA = document.getElementById('answerchoicebuttons')
// var buttonChoiceA = document.getElementById('buttonchoicea')
// var buttonChoiceB = document.getElementById('buttonchoiceb')
// var buttonChoiceC = document.getElementById('buttonchoicec')
// var buttonChoiceD = document.getElementById('buttonchoiced')
// varibles end

// event listeners
startingQuiz.addEventListener('click', startQuiz)
// event listeners ends

// start game function

function startQuiz () {
console.log("started")
currentQuestionInput = 0
questionShuffled = questionLists.sort(() => Math.random() - .5)
startingQuiz.classList.add('hide')
answerChoice.classList.remove('hide')
questionsBox.classList.remove('hide')
nextQuestions()
}

// start game function end

// next question function

function nextQuestions () {
    Questionshow(questionShuffled[currentQuestionInput])
    console.log(questionLists[0].choices)
    for (var i = 0; i < questionLists[currentQuestionInput].choices.length ; i++) {
        console.log(questionLists[0].choices[i])
        document.getElementById(`buttonchoice${i}`).innerHTML = `${i+1}:  ` + questionLists[currentQuestionInput].choices[i]
        document.getElementById(`buttonchoice${i}`).addEventListener('click', answer)
    };
}

// answer function
function answer(event) {
    console.log(event.target.id.split("buttonchoice")[1] == questionLists[currentQuestionInput].correct )
    // 1 == "1" value
    // 1 === "1" value and type
    // Datatypes = string, numbers, boolean,null, undefined
    // Datastructures = arrays, object
    console.log(typeof undefined, typeof null, typeof 1, typeof '1')
}

// next question function ends

// show question
function Questionshow(question) {
    questionEl.innerHTML = question.question
}
//show question end
// html on click event
// Answer choices
function selectingAnswers () {
    
}
// match questionlist correct index to choices index
if (selectingAnswers)
//questions array starts here
var questionLists = [
    {
        question: "What is 2 + 2?",
        choices: ["4", "5", "6", "7"],
        correct: 0
    },
    {
        question: "What is 3 + 3?",
        choices: ["4", "5", "6", "7"],
        correct: 2
    },
]; 
// question array ends here