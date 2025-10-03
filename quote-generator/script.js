const api_url="https://api.quotable.io/random";
let quo=document.getElementById("quote");
let au=document.getElementById("author")
let b=document.getElementById("btn")
async function getquote(){
const response=await fetch(api_url);
let data=await response.json()
console.log(data)
quo.innerHTML=data.content
au.innerText=data.author

}
b.addEventListener("click",()=>{
    getquote(api_url)
})


