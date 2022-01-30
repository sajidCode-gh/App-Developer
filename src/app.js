const dots = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav li");
const header = document.querySelector("header");

if (window.innerWidth < 660) {
  dots.addEventListener("click", () => {
    nav.classList.toggle("active");
    header.classList.add("adjust-height");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
}

let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = document.body.scrollTop;
  if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
    lastScroll = currentScroll;
    header.classList.add("hide");
  } else {
    lastScroll = currentScroll;
    header.classList.remove("hide");
  }
});
