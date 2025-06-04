
let Main = document.querySelector("#main");
let Input1 = document.querySelector("#obj");
let Input2 = document.querySelector("#obj2");
let textarea1 = document.querySelector("#text1");
let textarea2 = document.querySelector("#text2");

let Input3 = document.querySelector("#inp");
let textarea3 = document.querySelector("#text3");
let textarea4 = document.querySelector("#text4");


let out = document.querySelector("#output");
let gen = document.querySelector("#generate");

let main1 = true;

gen.addEventListener('click',()=>{

   if(main1){
     Main.style.display="none";
     main1 =false;

    out.style.display = "block";

    out.innerHTML=
    `<div class="container">
    <div class="name1">
    <h1>${Input1.value}</h1>
    <h4>${Input2.value}</h4>
    </div>

    <div class="mainBox">
    <div class="left">
       <div class="box">
       <h2>Objective</h2>
       <p>${textarea1.value}</p>
       </div>

       <div class="box">
       <h2>Skill</h2>
       <p>${textarea2.value}</p>
       </div>

       <div class="box">
       <h2>Academic</h2>
       <p>${textarea3.value}</p>
       </div>
    </div>



    <div class="right">
    <div class="box">
       <h2>Work Exprince</h2>
       <p>${textarea4.value}</p>
       </div>
    
       </div>
    </div>
    </div>

    </div>`
   }else{
        Main.style.display = "block";
        main1 = true;

        out.style.display = "none";
        out.innerHTML = "";
   }


})