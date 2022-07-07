var questions = [
    {
        numb:1,
        question: "What is JavaScript?",
        answer: "JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers.",
        options: [
            "Cascading Style Sheet",
            "JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers.",
            "a general-purpose programming language that is class-based and object-oriented.",
            "Cats Skunks and Seahorses",
            ]
        },


        {
        numb:2,
        question: "what is a string in JS?",
        answer: "a sequence of one or more characters that may consist of letters, numbers, or symbols.", 
        options: [
            "a sequence of one or more characters that may consist of letters, numbers, or symbols.", 
            "some rope to hold your website together" ,
            "the way your page looks" ,
            "this is not the correct answer", 
            ]
        },
        
        {
        numb:3,
        question: "Define local storage?",
        answer:  "a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.",
        options: [
            "a memory card.",
            "a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.",
            "a property that allows JavaScript sites and apps to save key-value pairs in a web browser with expiration date.",
            "a property that holds a value",             
            ]
        },

        {
        numb:4,
        question: "what is a function?",
        answer: "set of statements that performs a task or calculates a value",
        options: [
            "a party for coding",
            "set of statements that performs a task or calculates a value", 
            "that thing that does that one thing",
            "a statement that collects inputs but doesnt result in any output", 
            ]
        }
]

//get required elements
var startbutton = document.querySelector('.start-btn')
var tryAgain = document.querySelector('.retry')
var quiz = document.querySelector('.quiz_box')
var info = document.querySelector('.start-quiz')
var result = document.querySelector('.result-box')
var time = document.querySelector('.timer')
var clock = document.querySelector('.timer-sec')
var questions_txt = document.querySelector('.question-text')
var nextQ = document.querySelector('.Next')
var student = document.querySelector('.abbr')
var saveResults = document.querySelector('.save-btn')

var option1 = document.querySelector('.option1')
var option2 = document.querySelector('.option2')
var option3 = document.querySelector('.option3')
var option4 = document.querySelector('.option4')

var score = 0
var quecounter = 0
var timeLeft = 60
var options;

//when start quiz button is pressed show instructions
startbutton.addEventListener("click", function(){
    console.log('')
    quiz.style.display ='block';
    info.style.display = 'none';
    countdown();
    for(var i = 0; i<4; i++){
        var option = document.querySelector(`.option${i+1}`)
        option.innerText = questions[quecounter].options[i];
        if (questions[quecounter].options[i]== questions[quecounter].answer) {
            option.value = true
        } else {
            option.value = false
        }
    }
    questions_txt.innerText = questions[quecounter].question;
    quecounter++
})

function nextQuestion(event) {
    if ( quecounter==questions.length) {
        clearInterval(timeInterval)
        quiz.style.display ='none';
        result.style.display = 'block';
        return
    }
    if (event.target.value== true) {
        score++
    } else {
        timeLeft-=5
    }
    for(var i = 0; i<4; i++){
        var option = document.querySelector(`.option${i+1}`)
        option.innerText = questions[quecounter].options[i]
    }
    questions_txt.innerText = questions[quecounter].question;
    quecounter++
}
for(var i = 0; i<4; i++){
    var option = document.querySelector(`.option${i+1}`)
    option.addEventListener('click', nextQuestion)
}
var timeInterval;

function countdown() {
    
    timeInterval = setInterval(function (){
        if (timeLeft>=1){
            time.textContent = timeLeft + " time remaining.";
            timeLeft--;
        }
    //stop timer
        else if(timeLeft <=0) {
            time.textContent = timeLeft + ' second remaining';
            timeLeft--;
            quiz.style.display ='none';
            result.style.display = 'block';
            showResult();
            clearInterval(timeInterval);
        } else {
            time.textContent = '';
            clearInterval(timeInterval);
            sendMessage();
            }
        }, 1000);
    }

function saveGrade() {
var overall = {
    student: student.value.trim(),
    score: score.value,
    }
    localStorage.setItem("overall",JSON.stringify(overall));
}

var scoreTag = document.querySelector('.scoreTag')
function renderScore(){
    var lastScore = JSON.parse(localStorage.getItem("overall"))
    if (score > 3) {
    let scoreText = '<span>and congrats! , You got <p>'+ score +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreTag.innerHTML = lastScore;
        result.textContent = lastScore
    } else if (score > 1) {
        var scoreText = 'You got <p>'+ score + '</p> out of <p>'+ questions.length + '</p>';
        scoreTag.innerHTML = lastScore
    } else {
        var scoreText = 'Sorry, you only got <p>'+ score + '</p> out of <p>'+ questions.length + '</p>';
        scoreTag.innerHTML = lastScore
    }
}

saveResults.addEventListener("click", function(event) {
    event.preventDefault();
    saveGrade();
})

function saveGrade() {
    var overall = {
        student: student.value,

    }
}

tryAgain.addEventListener("click", function(){
    console.log('')
    quiz.style.display ='none';
    result.style.display ='none';
    info.style.display = 'block';
})
// Save related form data as an object


