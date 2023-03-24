window.addEventListener("scroll", function () {
  const sticky = document.getElementById("scroll");
  const posMenu = document.getElementById("nav");
  const lnk1 = document.getElementById("lnk1");
  const lnk2 = document.getElementById("lnk2");
  const lnk3 = document.getElementById("lnk3");
  const lnk4 = document.getElementById("lnk4");

  sticky.classList.toggle("sticky", window.scrollY > 0);
  posMenu.classList.toggle("posMenu", window.scrollY > 0);
  lnk1.classList.toggle("lnk", window.scrollY > 0);
  lnk2.classList.toggle("lnk", window.scrollY > 0);
  lnk3.classList.toggle("lnk", window.scrollY > 0);
  lnk4.classList.toggle("lnk", window.scrollY > 0);
});
