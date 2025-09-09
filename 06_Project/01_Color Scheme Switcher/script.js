const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
const h3 = document.querySelector("h3")


buttons.forEach(function(button){
    // console.log(button);
    // console.log(button.id);
    button.addEventListener("click",function (e){
        console.log(e.target);
        if (e.target.id==="grey"){body.style.backgroundColor=e.target.id;console.log(h3.innerHTML=" BG -Color : Grey");}
        else if (e.target.id==="blue"){body.style.backgroundColor=e.target.id;(h3.innerHTML=" BG -Color : Blue")}
        else if (e.target.id==="white"){body.style.backgroundColor=e.target.id;(h3.innerHTML=" BG -Color : White")}
        else if (e.target.id==="yellow"){body.style.backgroundColor=e.target.id;(h3.innerHTML=" BG -Color : Yellow")} 
    })
})

    
   
    
