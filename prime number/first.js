let num = document.querySelector("#number1");
let clr = document.querySelector("#clear1");
let Sub = document.querySelector("#sub");
let result = document.querySelector("#result");

Sub.addEventListener("click", () => {
  
  let val = num.value;
  console.log(val);

  let IsPrime = true;

  if (isNaN(val) || val <= 1) {
    result.innerHTML = "Enter value more than 1";
  } else {
    for (let i = 2; i < val; ++i) {
      if (val % i === 0) {
        IsPrime = false;
        break;
      }
    }
    if (IsPrime) {
      result.innerHTML = "✅ Prime Number";
    } else {
      result.innerHTML = "❌ Not a Prime Number";
    }
  }

  num.value = "";
});

clr.addEventListener('click',()=>{
    result.innerHTML=""
})
