
let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#Categary");
let inp3 = document.querySelector("#date");
let Btn = document.querySelector("#btn");

let DataShow = document.querySelector("#tbody")

let arr = [];

Btn.addEventListener('click',()=>{
if(inp1.value == "" || inp2.value == "" || inp3.value == ""){
    alert("Please fill all the fields");
    return;
}
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
    <td>${element.inp2}</td>
    <td>${element.inp3}</td>
    <td><button onclick="edit(${i})">Edit</button></td>
    <td><button onclick="del(${i})">Delete</button></td>
    </tr>`
 
//    console.log(element);
})
}

function del(id){
 
    arr.splice(id,1);
    display();
    // alert(id)
}

function edit(id){
//  alert(id);
    let obj = arr[id];
    inp1.value = obj.inp1;
    inp2.value = obj.inp2;
    inp3.value = obj.inp3;
    arr.splice(id, 1); //delete Table
 display();
}

let searchInp = document.querySelector("#searchData");

searchInp.addEventListener('keyup',()=>{
    let searchValue = searchInp.value.toLowerCase();
    let filteredArr = arr.filter(item => 
        item.inp1.toLowerCase().includes(searchValue) || 
        item.inp2.toLowerCase().includes(searchValue) || 
        item.inp3.toLowerCase().includes(searchValue)
    );
    
    DataShow.innerHTML = "";
    filteredArr.forEach((element, i) => {
        DataShow.innerHTML +=
        `<tr>
        <td>${i+1}</td>
        <td>${element.inp1}</td>
        <td>${element.inp2}</td>
        <td>${element.inp3}</td>
        <td><button onclick="edit(${i})">Edit</button></td>
        <td><button onclick="del(${i})">Delete</button></td>
        </tr>`;
    });
});


// this is for sorting part

let sortBtn = document.querySelector("#sortByName");
let nameSortAsc = true; 

sortBtn.addEventListener('click', () => {
    arr.sort((a, b) => {
        if (a.inp1.toLowerCase() > b.inp1.toLowerCase()){

            if(nameSortAsc) {
                return 1;
            }    
            else {
                return -1;
            }
        }
        if (a.inp1.toLowerCase() < b.inp1.toLowerCase()){  //return nameSortAsc ? 1 : -1;

            if(nameSortAsc) {
                return -1;
            }    
            else {
                return 1;
            }
        }   
        return 0;
    });
    nameSortAsc = !nameSortAsc; 
    display();
})