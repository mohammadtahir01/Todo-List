const paraonecount = document.getElementById("paragraphs");
const parasize = document.getElementById("word_per_para");
const chousetage = document.getElementById("tage");
const includehtml = document.getElementById("include");
const button1 = document.getElementById("generate");
const output1 = document.getElementsByClassName("output")[0];
// console.log(paraonecount.value, "p1", parasize.value, " p", chousetage.value, " ch", includehtml.value, " in", button1.value, "bu", output1.value, "out");
console.log(includehtml.value);
const hold = [
    "h1",
    "h2",
    "h3",
    "s",
    "p",
    "h4",
];
hold.forEach((element) => {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = `<${element}>`;
    chousetage.appendChild(option);
})
const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
button1.addEventListener("click", () => {
    if (includehtml.value === "yes") {
        generateLoremIpsum();
        console.log("yes");

    }
    if (includehtml.value === "clear") {
        output1.innerHTML = "";
    }
})

function generateLoremIpsum() {
    for (let i = 0; i < parasize.value; i++) {
        const sub = loremText.substring(0, paraonecount.value);
        const para = document.createElement(chousetage.value);
        para.textContent = sub;
        output1.appendChild(para);
    }
}