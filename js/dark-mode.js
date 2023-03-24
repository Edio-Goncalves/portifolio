const html = document.querySelector("html");
const togglee = document.getElementById("toggle");
const menu = document.getElementById("menu");

togglee.onclick = function () {
  togglee.classList.toggle("active");
  menu.classList.toggle("active");
  html.classList.toggle("dark-mode");
};
