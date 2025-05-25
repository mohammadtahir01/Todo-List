

const inp1 = document.getElementById("minValue");
const inp2 = document.getElementById("maxValue");


const inp3 = document.getElementById("priceRange");
const in4 = document.getElementById("priceRange2");

const gap = 500;
const fun1 =()=>{
 let minValue = parseInt(inp1.value);
 let maxValue = parseInt(inp2.value);
 if(minValue - maxValue < gap){
    inp1.minValue = maxValue - gap;
        inp3.value = inp1.value;
        alert("Minimum difference should be 500");
 }
}



inp1.addEventListener('input', ()=> {
   fun1();
   inp3.value = inp1.value;
  

});
inp2.addEventListener('input', ()=> {
   fun1();
   in4.value = inp2.value;
  
});
inp3.addEventListener('input', ()=> {
   fun1();
   inp1.value = inp3.value;
  
});
in4.addEventListener('input', ()=> {
   fun1();
   inp2.value = in4.value;
  
});
