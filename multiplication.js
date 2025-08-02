const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const questionEl = document.getElementById("question")
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
let score = JSON.parse(localStorage.getItem("score"))
const scoreEl = document.getElementById("score")

questionEl.innerText = `What is ${num1} multiply by ${num2}`

if(!score){
  score = 0
}
scoreEl.innerText = `score: ${score}`

const correctAns = num1 * num2

formEl.addEventListener("submit", function(){
  const userAns = +inputEl.value
  if(userAns === correctAns){
    score++
    updateLocalStorage()
  }else{
    score--
    updateLocalStorage()
  }
})

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}
