const input = document.querySelector("input");
const eyeOn = document.querySelector(".on");
const eyeOff = document.querySelector(".off");
const onOff = document.querySelector(".on-off");
const rounded = document.querySelector(".round");
const toggle = document.querySelector(".toggle");

onOff.addEventListener("click",()=>{
      
    if(eyeOff.className=="off"){
        eyeOff.classList.add("eye-off");  
        eyeOn.classList.remove("eye-off");    
        input.setAttribute("type","text");        
    }else {
        eyeOff.classList.remove("eye-off");
        eyeOn.classList.add("eye-off");
        input.setAttribute("type","password");
    }
   
})

toggle.addEventListener("click",()=>{ 
      
  if(rounded.style.left=="0px"){
    rounded.style="left:20px;"
  }else {    
    rounded.style="left:0px;"
  }
    
})
