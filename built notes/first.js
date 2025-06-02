let BTN = document.querySelector("#btn");
let show = document.querySelector("#notes");
BTN.addEventListener('click',()=>{

    show.innerHTML+=`
    <div class="title">
    <div class="head">
    <div class="save"><i class="fa-solid fa-file"></i></div>
    <div onclick="del(this)"><i class="fa-solid fa-trash"></i></div>
    </div>

    <div>
    <textarea class="text" placeholder="Write your notes here..."></textarea>
    </div>

    <div>
    <textarea class="text2" placeholder="Write your notes here..."></textarea>
    </div>
    </div>
    `
})

let del = (e)=>{
    let parent = e.parentElement.parentElement;
    parent.remove();
}
