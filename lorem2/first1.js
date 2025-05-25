

const tagOption1 = ["p", "h1", "h2","h3", "h4", "h5", "h6", "span",];

const optionContainer = document.querySelector("#option1");
const paragraphSlider = document.querySelector("#paragraph1");
const wordParagraph = document.querySelector("#word");
const tagSelect1 = document.querySelector("#tag");
const includehtml1 = document.querySelector("#include1");
const paraValue = document.querySelector("#paragraphValue");
const output1 = document.querySelector("#output");
const WordValue1 = document.querySelector("#wordValue");
const btn = document.querySelector("#generate1");

console.log(includehtml1.value);

// function createOptionsUI(){

    tagOption1.forEach((e)=>{

    const option = document.createElement("option");

    option.value = e;
    tagSelect1.appendChild(option);
    option.textContent=`<${e}>`;

    // console.log(tagOption1);
})
// }

//--------------range section--------------

paragraphSlider.addEventListener("input", updateParagraph);

function updateParagraph() {
    paraValue.textContent = paragraphSlider.value;
    // console.log(paragraphSlider.value);
}

wordParagraph.addEventListener("input",UpdateWord);
function UpdateWord(){
    WordValue1.innerHTML= wordParagraph.value;
    // console.log(wordParagraph.value)
}

//-------------Button section------------

const loremGenerate = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';



btn.addEventListener('click',()=>{
    if(includehtml1.value === "yes"){
        generateLoremIpsum();
        console.log("yes");
    }
    if(includehtml1.value === "clear"){
        output1.innerHTML = "";
    }
})

function generateLoremIpsum() {
    for (let i = 0; i < paragraphSlider.value; i++) {
        const sub = loremGenerate.substring(0, wordParagraph.value);
        const para = document.createElement(tagSelect1.value);
        para.textContent = sub;
        output1.appendChild(para);
    }
}

