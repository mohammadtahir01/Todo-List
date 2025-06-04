
let imp = document.querySelector("#inp");
let show = document.querySelector("#out");

let withborder = ["1%", "25%", "50%", "75%", "100%"];
let colorBox= ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

imp.addEventListener('input',()=>{
    let val = imp.value;
    let stren = 0;

    if(val.length >= 6){

        let arr =  [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];

        arr.forEach((item)=>{
            if(item.test(val)){
                stren += 1;
            }
        })
    }
    show.style.with = withborder[stren];
    show.style.backgroundColor=colorBox[stren]

})

