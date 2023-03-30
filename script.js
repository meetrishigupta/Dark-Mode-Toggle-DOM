"use strict";

const functiondark = function () {
  const checkbox = document.getElementById("checkbox");
  var check = checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
};

functiondark();

const changetext = document.getElementsByClassName("heading");
changetext.innerHTML = "changed";

// if (headingdark[0] == "changed") {
// } else {
//   var headingdark = document.getElementsByTagName("h1");
//   headingdark[0].innerHTML = "changed";
// }
