const sticky = document.getElementById("scroll");
const posMenu = document.getElementById("nav");
const links = document.querySelectorAll(".nav-link");

function toggleClasses() {
  const isScrolling = window.scrollY > 0;
  sticky.classList.toggle("sticky", isScrolling);
  posMenu.classList.toggle("posMenu", isScrolling);
  links.forEach((link) => link.classList.toggle("lnk", isScrolling));
}

window.addEventListener("scroll", toggleClasses);
