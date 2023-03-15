/* Menu sticky */

window.addEventListener("scroll", function () {
  const menuSticky = document.getElementById("scroll");
  menuSticky.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const menuSticky = document.getElementById("positionMenu");
  menuSticky.classList.toggle("posMenu", window.scrollY > 0);
});
