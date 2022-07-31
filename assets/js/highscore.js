function HighScore () {
    debugger;
    var scoreResult = JSON.parse(localStorage.getItem('HighScore'))
    for (var i = 0 ; i < scoreResult.length; i++){
    var container = document.querySelector('#score')
    var div = document.createElement('div')
    div.classList.add('highscorecss')
    div.innerHTML = scoreResult[i].initals + ': ' + scoreResult[i].score
    container.appendChild(div)
    }
}
HighScore()