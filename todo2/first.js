 



//  const  add1=document.getElementById("add1");
// 
const click12=()=>{

 let inp = document.querySelector("#text3").value;
 let inp2 = document.querySelector("#drop").value;

   
   const tr1 = document.createElement('tr');
   const td1 = document.createElement('td');
   const td2 = document.createElement('td');
   const td3 = document.createElement('td');
   const td4 = document.createElement('td');
   const td5 = document.createElement('td');

  

   

   const checkedbox = document.createElement('input');
   checkedbox.type='checkbox';
   td1.appendChild(checkedbox);
   td2.innerHTML=inp;
   td3.innerHTML=inp2;

   const btn1 = document.createElement('button');
   btn1.innerHTML="Edit";

   btn1.addEventListener('click',()=>{
inp=td2.innerHTML;
inp2=td3.innerHTML;
tr1.innerHTML="";


   })



   const btn = document.createElement('button');
   btn.innerHTML="Delete";

   btn.addEventListener('click',()=>{
    tr1.innerHTML="";
   })

   tr1.appendChild(td1);
   tr1.appendChild(td2);
   tr1.appendChild(td3);
   td4.appendChild(btn);
   tr1.appendChild(td4);
    td5.appendChild(btn1);
    tr1.appendChild(td5);

   checkedbox.addEventListener('change',()=>{
    if(checkedbox.checked){
        td2.style.textDecoration="line-through";
    }else{
        td2.style.textDecoration="none";
    }
   })

  
   document.querySelector('tbody').appendChild(tr1);


   

 return false;
}

   


  







