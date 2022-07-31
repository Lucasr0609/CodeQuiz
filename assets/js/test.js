// varibles
var startingQuiz = document.getElementById("buttonstart");
var questionsBox = document.getElementById("questioncontainer");
var answerChoice = document.getElementById("answerchoices");
let questionShuffled, currentQuestionInput
var questionEl = document.getElementById('quizquestions');
var buttonChoiceA = document.getElementById('answerchoicebuttons')
var yourscore = document.getElementById('yourscore')
var resultArea = document.getElementById('resultsection')
// var buttonChoiceA = document.getElementById('buttonchoicea')
// var buttonChoiceB = document.getElementById('buttonchoiceb')
// var buttonChoiceC = document.getElementById('buttonchoicec')
// var buttonChoiceD = document.getElementById('buttonchoiced')
// varibles end

// event listeners
startingQuiz.addEventListener('click', startQuiz);
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
    var isAnswerCorrect = event.target.id.split("buttonchoice")[1] == questionLists[currentQuestionInput].correct
    answercorrect(isAnswerCorrect)
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
        correct: 3
    },
]; 
// question array ends here

// function score (yourscore) {
//  document.getElementById('yourscore')
//  interhtml = ('h2') + timer
// }
var timer = 75
function timerfunction(){
    
    var myTimer = setInterval(function(){
        timer--;
        document.getElementById('thecountdown').innerHTML=timer

        if(timer <= 0 || currentQuestionInput >= questionLists.length){
            clearInterval(myTimer)
            var submit = document.querySelector("#submit")
            
        
            document.getElementById('quizcontainers').classList.add('hide')
            document.getElementById('endScoreContainer').classList.remove('hide')
            
            //create an element to show score 
            var endScoreContainer = document.getElementById('endScoreContainer')
            var endScore = document.createElement('p').textContent = "score of " + timer
            endScore.classList = 'endscore'
            endScoreContainer.append(endScore)
            submit.addEventListener('click', hslocalstorage)
        } 
    },1000);
}

function hslocalstorage (event) {
    event.preventDefault()
    var gettingLocalStorage = JSON.parse(localStorage.getItem('HighScore'))
    if (gettingLocalStorage === null){
        var highScoreArry = [];
    } else {
        var highScoreArry = gettingLocalStorage
    }
    var initals = document.querySelector("#initals").value.trim()
    debugger;
    if (initals === null){
        console.log('no value was entered');
    } else {
        var endScore = {
            initals: initals,
            score: timer
        }
    }
    highScoreArry.push(endScore)
    localStorage.setItem("HighScore", JSON.stringify(highScoreArry))
    location.replace('./HighScore.html')
}


var answercorrect = function (number) {
    var resultContainer = document.querySelector("#resultsection")
    console.log(resultContainer.firstChild);
    // resultContainer.removeChild(resultContainer.firstChild)
    if (number /*questionLists[currentQuestionInput].correct*/) {
        console.log("correct answer");
        var content = document.querySelector("#h2result");
        content.textContent = "Correct Answer!";
        content.className = "result";
        resultContainer.classList.remove('hide')
    }
    else {
        var resultArea = document.querySelector("#h2result");
        resultArea.textContent = "Wrong Answer!";
        resultArea.className = "result";
        resultContainer.classList.remove('hide')
        timer = timer - 10
    }
}
