

let curent = document.querySelector("#current");
let lastbirth = document.querySelector("#last");
let BTN = document.querySelector("#btn");

let shw = document.querySelector("#show");

BTN.addEventListener("click",()=>{
    let Curentt = curent.value;
    let Last = lastbirth.value;

    let curr = new Date(Curentt);
    let now = new Date(Last);

    let age = curr.getFullYear()-now.getFullYear()
    shw.innerHTML=`Your Age: ${age}`
   

})
