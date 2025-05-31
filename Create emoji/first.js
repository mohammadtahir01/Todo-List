

let emo = document.querySelector("#emoj");
let emo2 = document.querySelector("#inpemoji");
let emo3 = document.querySelector("#sad");
let emo4 = document.querySelector("#happy");
let emo5 = document.querySelector("#angry");
let emo6 = document.querySelector("#confuse");
let emo7 = document.querySelector("#random");

emo3.addEventListener('click',()=>{
        emo.innerHTML="🥹"
        emo2.innerHTML="Sad";
        emo2.style.color="gray";
        emo2.style.backgroundColor="black";
})
emo4.addEventListener('click',()=>{
        emo.innerHTML="😊"
        emo2.innerHTML="Happy";
        emo2.style.color="yellow";
        emo2.style.backgroundColor="black";
})
emo5.addEventListener('click',()=>{
        emo.innerHTML="😡"
        emo2.innerHTML="Angry";
        emo2.style.color="red";
        emo2.style.backgroundColor="black";
})
emo6.addEventListener('click',()=>{
        emo.innerHTML="😕"
        emo2.innerHTML="Confuse";
        emo2.style.color="blue";
        emo2.style.backgroundColor="black";
})
emo7.addEventListener('click',()=>{
    let emojis=[
    {
        icon:"🥹",
        name:"Sad",
        color:"gray"
    },
     {
        icon:"😊",
        name:"Happy",
        color:"yellow"
    },
     {
        icon:"😡",
        name:"Angry",
        color:"red"
    },
     {
        icon:"😕",
        name:"Confuse",
        color:"blue"
    },
    ]

    let random1 = emojis[Math.floor(Math.random()* emojis.length)];
    emo.innerHTML=random1.icon;
    emo2.innerHTML=random1.name;
    emo2.style.color=random1.color;
    emo2.style.backgroundColor="black";
})