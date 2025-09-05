const b=document.getElementById("btn");
const i=document.getElementById("password")
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const numbers="123456789"
const symbols="!@#$%^&*_+=-:><"
const allchars=uppercase+lowercase+numbers+symbols;
const length=10
b.addEventListener("click",function(){
    let password=""
    password+=uppercase[Math.floor(Math.random()*uppercase.length)]
    password+=lowercase[Math.floor(Math.random()*lowercase.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=symbols[Math.floor(Math.random()*symbols.length)]
    while(password.length<length){
        password+=allchars[Math.floor(Math.random()*allchars.length)]

    }
    
     i.value=password
})
//hi
//jay
//j