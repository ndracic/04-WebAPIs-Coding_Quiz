var timer = document.getElementById('countdown')
var main = document.getElementById('main')
var nextQ = document.getElementById('next')
var prev = document.getElementById('previous')
var score = document.getElementById('result')
var questions = document.getElementById('question')

var message = 'Time is up'
var questions = [{
    q: "What is CSS",
    answer: [{text:"Cascading Synchronized Sheet", isCorrect: false},
        {text:"Cascading Style Sheet", isCorrect: true},
        {text:"That one thing you use to style", isCorrect: false},
        {text:"Cats Skunks and Seahorses", isCorrect: false}
        ]},

        {
    q: "what is a string in JS?",
    a: [{text:"a sequence of one or more characters that may consist of letters, numbers, or symbols.", isCorrect: true},
        {text:"some rope to hold your website together", isCorrect: true},
        {text:"the way your page looks", isCorrect: false},
        {text:"this is not the correct answer", isCorrect: false}
        ]},
        
        {
    q: "Define local storage?",
    a: [{text:"a memory card.", isCorrect: true},
        {text:"a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.", isCorrect: true},
        {text:"a property that allows JavaScript sites and apps to save key-value pairs in a web browser with expiration date.", isCorrect: false},
        {text:"a property that holds a value", isCorrect: false}
            ]},

        {
    q: "what is a function?",
    a: [{text:"a party for coding", isCorrect: true},
        {text:"set of statements that performs a task or calculates a value", isCorrect: true},
        {text:"that thing that does that one thing", isCorrect: false},
        {text:"a statement that collects inputs but doesnt result in any output", isCorrect: false}
            ]},
]


function init() {
    countdown();
    correctAnswers();
    wrongAnswers();
}

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function (){
        if (timeLeft>=1){
            timer.textContent = timeLeft + " time remaining.";
            timeLeft--;
        }
    //stop timer
        else if(timeLeft === 1) {
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            sendMessage();
            }
        }, 1000);
        }

//when the timer is up the app is ended abruptly
function sendMessage() {
    var timesUp =  setInterval(function(){
        if (timeLeft===0) {
            clearInterval(timeLeft)
        }
    })
}
