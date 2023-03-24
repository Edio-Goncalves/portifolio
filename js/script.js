/* Hover in skill elements */
var iconBx = document.querySelectorAll(".iconBx");
var contentBx = document.querySelectorAll(".contentBx");

for (var i = 0; i < iconBx.length; i++) {
  iconBx[i].addEventListener("mouseover", function () {
    for (var i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";

    for (var i = 0; i < iconBx.length; i++) {
      iconBx[i].className = "iconBx";
    }
    this.className = "iconBx active";
  });
}

/* DARK-MODE */

const html = document.querySelector("html");
const togglee = document.getElementById("toggle");
const menu = document.getElementById("menu");

togglee.onclick = function () {
  togglee.classList.toggle("active");
  menu.classList.toggle("active");
  html.classList.toggle("dark-mode");
};
