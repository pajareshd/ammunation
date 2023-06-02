const menuButton = document.getElementById("menuButton");
const menuLine = document.getElementById("menuLine");
const menuLineBefore = window.getComputedStyle(menuLine,"::before");
const menuLineAfter = window.getComputedStyle(menuLine,"::after");
menuButton.addEventListener("click", function() {
  menuLineBefore.style.backgroundColor = "red";
  console.log("word");
});
