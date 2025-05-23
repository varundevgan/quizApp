const quiz = [
    {
      question: "What is your name?",
      options: ["New", "New", "New", "New"],
      correctAnswer: "New"
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript"
    }
  ];

const selectedAnswers = []

const option = document.querySelector('.option')
const options = document.querySelector('.options')
const question = document.querySelector('.question-name')

let index = 1;
let tick = true;

function next(){
    if(tick) return window.alert('Select an option')
    if(index > 4) return window.alert('no furthur questions')
    question.innerText = quiz[index].question
    options.innerHTML = ''
        for(let j = 0; j < 4; j++){
            options.innerHTML += `
            <div onclick="selected(this)" class="option">
                ${quiz[index].options[j]}
            </div>`
        }
    index++
    if(index === 5) document.querySelector('.submit').classList.add('show')
    tick = true
}
    


function selected(element){
    if(tick){
        element.style.backgroundColor = "lightblue"
        tick = false
        selectedAnswers.push(element.innerText)
    } 
    else{
        if(element.style.backgroundColor === "lightblue"){
            element.style.backgroundColor = "white"
            tick = true
        } 
        
        else {
            window.alert('You can only select one option')
        }
    }
}

let variable;
function submit(){
    const final = []
    for(let i = 0; i < 5; i++){
        if(selectedAnswers[i] === quiz[i].correctAnswer) {
            final.push(true)
        }
        else {
            final.push(false)
        }
    }
    console.log(final)
    for(let i = 0; i < 5; i++){
        if(final[i] == false) {
            variable = false;
        }
    }
    if(variable === false) document.getElementById('ans').innerText = 'You failed'
    else document.getElementById('ans').innerText = 'You Passed'
    
    document.querySelector('.answers').classList.add('show')

}