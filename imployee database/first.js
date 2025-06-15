let btn1 = document.querySelector("#btn");
let main1 = document.querySelector("#form-box")


let left = document.querySelector("#left-box")
let right = document.querySelector("#right-box");
// let arr=[];


let datasend=async()=>{
    let url = "http://localhost:3000/student"
    let res =  await fetch(url)
    let data = await res.json();
    console.log(data)
    // btn1(data)

    left.innerHTML=""
    data.forEach((item,idx)=>{
      left.innerHTML+=`
      <p class="student" data-idx="${idx}">${item.Name}</p>
      `
   })
      let alldata = document.querySelectorAll(".student");
      alldata.forEach((e,idx)=>{
       e.addEventListener('click',()=>{
        let allstunt = data[idx];
        right.innerHTML=`
        <p>Name:${allstunt.Name}</p>
        <p>Contact:${allstunt.Contact}</p>
        <p>Age:${allstunt.Age}</p>
        <p>Date:${allstunt.Date}</p>
        <p>Address:${allstunt.Address}</p>
        `
       })
    })
 };
datasend();

btn1.addEventListener("click", () => {
  
    main1.innerHTML=`
    <div class="form">
    Enter Name: <input type="text" id="name"/>
    Enter Contact: <input type="number" id="contact"/>
    Enter Age: <input type="number" id="age"/>
    Enter Date: <input type="date" id="date"/>
    Enter Address: <input type="text" id="add"/>
    <button class="savee">save</button>
    </div>
    `;


    document.querySelector(".savee").addEventListener('click',async()=>{
    let name = document.querySelector("#name").value;
    let con = document.querySelector("#contact").value;
    let age = document.querySelector("#age").value;
    let date = document.querySelector("#date").value;
    let add = document.querySelector("#add").value;
 
 
    let obj={Name:name,
      Contact:con,
      Age:age,
      Date:date,
      Address:add
    }

   await fetch("http://localhost:3000/student",{
    method :"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(obj)
   });
   datasend();
})
});



// let btn1 = document.querySelector("#btn");
// let main1 = document.querySelector("#form-box");
// let left = document.querySelector("#left-box");
// let detail = document.querySelector("#right-box"); // Add this div in your HTML

// // Function to fetch and display data
// let datasend = async () => {
//   let url = "http://localhost:3000/student";
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);

//   // Display names in the left div
//   left.innerHTML = "";
//   data.forEach((item, idx) => {
//     left.innerHTML += `<p class="student-name" data-idx="${idx}">${item.Name}</p>`;
//   });

//   // Add click event to each name
//   let allData = document.querySelectorAll(".student-name")
//   allData.forEach((el, idx) => {
//     el.addEventListener("click", () => {
//       let student = data[idx];
//       detail.innerHTML = `
//         <h3>Student Details</h3>
//         <p><b>Name:</b> ${student.Name}</p>
//         <p><b>Contact:</b> ${student.Contact}</p>
//         <p><b>Age:</b> ${student.Age}</p>
//         <p><b>Date:</b> ${student.Date}</p>
//         <p><b>Address:</b> ${student.Address}</p>
//       `;
//     });
//   });
// };

// datasend(); // Call it once on page load

// // Show form on button click
// btn1.addEventListener("click", () => {
//   main1.innerHTML = `
//     <div class="form">
//       Enter Name: <input type="text" id="name"/>
//       Enter Contact: <input type="number" id="contact"/>
//       Enter Age: <input type="number" id="age"/>
//       Enter Date: <input type="date" id="date"/>
//       Enter Address: <input type="text" id="add"/>
//       <button class="savee">Save</button>
//     </div>
//   `;

//   // Handle save click
//   document.querySelector(".savee").addEventListener("click", async () => {
//     let name = document.querySelector("#name").value;
//     let contact = document.querySelector("#contact").value;
//     let age = document.querySelector("#age").value;
//     let date = document.querySelector("#date").value;
//     let add = document.querySelector("#add").value;

//     let obj = {
//       Name: name,
//       Contact: contact,
//       Age: age,
//       Date: date,
//       Address: add
//     };

//     // Save to server
//     await fetch("http://localhost:3000/student", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(obj)
//     });

//     // Refresh list
//     datasend();
//   });
// });