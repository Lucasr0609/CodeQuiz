// varibles
var startingQuiz = document.getElementById("buttonstart");
var questionsBox = document.getElementById("questioncontainer");
var answerChoice = document.getElementById("answerchoices");
let questionShuffled, currentQuestionInput
var questionEl = document.getElementById('quizquestions');
var buttonChoiceA = document.getElementById('answerchoicebuttons')
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
        question: 'How do you call a function named "highScore"?',
        choices: ["highScore()", "call{highScore}", "return = highScore;", "highScore{}"],
        correct: 0
    },
    {
        question: "Which operator checks for equality plus data type",
        choices: [" --- ", " == ", " = ", " === "],
        correct: 3
    },
    {
        question: "How do you write a comment in Javascript",
        choices: [" //This is a comment ", " `This is a comment` ", " (This is a comment) ", " !--comment-- "],
        correct: 0
    },
    {
        question: "How is a FOR loop  in Javascript started?",
        choices: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5)"],
        correct: 1
    },
    {
        question: "What command is use to debug your code.",
        choices: ["debug", "console.log()", "debugger;", "//debugger"],
        correct: 2
    },
    {
        question: "String values are supposed to be enclose within ____ while being assigned to variables.",
        choices: ["commas", "curly brackets", "parenthesis", "quotes"],
        correct: 3
    },
    {
        question: "When using arrays in Javascript they can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: 3
    },
    {
        question: "What attribute is used in html to decorate content?",
        choices: ["style", "src", "class", "css"],
        correct: 0
    },
    {
        question: "What HTML tag is not use inside the head tag",
        choices: ["meta", "title", "header", "link"],
        correct: 2
    },
    {
        question: "which Data type is not commonly used.",
        choices: ["booleans", "alerts", "strings", "numbers"],
        correct: 1
    },
]; 
// question array ends here

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
        timer = timer + 5
    }
    else {
        var resultArea = document.querySelector("#h2result");
        resultArea.textContent = "Wrong Answer!";
        resultArea.className = "result";
        resultContainer.classList.remove('hide')
        timer = timer - 10
    }
}
