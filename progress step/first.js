

let BTN1 =[document.querySelector('#btn1'),
document.querySelector('#btn2'),
document.querySelector('#btn3'),
document.querySelector('#btn4'),
document.querySelector('#btn5')]
let Pre =document.querySelector('#pre')
let Next =document.querySelector('#next');

let show = document.querySelector("#pre1");

let count =0;

function display(){
    BTN1.forEach((btn,i)=>{

        if(i <= count){
            btn.style.backgroundColor="Green";
        }else{
            btn.style.backgroundColor="white";
        }
    })

    if(count == BTN1.length - 1){
        Next.style.display = "none";
    } else {
        Next.style.display = "block";
    }

     if(count == 0){
        Pre.style.display = "none";   
    }else{
        Pre.style.display = "block";   
    }
}

Next.addEventListener('click',()=>{

    if(count <BTN1.length-1 ){
        count++;
        display();
    }

   
    
})

Pre.addEventListener('click',()=>{
    if(count>0 ){
        count--;
        display();
    }
})
display();







