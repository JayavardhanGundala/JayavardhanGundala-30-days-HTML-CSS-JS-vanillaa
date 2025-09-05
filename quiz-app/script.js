const questions=[
    {
        question:"who is the prime minister of india?",
        answers:[
            {text:"chandrababau",correct:false},
            {text:"jagan",correct:false},
            {text:"narendra modi",correct:true},
            {text:"jayavardhan",correct:false}
        ]
    },
     {
        question:"HTTP stands for",
        answers:[
            {text:"hyper text transfar protocal",correct:true},
            {text:"hyper text transform protocol",correct:false},
            {text:"hyper transform text protocol",correct:false},
            {text:"hyper transmission text protocol",correct:false}
        ]
    },
     {
        question:"who is the cm of andhrapradesh",
        answers:[
            {text:"chandrababau",correct:true},
            {text:"jagan",correct:false},
            {text:"narendra modi",correct:false},
            {text:"jayavardhan",correct:false}
        ]
    },
     {
        question:"who is the first prsident of india",
        answers:[
            {text:"chandrababau",correct:false},
            {text:"jagan",correct:false},
            {text:"Rajendra Prasad",correct:true},
            {text:"jayavardhan",correct:false}
        ]
    },
]
const que=document.getElementById("q")
const allbuttons=document.getElementById("buttons")
const nb=document.getElementById("nxt-btn")
let currentquestionindex=0;
let score=0;
function startquiz(){
    currentquestionindex=0
    score=0
    nb.innerHTML="Next"
    showquestion()
}
function showquestion(){
    resetstate()
    let currentquestion=questions[currentquestionindex]
    let questionno=currentquestionindex+1
    que.innerHTML=questionno+"."+currentquestion.question
    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        allbuttons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAns)

    })
}
function resetstate(){
    nb.style.display="none";
    while(allbuttons.firstChild){
        allbuttons.removeChild (allbuttons.firstChild) 
    }

}
function selectAns(e){
    let selected=e.target
    const iscorrect=selected.dataset.correct==="true"
    if(iscorrect){
        selected.classList.add("correct")
        score++

    }
    else{
        selected.classList.add("incorrect")
    }
    Array.from(allbuttons.children).forEach(button=>{
        if(button.dataset.correct){
            button.classList.add("correct")
        }
        button.disabled=true 
    })
    nb.style.display="block"

}
function showscore(){
    resetstate()
    que.innerHTML=`you scored ${score} out of ${questions.length}!`
    nb.innerHTML="playAgain"
    nb.style.display="block"
}
function handlenext(){
    currentquestionindex++
    if(currentquestionindex<questions.length){
        showquestion()
    }
    else{
        showscore()
    }
}
nb.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handlenext()
    }
    else{
        startquiz()
    }
})

startquiz()