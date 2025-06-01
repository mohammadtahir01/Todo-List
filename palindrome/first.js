
let inp = document.querySelector("#inputText");
let btn = document.querySelector("#checkButton");
let result = document.querySelector("#result");

btn.addEventListener('click',()=>{
   inp = inp.value.trim();
//    let str = inp.value.toLowerCase();
   let reversedStr = reverse(inp)
   console.log(reversedStr);
    if (inp === reversedStr) {
         result.innerHTML = "The string is a palindrome.";
    } else {
         result.innerHTML = "The string is not a palindrome.";
    } 
});
 function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    result.innerHTML = reversed;
    return reversed;
 }