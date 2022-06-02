const input = document.querySelector("input");
const eyeOn = document.querySelector(".on");
const eyeOff = document.querySelector(".off");
const onOff = document.querySelector(".on-off");
const rounded = document.querySelector(".round");
const toggle = document.querySelector(".toggle");
const button = document.querySelector("button")
const warning = document.querySelector(".warning")
const login = document.querySelector(".login")
const password = 1233211;

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

button.addEventListener("click",()=>{
    if(input.value==password){
        login.style.opacity="1";
        warning.style.opacity="0";
        timeout2 = setTimeout(loginout,2000)
    }else {
        warning.style.opacity="1";
        login.style.opacity="0";

        timeout2 = setTimeout(warningsout,2000)
    }
})



function warningsout(){
    warning.style.opacity="0";
}

function loginout(){
    login.style.opacity="0";
}