
let password1 = document.querySelector("#password");
let copy = document.querySelector("#Copy1");
let range = document.querySelector("#length");
let rangeValue = document.querySelector("#lengthValue");

let AZ = document.querySelector("#uppercase");
let az = document.querySelector("#lowercase");
let num = document.querySelector("#numbers");
let sym = document.querySelector("#symbols");
let generate1 = document.querySelector("#generate1")
 
range.addEventListener('click',()=>{

    rangeValue.innerHTML = range.value;
})

let num1 = "";
AZ.addEventListener('click',()=>{
    
    if(AZ.checked){
       num1 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    password1.value=num1;
})
az.addEventListener('click',()=>{
    
    if(az.checked){
       num1 += "abcdefghijklmnopqrstuvwxyz"
    }
    password1.value=num1;
})
num.addEventListener('click',()=>{
    
    if(num.checked){
       num1 += "0123456789"
    }
    password1.value=num1;
})
sym.addEventListener('click',()=>{
    
    if(sym.checked){
       num1 += "!@#$%^&*()_+[]{}|;:,.<>?/~`"
    }
    password1.value=num1;
})


generate1.addEventListener('click',()=>{
    let password = "";
    for(let i=0; i<range.value; i++){
        password += num1[Math.floor(Math.random() * num1.length)];
    }
    password1.value = password;
})
copy.addEventListener('click',()=>{
    if(password1.value === ""){
        alert("Please generate a password first");
    }else{
        navigator.clipboard.writeText(password1.value);
        alert("Password copied to clipboard");
    }
})




   


   

