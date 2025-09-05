

const ad=document.querySelector(".start");
const input=document.querySelector(".details");
const lis=document.querySelector(".content");


function addtask(){
    if(input.value===""){
        alert("Type something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value
        lis.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        

    }
    input.value=""
    savedata()
    lis.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked")
            savedata()
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            savedata()

        }
    })

    

}
function savedata(){
    localStorage.setItem("data",lis.innerHTML)
}
function getdata(){
    lis.innerHTML=localStorage.getItem("data")
}
getdata()
ad.addEventListener("click",addtask);