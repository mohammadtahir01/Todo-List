
let imp = document.querySelector("#input1");
let imp2 = document.querySelector("#input2");
let btn1 = document.querySelector("#checker1");

let show1 = document.querySelector("#result1");

btn1.addEventListener('click',()=>{

    let ana = imp.value.replace(/\s+/g, '').toLowerCase();
    let ana1 = imp2.value.replace(/\s+/g, '').toLowerCase();;

    let count = 0;
    let arr2 = ana1.split('');
    ana.split('').forEach(char => {
        let idx = arr2.indexOf(char);
        if(idx !== -1) {
            count++;
            arr2.splice(idx, 1); // Remove matched char to avoid double counting
        }
    }) 
    show1.innerHTML = `Matching characters: ${count}`;   

})