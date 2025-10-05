pbar=document.getElementById("show")
btns=document.getElementsByClassName("mybtn")

let arr=["sucess","error","end"]
let event=arr
Array.from(btns).forEach((btn, i) => {
    btn.addEventListener("click", function (event) {
        const tag = document.createElement("p");
        tag.innerHTML = arr[i];
        console.log(tag);
        pbar.appendChild(tag);
        setTimeout(()=>{
            if(pbar.contains(tag)){
                pbar.removeChild(tag)
            }
        },5000)
    });
});