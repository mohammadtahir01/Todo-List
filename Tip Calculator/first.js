
let amount = document.querySelector("#inp");
let persentage = document.querySelector("#select1");
let person1 = document.querySelector("#person");
let calculate = document.querySelector("#btn");

let show = document.querySelector("#total");

calculate.addEventListener('click',()=>{
    let amount1 = amount.value;
    let parent = parseFloat(persentage.value)
    let per = parseInt(person1.value);

    if(isNaN(amount1) || isNaN(parent) || isNaN(per) || per<=0){
        alert("Please enter valid values.");
        return;
    }else{

    let total1 = (amount1*parent)/per;
     total1 = total1.toFixed(2);
     document.querySelector("#total").innerHTML=total1;
    }
})

