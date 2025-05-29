
let count = 0;
let Add=()=>{
    count++;
    let inp1 = document.querySelector("#name").value;
    let inp2 = document.querySelector("#Categary").value;
    let inp3 = document.querySelector("#date").value;

    let show1 = document.querySelector("#tbody");


    if(inp1 == "" || inp2 == "" || inp3 == ""){
        return alert("Please full fill the field")
    }

    show1.forEach((current,i)=>{
    show1.innerHTML+=
    `<tr>
    <td>${i}</td>
    <td>${current.inp1}</td>
    <td>${current,inp2}</td>
    <td>${current.inp3}</td>
    <td><button onclick="edit(this)">Edit</button></td>
    <td><button onclick="del(this)">Delete</button></td>
    </tr>`

    })

    // show1.innerHTML+=
    // `<tr>
    // <td>${count}</td>
    // <td>${inp1}</td>
    // <td>${inp2}</td>
    // <td>${inp3}</td>
    // <td><button onclick="edit(this)">Edit</button></td>
    // <td><button onclick="del(this)">Delete</button></td>
    // </tr>`

    document.querySelector("#name").value="";
    document.querySelector("#Categary").value="";
    document.querySelector("#date").value="";

}

// let edit=(e)=>{
//     let inp1 = document.querySelector("#name");
//     let inp2 = document.querySelector("#Categary");
//     let inp3 = document.querySelector("#date");

//     let row = e.parentElement.parentElement;
//     inp1.value = row.children[1].innerHTML;
//     inp2.value = row.children[2].innerHTML;
//     inp3.value = row.children[3].innerHTML;
//     row.remove();
//     count--;

    // console.log(inp1);
// }
// let del=(e)=>{

//     let row = e.parentElement.parentElement;
//     row.remove();
//     count--;
//     let show1 = document.querySelector("#tbody");
//     if(show1.children.length == 0){
//         count = 0;
//     }
// }

let searchData=()=>{
    
}