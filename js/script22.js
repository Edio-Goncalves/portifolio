/* MENU COM STICKY */
window.addEventListener("scroll", function () {
  const sticky = document.getElementById("scroll");
  const posMenu = document.getElementById("positionMenu");
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

/* CRIA SCROLL SUAVE */
const menuItems = document.querySelectorAll(".main-menu a[href^='#']");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 500;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}