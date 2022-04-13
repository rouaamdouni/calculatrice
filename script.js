/*let h1=document.querySelector("h1");
let button =document.querySelector("button")
button.addEventListener("click",changehello/*event)
/* button.onclick= changehello*/
/*function changehello(){

h1.innerText="bonjour"
}*/
let button1 =document.querySelector("#add")
let button2=document.querySelector("#sous")
let button3=document.querySelector("#mult")
let button4=document.querySelector("#div")
let button5=document.querySelector("#power")
let button6=document.querySelector("#reste")
let result = document.querySelector("#result")

button1.onclick = add
function add()
{

    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x+y)}`
 
}
button2.onclick = soustraction
function soustraction()
{

    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x-y)}`
}
button3.onclick = mult
function mult()
{

    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x*y)}`
}
button4.onclick = div
function div()
{

    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x/y)}`
}
function power()
{

    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    result.innerHTML = `Result = ${(x**y)}`
}
button5.onclick=power

function reste()
{
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
if((y==0)||(x<y))
{
    result.innerHTML = `Erreur : division impossible`
}else {
    
    result.innerHTML = `Result = ${(x%y)}`
}
}
button6.onclick=reste 

