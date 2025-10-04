const img=document.getElementById("im")
const inp=document.getElementById("inputvalue")
const btn=document.getElementById("bt")


async function generate (){
     let response=await fetch(url)
     img.src=response.url
     

}

btn.addEventListener("click",()=>{
    const valu=inp.value
    console.log(valu)
    url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valu}`
    generate(url)
    inp.value=""
})
