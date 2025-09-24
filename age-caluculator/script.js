const input=document.getElementById('da')
input.max=new Date().toISOString().split('T')[0]
const con=document.getElementById("re")

function caluculate(){
    let birthdate=new Date(input.value)
    let d1=birthdate.getDate()
    let m1=birthdate.getMonth()+1
    let y1=birthdate.getFullYear()
    let presentdate=new Date()
    let d2=presentdate.getDate()
    let m2=presentdate.getMonth()+1
    let y2=presentdate.getFullYear()
    
    
    let d3=d2-d1
    let m3=m2-m1
    let y3=y2-y1
    if(d3<0){
        m3--
        const pm=new Date(presentdate.getFullYear(),presentdate.getMonth(),0)
        d3+=pm.getDate()
        
    }
    if(m3<0){
        y3--
        m3+=12
        
    }
    con.innerHTML=`<p>the actual age is ${y3} years ${m3} months and ${d3} days</p>`

    


}
const btn=document.getElementById("bu")
btn.addEventListener("click",caluculate)