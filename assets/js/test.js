// varibles
var startingQuiz = document.getElementById("buttonstart");
var questionsBox = document.getElementById("questioncontainer");
var answerChoice = document.getElementById("answerchoices");
let questionShuffled, currentQuestionInput
var questionEl = document.getElementById('quizquestions');
var buttonChoiceA = document.getElementById('answerchoicebuttons')
var yourscore = document.getElementById('yourscore')
var initialBox
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

timerfunction()
nextQuestions()

}

// initialbox remove when startquiz only show when quiz ends 2step when clicked submit it sends to highscore.html

// start game function end

// next question function

//shows next question if answered
function nextQuestions () {
    Questionshow(questionShuffled[currentQuestionInput])
    //console.log(questionLists[0].choices)
    for (var i = 0; i < questionLists[currentQuestionInput].choices.length ; i++) {
        console.log(questionLists[0].choices[i])
        document.getElementById(`buttonchoice${i}`).innerHTML = `${i+1}:  ` + questionLists[currentQuestionInput].choices[i]
        document.getElementById(`buttonchoice${i}`).addEventListener('click', answer)
    };
}

// answer function
function answer(event) {
    //console.log(event.target.id.split("buttonchoice")[1] == questionLists[currentQuestionInput].correct )
    currentQuestionInput++
    nextQuestions()
    return "",
    // 1 == "1" value
    // 1 === "1" value and type
    // Datatypes = string, numbers, boolean,null, undefined
    // Datastructures = arrays, object
    console.log(typeof undefined, typeof null, typeof 1, typeof '1')
    // if currentquestioninput is greater than the legnth of your array then end quiz? 
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
    {
        question: "What is 6 + 1?",
        choices: ["4", "5", "6", "7"],
        correct: 7
    },
]; 
// question array ends here

// function score (yourscore) {
//  document.getElementById('yourscore')
//  interhtml = ('h2') + timer
// }

function timerfunction(){
    var timer = 75
    var myTimer = setInterval(function(){
        timer--;
        document.getElementById('thecountdown').innerHTML=timer

        if(timer <= 0 || currentQuestionInput >= questionLists.length){
            clearInterval(myTimer)
            document.getElementById('quizcontainers').classList.add('hide')
            document.getElementById('endScoreContainer').classList.remove('hide')
            
            //create an element to show score 
            var endScoreContainer = document.getElementById('endScoreContainer')
            var endScore = document.createElement('p').textContent = "score of " + timer
            endScore.classList = 'endscore'
            endScoreContainer.append(endScore)
        } 
    },1000);
}

// function codeQuizEnd (){
//     return startQuiz;
// }