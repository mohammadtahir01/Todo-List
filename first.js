

let send=()=>{
    let inp2 = document.querySelector("#inp").value;
    let inp3 = document.querySelector("#show");
    if(inp2== ""){
      alert("please full fill input");
    }else{
    inp3.innerHTML+=`
    <div style="display:flex; gap:10px">
    <p><i class="fa-regular fa-circle"></i>${inp2} <br></p><i class="fa-regular fa-circle-xmark" style="cursor: pointer; font-size: 18px;" onclick="this.parentElement.remove()"></i>
    </div>
    `;
}
    
    document.querySelector("#inp").value=""
}

