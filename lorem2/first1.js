

const tagOption1 = ["p", "h1", "h2","h3", "h4", "h5", "h6", "span",];

const optionContainer = document.querySelector("#option1");
const paragraphSlider = document.querySelector("#paragraph1");
const wordParagraph = document.querySelector("#word");
const tagSelect1 = document.querySelector("#tag");
const paraValue = document.querySelector("#paragraphValue");
const output1 = document.querySelector("#Generate1");
const WordValue = document.querySelector("#wordValue");

// function createOptionsUI(){

    tagOption1.forEach((e)=>{

    const option = document.createElement("option");

    option.value = e;
    tagSelect1.appendChild(option);
    option.textContent=`<${e}>`;

    // console.log(tagOption1);
})
// }

paragraphSlider.addEventListener("input", updateParagraphsValue);

function updateParagraphsValue() {
    updateParagraphsValue.textContent = paragraphSlider.value;
}