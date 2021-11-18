"use strict";
const questionBlock = document.querySelectorAll(".qa-block");

function clicked(id) {
  questionBlock.forEach((i) => {
    i.classList.contains("close") && i.classList.contains(id)
      ? (i.classList.add("open"), i.classList.remove("close"))
      : (i.classList.add("close"), i.classList.remove("open"));
  });
}
