

let btn = document.querySelector("#createPopup");
let popup = document.querySelector("#popupContainer");

btn.addEventListener('click',()=>{

    popup.innerHTML = `
        <div class="popup">
            <h2>Popup Title</h2>
            <p>This is a simple popup message.</p>
            <button id="closePopup">Close</button>
        </div>`;

    let closeBtn = document.querySelector("#closePopup");
    closeBtn.addEventListener('click',()=>{
        popup.innerHTML = ""; 
        btn.style.display = "block"; 
    });
    btn.style.display = "none"; 

   
})