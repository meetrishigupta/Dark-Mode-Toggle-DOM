"use strict";

// const functiondark = function () {
//   const checkbox = document.getElementById("checkbox");
//   checkbox.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//     var headingdark = document.querySelector(".heading");

//     if (document.body.classList.contains("dark")) {
//       headingdark.innerHTML = "changed";
//     } else {
//       headingdark.innerHTML = "not changed";
//     }
//     console.log(headingdark);
//   });
// };

// functiondark();

function darkMode(){
  document.body.classList.toggle("dark");
    var headingdark = document.querySelector(".heading");

    if (document.body.classList.contains("dark")) {
      headingdark.innerHTML = "Dark Mode 🌙";
    } else {
      headingdark.innerHTML = "Light Mode ☀️";
    }
    console.log(headingdark);
}
