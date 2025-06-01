

let star1 =[ document.querySelector("#star1"),
document.querySelector("#star2"),
document.querySelector("#star3"),
document.querySelector("#star4"),
document.querySelector("#star5")]
let show = document.querySelector("#rating-value");

// let count=0;
function set(idx) {
    star1.forEach((s, i) => {
        if (i <= idx) {
            s.style.color = "blue";
        } else {
            s.style.color = "";
        }
    });
    show.innerHTML = `Rating: ${idx + 1}/5`;
    if (idx === 4) {
        alert("Thank you for your feedback!");
    }
}

star1.forEach((star, idx) => {
    star.addEventListener('click', () => set(idx));
});

// star1.addEventListener('click', () => {
//     count++;
//     if(count == 1){
        
//         star1.style.color='blue';
//         show.innerHTML=`Rating: ${count}/5`;
//     } 
//     else if(star1.style.color == 'blue'){
//         star1.style.color = '';
//         show.innerHTML=`Rating: ${count}/5`;
//         count--;
//     }

// })

// star12.addEventListener('click', () => {
//     count = count+1
//    if(count == 2){
//     star12.style.color='blue';
//     show.innerHTML=`Rating: ${count}/5`;
//    }
//     else if(star12.style.color == 'blue'){
//           star12.style.color = '';
//             show.innerHTML=`Rating: ${count}/5`;
//             count--;
//      }
 
// })

// star13.addEventListener('click', () => {
//     count = count+1
//     if(count == 3){
//         star13.style.color='blue';
//         show.innerHTML=`Rating: ${count}/5`;
//     }
//     else if(star13.style.color == 'blue'){
//         star13.style.color = '';
//         show.innerHTML=`Rating: ${count}/5`;
//         count = count - 1;
//     }

// })

// star14.addEventListener('click', () => {
//     count = count+1
    
//      if(count == 4){
//         star14.style.color='blue';
//         show.innerHTML=`Rating: ${count}/5`;
//     } 
//     else if(star14.style.color == 'blue'){
//         star14.style.color = '';
//         show.innerHTML=`Rating: ${count}/5`;
//         count = count - 1;
//     }  

// })
// star15.addEventListener('click', () => {
//     count = count+1
//     if(count == 5){
//         star15.style.color='blue';
//         show.innerHTML=`Rating: ${count}/5`;
//     }
//     else if(star15.style.color == 'blue'){
//         star15.style.color = '';
//         show.innerHTML=`Rating: ${count}/5`;
//         count = count - 1;
//     }

//     if(count == 6){
//         alert("Thank you for your feedback!"); 
//     }

// })



