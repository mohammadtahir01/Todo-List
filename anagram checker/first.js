
let imp = document.querySelector("#inp1");
let imp2 = document.querySelector("#inp2");
let btn = document.querySelector("#checker");

let show = document.querySelector("#result");

btn.addEventListener('click',()=>{
    let val1 = imp.value.replace(/\s+/g, '').toLowerCase();
    let val2 = imp2.value.replace(/\s+/g, '').toLowerCase();

    if(val1.length != val2.length){
        show.innerHTML="❌ Not Anagram";
    }

    let arr1 = val1.split('').sort().join('');
    let arr2 = val2.split('').sort().join('');

    if(arr1 == arr2){
        show.innerHTML="✅Anagram";
    }else{
        show.innerHTML="❌ Not Anagram";
    }
})