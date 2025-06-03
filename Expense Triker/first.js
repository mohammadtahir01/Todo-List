

let naam = document.querySelector("#Name");
let amont = document.querySelector("#amount");
let categ = document.querySelector("#slect1");
let dat = document.querySelector("#Date");
let butn = document.querySelector("#btn");

let total = document.querySelector("#show2");

let shw = document.querySelector("#show");
let arr=[];
butn.addEventListener('click',()=>{
    if(naam.value == "" || amont.value== "" || categ.value == "" || dat.value == ""){
        alert("Please full fil the form!");
    }else{
        arr.push({
        naam:naam.value,
        amont:amont.value,
        categ:categ.value,
        dat:dat.value

    })
    }
    
    naam.value=""
   amont.value="";
   categ.value="";
   dat.value=""
   render();
})

function render(){
    shw.innerHTML="";
    let sum = 0;
    arr.forEach((item,i)=>{
    shw.innerHTML+=
    `<tr>
    <td>${item.naam}</td>
    <td>${item.amont}</td>
    <td>${item.categ}</td>
    <td>${item.dat}</td>
    <td>
    <button onclick="Edit(${i})">Edit</button>
    <button onclick="del(${i})">Delete</button>
    </td>
    </tr>`
    sum = sum+Number(item.amont);
   })

   total.innerHTML=sum;
 
}

let Edit=(id)=>{
  let obj1 = arr[id];
  naam.value=obj1.naam,
  amont.value=obj1.amont,
  categ.value=obj1.categ,
  dat.value=obj1.dat
  arr.splice(id,1)
  render();
}
   
let del=(id)=>{
    arr.splice(id,1);
    render();
}
