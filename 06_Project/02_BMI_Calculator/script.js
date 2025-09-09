const form = document.querySelector("form")
const result =document.querySelector("#results")
const range =document.querySelectorAll("#range")



form .addEventListener("submit",function(e){
    e.preventDefault()

    const height=Number(document.querySelector("#height").value)
    console.log(height);
    const weight =Number(document.querySelector("#weight").value)
    console.log(weight);
    // result=(weight/(height/100)**2);
    console.log(result.innerHTML=(weight/(height/100)**2).toFixed(2));

       // reset colors first
    document.querySelector("#under").style.color = "black"
    document.querySelector("#normal").style.color = "black"
    document.querySelector("#over").style.color = "black"
    
    ans=Number((weight/(height/100)**2).toFixed(2))
    if ((ans<18.6)) {document.querySelector("#under").style.color="red"}
    else if ((ans>18.6 && ans <24.9)) {document.querySelector("#normal").style.color="green"}
    else if ((ans>24.9)) {document.querySelector("#over").style.color="red"}
})
