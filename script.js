const menuButton = document.getElementById("menuButton");
const menuLineTop = document.getElementById("menuLineTop");
const menuLineCenter = document.getElementById("menuLineCenter");
const menuLineBottom = document.getElementById("menuLineBottom");

let menuOpen = false;

menuButton.addEventListener("click", function() {
  
  menuOpen ? menuOpen = false : menuOpen = true;

  if (menuOpen) {
    menuLineTop.style.transform = "rotate(0deg) translateY(0rem) translateX(0)";
    menuLineBottom.style.transform = "rotate(0deg) translateY(0) translateX(0)";
    menuLineCenter.style.width = "100%";
  }

  if (!menuOpen) {
    menuLineTop.style.transform = "rotate(45deg) translateY(0.75rem) translateX(0.5rem)";
    menuLineBottom.style.transform = "rotate(-45deg) translateY(-0.75rem) translateX(0.5rem)";
    menuLineCenter.style.width = "0";
  }
});
