


let send=()=>{

    let inp = document.querySelector("#show");
    let inp1 = document.querySelector("#text1").value;
    let inp2 = document.querySelector("#text2").value;
    let inp3 = document.querySelector("#text3").value;

    inp.innerHTML+=`<tr>
    <td>${inp1}</td>
    <td>${inp2}</td>
    <td>${inp3}</td>
    <td onclick="del(this)">Delete</td>
    </tr>`

    document.querySelector("#text1").value="";
    document.querySelector("#text2").value="";
    document.querySelector("#text3").value=""

    return false;

}

let del=(element)=>{
  element.parentElement.remove();  

}