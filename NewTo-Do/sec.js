
let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#Categary");
let inp3 = document.querySelector("#date");
let Btn = document.querySelector("#btn");

let DataShow = document.querySelector("#tbody")

let arr = [];

Btn.addEventListener('click',()=>{
// if(inp1.value == "" || inp2.value == "" || inp3.value == ""){
//     alert("Please fill all the fields");
//     return;
// }
let obj ={
    inp1: inp1.value,
    inp2: inp2.value,
    inp3: inp3.value
}
arr.push(obj);
inp1.value = ""; 
inp2.value = "";
inp3.value = ""; 
display(); 
})


function display(){
    DataShow.innerHTML = "";

    arr.forEach((element,i)=>{
    DataShow.innerHTML +=
    `<tr>
    <td>${i+1}</td>
    <td>${element.inp1}</td>
    <td>${element,inp2}</td>
    <td>${element.inp3}</td>
    <td><button onclick="edit(this)">Edit</button></td>
    <td><button onclick="del(this)">Delete</button></td>
    </tr>`
 
   console.log(element);
})
}

function Del(){

}

function Edit(){

}