
let input1 =document.querySelector("#inputField");
let sub = document.querySelector("#submitButton");
let clear = document.querySelector("#clearButton");

let List = document.querySelector("#urlList");

function addUrl(url){
    let check = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    return check.test(url)
}

let arr = [];
sub.addEventListener('click',()=>{
    if(input1 == ""){
        alert("Please ful fil the name");
        return;
    }
    let url2 = input1.value;
    
  if(addUrl(url2)){
    arr.push({url2});
    List.innerHTML="";
    arr.forEach((item,i)=>{
    List.innerHTML+= `<li>${item.url2} <button onclick=edit(${i})>Edit</button>
     <button onclick=del(${i})>Delete</button> </li> `
    });
    input1.value="";
  }else{
    alert("Invalid URL");
  }
});

function del(id){
   arr.splice(id,1);
   List.innerHTML="";
    arr.forEach((item,i)=>{
    List.innerHTML+= `<li>${item.url2} <button onclick=edit(${i})>Edit</button>
     <button onclick=del(${i})>Delete</button> </li> `
    });
}

function edit(id){

let obj = arr[id];
input1.value = obj.url2;
arr.splice(id,1);
List.innerHTML="";
    arr.forEach((item,i)=>{
    List.innerHTML+= `<li>${item.url2} <button onclick=edit(${i})>Edit</button>
     <button onclick=del(${i})>Delete</button> </li> `
    });
}

clear.addEventListener('click',()=>{
    arr = [];
    List.innerHTML=""
})
