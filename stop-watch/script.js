const time=document.getElementById("timer")
let startButton=document.getElementById("start")
let pauseButton=document.getElementById("pause")
const reStart=document.getElementById("restart")
let second=0
let minute=0
let hour=0
time.innerHTML=`00:00:00 `
function updatedisplay (){
        let s=second<10 ?"0"+second:second
        let m=minute<10 ?"0"+minute:minute
        let h=hour<10 ?"0"+hour:hour
        
        time.innerHTML=`${h}:${m}:${s} `
}
updatedisplay()
startButton.addEventListener("click",function(){
    console.log("hat")
    let timer=setInterval(()=>{
        second++
        console.log(second)
        if(second===60){
            minute++
            second=0
            if(minute==60){
                hour++
                minute=0
            }
        }
        updatedisplay()

        pauseButton.addEventListener("click",function(){
    clearInterval(timer)
    updatedisplay()

})
reStart.addEventListener("click",function(){

    second=0
    minute=0
    hour=0
    clearInterval(timer)
    updatedisplay()
   

})



    },1000)
    
})

